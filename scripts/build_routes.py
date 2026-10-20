#!/usr/bin/env python3
"""重新產生 data/routes.js：寰宇一家成員在本站機場之間的直飛航線。

資料來源：https://github.com/Jonty/airline-route-data（每週更新的全球航線資料）
用法：
    python scripts/build_routes.py                 # 從網路下載最新資料
    python scripts/build_routes.py 本機檔案.json    # 用已下載的檔案（測試用）

只有航線真的有變動時才會改寫 data/routes.js，沒變就什麼都不做。
"""
import datetime
import json
import pathlib
import re
import sys
import urllib.request

SRC = "https://raw.githubusercontent.com/Jonty/airline-route-data/main/airline_routes.json"
ROOT = pathlib.Path(__file__).resolve().parent.parent
AIRPORTS = ROOT / "data" / "airports.js"
OUT = ROOT / "data" / "routes.js"

# 寰宇一家成員（與 index.html 的 AIRLINES 一致）
ONEWORLD = {"CX", "AA", "AS", "BA", "AY", "FJ", "HA", "IB", "JL", "MH", "WY", "QF", "QR", "AT", "RJ", "UL"}
# 下載的資料若異常變少，就不要覆蓋掉現有的航線表
MIN_ROUTES = 3000


def read_js_string(path, name):
    text = path.read_text(encoding="utf-8")
    m = re.search(r"window\." + name + r'="([^"]*)"', text)
    return m.group(1) if m else ""


def load_source():
    if len(sys.argv) > 1:
        return json.loads(pathlib.Path(sys.argv[1]).read_text(encoding="utf-8"))
    req = urllib.request.Request(SRC, headers={"User-Agent": "rtw-planner-route-updater"})
    with urllib.request.urlopen(req, timeout=120) as resp:
        return json.loads(resp.read().decode("utf-8"))


def main():
    codes = [row.split("|", 1)[0] for row in read_js_string(AIRPORTS, "AIRPORTS_RAW").split(";") if row]
    if not codes:
        sys.exit("讀不到 data/airports.js 的機場清單")
    ours = set(codes)
    data = load_source()

    edges = {}
    missing = []
    for a in sorted(ours):
        info = data.get(a)
        if not info:
            missing.append(a)
            continue
        for r in info.get("routes", []):
            b = r.get("iata")
            if b not in ours:
                continue
            carriers = sorted({c.get("iata") for c in r.get("carriers", [])} & ONEWORLD)
            if carriers:
                edges.setdefault(a, set()).add(b + "".join(carriers))

    count = sum(len(v) for v in edges.values())
    if count < MIN_ROUTES:
        sys.exit(f"只找到 {count} 條航線，少於 {MIN_ROUTES}，可能是下載的資料有問題，不更新。")

    encoded = ";".join(a + ":" + ",".join(sorted(v)) for a, v in sorted(edges.items()))
    old = read_js_string(OUT, "ROUTES_RAW") if OUT.exists() else ""
    if encoded == old:
        print(f"航線沒有變動（{count} 條），不需要更新。")
        return

    today = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=8))).date().isoformat()
    OUT.write_text(
        "// 自動產生，請不要手動修改：由 scripts/build_routes.py 從 airline-route-data 整理。\n"
        "// 格式：出發機場:目的地+航空公司代碼,...;  例如 TPE:HKGCX 表示國泰有飛台北桃園—香港直飛。\n"
        f'window.ROUTES_UPDATED="{today}";\n'
        f"window.ROUTES_COUNT={count};\n"
        f'window.ROUTES_RAW="{encoded}";\n',
        encoding="utf-8",
    )
    old_count = len([e for part in old.split(";") if ":" in part for e in part.split(":", 1)[1].split(",") if e])
    print(f"已更新 data/routes.js：{old_count} → {count} 條航線（{today}）")
    if missing:
        print(f"注意：資料來源裡找不到這些機場：{', '.join(missing)}")


if __name__ == "__main__":
    main()

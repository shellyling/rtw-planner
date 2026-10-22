// 信用卡預設資料：可以累積亞洲萬里通的台灣信用卡，數字是「幾元換 1 哩」（越小越好）。
// 整理自寶可孟（2026-10-19 更新）、旅途中的景深隨想、袋鼠金融（2026-10-01）等公開比較文章。
// 滙豐旅人御璽卡依滙豐（台灣）官網旅人卡頁面與旅遊積分計劃辦法（2026-10-21 查詢）。
// 銀行常改規則，這裡只是起點：使用者加入卡片後可以自己修改每個通路的數字。
//
// rates 的通路代碼（沒寫的通路用 general 計算；寫 null 代表這個通路不給哩程）：
//   general 國內一般   overseas 海外／外幣   cx 國泰航空官網   travel 旅遊訂房／旅行社
//   dining 餐飲       online 網購          transport 加油／高鐵／交通   fun 電影／娛樂
//   market 超市／超商  bills 保費／繳稅／水電
window.CARD_PRESETS_UPDATED = "2026-10";
window.CARD_PRESETS = [
  { id: "cub-am-world", bank: "國泰世華", name: "亞洲萬里通聯名世界卡",
    rates: { general: 22, overseas: 10, cx: 10, travel: 10, transport: 10, fun: 10, bills: null },
    note: "哩程加速器通路 10 元/哩（每月帳單加速器消費上限 NT$150,000，超過按一般 22 元/哩）；生日月加速器通路哩程加倍。年費 NT$8,000。" },
  { id: "cub-am-titanium", bank: "國泰世華", name: "亞洲萬里通聯名鈦商卡",
    rates: { general: 25, overseas: 10, cx: 10, travel: 10, transport: 10, fun: 10, bills: null },
    note: "哩程加速器通路 10 元/哩（每月上限 NT$100,000）；生日月加速器通路加倍。年費 NT$1,800。" },
  { id: "cub-am-platinum", bank: "國泰世華", name: "亞洲萬里通聯名白金卡",
    rates: { general: 30, overseas: 15, cx: 15, travel: 15, transport: 15, fun: 15, bills: null },
    note: "哩程加速器通路 15 元/哩（每月上限 NT$50,000）。" },
  { id: "cub-am-enjoy", bank: "國泰世華", name: "亞洲萬里通聯名里享卡",
    rates: { general: 30, bills: null },
    note: "沒有哩程加速器。首年免年費，次年 NT$288。" },
  { id: "cub-cube", bank: "國泰世華", name: "CUBE 卡（小樹點轉亞萬）",
    rates: { general: null, travel: 12, dining: 12, online: 12, fun: 12, bills: null },
    note: "依切換的權益方案，指定通路 3% 小樹點，約 12 元/哩（360 點換 1,000 里；同時持有亞萬世界卡約 10 元/哩）。一般消費回饋低，這裡不列。哪些通路算指定，以當期權益方案為準。" },
  { id: "tsb-cx-world", bank: "台新", name: "國泰航空聯名世界卡",
    rates: { general: 22, overseas: 15, travel: 5, bills: null },
    note: "海外 15 元/哩需設定台新帳戶自動扣繳。「越飛越有哩」海外實體商店、訂房網站約 5 元/哩，但要每半年付費搭乘國泰航空 1 次以上；這裡把訂房算 5 元/哩，海外實體店沒有達標就只有 15 元/哩。年度上限 200,000 里。年費 NT$20,000。" },
  { id: "tsb-cx-titanium", bank: "台新", name: "國泰航空聯名鈦金卡",
    rates: { general: 30, overseas: 25, cx: 5, bills: null },
    note: "國泰航空台灣官網購票約 5 元/哩。沒有「越飛越有哩」加碼。正附卡免年費。" },
  { id: "hsbc-traveller", bank: "滙豐", name: "旅人輕旅卡",
    rates: { general: 20, overseas: 20, bills: null },
    note: "國內外都約 20 元/哩，旅遊積分 1:1 轉亞洲萬里通，無上限。首年免年費，電子帳單次年續免。" },
  { id: "hsbc-traveller-signature", bank: "滙豐", name: "旅人御璽卡",
    rates: { general: 18, overseas: 15, bills: null },
    note: "國內 18 元/哩、海外（含國外網購）15 元/哩，旅遊積分 1:1 轉亞洲萬里通，沒有回饋上限。稅款、學雜費、公共事業代扣繳、中華電信、分期付款等不給積分；保費 2026 年有活動另計，請以銀行公告為準。積分效期 3 年。正卡年費 NT$2,500，首刷禮與續卡禮各 3,000 積分。" },
  { id: "hsbc-liveplus", bank: "滙豐", name: "Live+ 現金回饋卡",
    rates: { general: null, dining: 10, online: 10, fun: 10, overseas: 8.5, bills: null },
    note: "餐飲、購物、娛樂三大通路約 10 元/哩（建議每月刷 NT$20,000 內）；海外餐飲約 8.5 元/哩（這裡把海外都當作 8.5，非餐飲的海外消費請自行調整）。一般消費回饋低，這裡不列。" },
  { id: "kgi-dual", bank: "凱基", name: "雙幣哩程卡",
    rates: { general: 22, overseas: 22, bills: null },
    note: "一般客戶國內外約 22 元/哩；財管 300 萬以上客戶國內約 18、海外約 12 元/哩。每期帳單點數上限 20,000 點，點數效期 2 年。" },
  { id: "tsb-richart", bank: "台新", name: "Richart 卡",
    rates: { general: 16.8, bills: null },
    note: "一般約 16.8 元/哩（10 點換 18 里）。切換到最高 10% 的權益時約 5.6 元/哩，請把你選的那個通路改成 5.6。2026 下半年規則。" },
  { id: "esun-unicard", bank: "玉山", name: "Unicard",
    rates: { general: 14.8, bills: null },
    note: "舊戶 4.5% 約 14.8 元/哩；搭配「點亮旅程」活動約 10.2 元/哩。2026 下半年限期加碼，到期後請更新。" },
  { id: "dbs-aov", bank: "星展", name: "傳說對決聯名卡",
    rates: { general: null, online: 5.05, fun: 5.05, bills: null },
    note: "精選通路 10% 現金積點，約 5.05 元/哩（50 點換 100 里），建議每月刷 NT$5,555 內。哪些商店算精選通路以銀行公告為準。" }
];

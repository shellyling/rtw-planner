// 亞洲萬里通／國泰官網活動整理。每週由排程檢查官網後更新，也可以手動增修。
// 欄位：
//   id       唯一代碼（不要重複；網站用它判斷哪些是「新活動」）
//   type     累積加碼｜兌換優惠｜機票優惠｜轉點加碼｜合作夥伴｜挑戰任務｜其他
//   markets  適用的會員地區，例如 ["TW"]、["HK"]、["TW","JP","KR","CN"]；空陣列代表沒寫
//   start    開始日 YYYY-MM-DD（沒寫就留空字串）
//   end      結束日 YYYY-MM-DD（長期活動留空字串）
//   cards    跟哪些信用卡有關（data/cards.js 的 id），沒有就留空陣列
//   summary  活動內容（自己的話整理，不要整段複製官網文字）
//   how      怎麼參加
//   link     官網活動頁
window.PROMOS_UPDATED = "2026-10-20";
window.PROMOS = [
  { id: "2026-happy-glow-up",
    type: "累積加碼", title: "Happy Glow-Up Season 美妝保養里數加碼",
    markets: ["TW", "JP", "KR", "CN"], start: "2026-10-15", end: "2026-11-30", cards: [],
    summary: "指定美妝、保養、健康合作夥伴有里數加碼與優惠。台灣可用的包括：Triplus 消費享雙倍里數；寶雅點數 19,800 點可以換 100 里。",
    how: "在合作夥伴消費時出示國泰會員卡。",
    link: "https://www.cathaypacific.com/cx/en_HK/offers/current/Happy_Glow_Up_Season.html" },
  { id: "2026-seoul-sign-once",
    type: "合作夥伴", title: "聯名卡一簽雙賺：探索首爾",
    markets: ["TW"], start: "", end: "2026-10-31",
    cards: ["cub-am-world", "cub-am-titanium", "cub-am-platinum", "cub-am-enjoy", "tsb-cx-world", "tsb-cx-titanium"],
    summary: "在首爾新世界免稅店、OLIVE YOUNG、TADA 叫車用國泰世華亞萬聯名卡或台新國泰航空聯名卡付款有專屬優惠：免稅店有購物禮遇與 KRW1,000 = 1 里；OLIVE YOUNG 單筆滿 KRW100,000 享 95 折（折扣上限 KRW10,000）；TADA 用優惠碼折 KRW5,000（數量有限）。",
    how: "出示會員卡累積基本里數，再用聯名卡付款多賺一層；各商店另有條款。",
    link: "https://pay.cathaypacific.com/zh_TW/offers/POET.html" },
  { id: "2026-sign-once-standing",
    type: "合作夥伴", title: "聯名卡一簽雙賺：LaLaport、三井 Outlet",
    markets: ["TW"], start: "", end: "", cards: ["cub-am-world", "cub-am-titanium", "cub-am-platinum", "cub-am-enjoy", "tsb-cx-world", "tsb-cx-titanium"],
    summary: "台灣 LaLaport 出示會員卡 NT$30 = 1 里，再用聯名卡付款另外累積；日本三井 Outlet Park JPY100 = 1 里加聯名卡 NT$10 = 1 里。",
    how: "結帳時先出示國泰會員卡，再用國泰世華亞萬聯名卡或台新國泰航空聯名卡付款。",
    link: "https://pay.cathaypacific.com/zh_TW/offers/POET.html" },
  { id: "2026-tw-new-partners-kx-fizz",
    type: "合作夥伴", title: "台灣新合作夥伴：KX Pilates、Fizz Fizz",
    markets: ["TW"], start: "", end: "", cards: [],
    summary: "KX Pilates（皮拉提斯教室）和 Fizz Fizz（信義區行動飲料車）加入合作夥伴，消費 NT$30 = 1 里。",
    how: "消費時出示國泰會員卡。",
    link: "https://www.asiamiles.com/lifestyle/tw/miles/news.php" },
  { id: "tsb-cx-birthday",
    type: "機票優惠", title: "台新國泰航空聯名卡：生日月官網購票優惠",
    markets: ["TW"], start: "", end: "", cards: ["tsb-cx-world", "tsb-cx-titanium"],
    summary: "生日月在國泰官網用台新國泰航空聯名卡購買指定航線個人來回機票，最高可享 5 折；指定航點另有台北、高雄出發 88 折起。官網頁面仍有部分 2025 年的內容，實際以最新條款為準。",
    how: "生日當月在國泰台灣官網訂票，用台新國泰航空聯名卡付款。",
    link: "https://www.cathaypacific.com/cx/zh_TW/offers/flight/taihsin-bank-cobrand-card-exclusive-offer.html" },
  { id: "2026-rewarding-journeys-80",
    type: "挑戰任務", title: "國泰 80 週年 Rewarding Journeys 12 項任務",
    markets: ["HK"], start: "", end: "2026-10-31", cards: [],
    summary: "完成訂機票、用合作夥伴、轉點、綁卡消費等任務，每達成一個里程碑送里數，累計最多 15,730 里；12 項全部完成的前 80 名送香港出發經濟艙來回機票。主要給香港會員。",
    how: "在 Asia Miles by Cathay App 登記並在 App 追蹤進度，不接受事後補登。",
    link: "https://www.cathaypacific.com/cx/en_HK/membership/asia-miles/earn.html" }
];

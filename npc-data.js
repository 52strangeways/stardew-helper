const npcList = [
    // --- 結婚候選人 (Bachelors & Bachelorettes) ---
    { name: "Abigail", portrait: "https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png", birthday: "Fall 13", loved: ["Amethyst", "Banana Pudding", "Blackberry Cobbler", "Chocolate Cake", "Pufferfish", "Pumpkin", "Spicy Eel"], birthdaySchedule: ["09:00 AM - 在房間裡", "01:00 PM - 雜貨店櫃檯旁", "04:00 PM - 前往墓地", "10:30 PM - 回家休息"] },
    { name: "Alex", portrait: "https://stardewvalleywiki.com/mediawiki/images/7/77/Alex.png", birthday: "Summer 13", loved: ["Complete Breakfast", "Salmon Dinner"], birthdaySchedule: ["08:00 AM - 離開家門", "10:30 AM - 到海邊碼頭", "04:00 PM - 穿過城鎮回家", "08:00 PM - 在家用餐"] },
    { name: "Elliott", portrait: "https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png", birthday: "Fall 5", loved: ["Crab Cakes", "Duck Feather", "Lobster", "Pomegranate", "Squid Ink", "Tom Kha Soup"], birthdaySchedule: ["09:00 AM - 在海邊小屋", "11:30 AM - 走到海灘橋上", "05:00 PM - 前往星之果實餐酒館", "10:00 PM - 回家"] },
    { name: "Emily", portrait: "https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png", birthday: "Spring 27", loved: ["Amethyst", "Aquamarine", "Cloth", "Emerald", "Jade", "Ruby", "Survival Burger", "Topaz"], birthdaySchedule: ["09:00 AM - 在臥室", "12:00 PM - 在客廳窗戶旁", "03:30 PM - 前往餐酒館工作", "12:30 AM - 回家"] },
    { name: "Haley", portrait: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png", birthday: "Spring 14", loved: ["Coconut", "Fruit Salad", "Pink Cake", "Sunflower"], birthdaySchedule: ["09:00 AM - 房間化妝", "11:00 AM - 噴泉旁", "04:30 PM - 回家廚房", "10:30 PM - 睡覺"] },
    { name: "Harvey", portrait: "https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png", birthday: "Winter 14", loved: ["Coffee", "Pickles", "Super Meal", "Truffle Oil", "Wine"], birthdaySchedule: ["08:00 AM - 診所櫃檯", "12:00 PM - 診所休息室", "05:30 PM - 公園散步", "09:00 PM - 回到診所上方家"] },
    { name: "Leah", portrait: "https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png", birthday: "Winter 23", loved: ["Goat Cheese", "Poppyseed Muffin", "Salad", "Stir Fry", "Truffle", "Vegetable Medley", "Wine"], birthdaySchedule: ["09:00 AM - 屋內雕刻", "12:00 PM - 湖泊寫生", "04:00 PM - 雜貨店購物", "07:30 PM - 餐酒館"] },
    { name: "Maru", portrait: "https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png", birthday: "Summer 10", loved: ["Battery Pack", "Cauliflower", "Cheese Cauliflower", "Diamond", "Gold Bar", "Iridium Bar", "Miner's Treat", "Pepper Poppers", "Rhubarb Pie", "Strawberry"], birthdaySchedule: ["09:00 AM - 科學實驗室", "10:30 AM - 診所工作", "04:40 PM - 離開診所回家", "09:00 PM - 回到臥室"] },
    { name: "Penny", portrait: "https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png", birthday: "Fall 2", loved: ["Diamond", "Emerald", "Melon", "Poppy", "Poppyseed Muffin", "Red Plate", "Roots Platter", "Sandfish", "Tom Kha Soup"], birthdaySchedule: ["09:00 AM - 離開拖車去圖書館", "02:00 PM - 圖書館內教學", "04:00 PM - 帶小孩去噴泉", "08:00 PM - 回家"] },
    { name: "Sam", portrait: "https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png", birthday: "Summer 17", loved: ["Cactus Fruit", "Maple Bar", "Pizza", "Tigerseye"], birthdaySchedule: ["10:00 AM - 房間內練琴", "02:00 PM - 城鎮河邊釣魚", "06:00 PM - 與好友散步", "10:00 PM - 回到房間"] },
    { name: "Sebastian", portrait: "https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png", birthday: "Winter 10", loved: ["Frozen Tear", "Obsidian", "Pumpkin Soup", "Sashimi", "Void Egg"], birthdaySchedule: ["10:30 AM - 電腦前工作", "03:00 PM - 去廚房喝水", "06:30 PM - 山邊湖泊抽煙", "09:30 PM - 回房間"] },
    { name: "Shane", portrait: "https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png", birthday: "Spring 20", loved: ["Beer", "Hot Pepper", "Pizza", "Pepper Poppers"], birthdaySchedule: ["09:00 AM - 牧場房間", "12:00 PM - 在廚房", "05:00 PM - 餐酒館", "11:00 PM - 回家"] },

    // --- 城鎮村民 (Non-Marriage Villagers) ---
    { name: "Caroline", portrait: "https://stardewvalleywiki.com/mediawiki/images/8/87/Caroline.png", birthday: "Winter 7", loved: ["Fish Taco", "Green Tea", "Summer Spangle", "Tropical Curry"], birthdaySchedule: ["09:00 AM - 雜貨店客廳", "11:30 AM - 雜貨店日光室", "03:30 PM - 社群中心前散步", "09:00 PM - 回家廚房"] },
    { name: "Clint", portrait: "https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png", birthday: "Winter 26", loved: ["Amethyst", "Aquamarine", "Artichoke Dip", "Emerald", "Fiddlehead Risotto", "Gold Bar", "Iridium Bar", "Jade", "Omni Geode", "Ruby", "Topaz"], birthdaySchedule: ["09:00 AM - 鐵匠鋪櫃檯", "05:00 PM - 鐵匠鋪後方工作", "07:00 PM - 餐酒館", "11:00 PM - 回家"] },
    { name: "Demetrius", portrait: "https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png", birthday: "Summer 19", loved: ["Bean Hotpot", "Ice Cream", "Rice Pudding", "Strawberry"], birthdaySchedule: ["09:00 AM - 科學實驗室工作", "02:00 PM - 到湖邊觀測生態", "07:00 PM - 實驗室樓下廚房", "10:00 PM - 回臥室"] },
    { name: "Dwarf", portrait: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Dwarf.png", birthday: "Summer 22", loved: ["Amethyst", "Aquamarine", "Emerald", "Jade", "Lava Eel", "Lemon Stone", "Omni Geode", "Ruby", "Topaz"], birthdaySchedule: ["00:00 AM - 始終待在礦井入口右側通道"] },
    { name: "Evelyn", portrait: "https://stardewvalleywiki.com/mediawiki/images/8/8e/Evelyn.png", birthday: "Winter 20", loved: ["Beet", "Chocolate Cake", "Diamond", "Fairy Rose", "Stuffing", "Tulip"], birthdaySchedule: ["09:00 AM - 客廳看電視", "11:00 AM - 在城鎮花圃照顧花草", "03:00 PM - 回家廚房煮飯", "09:00 PM - 臥室休息"] },
    { name: "George", portrait: "https://stardewvalleywiki.com/mediawiki/images/7/78/George.png", birthday: "Fall 24", loved: ["Fried Mushroom", "Leek"], birthdaySchedule: ["08:00 AM - 客廳電視前", "12:00 PM - 廚房吃午餐", "03:00 PM - 城鎮雕像旁曬太陽", "08:00 PM - 回家休息"] },
    { name: "Gus", portrait: "https://stardewvalleywiki.com/mediawiki/images/5/52/Gus.png", birthday: "Summer 8", loved: ["Escargot", "Fish Taco", "Orange", "Tropical Curry"], birthdaySchedule: ["09:00 AM - 雜貨店購物", "12:00 PM - 餐酒館櫃檯工作", "12:00 AM - 回家睡覺"] },
    { name: "Jas", portrait: "https://stardewvalleywiki.com/mediawiki/images/5/55/Jas.png", birthday: "Summer 4", loved: ["Fairy Rose", "Pink Cake", "Plum Pudding"], birthdaySchedule: ["09:00 AM - 圖書館上課", "02:00 PM - 大橡樹下的鞦韆", "05:00 PM - 瑪妮牧場門口玩耍", "08:00 PM - 回家睡覺"] },
    { name: "Jodi", portrait: "https://stardewvalleywiki.com/mediawiki/images/4/41/Jodi.png", birthday: "Fall 11", loved: ["Chocolate Cake", "Crispy Bass", "Diamond", "Eggplant Parmesan", "Fried Eel", "Pancakes", "Rhubarb Pie", "Vegetable Medley"], birthdaySchedule: ["08:00 AM - 廚房做家務", "11:00 AM - 雜貨店购物", "04:00 PM - 回家煮晚飯", "09:00 PM - 在客廳沙發"] },
    { name: "Kent", portrait: "https://stardewvalleywiki.com/mediawiki/images/9/99/Kent.png", birthday: "Spring 4", loved: ["Fiddlehead Risotto", "Roasted Hazelnuts"], birthdaySchedule: ["07:00 AM - 城鎮路口散步", "10:30 AM - 在雜貨店門口", "04:00 PM - 回家與家人吃飯", "10:00 PM - 回家睡覺"] },
    { name: "Krobus", portrait: "https://stardewvalleywiki.com/mediawiki/images/7/71/Krobus.png", birthday: "Winter 1", loved: ["Diamond", "Iridium Bar", "Pumpkin", "Void Egg", "Void Mayonnaise", "Wild Horseradish"], birthdaySchedule: ["00:00 AM - 始終待在下水道中"] },
    { name: "Lewis", portrait: "https://stardewvalleywiki.com/mediawiki/images/2/2b/Lewis.png", birthday: "Spring 21", loved: ["Autumn's Bounty", "Glazed Yams", "Green Tea", "Hot Pepper", "Vegetable Medley"], birthdaySchedule: ["09:00 AM - 市長辦公室工作", "12:00 PM - 去瑪妮的牧場", "05:00 PM - 城鎮各處巡邏", "09:00 PM - 回家"] },
    { name: "Linus", portrait: "https://stardewvalleywiki.com/mediawiki/images/3/33/Linus.png", birthday: "Winter 3", loved: ["Blueberry Tart", "Cactus Fruit", "Coconut", "Dish O' The Sea", "Yam"], birthdaySchedule: ["07:00 AM - 帳篷外營火", "10:00 AM - 溫泉上方湖邊", "02:00 PM - 帳篷附近找食物", "07:00 PM - 回到帳篷"] },
    { name: "Marnie", portrait: "https://stardewvalleywiki.com/mediawiki/images/5/52/Marnie.png", birthday: "Fall 18", loved: ["Diamond", "Farmer's Lunch", "Pink Cake", "Pumpkin Pie"], birthdaySchedule: ["08:00 AM - 牧場櫃檯工作", "12:00 PM - 在廚房", "06:00 PM - 餐酒館", "11:00 PM - 回家"] },
    { name: "Pam", portrait: "https://stardewvalleywiki.com/mediawiki/images/d/da/Pam.png", birthday: "Spring 18", loved: ["Beer", "Cactus Fruit", "Glazed Yams", "Mead", "Pale Ale", "Parsnip", "Parsnip Soup"], birthdaySchedule: ["08:00 AM - 雜貨店購物", "10:00 AM - 站在公車站旁", "12:00 PM - 開公車(若解鎖)", "04:00 PM - 前往餐酒館", "12:00 AM - 回家"] },
    { name: "Pierre", portrait: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Pierre.png", birthday: "Spring 26", loved: ["Fried Calamari"], birthdaySchedule: ["09:00 AM - 雜貨店櫃檯", "05:00 PM - 店內散步", "07:00 PM - 廚房與 Caroline 吃飯", "09:00 PM - 客廳電視前"] },
    { name: "Robin", portrait: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Robin.png", birthday: "Fall 21", loved: ["Goat Cheese", "Peach", "Spaghetti"], birthdaySchedule: ["08:00 AM - 木匠店櫃檯", "05:00 PM - 廚房煮飯", "09:00 PM - 客廳休息", "11:00 PM - 睡覺"] },
    { name: "Sandy", portrait: "https://stardewvalleywiki.com/mediawiki/images/8/8e/Sandy.png", birthday: "Fall 15", loved: ["Crocus", "Daffodil", "Mango Sticky Rice", "Sweet Pea"], birthdaySchedule: ["09:00 AM - 在綠洲(Oasis)商店櫃檯"] },
    { name: "Vincent", portrait: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Vincent.png", birthday: "Spring 10", loved: ["Cranberry Candy", "Ginger Ale", "Grape", "Pink Cake", "Snail"], birthdaySchedule: ["09:00 AM - 圖書館上課", "02:00 PM - 海邊玩沙", "05:00 PM - 城鎮雕像旁", "08:00 PM - 回家睡覺"] },
    { name: "Willy", portrait: "https://stardewvalleywiki.com/mediawiki/images/8/82/Willy.png", birthday: "Summer 24", loved: ["Catfish", "Diamond", "Iridium Bar", "Mead", "Octopus", "Pumpkin", "Sea Cucumber", "Sturgeon"], birthdaySchedule: ["06:00 AM - 碼頭釣魚", "09:00 AM - 魚店櫃檯", "05:00 PM - 餐酒館", "10:00 PM - 回到魚店"] },
    { name: "Wizard", portrait: "https://stardewvalleywiki.com/mediawiki/images/c/c7/Wizard.png", birthday: "Winter 17", loved: ["Purple Mushroom", "Solar Essence", "Super Cucumber", "Void Essence"], birthdaySchedule: ["06:00 AM - 待在法師塔內實驗室"] },
    { name: "Leo", portrait: "https://stardewvalleywiki.com/mediawiki/images/1/1d/Leo.png", birthday: "Summer 26", loved: ["Duck Feather", "Mango", "Ostrich Egg", "Poi"], birthdaySchedule: ["09:00 AM - 薑島樹屋內", "12:00 PM - 薑島沙灘", "06:00 PM - 回到樹屋"] }
];

// --- 輔助邏輯：分類與過濾 ---
function renderNPCs(list) {
    const grid = document.getElementById('npcGrid');
    if (!grid) return;
    
    // 清空並重新生成 (你可以加入「分類標題」的邏輯)
    grid.innerHTML = list.map(npc => `
        <div class="npc-card" onclick="showNPCDetail('${npc.name}')">
            <div class="npc-card-header">
                <img src="${npc.portrait}" class="npc-portrait">
                <div class="npc-name" style="font-family:'NeuzeitGroteskRegular'">${npc.name}</div>
            </div>
            <div class="npc-bday-badge">${npc.birthday}</div>
        </div>
    `).join('');
}

function showNPCDetail(name) {
    const npc = npcList.find(n => n.name === name);
    const detail = document.getElementById('npcDetail');
    
    const scheduleHTML = npc.birthdaySchedule.map(time => `<li>${time}</li>`).join('');
    const lovedHTML = npc.loved.map(item => `<li>${item}</li>`).join('');

    detail.innerHTML = `
        <div class="modal-header">
            <img src="${npc.portrait}" class="modal-portrait">
            <div class="modal-info">
                <h2 class="modal-title" style="font-family:'NeuzeitGroteskRegular'">${npc.name}</h2>
                <p class="modal-birthday" style="color: #d97706;">🎂 生日：${npc.birthday}</p>
            </div>
        </div>
        <div class="modal-content-grid">
            <div class="modal-section">
                <h3 class="section-label">🌟 最愛禮物 (Loved)</h3>
                <ul class="loved-list">${lovedHTML}</ul>
            </div>
            <div class="modal-section">
                <h3 class="section-label">📍 生日行程 (Schedule)</h3>
                <ul class="schedule-list">${scheduleHTML}</ul>
            </div>
        </div>
    `;
    document.getElementById('npcModal').style.display = "block";
}

// 搜尋功能
function filterNPCs() {
    const query = document.getElementById('npcSearch').value.toLowerCase();
    const filtered = npcList.filter(n => n.name.toLowerCase().includes(query));
    renderNPCs(filtered);
}

// ... (保留最上面的 npcList 資料陣列) ...

// --- 新增：渲染 2x2 四季月曆的函式 ---
    //
    function renderCalendars() {
    const container = document.getElementById('calendarGrid');
    if (!container) return; // 預防找不到容器導致崩潰

    const seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
    const seasonNamesZh = { Spring: '🌸 Spring', Summer: '🌞 Summer', Fall: '🍁 Fall', Winter: '⛄️ Winter' };

    container.innerHTML = seasons.map(season => {
        const seasonNPCs = npcList.filter(npc => npc.birthday.startsWith(season));
        let daysHTML = ''; // 確保變數名稱統一

        for (let i = 1; i <= 28; i++) {
            const bdayNPC = seasonNPCs.find(npc => npc.birthday === `${season} ${i}`);
            
            // 預設內容：僅顯示日期數字
            let content = `<span class="day-number">${i}</span>`;

            if (bdayNPC) {
                // 修改處：加入名字並包裝容器
                content = `
                    <div class="calendar-npc-item" onclick="showNPCDetail('${bdayNPC.name}')">
                        <img src="${bdayNPC.portrait}" class="calendar-portrait">
                        <div class="calendar-npc-name">${bdayNPC.name}</div>
                    </div>
                `;
            }
            daysHTML += `<div class="calendar-day">${content}</div>`;
        }

        return `
            <div class="calendar-block">
                <h3 class="calendar-title">${seasonNamesZh[season]}</h3>
                <div class="calendar-days-grid">${daysHTML}</div>
            </div>
        `;
}


            
if (bdayNPC) {
    // 將頭像與名字包在一起，並把點擊事件移至外層容器
    content = `
        <div class="calendar-npc-item" onclick="showNPCDetail('${bdayNPC.name}')">
            <img src="${bdayNPC.portrait}" class="calendar-portrait">
            <div class="calendar-npc-name">${bdayNPC.name}</div>
        </div>
    `;
}
            
        // 3. 回傳整個季節區塊的 HTML
        return `
            <div class="calendar-block">
                <h3 class="calendar-title">${seasonNamesZh[season]}</h3>
                <div class="calendar-days-grid">${daysHTML}</div>
            </div>
        `;
    }).join('');
}


// ... (保留原有的 renderNPCs, showNPCDetail, filterNPCs, closeModal 函式) ...


// --- 修改啟動事件 ---
// 確保頁面載入時，同時渲染 NPC 列表和月曆
document.addEventListener('DOMContentLoaded', () => {
    renderNPCs(npcList);
    renderCalendars(); // 新增這一行
});


// 點擊 Modal 外部或關閉按鈕
function closeModal() {
    document.getElementById('npcModal').style.display = "none";
}

window.onclick = (e) => { if (e.target == document.getElementById('npcModal')) closeModal(); }

// 啟動
document.addEventListener('DOMContentLoaded', () => renderNPCs(npcList));

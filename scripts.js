


const crops = [
    // --- 春季 (Spring) ---
    { name: "Parsnip", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/d/d3/Parsnip.png", growthDays: 4, seedCost: 20, basePrice: 35, isMulti: false, regrow: 0, yield: 1 },
    { name: "Garlic", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/b/b2/Garlic.png", growthDays: 4, seedCost: 40, basePrice: 60, isMulti: false, regrow: 0, yield: 1 },
    { name: "Potato", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Potato.png", growthDays: 6, seedCost: 50, basePrice: 80, isMulti: false, regrow: 0, yield: 1.2 },
    { name: "Kale", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/d/d1/Kale.png", growthDays: 6, seedCost: 70, basePrice: 110, isMulti: false, regrow: 0, yield: 1 },
    { name: "Rhubarb", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Rhubarb.png", growthDays: 13, seedCost: 100, basePrice: 220, isMulti: false, regrow: 0, yield: 1 },
    { name: "Cauliflower", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/a/aa/Cauliflower.png", growthDays: 12, seedCost: 80, basePrice: 175, isMulti: false, regrow: 0, yield: 1 },
    { name: "Strawberry", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/6/6d/Strawberry.png", growthDays: 8, seedCost: 100, basePrice: 120, isMulti: true, regrow: 4, yield: 1 },
    { name: "Green Bean", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/5/5c/Green_Bean.png", growthDays: 10, seedCost: 60, basePrice: 40, isMulti: true, regrow: 3, yield: 1 },
    { name: "Blue Jazz", type: "flower", img: "https://stardewvalleywiki.com/mediawiki/images/2/2f/Blue_Jazz.png", growthDays: 7, seedCost: 30, basePrice: 50, isMulti: false, regrow: 0, yield: 1 },
    { name: "Tulip", type: "flower", img: "https://stardewvalleywiki.com/mediawiki/images/c/cf/Tulip.png", growthDays: 6, seedCost: 20, basePrice: 30, isMulti: false, regrow: 0, yield: 1 },
    { name: "Coffee Bean", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/3/33/Coffee_Bean.png", growthDays: 10, seedCost: 0, basePrice: 15, isMulti: true, regrow: 2, yield: 4, kegOverride: 30 }, 
    { name: "Unmilled Rice", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/d/da/Unmilled_Rice.png", growthDays: 8, seedCost: 40, basePrice: 30, isMulti: false, regrow: 0, yield: 1, kegOverride: 100 }, // 放入桶中變醋 (Vinegar)
    { name: "Tea Leaves", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/5/59/Tea_Leaves.png", growthDays: 20, seedCost: 0, basePrice: 50, isMulti: true, regrow: 1, yield: 1, kegOverride: 100 }, // 放入桶中變綠茶 (Green Tea)
    
    // --- 夏季 (Summer) ---
    { name: "Tomato", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/9/9d/Tomato.png", growthDays: 11, seedCost: 50, basePrice: 60, isMulti: true, regrow: 4, yield: 1 },
    { name: "Hot Pepper", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Hot_Pepper.png", growthDays: 5, seedCost: 40, basePrice: 40, isMulti: true, regrow: 3, yield: 1 },
    { name: "Blueberry", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/9/9e/Blueberry.png", growthDays: 13, seedCost: 80, basePrice: 50, isMulti: true, regrow: 4, yield: 3 },
    { name: "Melon", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/1/19/Melon.png", growthDays: 12, seedCost: 80, basePrice: 250, isMulti: false, regrow: 0, yield: 1 },
    { name: "Hops", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/5/5f/Hops.png", growthDays: 11, seedCost: 60, basePrice: 25, isMulti: true, regrow: 1, yield: 1, kegOverride: 300 },
    { name: "Starfruit", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/d/db/Starfruit.png", growthDays: 13, seedCost: 400, basePrice: 750, isMulti: false, regrow: 0, yield: 1 },
    { name: "Corn", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/f/f8/Corn.png", growthDays: 14, seedCost: 150, basePrice: 50, isMulti: true, regrow: 4, yield: 1 },
    { name: "Red Cabbage", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/2/2d/Red_Cabbage.png", growthDays: 9, seedCost: 100, basePrice: 260, isMulti: false, regrow: 0, yield: 1 },
    { name: "Radish", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/d/d5/Radish.png", growthDays: 6, seedCost: 40, basePrice: 90, isMulti: false, regrow: 0, yield: 1 },
    { name: "Wheat", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/e/e2/Wheat.png", growthDays: 4, seedCost: 10, basePrice: 25, isMulti: false, regrow: 0, yield: 1, kegOverride: 200 },
    { name: "Sunflower", type: "flower", img: "https://stardewvalleywiki.com/mediawiki/images/8/81/Sunflower.png", growthDays: 8, seedCost: 200, basePrice: 80, isMulti: false, regrow: 0, yield: 1 },
    { name: "Poppy", type: "flower", img: "https://stardewvalleywiki.com/mediawiki/images/6/62/Poppy.png", growthDays: 7, seedCost: 100, basePrice: 140, isMulti: false, regrow: 0, yield: 1 },
    { name: "Summer Spangle", type: "flower", img: "https://stardewvalleywiki.com/mediawiki/images/9/9b/Summer_Spangle.png", growthDays: 8, seedCost: 50, basePrice: 90, isMulti: false, regrow: 0, yield: 1 },
    
    // --- 秋季 (Fall) ---
    { name: "Pumpkin", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png", growthDays: 13, seedCost: 100, basePrice: 320, isMulti: false, regrow: 0, yield: 1 },
    { name: "Eggplant", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/8/8f/Eggplant.png", growthDays: 7, seedCost: 20, basePrice: 60, isMulti: true, regrow: 5, yield: 1 },
    { name: "Yam", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/1/17/Yam.png", growthDays: 10, seedCost: 60, basePrice: 160, isMulti: false, regrow: 0, yield: 1 },
    { name: "Cranberries", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Cranberries.png", growthDays: 7, seedCost: 240, basePrice: 75, isMulti: true, regrow: 5, yield: 2 },
    { name: "Grape", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Grape.png", growthDays: 10, seedCost: 60, basePrice: 80, isMulti: true, regrow: 3, yield: 1, dehydOverride: 120 },
    { name: "Ancient Fruit", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/0/01/Ancient_Fruit.png", growthDays: 28, seedCost: 0, basePrice: 550, isMulti: true, regrow: 7, yield: 1 },
    { name: "Bok Choy", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/4/40/Bok_Choy.png", growthDays: 4, seedCost: 50, basePrice: 80, isMulti: false, regrow: 0, yield: 1 },
    { name: "Sweet Gem Berry", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/8/88/Sweet_Gem_Berry.png", growthDays: 24, seedCost: 1000, basePrice: 3000, isMulti: false, regrow: 0, yield: 1, noProcess: true },
    { name: "Amaranth", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/f/f6/Amaranth.png", growthDays: 7, seedCost: 70, basePrice: 150, isMulti: false, regrow: 0, yield: 1 },
    { name: "Fairy Rose", type: "flower", img: "https://stardewvalleywiki.com/mediawiki/images/d/d9/Fairy_Rose.png", growthDays: 12, seedCost: 200, basePrice: 290, isMulti: false, regrow: 0, yield: 1 },
    { name: "Artichoke", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/d/d2/Artichoke.png", growthDays: 8, seedCost: 30, basePrice: 160, isMulti: false, regrow: 0, yield: 1 },
    { name: "Beet", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/a/a4/Beet.png", growthDays: 6, seedCost: 20, basePrice: 100, isMulti: false, regrow: 0, yield: 1 },
  
    // --- 薑島與特殊 (Ginger Island / Desert) ---
    { name: "Pineapple", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/f/f2/Pineapple.png", growthDays: 14, seedCost: 0, basePrice: 300, isMulti: true, regrow: 7, yield: 1 },
    { name: "Taro Root", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/0/01/Taro_Root.png", growthDays: 7, seedCost: 20, basePrice: 100, isMulti: false, regrow: 0, yield: 1 },
    { name: "Cactus Fruit", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/3/32/Cactus_Fruit.png", growthDays: 12, seedCost: 0, basePrice: 75, isMulti: true, regrow: 3, yield: 1 },

    // --- 補全冬季/野外採集可加工項 ---
    { name: "Crystal Fruit", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/1/16/Crystal_Fruit.png", growthDays: 7, seedCost: 0, basePrice: 150, isMulti: false, regrow: 0, yield: 1 },
    { name: "Wild Plum", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/3/3b/Wild_Plum.png", growthDays: 7, seedCost: 0, basePrice: 80, isMulti: false, regrow: 0, yield: 1 },
    { name: "Blackberry", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/2/25/Blackberry.png", growthDays: 7, seedCost: 0, basePrice: 20, isMulti: false, regrow: 0, yield: 1 },
    { name: "Spice Berry", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/c/c6/Spice_Berry.png", growthDays: 7, seedCost: 0, basePrice: 80, isMulti: false, regrow: 0, yield: 1 },
   
    // --- 1.6 新作物 (New in 1.6) ---
    { name: "Carrot", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/c/c3/Carrot.png", growthDays: 3, seedCost: 0, basePrice: 35, isMulti: false, regrow: 0, yield: 1 },
    { name: "Summer Squash", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/4/43/Summer_Squash.png", growthDays: 6, seedCost: 0, basePrice: 45, isMulti: true, regrow: 3, yield: 1 },
    { name: "Broccoli", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/2/24/Broccoli.png", growthDays: 8, seedCost: 0, basePrice: 70, isMulti: true, regrow: 4, yield: 1 },
    { name: "Powdermelon", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/2/26/Powdermelon.png", growthDays: 7, seedCost: 0, basePrice: 60, isMulti: false, regrow: 0, yield: 1 },

    // --- 果樹 (Fruit Trees - 穩定產出期每日1顆) ---
    { name: "Banana", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/6/69/Banana.png", growthDays: 28, seedCost: 0, basePrice: 150, isMulti: true, regrow: 1, yield: 1 },
    { name: "Mango", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/3/38/Mango.png", growthDays: 28, seedCost: 0, basePrice: 130, isMulti: true, regrow: 1, yield: 1 },
    { name: "Peach", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/e/e2/Peach.png", growthDays: 28, seedCost: 0, basePrice: 140, isMulti: true, regrow: 1, yield: 1 },
    { name: "Pomegranate", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Pomegranate.png", growthDays: 28, seedCost: 0, basePrice: 140, isMulti: true, regrow: 1, yield: 1 },
    { name: "Apple", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/7/7d/Apple.png", growthDays: 28, seedCost: 0, basePrice: 100, isMulti: true, regrow: 1, yield: 1 },
    { name: "Orange", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/4/43/Orange.png", growthDays: 28, seedCost: 0, basePrice: 100, isMulti: true, regrow: 1, yield: 1 },
    { name: "Cherry", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/2/20/Cherry.png", growthDays: 28, seedCost: 0, basePrice: 80, isMulti: true, regrow: 1, yield: 1 },
    { name: "Apricot", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/f/fc/Apricot.png", growthDays: 28, seedCost: 0, basePrice: 50, isMulti: true, regrow: 1, yield: 1 }
];
let isArtisan = false;

function calculateData() {
    const artisanMult = isArtisan ? 1.4 : 1;
    return crops.map(c => {
        const seedCost = c.isMulti ? 0 : c.seedCost;
        // 修正：計算生產效率，如果是連作作物則看回長天數
        const effectiveGrowth = (c.isMulti ? c.regrow : c.growthDays) / c.yield;

        // --- 1. 加工售價計算 ---
        let jarPrice = (c.basePrice * 2 + 50) * artisanMult;
        let kegPrice = (c.type === 'fruit' ? c.basePrice * 3 : c.basePrice * 2.25) * artisanMult;
        if (c.kegOverride) kegPrice = c.kegOverride * artisanMult;
        
        // 脫水機：5個水果變1個乾，售價 = (5 * base * 1.5 + 25) / 5 (單顆貢獻)
        let dehydPrice = ((7.5 * c.basePrice + 25) / 5) * artisanMult;
        if (c.dehydOverride) dehydPrice = c.dehydOverride * artisanMult;

        if (c.noProcess) { jarPrice = 0; kegPrice = 0; dehydPrice = 0; }

        // --- 2. 加工時間邏輯 (修正點：確保應用於計算) ---
        let jarTime = 2.8; 
        let kegTime = c.type === 'fruit' ? 7 : 4; 
        
        if (c.name === "Hops") kegTime = 1.4;        
        if (c.name === "Wheat") kegTime = 1.1;       
        if (c.name === "Coffee Bean") kegTime = 0.08; 
        if (c.name === "Tea Leaves") kegTime = 0.125; 
        if (c.name === "Unmilled Rice") kegTime = 0.4; 

        // --- 3. 回傳物件 (修正語法錯誤) ---
        return {
            ...c,
            base_price: c.basePrice,
            // 醃製桶
            jar_price: jarPrice, 
            jar_net: jarPrice ? jarPrice - seedCost : 0, 
            jar_daily: jarPrice ? (jarPrice - seedCost) / (effectiveGrowth + jarTime) : 0,
            // 釀酒桶 (修正分母：將 7 改為 kegTime)
            keg_price: kegPrice, 
            keg_net: kegPrice ? kegPrice - seedCost : 0, 
            keg_daily: kegPrice ? (kegPrice - seedCost) / (effectiveGrowth + kegTime) : 0,
            // 脫水機
            dehyd_price: c.type === 'fruit' ? dehydPrice : 0, 
            dehyd_net: c.type === 'fruit' ? dehydPrice - seedCost : 0, 
            dehyd_daily: c.type === 'fruit' ? (dehydPrice - seedCost) / (effectiveGrowth + 0.2) : 0 // 修正此處邏輯
        };
    });
}

// 在腳本最上方定義一個變數來追蹤目前的排序鍵值
let currentSortKey = 'jar_daily'; 

// 修改後的 renderTable 片段
function renderTable(data) {
    const tbody = document.getElementById('tableBody');
    if (!tbody) return;

    tbody.innerHTML = data.map(row => {
        const checkActive = (key) => currentSortKey === key ? 'active-column' : '';

        return `
        <tr>
            <td class="crop-name-cell ${checkActive('name')}">
                <div class="crop-content-wrapper">
                    <img src="${row.img}" class="crop-icon">
                    <div class="crop-info-text">
                        <strong class="crop-title">${row.name}</strong>
                        <small class="crop-time">${row.isMulti ? `⟳${row.regrow}d / ${row.yield}` : `${row.growthDays}d`}</small>
                    </div>
                </div>
            </td>
            <td class="${checkActive('base_price')}">${row.basePrice}</td>
            <td class="cell-jar ${checkActive('jar_price')}">${Math.round(row.jar_price)}</td>
            <td class="cell-jar ${checkActive('jar_net')}">${Math.round(row.jar_net)}</td>
            <td class="cell-jar ${checkActive('jar_daily')}">${row.jar_daily.toFixed(1)}</td>
            <td class="cell-keg ${checkActive('keg_price')}">${Math.round(row.keg_price)}</td>
            <td class="cell-keg ${checkActive('keg_net')}">${Math.round(row.keg_net)}</td>
            <td class="cell-keg ${checkActive('keg_daily')}">${row.keg_daily.toFixed(1)}</td>
            <td class="cell-dehyd ${checkActive('dehyd_price')}">${row.type === 'fruit' ? Math.round(row.dehyd_price) : '-'}</td>
            <td class="cell-dehyd ${checkActive('dehyd_net')}">${row.type === 'fruit' ? Math.round(row.dehyd_net) : '-'}</td>
            <td class="cell-dehyd ${checkActive('dehyd_daily')}">${row.type === 'fruit' ? row.dehyd_daily.toFixed(1) : '-'}</td>
        </tr>
        `;
    }).join('');
}


function sortTable(key) {
    // 1. 更新全域變數
    currentSortKey = key;

    // 2. 處理表頭高光 (Header)
    document.querySelectorAll('.sortable').forEach(el => el.classList.remove('active-sort'));
    const activeHeader = document.getElementById(`sort-${key}`);
    if (activeHeader) activeHeader.classList.add('active-sort');

    // 3. 排序資料並重新渲染 (Body)
    const data = calculateData();
    data.sort((a, b) => (key === 'name' ? a.name.localeCompare(b.name) : b[key] - a[key]));
    renderTable(data);
}


document.addEventListener('DOMContentLoaded', () => {
    sortTable('jar_daily'); // 預設依日均利排序
    document.getElementById('artisanToggle').addEventListener('change', (e) => {
        isArtisan = e.target.checked;
        const currentSort = document.querySelector('.active-sort')?.id.replace('sort-', '') || 'jar_daily';
        sortTable(currentSort);
    });
});

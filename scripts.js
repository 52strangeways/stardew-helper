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

    // --- 秋季 (Fall) ---
    { name: "Pumpkin", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png", growthDays: 13, seedCost: 100, basePrice: 320, isMulti: false, regrow: 0, yield: 1 },
    { name: "Eggplant", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/8/8f/Eggplant.png", growthDays: 7, seedCost: 20, basePrice: 60, isMulti: true, regrow: 5, yield: 1 },
    { name: "Yam", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/1/17/Yam.png", growthDays: 10, seedCost: 60, basePrice: 160, isMulti: false, regrow: 0, yield: 1 },
    { name: "Cranberries", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Cranberries.png", growthDays: 7, seedCost: 240, basePrice: 75, isMulti: true, regrow: 5, yield: 2 },
    { name: "Grape", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Grape.png", growthDays: 10, seedCost: 60, basePrice: 80, isMulti: true, regrow: 3, yield: 1, dehydOverride: 120 },
    { name: "Ancient Fruit", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/0/01/Ancient_Fruit.png", growthDays: 28, seedCost: 0, basePrice: 550, isMulti: true, regrow: 7, yield: 1 },
    { name: "Bok Choy", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/4/40/Bok_Choy.png", growthDays: 4, seedCost: 50, basePrice: 80, isMulti: false, regrow: 0, yield: 1 },
    { name: "Sweet Gem Berry", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/8/88/Sweet_Gem_Berry.png", growthDays: 24, seedCost: 1000, basePrice: 3000, isMulti: false, regrow: 0, yield: 1, noProcess: true },

    // --- 薑島與特殊 (Ginger Island / Desert) ---
    { name: "Pineapple", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/f/f2/Pineapple.png", growthDays: 14, seedCost: 0, basePrice: 300, isMulti: true, regrow: 7, yield: 1 },
    { name: "Taro Root", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/0/01/Taro_Root.png", growthDays: 7, seedCost: 20, basePrice: 100, isMulti: false, regrow: 0, yield: 1 },
    { name: "Cactus Fruit", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/3/32/Cactus_Fruit.png", growthDays: 12, seedCost: 0, basePrice: 75, isMulti: true, regrow: 3, yield: 1 },

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
        // 修正公式：(成熟或重新生長天數) / 產量
        const effectiveGrowth = (c.isMulti ? c.regrow : c.growthDays) / c.yield;

        // 計算加工價格
        let jarPrice = (c.basePrice * 2 + 50) * artisanMult;
        let kegPrice = (c.type === 'fruit' ? c.basePrice * 3 : c.basePrice * 2.25) * artisanMult;
        if (c.kegOverride) kegPrice = c.kegOverride * artisanMult;
        
        let dehydPrice = ((7.5 * c.basePrice + 25) / 5) * artisanMult;
        if (c.dehydOverride) dehydPrice = c.dehydOverride * artisanMult;

        if (c.noProcess) { jarPrice = 0; kegPrice = 0; dehydPrice = 0; }

        return {
            ...c,
            base_price: c.basePrice,
            jar_price: jarPrice,
            jar_net: jarPrice ? jarPrice - seedCost : 0,
            jar_daily: jarPrice ? (jarPrice - seedCost) / (effectiveGrowth + 2.8) : 0,
            keg_price: kegPrice,
            keg_net: kegPrice ? kegPrice - seedCost : 0,
            keg_daily: kegPrice ? (kegPrice - seedCost) / (effectiveGrowth + 7) : 0,
            dehyd_price: c.type === 'fruit' ? dehydPrice : 0,
            dehyd_net: c.type === 'fruit' ? dehydPrice - seedCost : 0,
            dehyd_daily: c.type === 'fruit' ? (dehydPrice - seedCost) / (effectiveGrowth + 0.2) : 0
        };
    });
}

function renderTable(data) {
    const tbody = document.getElementById('tableBody');
    if (!tbody) return;
    tbody.innerHTML = data.map(row => `
        <tr>
            <td style="text-align:left; padding-left:10px;">
                <strong>${row.name}</strong><br>
                <img src="${row.img}" width="32" onerror="this.style.display='none'"><br>
                <small>${row.isMulti ? `<span style="color:#d97706">⟳${row.regrow}d / ${row.yield}</span>` : `${row.growthDays}d`}</small>
            </td>
            <td>${row.basePrice}</td>
            <td>${row.jar_price ? Math.round(row.jar_price) : '-'}</td>
            <td>${row.jar_net ? Math.round(row.jar_net) : '-'}</td>
            <td style="color:blue; font-weight:bold;">${row.jar_daily ? row.jar_daily.toFixed(1) : '-'}</td>
            <td>${row.keg_price ? Math.round(row.keg_price) : '-'}</td>
            <td>${row.keg_net ? Math.round(row.keg_net) : '-'}</td>
            <td style="color:blue; font-weight:bold;">${row.keg_daily ? row.keg_daily.toFixed(1) : '-'}</td>
            <td>${row.dehyd_price ? Math.round(row.dehyd_price) : '-'}</td>
            <td>${row.dehyd_net ? Math.round(row.dehyd_net) : '-'}</td>
            <td style="color:blue; font-weight:bold;">${row.dehyd_daily ? row.dehyd_daily.toFixed(1) : '-'}</td>
        </tr>
    `).join('');
}

function sortTable(key) {
    const data = calculateData();
    data.sort((a, b) => (key === 'name' ? a.name.localeCompare(b.name) : b[key] - a[key]));
    renderTable(data);
}

document.addEventListener('DOMContentLoaded', () => {
    renderTable(calculateData());
    document.getElementById('artisanToggle').addEventListener('change', (e) => {
        isArtisan = e.target.checked;
        renderTable(calculateData());
    });
});

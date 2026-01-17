const crops = [
    // 春季 (Spring)
    { name: "Parsnip", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/d/d3/Parsnip.png", growthDays: 4, seedCost: 20, basePrice: 35, isMulti: false, regrow: 0, yield: 1 },
    { name: "Garlic", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/b/b2/Garlic.png", growthDays: 4, seedCost: 40, basePrice: 60, isMulti: false, regrow: 0, yield: 1 },
    { name: "Potato", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Potato.png", growthDays: 6, seedCost: 50, basePrice: 80, isMulti: false, regrow: 0, yield: 1.2 },
    { name: "Strawberry", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/6/6d/Strawberry.png", growthDays: 8, seedCost: 100, basePrice: 120, isMulti: true, regrow: 4, yield: 1 },
    { name: "Coffee Bean", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/3/33/Coffee_Bean.png", growthDays: 10, seedCost: 0, basePrice: 15, isMulti: true, regrow: 2, yield: 4, kegOverride: 30 },
    // 夏季 (Summer)
    { name: "Blueberry", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/9/9e/Blueberry.png", growthDays: 13, seedCost: 80, basePrice: 50, isMulti: true, regrow: 4, yield: 3 },
    { name: "Starfruit", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/d/db/Starfruit.png", growthDays: 13, seedCost: 400, basePrice: 750, isMulti: false, regrow: 0, yield: 1 },
    { name: "Hops", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/5/5f/Hops.png", growthDays: 11, seedCost: 60, basePrice: 25, isMulti: true, regrow: 1, yield: 1, kegOverride: 300 },
    { name: "Melon", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/1/19/Melon.png", growthDays: 12, seedCost: 80, basePrice: 250, isMulti: false, regrow: 0, yield: 1 },
    // 秋季 (Fall)
    { name: "Pumpkin", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png", growthDays: 13, seedCost: 100, basePrice: 320, isMulti: false, regrow: 0, yield: 1 },
    { name: "Ancient Fruit", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/0/01/Ancient_Fruit.png", growthDays: 28, seedCost: 0, basePrice: 550, isMulti: true, regrow: 7, yield: 1 },
    { name: "Grape", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Grape.png", growthDays: 10, seedCost: 60, basePrice: 80, isMulti: true, regrow: 3, yield: 1, dehydOverride: 120 },
    { name: "Sweet Gem Berry", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/8/88/Sweet_Gem_Berry.png", growthDays: 24, seedCost: 1000, basePrice: 3000, isMulti: false, regrow: 0, yield: 1, noProcess: true },
    // 薑島與果樹
    { name: "Pineapple", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/f/f2/Pineapple.png", growthDays: 14, seedCost: 0, basePrice: 300, isMulti: true, regrow: 7, yield: 1 },
    { name: "Banana", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/6/69/Banana.png", growthDays: 28, seedCost: 0, basePrice: 150, isMulti: true, regrow: 1, yield: 1 },
    { name: "Peach", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/e/e2/Peach.png", growthDays: 28, seedCost: 0, basePrice: 140, isMulti: true, regrow: 1, yield: 1 },
    { name: "Pomegranate", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Pomegranate.png", growthDays: 28, seedCost: 0, basePrice: 140, isMulti: true, regrow: 1, yield: 1 },
    // 1.6 新增
    { name: "Broccoli", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/2/24/Broccoli.png", growthDays: 8, seedCost: 0, basePrice: 70, isMulti: true, regrow: 4, yield: 1 }
];

let isArtisan = false;

function calculateData() {
    const artisanMult = isArtisan ? 1.4 : 1;
    return crops.map(c => {
        const seedCost = c.isMulti ? 0 : c.seedCost;
        const effectiveGrowth = (c.isMulti ? c.regrow : c.growthDays) / c.yield;

        let jarPrice = (c.basePrice * 2 + 50) * artisanMult;
        let kegPrice = (c.type === 'fruit' ? c.basePrice * 3 : c.basePrice * 2.25) * artisanMult;
        if (c.kegOverride) kegPrice = c.kegOverride * artisanMult;
        let dehydPrice = ((7.5 * c.basePrice + 25) / 5) * artisanMult;
        if (c.dehydOverride) dehydPrice = c.dehydOverride * artisanMult;

        if (c.noProcess) { jarPrice = 0; kegPrice = 0; dehydPrice = 0; }

        return {
            ...c,
            base_price: c.basePrice,
            jar_price: jarPrice, jar_net: jarPrice ? jarPrice - seedCost : 0, jar_daily: jarPrice ? (jarPrice - seedCost) / (effectiveGrowth + 2.8) : 0,
            keg_price: kegPrice, keg_net: kegPrice ? kegPrice - seedCost : 0, keg_daily: kegPrice ? (kegPrice - seedCost) / (effectiveGrowth + 7) : 0,
            dehyd_price: c.type === 'fruit' ? dehydPrice : 0, dehyd_net: c.type === 'fruit' ? dehydPrice - seedCost : 0, dehyd_daily: c.type === 'fruit' ? (dehydPrice - seedCost) / (effectiveGrowth + 0.2) : 0
        };
    });
}

// 在腳本最上方定義一個變數來追蹤目前的排序鍵值
let currentSortKey = 'jar_daily'; 

function renderTable(data) {
    const tbody = document.getElementById('tableBody');
    if (!tbody) return;

    tbody.innerHTML = data.map(row => {
        // 定義一個小工具函式來判斷是否該套用高光 Class
        const checkActive = (key) => currentSortKey === key ? 'active-column' : '';

        return `
        <tr>
            <td class="crop-name ${checkActive('name')}">
                <strong>${row.name}</strong><br>
                <img src="${row.img}" width="32" style="margin:5px 0;"><br>
                <small>${row.isMulti ? `⟳${row.regrow}d / ${row.yield}` : `${row.growthDays}d`}</small>
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

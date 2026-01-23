// 全漁獲資料庫：嚴格參照上傳圖表數據
const fishData = {
    spring: [
        { name: "傳說之魚", en: "Legend", base: 11250, loc: "礦井外的湖", time: "6:00 AM - 10:00 PM", weather: "下雨", diff: "110", note: "春季魚王", img: "f/f0/Legend.png", isKing: true },
        { name: "鯰魚", en: "Catfish", base: 200, loc: "小河 / 森林池塘", time: "任意", weather: "下雨", diff: "75", note: "春/秋/冬可捕捉", img: "c/ce/Catfish.png" },
        { name: "鰻魚", en: "Eel", base: 85, loc: "海洋", time: "4:00 PM - 2:00 AM", weather: "下雨", diff: "70", note: "炒鰻魚、香辣鰻魚", img: "b/bb/Eel.png" },
        { name: "比目魚", en: "Halibut", base: 80, loc: "海洋", time: "6:00 AM - 11:00 AM / 7:00 PM - 2:00 AM", weather: "任意", diff: "50", note: "春/夏/冬可捕捉", img: "0/02/Halibut.png" },
        { name: "鯡魚", en: "Shad", base: 60, loc: "小河", time: "9:00 AM - 2:00 AM", weather: "下雨", diff: "45", note: "春/夏/秋可捕捉", img: "e/ef/Shad.png" },
        { name: "沙丁魚", en: "Sardine", base: 40, loc: "海洋", time: "6:00 AM - 7:00 PM", weather: "任意", diff: "30", note: "海之佳餚", img: "0/04/Sardine.png" },
        { name: "翻車魚", en: "Sunfish", base: 30, loc: "小河", time: "6:00 AM - 7:00 PM", weather: "晴天", diff: "30", note: "烤魚", img: "3/3d/Sunfish.png" },
        { name: "鯷魚", en: "Anchovy", base: 30, loc: "海洋", time: "任意", weather: "任意", diff: "30", img: "7/73/Anchovy.png" },
        { name: "小口黑鱸", en: "Smallmouth Bass", base: 50, loc: "小河 / 湖", time: "任意", weather: "任意", diff: "28", img: "a/a1/Smallmouth_Bass.png" },
        { name: "鯡魚", en: "Herring", base: 30, loc: "海洋", time: "任意", weather: "任意", diff: "25", note: "春/冬可捕捉", img: "f/f1/Herring.png" }
    ],
    summer: [
        { name: "深紅魚", en: "Crimsonfish", base: 1500, loc: "海洋 (東碼頭)", time: "任意", weather: "任意", diff: "95", note: "夏季魚王", img: "3/3e/Crimsonfish.png", isKing: true },
        { name: "章魚", en: "Octopus", base: 150, loc: "海洋", time: "6:00 AM - 1:00 PM", weather: "任意", diff: "95", img: "1/12/Octopus.png" },
        { name: "河豚", en: "Pufferfish", base: 200, loc: "海洋", time: "12:00 PM - 4:00 PM", weather: "晴天", diff: "80", img: "b/ba/Pufferfish.png" },
        { name: "超級海參", en: "Super Cucumber", base: 250, loc: "海洋", time: "6:00 PM - 2:00 AM", weather: "任意", diff: "80", note: "夏/秋/冬可捕捉", img: "d/d5/Super_Cucumber.png" },
        { name: "鱘魚", en: "Sturgeon", base: 200, loc: "湖", time: "6:00 AM - 7:00 PM", weather: "任意", diff: "78", note: "夏/冬可捕捉", img: "4/42/Sturgeon.png" },
        { name: "多拉多", en: "Dorado", base: 100, loc: "小河 / 森林池塘", time: "6:00 AM - 7:00 PM", weather: "任意", diff: "78", img: "9/90/Dorado.png" },
        { name: "鮪魚", en: "Tuna", base: 100, loc: "海洋", time: "6:00 AM - 7:00 PM", weather: "任意", diff: "70", note: "墨西哥魚卷", img: "c/c5/Tuna.png" },
        { name: "狗魚", en: "Pike", base: 100, loc: "湖", time: "任意", weather: "任意", diff: "60", note: "夏/冬可捕捉", img: "3/31/Pike.png" },
        { name: "紅鯔魚", en: "Red Mullet", base: 75, loc: "海洋", time: "6:00 AM - 7:00 PM", weather: "任意", diff: "55", note: "夏/冬可捕捉", img: "f/f2/Red_Mullet.png" },
        { name: "羅非魚", en: "Tilapia", base: 75, loc: "海洋", time: "6:00 AM - 2:00 PM", weather: "任意", diff: "50", note: "夏/秋可捕捉", img: "7/7d/Tilapia.png" },
        { name: "彩虹鱒魚", en: "Rainbow Trout", base: 65, loc: "小河 / 山上", time: "6:00 AM - 7:00 PM", weather: "晴天", diff: "45", note: "鮭魚湯", img: "3/3b/Rainbow_Trout.png" },
        { name: "紅鯛魚", en: "Red Snapper", base: 50, loc: "海洋", time: "6:00 AM - 7:00 PM", weather: "下雨", diff: "40", note: "夏/秋可捕捉", img: "d/d3/Red_Snapper.png" }
    ],
    fall: [
        { name: "垂釣者", en: "Angler", base: 900, loc: "Joja超市北面木板橋", time: "任意", weather: "任意", diff: "85", note: "秋季魚王", img: "c/c3/Angler.png", isKing: true },
        { name: "虎鱒魚", en: "Tiger Trout", base: 150, loc: "小河 / 湖", time: "6:00 AM - 7:00 PM", weather: "任意", diff: "60", note: "秋/冬可捕捉", img: "0/01/Tiger_Trout.png" },
        { name: "長鰭金槍魚", en: "Albacore", base: 75, loc: "海洋", time: "6:00 AM - 11:00 AM / 6:00 PM - 2:00 AM", weather: "任意", diff: "60", note: "秋/冬可捕捉", img: "e/eb/Albacore.png" },
        { name: "鮭魚", en: "Salmon", base: 75, loc: "小河", time: "6:00 AM - 7:00 PM", weather: "任意", diff: "50", note: "鮭魚晚餐", img: "e/e4/Salmon.png" },
        { name: "白目魚", en: "Walleye", base: 105, loc: "小河 / 湖 / 森林池塘", time: "12:00 PM - 2:00 AM", weather: "下雨", diff: "45", img: "0/05/Walleye.png" },
        { name: "海參", en: "Sea Cucumber", base: 75, loc: "海洋", time: "6:00 AM - 7:00 PM", weather: "任意", diff: "40", note: "幸運午餐 (秋/冬)", img: "a/a9/Sea_Cucumber.png" }
    ],
    winter: [
        { name: "冰川魚", en: "Glacierfish", base: 1000, loc: "箭頭島南部", time: "6:00 AM - 10:00 PM", weather: "晴天 / 下雪", diff: "100", note: "冬季魚王", img: "6/61/Glacierfish.png", isKing: true },
        { name: "長蛇齒單線魚", en: "Lingcod", base: 120, loc: "湖", time: "任意", weather: "任意", diff: "85", img: "a/a2/Lingcod.png" },
        { name: "魷魚", en: "Squid", base: 80, loc: "海洋", time: "6:00 PM - 2:00 AM", weather: "任意", diff: "75", note: "炸魷魚", img: "d/dec/Squid.png" },
        { name: "鱸魚", en: "Perch", base: 55, loc: "小河", time: "任意", weather: "任意", diff: "35", img: "4/43/Perch.png" }
    ],
    special: [
        { name: "突變鯉魚", en: "Mutant Carp", base: 1000, loc: "下水道", time: "任意", weather: "任意", diff: "80", note: "魚王，一年一次", img: "d/df/Mutant_Carp.png", isKing: true },
        { name: "熔岩鰻魚", en: "Lava Eel", base: 700, loc: "礦井 100 層", time: "任意", weather: "任意", diff: "90", img: "1/12/Lava_Eel.png" },
        { name: "蠍鯉", en: "Scorpion Carp", base: 150, loc: "沙漠", time: "6:00 AM - 10:00 PM", weather: "任意", diff: "90", img: "3/34/Scorpion_Carp.png" },
        { name: "冰籽", en: "Ice Pip", base: 500, loc: "礦井 60 層", time: "任意", weather: "任意", diff: "85", img: "c/c5/Ice_Pip.png" },
        { name: "石魚", en: "Stonefish", base: 300, loc: "礦井 20 層", time: "任意", weather: "任意", diff: "65", img: "c/c0/Stonefish.png" },
        { name: "沙魚", en: "Sandfish", base: 75, loc: "沙漠", time: "6:00 AM - 10:00 PM", weather: "任意", diff: "65", img: "b/bb/Sandfish.png" },
        { name: "大口黑鱸", en: "Largemouth Bass", base: 100, loc: "礦井外的湖", time: "6:00 AM - 7:00 PM", weather: "任意", diff: "50", note: "脆皮鱸魚", img: "f/f1/Largemouth_Bass.png" },
        { name: "林躍魚", en: "Woodskip", base: 75, loc: "森林池塘", time: "任意", weather: "任意", diff: "50", img: "7/73/Woodskip.png" },
        { name: "幽靈魚", en: "Ghostfish", base: 45, loc: "礦井", time: "任意", weather: "任意", diff: "50", img: "6/60/Ghostfish.png" },
        { name: "楞頭魚", en: "Bullhead", base: 75, loc: "湖", time: "任意", weather: "任意", diff: "46", img: "2/28/Bullhead.png" },
        { name: "鰱魚", en: "Chub", base: 50, loc: "湖", time: "任意", weather: "任意", diff: "35", img: "b/bd/Chub.png" },
        { name: "鯿魚", en: "Bream", base: 45, loc: "小河", time: "6:00 PM - 2:00 AM", weather: "任意", diff: "35", img: "8/82/Bream.png" },
        { name: "鯉魚", en: "Carp", base: 30, loc: "湖", time: "任意", weather: "任意", diff: "15", note: "驚喜鯉魚", img: "a/a8/Carp.png" }
    ],
    crabpot: [
        { name: "龍蝦", en: "Lobster", base: 120, loc: "海洋", note: "龍蝦濃湯 (5%)", img: "9/9f/Lobster.png" },
        { name: "蟹", en: "Crab", base: 100, loc: "海洋", note: "蟹餅 (10%)", img: "0/05/Crab.png" },
        { name: "小龍蝦", en: "Crayfish", base: 75, loc: "淡水", note: "燉魚 (35%)", img: "5/53/Crayfish.png" },
        { name: "蝸牛", en: "Snail", base: 65, loc: "淡水", note: "法式蝸牛 (25%)", img: "d/d2/Snail.png" },
        { name: "蝦米", en: "Shrimp", base: 60, loc: "海洋", note: "椰汁湯 (20%)", img: "9/91/Shrimp.png" },
        { name: "蛤蜊", en: "Cockle", base: 50, loc: "海洋", note: "30% 獲取率", img: "a/ad/Cockle.png" },
        { name: "蛤", en: "Clam", base: 50, loc: "海洋", note: "雜燴燉湯 (15%)", img: "e/ed/Clam.png" },
        { name: "牡蠣", en: "Oyster", base: 40, loc: "海洋", note: "15% 獲取率", img: "5/54/Oyster.png" },
        { name: "貽貝", en: "Mussel", base: 30, loc: "海洋", note: "燉魚 (35%)", img: "a/ad/Mussel.png" },
        { name: "玉黍螺", en: "Periwinkle", base: 20, loc: "淡水", note: "奇異麵包、燉魚 (55%)", img: "1/1d/Periwinkle.png" }
    ]
};

// 渲染與計算邏輯保持不變
function renderTables() {
    for (const [season, fishes] of Object.entries(fishData)) {
        const tbody = document.getElementById(`${season}-tbody`);
        if (!tbody) continue;

        tbody.innerHTML = fishes.map(fish => `
            <tr data-base="${fish.base}">
                <td>
                    <div class="fish-content-wrapper">
                        <img src="https://stardewvalleywiki.com/mediawiki/images/${fish.img}" class="fish-icon">
                        <div><b>${fish.name}</b><br><small>${fish.en}</small></div>
                    </div>
                </td>
                <td class="price-cell">${fish.base} / <span class="price-iridium">${fish.base * 2}</span></td>
                <td class="smoked-cell">${season === 'crabpot' ? (fish.note || '-') : fish.base * 2}</td>
                <td>
                    <span class="info-tag">${fish.loc}</span>
                    ${fish.time ? `<span class="info-tag">${fish.time}</span>` : ''}
                    ${fish.weather ? `<span class="info-tag ${fish.weather.includes('雨') ? 'tag-rain' : 'tag-sun'}">${fish.weather}</span>` : ''}
                    ${fish.diff ? `<span class="info-tag ${parseInt(fish.diff) >= 90 ? 'tag-hard' : ''}">難度 ${fish.diff}</span>` : ''}
                    ${fish.note && season !== 'crabpot' ? `<br><small>${fish.note}</small>` : ''}
                </td>
            </tr>
        `).join('');
    }
}

function updatePrices() {
    const isAngler = document.getElementById('anglerToggle').checked;
    const filter = document.getElementById('fishSearch').value.toLowerCase();

    document.querySelectorAll('.fish-tbody tr').forEach(row => {
        const base = parseInt(row.getAttribute('data-base'));
        const text = row.textContent.toLowerCase();
        
        row.style.display = text.includes(filter) ? '' : 'none';

        const currentBase = isAngler ? Math.floor(base * 1.5) : base;
        const priceCell = row.querySelector('.price-cell');
        const smokedCell = row.querySelector('.smoked-cell');

        if (priceCell && smokedCell && !row.closest('#crabpot-section')) {
            priceCell.innerHTML = `${currentBase} / <span class="price-iridium">${currentBase * 2}</span>`;
            smokedCell.textContent = currentBase * 2;
        }
    });
}

document.getElementById('anglerToggle')?.addEventListener('change', updatePrices);
document.getElementById('fishSearch')?.addEventListener('input', updatePrices);
window.onload = renderTables;

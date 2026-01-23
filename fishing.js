// 魚類資料庫
const fishData = {
    spring: [
        { name: "傳說之魚", en: "Legend", base: 11250, loc: "礦井外的湖", time: "6am-10pm", weather: "下雨", diff: "110", note: "春季魚王", img: "f/f0/Legend.png", isKing: true },
        { name: "鯰魚", en: "Catfish", base: 200, loc: "河流/森林池塘", time: "6am-12am", weather: "下雨", diff: "75", note: "春/秋/冬", img: "c/ce/Catfish.png" },
        { name: "翻車魚", en: "Sunfish", base: 30, loc: "河流", time: "6am-7pm", weather: "晴天", diff: "30", note: "春/夏", img: "3/3d/Sunfish.png" },
        { name: "鯷魚", en: "Anchovy", base: 30, loc: "海洋", time: "任意", weather: "任意", diff: "30", img: "7/73/Anchovy.png" },
        { name: "鯡魚", en: "Herring", base: 30, loc: "海洋", time: "任意", weather: "任意", diff: "25", img: "f/f1/Herring.png" },
        { name: "大嘴鱸魚", en: "Largemouth Bass", base: 100, loc: "山區湖泊", time: "6am-7pm", weather: "任意", diff: "50", img: "f/f1/Largemouth_Bass.png" }
    ],
    summer: [
        { name: "深紅魚", en: "Crimsonfish", base: 1500, loc: "海洋(東碼頭)", time: "任意", weather: "任意", diff: "95", note: "夏季魚王", img: "3/3e/Crimsonfish.png", isKing: true },
        { name: "章魚", en: "Octopus", base: 150, loc: "海洋", time: "6am-1pm", weather: "任意", diff: "95", img: "1/12/Octopus.png" },
        { name: "河豚", en: "Pufferfish", base: 200, loc: "海洋", time: "12pm-4pm", weather: "晴天", diff: "80", img: "b/ba/Pufferfish.png" },
        { name: "鱘魚", en: "Sturgeon", base: 200, loc: "山區湖泊", time: "6am-7pm", weather: "任意", diff: "78", img: "4/42/Sturgeon.png" },
        { name: "彩虹鱒魚", en: "Rainbow Trout", base: 65, loc: "河流/山上", time: "6am-7pm", weather: "晴天", diff: "45", img: "3/3b/Rainbow_Trout.png" }
    ],
    fall: [
        { name: "垂釣者", en: "Angler", base: 900, loc: "Joja北橋", time: "任意", weather: "任意", diff: "85", note: "秋季魚王", img: "c/c3/Angler.png", isKing: true },
        { name: "鮭魚", en: "Salmon", base: 75, loc: "河流", time: "6am-7pm", weather: "任意", diff: "50", img: "e/e4/Salmon.png" },
        { name: "白目魚", en: "Walleye", base: 105, loc: "河流/湖泊", time: "12pm-2am", weather: "下雨", diff: "45", img: "0/05/Walleye.png" },
        { name: "長鰭金槍魚", en: "Albacore", base: 75, loc: "海洋", time: "6am-11am / 6pm-2am", weather: "任意", diff: "60", img: "e/eb/Albacore.png" }
    ],
    winter: [
        { name: "冰川魚", en: "Glacierfish", base: 1000, loc: "箭頭島南端", time: "6am-10pm", weather: "晴天/雪", diff: "100", note: "冬季魚王", img: "6/61/Glacierfish.png", isKing: true },
        { name: "蛇鱈", en: "Lingcod", base: 120, loc: "河流/湖泊", time: "任意", weather: "任意", diff: "85", img: "a/a2/Lingcod.png" },
        { name: "魷魚", en: "Squid", base: 80, loc: "海洋", time: "6pm-2am", weather: "任意", diff: "75", img: "d/dec/Squid.png" }
    ],
    special: [
        { name: "突變鯉魚", en: "Mutant Carp", base: 1000, loc: "下水道", time: "任意", weather: "任意", diff: "80", img: "d/df/Mutant_Carp.png", isKing: true },
        { name: "熔岩鰻魚", en: "Lava Eel", base: 700, loc: "礦井100層", time: "任意", weather: "任意", diff: "90", img: "1/12/Lava_Eel.png" },
        { name: "沙漠蠍鯉", en: "Scorpion Carp", base: 150, loc: "沙漠", time: "6am-10pm", weather: "任意", diff: "90", img: "3/34/Scorpion_Carp.png" }
    ],
    crabpot: [
        { name: "龍蝦", en: "Lobster", base: 120, loc: "海洋", note: "龍蝦濃湯", img: "9/9f/Lobster.png" },
        { name: "蟹", en: "Crab", base: 100, loc: "海洋", note: "蟹餅", img: "0/05/Crab.png" },
        { name: "小龍蝦", en: "Crayfish", base: 75, loc: "淡水", img: "5/53/Crayfish.png" }
    ]
};

// 初始化渲染
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
                <td class="price-cell">${fish.base} / <span style="color:#8a2be2">${fish.base * 2}</span></td>
                <td class="cell-keg smoked-cell">${season === 'crabpot' ? fish.note : fish.base * 2}</td>
                <td>
                    <span class="info-tag">${fish.loc}</span>
                    ${fish.time ? `<span class="info-tag">${fish.time}</span>` : ''}
                    ${fish.weather ? `<span class="info-tag ${fish.weather.includes('雨') ? 'tag-rain' : 'tag-sun'}">${fish.weather}</span>` : ''}
                    ${fish.diff ? `<span class="info-tag" style="color:${fish.diff > 80 ? 'red' : 'inherit'}">難度 ${fish.diff}</span>` : ''}
                    ${fish.note ? `<br><small>${fish.note}</small>` : ''}
                </td>
            </tr>
        `).join('');
    }
}

// 價格計算邏輯
function updatePrices() {
    const isAngler = document.getElementById('anglerToggle').checked;
    const filter = document.getElementById('fishSearch').value.toLowerCase();

    document.querySelectorAll('.fish-tbody tr').forEach(row => {
        const base = parseInt(row.getAttribute('data-base'));
        const text = row.textContent.toLowerCase();
        
        // 搜尋過濾
        row.style.display = text.includes(filter) ? '' : 'none';

        // 價格計算
        const currentBase = isAngler ? Math.floor(base * 1.5) : base;
        const priceCell = row.querySelector('.price-cell');
        const smokedCell = row.querySelector('.smoked-cell');

        if (priceCell && smokedCell && !row.closest('#crabpot-section')) {
            priceCell.innerHTML = `${currentBase} / <span style="color:#8a2be2">${currentBase * 2}</span>`;
            smokedCell.textContent = currentBase * 2;
        }
    });
}

document.getElementById('anglerToggle').addEventListener('change', updatePrices);
document.getElementById('fishSearch').addEventListener('input', updatePrices);

window.onload = renderTables;

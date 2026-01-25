// 1. 全漁獲資料庫 (保持原樣)
const fishData = {
    spring: [
        { name: "傳說之魚", en: "Legend", base: 11250, loc: "礦井外的湖", time: "6:00 AM - 10:00 PM", weather: "下雨", diff: "110", note: "春季魚王", img: "f/f0/Legend.png" },
        { name: "鯰魚", en: "Catfish", base: 200, loc: "小河 / 森林池塘", time: "任意", weather: "下雨", diff: "75", note: "春/秋/冬可捕捉", img: "c/ce/Catfish.png" },
        { name: "鰻魚", en: "Eel", base: 85, loc: "海洋", time: "4:00 PM - 2:00 AM", weather: "下雨", diff: "70", note: "香辣鰻魚", img: "b/bb/Eel.png" },
        { name: "比目魚", en: "Halibut", base: 80, loc: "海洋", time: "6:00 AM - 11:00 AM / 7:00 PM - 2:00 AM", weather: "任意", diff: "50", img: "0/02/Halibut.png" },
        { name: "鯡魚", en: "Shad", base: 60, loc: "小河", time: "9:00 AM - 2:00 AM", weather: "下雨", diff: "45", img: "e/ef/Shad.png" },
        { name: "沙丁魚", en: "Sardine", base: 40, loc: "海洋", time: "6:00 AM - 7:00 PM", weather: "任意", diff: "30", note: "海之佳餚", img: "0/04/Sardine.png" },
        { name: "翻車魚", en: "Sunfish", base: 30, loc: "小河", time: "6:00 AM - 7:00 PM", weather: "晴天", diff: "30", note: "烤魚", img: "3/3d/Sunfish.png" },
        { name: "鯷魚", en: "Anchovy", base: 30, loc: "海洋", time: "任意", weather: "任意", diff: "30", img: "7/73/Anchovy.png" },
        { name: "小口黑鱸", en: "Smallmouth Bass", base: 50, loc: "小河 / 湖", time: "任意", weather: "任意", diff: "28", img: "a/a1/Smallmouth_Bass.png" },
        { name: "鯡魚", en: "Herring", base: 30, loc: "海洋", time: "任意", weather: "任意", diff: "25", img: "f/f1/Herring.png" }
    ],
    summer: [
        { name: "深紅魚", en: "Crimsonfish", base: 1500, loc: "海洋 (東碼頭)", time: "任意", weather: "任意", diff: "95", note: "夏季魚王", img: "3/3e/Crimsonfish.png" },
        { name: "章魚", en: "Octopus", base: 150, loc: "海洋", time: "6:00 AM - 1:00 PM", weather: "任意", diff: "95", img: "1/12/Octopus.png" },
        { name: "河豚", en: "Pufferfish", base: 200, loc: "海洋", time: "12:00 PM - 4:00 PM", weather: "晴天", diff: "80", img: "b/ba/Pufferfish.png" },
        { name: "超級海參", en: "Super Cucumber", base: 250, loc: "海洋", time: "6:00 PM - 2:00 AM", weather: "任意", diff: "80", img: "d/d5/Super_Cucumber.png" },
        { name: "鱘魚", en: "Sturgeon", base: 200, loc: "湖", time: "6:00 AM - 7:00 PM", weather: "任意", diff: "78", note: "夏/冬可捕捉", img: "4/42/Sturgeon.png" },
        { name: "鮪魚", en: "Tuna", base: 100, loc: "海洋", time: "6:00 AM - 7:00 PM", weather: "任意", diff: "70", note: "墨西哥魚卷", img: "c/c5/Tuna.png" },
        { name: "彩虹鱒魚", en: "Rainbow Trout", base: 65, loc: "小河 / 山上", time: "6:00 AM - 7:00 PM", weather: "晴天", diff: "45", note: "鮭魚湯", img: "3/3b/Rainbow_Trout.png" }
    ],
    fall: [
        { name: "垂釣者", en: "Angler", base: 900, loc: "Joja超市北面木板橋", time: "任意", weather: "任意", diff: "85", note: "秋季魚王", img: "c/c3/Angler.png" },
        { name: "虎鱒魚", en: "Tiger Trout", base: 150, loc: "小河 / 湖", time: "6:00 AM - 7:00 PM", weather: "任意", diff: "60", img: "0/01/Tiger_Trout.png" },
        { name: "鮭魚", en: "Salmon", base: 75, loc: "小河", time: "6:00 AM - 7:00 PM", weather: "任意", diff: "50", note: "鮭魚晚餐", img: "e/e4/Salmon.png" },
        { name: "白目魚", en: "Walleye", base: 105, loc: "小河 / 湖", time: "12:00 PM - 2:00 AM", weather: "下雨", diff: "45", img: "0/05/Walleye.png" }
    ],
    winter: [
        { name: "冰川魚", en: "Glacierfish", base: 1000, loc: "箭頭島南部", time: "6:00 AM - 10:00 PM", weather: "晴天 / 下雪", diff: "100", note: "冬季魚王", img: "6/61/Glacierfish.png" },
        { name: "長蛇齒單線魚", en: "Lingcod", base: 120, loc: "湖", time: "任意", weather: "任意", diff: "85", img: "a/a2/Lingcod.png" },
        { name: "魷魚", en: "Squid", base: 80, loc: "海洋", time: "6:00 PM - 2:00 AM", weather: "任意", diff: "75", note: "炸魷魚", img: "d/dec/Squid.png" }
    ],
    special: [
        { name: "突變鯉魚", en: "Mutant Carp", base: 1000, loc: "下水道", time: "任意", weather: "任意", diff: "80", img: "d/df/Mutant_Carp.png" },
        { name: "熔岩鰻魚", en: "Lava Eel", base: 700, loc: "礦井 100 層", time: "任意", weather: "任意", diff: "90", img: "1/12/Lava_Eel.png" },
        { name: "蠍鯉", en: "Scorpion Carp", base: 150, loc: "沙漠", time: "6:00 AM - 10:00 PM", weather: "任意", diff: "90", img: "3/34/Scorpion_Carp.png" },
        { name: "林躍魚", en: "Woodskip", base: 75, loc: "森林池塘", time: "任意", weather: "任意", diff: "50", img: "7/73/Woodskip.png" }
    ],
    crabpot: [
        { name: "龍蝦", en: "Lobster", base: 120, loc: "海洋", note: "龍蝦濃湯", img: "9/9f/Lobster.png" },
        { name: "蟹", en: "Crab", base: 100, loc: "海洋", note: "蟹餅", img: "0/05/Crab.png" },
        { name: "玉黍螺", en: "Periwinkle", base: 20, loc: "淡水", note: "奇異麵包", img: "1/1d/Periwinkle.png" }
    ]
};

// 2. 狀態管理
let currentSeason = 'spring';

// 3. 切換季節函數 (掛載到 window 確保 HTML 的 onclick 能找到)
window.switchSeason = function(season) {
    currentSeason = season;
    // 更新按鈕樣式
    document.querySelectorAll('.tab-btn').forEach(btn => {
        const btnOnclick = btn.getAttribute('onclick');
        btn.classList.toggle('active', btnOnclick.includes(season));
    });
    renderTable();
};

// 4. 核心渲染函數
function renderTable() {
    const root = document.getElementById('fishing-root');
    if (!root) return;

    const isAngler = document.getElementById('anglerToggle')?.checked;
    const filter = document.getElementById('fishSearch')?.value.toLowerCase() || '';
    
    // 過濾數據
    const fishes = fishData[currentSeason].filter(f => 
        f.name.includes(filter) || 
        f.en.toLowerCase().includes(filter) || 
        f.loc.includes(filter)
    );

    // 建立 8 欄位表格
    root.innerHTML = `
        <div class="table-container">
            <table>
                <thead>
                    <tr class="group-base">
                        <th>頭像</th>
                        <th>漁獲名稱</th>
                        <th>地點</th>
                        <th>天氣</th>
                        <th>時間</th>
                        <th>售價 (普/銥/燻)</th>
                        <th>難度</th>
                        <th>備註</th>
                    </tr>
                </thead>
                <tbody class="fish-tbody">
                    ${fishes.map(fish => {
                        const base = isAngler ? Math.floor(fish.base * 1.5) : fish.base;
                        const smoked = base * 2;
                        const weatherClass = fish.weather.includes('雨') ? 'tag-rain' : (fish.weather.includes('晴') ? 'tag-sun' : '');

                        return `
                        <tr>
                            <td style="width: 50px;">
                                <img src="https://stardewvalleywiki.com/mediawiki/images/${fish.img}" class="fish-icon" style="display: block; margin: 0 auto;">
                            </td>
                            <td style="width: 130px;">
                                <div class="crop-info-text">
                                    <span class="crop-title" style="font-weight:600;">${fish.name}</span>
                                    <span class="crop-time" style="font-size:10px;">${fish.en}</span>
                                </div>
                            </td>
                            <td><span class="info-tag">${fish.loc}</span></td>
                            <td><span class="info-tag ${weatherClass}">${fish.weather}</span></td>
                            <td><span class="info-tag">${fish.time || '任意'}</span></td>
                            <td style="width: 120px;">
                                <div style="line-height: 1.4;">
                                    ${base} / <span class="price-iridium">${base * 2}</span>
                                    <div class="cell-keg" style="font-size: 10px; padding: 2px 4px; border-radius: 4px; margin-top: 4px;">
                                        燻: ${smoked}
                                    </div>
                                </div>
                            </td>
                            <td style="width: 60px;">
                                <span class="info-tag ${parseInt(fish.diff) >= 90 ? 'tag-hard' : ''}">
                                    ${fish.diff || '-'}
                                </span>
                            </td>
                            <td><span class="note-text">${fish.note || '-'}</span></td>
                        </tr>`;
                    }).join('')}
                </tbody>
            </table>
        </div>`;
}

// 5. 事件綁定與初始化
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
    document.getElementById('anglerToggle')?.addEventListener('change', renderTable);
    document.getElementById('fishSearch')?.addEventListener('input', renderTable);
});

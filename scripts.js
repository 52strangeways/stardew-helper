const crops = [
    // --- Spring (春天) ---
    { name: "Parsnip", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/d/d3/Parsnip.png", growthDays: 4, seedCost: 20, basePrice: 35, isMulti: false, regrow: 0, yield: 1 },
    { name: "Garlic", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/b/b2/Garlic.png", growthDays: 4, seedCost: 40, basePrice: 60, isMulti: false, regrow: 0, yield: 1 },
    { name: "Potato", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Potato.png", growthDays: 6, seedCost: 50, basePrice: 80, isMulti: false, regrow: 0, yield: 1.2 }, // 均值
    { name: "Kale", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/d/d1/Kale.png", growthDays: 6, seedCost: 70, basePrice: 110, isMulti: false, regrow: 0, yield: 1 },
    { name: "Rhubarb", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Rhubarb.png", growthDays: 13, seedCost: 100, basePrice: 220, isMulti: false, regrow: 0, yield: 1 },
    { name: "Cauliflower", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/a/aa/Cauliflower.png", growthDays: 12, seedCost: 80, basePrice: 175, isMulti: false, regrow: 0, yield: 1 },
    { name: "Strawberry", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/6/6d/Strawberry.png", growthDays: 8, seedCost: 100, basePrice: 120, isMulti: true, regrow: 4, yield: 1 },
    { name: "Green Bean", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/5/5c/Green_Bean.png", growthDays: 10, seedCost: 60, basePrice: 40, isMulti: true, regrow: 3, yield: 1 },
    { name: "Blue Jazz", type: "flower", img: "https://stardewvalleywiki.com/mediawiki/images/2/2f/Blue_Jazz.png", growthDays: 7, seedCost: 30, basePrice: 50, isMulti: false, regrow: 0, yield: 1 },

    // --- Summer (夏天) ---
    { name: "Tomato", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/9/9d/Tomato.png", growthDays: 11, seedCost: 50, basePrice: 60, isMulti: true, regrow: 4, yield: 1 },
    { name: "Hot Pepper", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Hot_Pepper.png", growthDays: 5, seedCost: 40, basePrice: 40, isMulti: true, regrow: 3, yield: 1 },
    { name: "Blueberry", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/9/9e/Blueberry.png", growthDays: 13, seedCost: 80, basePrice: 50, isMulti: true, regrow: 4, yield: 3 },
    { name: "Melon", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/1/19/Melon.png", growthDays: 12, seedCost: 80, basePrice: 250, isMulti: false, regrow: 0, yield: 1 },
    { name: "Hops", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/5/5f/Hops.png", growthDays: 11, seedCost: 60, basePrice: 25, isMulti: true, regrow: 1, yield: 1, kegOverride: 300 },
    { name: "Starfruit", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/d/db/Starfruit.png", growthDays: 13, seedCost: 400, basePrice: 750, isMulti: false, regrow: 0, yield: 1 },
    { name: "Corn", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/f/f8/Corn.png", growthDays: 14, seedCost: 150, basePrice: 50, isMulti: true, regrow: 4, yield: 1 },
    { name: "Red Cabbage", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/2/2d/Red_Cabbage.png", growthDays: 9, seedCost: 100, basePrice: 260, isMulti: false, regrow: 0, yield: 1 },
    { name: "Poppy", type: "flower", img: "https://stardewvalleywiki.com/mediawiki/images/3/37/Poppy.png", growthDays: 7, seedCost: 100, basePrice: 140, isMulti: false, regrow: 0, yield: 1 },

    // --- Fall (秋天) ---
    { name: "Pumpkin", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/6/64/Pumpkin.png", growthDays: 13, seedCost: 100, basePrice: 320, isMulti: false, regrow: 0, yield: 1 },
    { name: "Eggplant", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/8/8f/Eggplant.png", growthDays: 7, seedCost: 20, basePrice: 60, isMulti: true, regrow: 5, yield: 1 },
    { name: "Bok Choy", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/4/40/Bok_Choy.png", growthDays: 4, seedCost: 50, basePrice: 80, isMulti: false, regrow: 0, yield: 1 },
    { name: "Yam", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/1/17/Yam.png", growthDays: 10, seedCost: 60, basePrice: 160, isMulti: false, regrow: 0, yield: 1 },
    { name: "Cranberries", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Cranberries.png", growthDays: 7, seedCost: 240, basePrice: 75, isMulti: true, regrow: 5, yield: 2 },
    { name: "Grape", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/c/c2/Grape.png", growthDays: 10, seedCost: 60, basePrice: 80, isMulti: true, regrow: 3, yield: 1, dehydOverride: 120 },
    { name: "Fairy Rose", type: "flower", img: "https://stardewvalleywiki.com/mediawiki/images/d/d9/Fairy_Rose.png", growthDays: 12, seedCost: 200, basePrice: 290, isMulti: false, regrow: 0, yield: 1 },
    { name: "Ancient Fruit", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/0/01/Ancient_Fruit.png", growthDays: 28, seedCost: 0, basePrice: 550, isMulti: true, regrow: 7, yield: 1 },
    { name: "Sweet Gem Berry", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/8/88/Sweet_Gem_Berry.png", growthDays: 24, seedCost: 1000, basePrice: 3000, isMulti: false, regrow: 0, yield: 1, noProcess: true },

    // --- Special & Ginger Island (特殊與薑島) ---
    { name: "Pineapple", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/f/f2/Pineapple.png", growthDays: 14, seedCost: 0, basePrice: 300, isMulti: true, regrow: 7, yield: 1 },
    { name: "Taro Root", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/0/01/Taro_Root.png", growthDays: 7, seedCost: 20, basePrice: 100, isMulti: false, regrow: 0, yield: 1 },
    { name: "Cactus Fruit", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/3/32/Cactus_Fruit.png", growthDays: 12, seedCost: 0, basePrice: 75, isMulti: true, regrow: 3, yield: 1 },

    // --- Fruit Trees (果樹) ---
    { name: "Banana", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/6/69/Banana.png", growthDays: 28, seedCost: 0, basePrice: 150, isMulti: true, regrow: 1, yield: 1 },
    { name: "Mango", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/3/38/Mango.png", growthDays: 28, seedCost: 0, basePrice: 130, isMulti: true, regrow: 1, yield: 1 },
    { name: "Peach", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/e/e2/Peach.png", growthDays: 28, seedCost: 0, basePrice: 140, isMulti: true, regrow: 1, yield: 1 },
    { name: "Pomegranate", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Pomegranate.png", growthDays: 28, seedCost: 0, basePrice: 140, isMulti: true, regrow: 1, yield: 1 },
    { name: "Apple", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/7/7d/Apple.png", growthDays: 28, seedCost: 0, basePrice: 100, isMulti: true, regrow: 1, yield: 1 },
    { name: "Orange", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/4/43/Orange.png", growthDays: 28, seedCost: 0, basePrice: 100, isMulti: true, regrow: 1, yield: 1 },
    { name: "Cherry", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/2/20/Cherry.png", growthDays: 28, seedCost: 0, basePrice: 80, isMulti: true, regrow: 1, yield: 1 },
    { name: "Apricot", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/f/fc/Apricot.png", growthDays: 28, seedCost: 0, basePrice: 50, isMulti: true, regrow: 1, yield: 1 },

    // --- 1.6 New Crops (1.6版本新增) ---
    { name: "Carrot", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/c/c3/Carrot.png", growthDays: 3, seedCost: 0, basePrice: 35, isMulti: false, regrow: 0, yield: 1 },
    { name: "Summer Squash", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/4/43/Summer_Squash.png", growthDays: 6, seedCost: 0, basePrice: 45, isMulti: true, regrow: 3, yield: 1 },
    { name: "Broccoli", type: "veg", img: "https://stardewvalleywiki.com/mediawiki/images/2/24/Broccoli.png", growthDays: 8, seedCost: 0, basePrice: 70, isMulti: true, regrow: 4, yield: 1 },
    { name: "Powdermelon", type: "fruit", img: "https://stardewvalleywiki.com/mediawiki/images/2/26/Powdermelon.png", growthDays: 7, seedCost: 0, basePrice: 60, isMulti: false, regrow: 0, yield: 1 }
];

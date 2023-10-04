var fishLayer = L.layerGroup([]);
var featherLayer = L.layerGroup([]);
var plantLayer = L.layerGroup([]);
var shopLayer = L.layerGroup([]);
var monumentLayer = L.layerGroup([]);
var portLayer = L.layerGroup([]);

var itemIcon = L.Icon.extend({
    options: {
        iconSize: [40, 40]
    }
});

var portIcon = L.Icon.extend({
    options: {
        iconSize: [37.5, 45.5],
    }
})

var iPort = new portIcon({
    iconUrl: 'img/icons/boat.png'
});

var iShopMystery = new itemIcon({
    iconUrl: 'img/icons/mystery-shop.png'
});
var iShopNormal = new itemIcon({
    iconUrl: 'img/icons/common-shop.png'
});
var iShopNPC = new itemIcon({
    iconUrl: 'img/icons/npc-shop.png'
});

var iMonumentCrate = new itemIcon({
    iconUrl: 'img/icons/crate-monument.png'
});
var iMonumentArena = new itemIcon({
    iconUrl: 'img/icons/monument-arena.png'
});
var iMonumentKeycard = new itemIcon({
    iconUrl: 'img/icons/monument-keycard.png'
});
var iMonumentWeather = new itemIcon({
    iconUrl: 'img/icons/monument-weatherstation.png'
});

var iPlantWheat = new itemIcon({
    iconUrl: 'img/icons/wheat-plant.png'
});
var iPlantCloudberries = new itemIcon({
    iconUrl: 'img/icons/cloudberry-plant.png'
});
var iPlantRaspberries = new itemIcon({
    iconUrl: 'img/icons/raspberry-plant.png'
});
var iPlantBlackberries = new itemIcon({
    iconUrl: 'img/icons/blackberry-plant.png'
});
var iPlantSugarBeet = new itemIcon({
    iconUrl: 'img/icons/sugarbeet-plant.png'
});
var iPlantKingcup = new itemIcon({
    iconUrl: 'img/icons/kingcup-plant.png'
});
var iPlantHepatica = new itemIcon({
    iconUrl: 'img/icons/hepatica-plant.png'
});
var iPlantWindflower = new itemIcon({
    iconUrl: 'img/icons/windflower-plant.png'
});
var iPlantPoppy = new itemIcon({
    iconUrl: 'img/icons/poppy-plant.png'
});
var iPlantBlackLotus = new itemIcon({
    iconUrl: 'img/icons/blacklotus-plant.png'
});
var iPlantMezereon = new itemIcon({
    iconUrl: 'img/icons/mez-plant.png'
});
var iPlantChanterelles = new itemIcon({
    iconUrl: 'img/icons/chanterelles-plant.png'
});

var iFeatherHazelHen = new itemIcon({
    iconUrl: 'img/icons/hazelhen-feather.png'
});
var iFeatherPristineHazelHen = new itemIcon({
    iconUrl: 'img/icons/hazelhen-pristine-feather.png'
});
var iFeatherKiiruna = new itemIcon({
    iconUrl: 'img/icons/kiiruna-feather.png'
});
var iFeatherPristineKiiruna = new itemIcon({
    iconUrl: 'img/icons/kiiruna-pristine-feather.png'
});
var iFeatherPeacock = new itemIcon({
    iconUrl: 'img/icons/peacock-feather.png'
});
var iFeatherPristinePeacock = new itemIcon({
    iconUrl: 'img/icons/peacock-pristine-feather.png'
});
var iFeatherCapercaillie = new itemIcon({
    iconUrl: 'img/icons/capercaillie-feather.png'
});
var iFeatherPristineCapercaillie = new itemIcon({
    iconUrl: 'img/icons/capercaillie-pristine-feather.png'
});

var iFishGreen = new itemIcon({
    iconUrl: 'img/icons/fishing-green.png'
});
var iFishSnow = new itemIcon({
    iconUrl: 'img/icons/fishing-snow.png'
});
var iFishStream = new itemIcon({
    iconUrl: 'img/icons/fishing-stream.png'
});
var iFishAutumn = new itemIcon({
    iconUrl: 'img/icons/fishing-autumn.png'
});
var iFishWhite = new itemIcon({
    iconUrl: 'img/icons/fishing-whitefish.png'
});
var iFishDeep = new itemIcon({
    iconUrl: 'img/icons/fishing-deep.png'
});
var iFishArtic = new itemIcon({
    iconUrl: 'img/icons/fishing-arctic.png'
});
var iFishCommonPerch = new itemIcon({
    iconUrl: 'img/icons/fishing-commonperch.png'
});
var iFishEpicTrout = new itemIcon({
    iconUrl: 'img/icons/fishing-epictrout.png'
});
var iFishRarePike = new itemIcon({
    iconUrl: 'img/icons/fishing-rarepike.png'
});

const mapData = [
    {
        icon: iPort,
        text: `<h3>Sgt. Lake Outpost</h3><p>Port</p>`,
        layer: portLayer,
        coords: [[-38, -9]],
    },
    {
        icon: iPort,
        text: `<h3>Tim's Outpost</h3><p>Port</p>`,
        layer: portLayer,
        coords: [[-4, -46]],
    },
    {
        icon: iPort,
        text: `<h3>Sirola's Secret Shop</h3><p>Port</p>`,
        layer: portLayer,
        coords: [[6, 20]],
    },
    {
        icon: iPort,
        text: `<h3>Jax's Outpost</h3><p>Port</p>`,
        layer: portLayer,
        coords: [[-34, -45]],
    },
    {
        icon: iPort,
        text: `<h3>Henry's Fishing Dock</h3><p>Port</p>`,
        layer: portLayer,
        coords: [[-44, -45.5]],
    },
    {
        icon: iPort,
        text: `<h3>Mrs. Snow's Outpost</h3><p>Port</p>`,
        layer: portLayer,
        coords: [[-53, 6]],
    },
    {
        icon: iPort,
        text: `<h3>Artur's Outpost</h3><p>Port</p>`,
        layer: portLayer,
        coords: [[-53, 38]],
    },
    {
        icon: iPort,
        text: `<h3>Filemon's Outpost</h3><p>Port</p>`,
        layer: portLayer,
        coords: [[-39.5, 54.5]],
    },
    {
        icon: iPort,
        text: `<h3>Heimo & Rose</h3><p>Port</p>`,
        layer: portLayer,
        coords: [[-8, 57]],
    },
    {
        icon: iPort,
        text: `<h3>Diogo's Dock</h3><p>Port</p>`,
        layer: portLayer,
        coords: [[-33, -72]],
    },
    {
        icon: iPort,
        text: `<h3>Pix's Island</h3><p>Port</p>`,
        layer: portLayer,
        coords: [[-51, 63]],
    },
    {
        icon: iPort,
        text: `<h3>Kiolot Harbor</h3><p>Port</p>`,
        layer: portLayer,
        coords: [[6, 59]],
    },
    {
        icon: iPort,
        text: `<h3>Kyrres Base Camp</h3><p>Port</p>`,
        layer: portLayer,
        coords: [[44, 8]],
    },
    {
        icon: iPort,
        text: `<h3>Padva Harbor</h3><p>Port</p>`,
        layer: portLayer,
        coords: [[-32, -103.5]],
    },
    {
        icon: iPort,
        text: `<h3>Heisala Harbor</h3><p>Port</p>`,
        layer: portLayer,
        coords: [[-61, 71]],
    },
    {
        icon: iMonumentCrate,
        text: `<h3>Loot Crate</h3><p>Monument</p>`,
        layer: monumentLayer,
        coords: [[-49, 53], [65, -115], [65, -73], [-1, -105], [-4, 21], [-27, 15], [-32, 30], [-45, 24], [-39, -30], [-70, -78], [-16, 117], [-5, 118], [-24, 117], [-29, 67], [41, 83], [49, 53], [53, 55], [54, 42], [49, 43], [63, 162], [69, 143], [72, 148], [70, 156], [68, 164], [-50, -88], [19, -73], [39, -80], [48, -52], [-10, -1], [-10, 3], [4, -11], [7, -14], [18, -6], [18, -4], [13, -30], [-42, 87]],
    },
    {
        icon: iMonumentArena,
        text: `<h3>Arena</h3><p>Monument</p>`,
        layer: monumentLayer,
        coords: [[36, 47.5], [41, -122]],
    },
    {
        icon: iMonumentWeather,
        text: `<h3>Observatory</h3><p>Monument</p>`,
        layer: monumentLayer,
        coords: [[48, 40], [70, 156], [-42, 89]],
    },
    {
        icon: iMonumentKeycard,
        text: `<h3>Bunker</h3><p>Monument</p>`,
        layer: monumentLayer,
        coords: [[-23, 126], [52, 42], [68, 164], [65, -75]],
    },
    {
        icon: iShopMystery,
        text: `<h3>Julia's Mysterios Shop</h3><p>Shop</p>`,
        layer: shopLayer,
        coords: [[71.5, 112], [65, -77], [-54, -119], [-3, 23], [-51, -16], [-31, -74], [20, -68], [4, -9], [18, -2], [-61, 127], [6, 18]],
    },
    {
        icon: iShopNormal,
        text: `<h3>James General Store</h3><p>Shop</p>`,
        layer: shopLayer,
        coords: [[-32, 28], [-45, 22], [-4, -44], [-54, -121], [-52.75, -121], [41, -124], [48, 7], [21, -77], [14, -32]],
    },
    {
        icon: iShopNormal,
        text: `<h3>A's Farming Shop</h3><p>Shop</p>`,
        layer: shopLayer,
        coords: [[-64, 59], [46.5, 9]],
    },
    {
        icon: iShopNormal,
        text: `<h3>Kyrre's Equipment</h3><p>Shop</p>`,
        layer: shopLayer,
        coords: [[-66, 57], [46.5, 7], [17, 84]],
    },
    {
        icon: iShopNormal,
        text: `<h3>Jax's Outpost</h3><p>Shop</p>`,
        layer: shopLayer,
        coords: [[-61, 69], [41, -120]],
    },
    {
        icon: iShopNormal,
        text: `<h3>Sgt. Lake's Kitchen</h3><p>Shop</p>`,
        layer: shopLayer,
        coords: [[15, 82]],
    },
    {
        icon: iShopNPC,
        text: `<h3>Angel</h3><p>NPC Vendor</p>`,
        layer: shopLayer,
        coords: [[-66, 59]],
    },
    {
        icon: iShopNPC,
        text: `<h3>Filemon</h3><p>NPC Vendor</p>`,
        layer: shopLayer,
        coords: [[-52.75, -119], [48, 9]],
    },
    {
        icon: iShopNPC,
        text: `<h3>Sgt. Lake</h3><p>NPC Vendor</p>`,
        layer: shopLayer,
        coords: [[17, 82]],
    },
    {
        icon: iFeatherCapercaillie,
        text: `<h3>Capercaillie</h3><p>Feather</p>`,
        layer: featherLayer,
        coords: [[32, -155], [3, -80], [-22, -91], [-46, -80], [29, 4], [28, -37]],
    },
    {
        icon: iFeatherPristineCapercaillie,
        text: `<h3>Pristine Capercaillie</h3><p>Feather</p>`,
        layer: featherLayer,
        coords: [[32, -153], [3, -78], [-22, -89], [-46, -78], [29, 6], [28, -35]],
    },
    {
        icon: iFeatherHazelHen,
        text: `<h3>Hazel Hen</h3><p>Feather</p>`,
        layer: featherLayer,
        coords: [[-18, 28], [-21, 104], [-61, -133], [13, -126], [5, -80], [-17, -72], [-16, -4], [1, 4], [-57, 113]],
    },
    {
        icon: iFeatherPristineHazelHen,
        text: `<h3>Pristine Hazel Hen</h3><p>Feather</p>`,
        layer: featherLayer,
        coords: [[-18, 26], [-21, 106], [13, -128], [-62, -133], [5, -78], [-17, -70], [-16, -2], [1, 6], [-57, 115]],
    },
    {
        icon: iFeatherKiiruna,
        text: `<h3>Kiiruna</h3><p>Feather</p>`,
        layer: featherLayer,
        coords: [[16, 42], [52, -137], [64, -20], [43, -71], [13, 9], [22, -22]],
    },
    {
        icon: iFeatherPristineKiiruna,
        text: `<h3>Pristine Kiiruna</h3><p>Feather</p>`,
        layer: featherLayer,
        coords: [[16, 40], [52, -135], [64, -18], [43, -69], [13, 11], [22, -20]],
    },
    {
        icon: iFeatherPeacock,
        text: `<h3>Peacock</h3><p>Feather</p>`,
        layer: featherLayer,
        coords: [[-62, -22], [-55, -6]],
    },
    {
        icon: iFeatherPristinePeacock,
        text: `<h3>Pristine Peacock</h3><p>Feather</p>`,
        layer: featherLayer,
        coords: [[-62, -24], [-53.75, -6]],
    },
    {
        icon: iFishAutumn,
        text: `<h3>Fishing Spot</h3><p>Salmon (50%)<br>Catfish (25%)<br>Redfish (8%)<br>Arctic Char (5%)<br>Misty Grouper (3%)</p>`,
        layer: fishLayer,
        coords: [[-7, -62], [20, -66], [-16, -63], [-13, -64], [9, -68], [27, -69], [-15, -68], [-48, -58], [-7, -74], [-33, -69], [-26, -74], [16, -85], [8, -85], [-5, -84], [27, -86], [-46, -75], [-42, -77], [-48, -74], [-34, -81], [-16, -86], [-2, -89], [-4, -91], [13, -93], [8, -94], [17, -94], [-35, -89], [-32, -90], [27, -97], [30, -98], [-22, -95], [-28, -95], [-51, -87], [-17, -101], [-60, -84], [-43, -95], [-47, -94], [-19, -105], [-43, -99], [-21, -109], [-3, -112], [-67, -96],[-32, -116], [5, -128], [-6, -132], [14, -134], [-28, -132], [-7, -136], [1, -138], [14, -143], [22, -144], [18, -149], [-44, -142], [-6, -153], [-34, -148], [1, -158], [-52, -158], [-55, -160], [-47, -167], [-49, -171]],
    },
    {
        icon: iFishGreen,
        text: `<h3>Fishing Spot</h3><p>Perch (45%)<br>Trout (25%)<br>Whitefish (9%)<br>Rainbow Trout (6%)<br>Black Grouper (4%)</p>`,
        layer: fishLayer,
        coords: [[16, 108], [19, 95], [19, 85], [-9, 75], [-26, 92], [-30, 90],  [-31, 100], [-9, 64], [-10, 63], [-23, 67], [-12, 59], [-6, 56], [-30, 130], [-17, 54], [-45, 107], [-41, 67], [-42, 70], [-40 ,64], [-10, 41], [-18, 43], [-6, 37], [-53, 107], [-45, 55], [-51, 64], [-54, 62], [-57, 76], [-57, 66], [-51, 48], [-54, 54], [-4, 16], [-62, 85], [-51, 43], [-54, 48], [-17, 12], [-65, 89], [-66, 104], [-64, 109], [-23, 8], [-27, 8], [-28, 5], [-33, 2], [-51, 2], [-54, -2], [-46, -10], [-63, 8], [-53, -10], [-64, 5], [-32, -23], [-56, -10], [-67, 8], [-52, -18], [3, -34], [-28, -33], [-59, -16], [-61, -14], [-52, -25], [-30, -40], [-66, -14], [-53, -32], [-8, -47], [-29, -45], [-12, 47], [-70, -5], [-68, -15], [-27, -46], [-52, -36], [-67, -21], [-53, -39], [-50, -41], [-60, -34], [-50, -43], [-46, -45], [-49, -47], [-53, -47], [-72, -19], [-64, -42], [-55, -52], [-52, -56], [-69, -37], [-72, -33], [-58, -58], [-51, -65], [-60, -75], [-67, -70], [-62, -83], [-70, -73], [-69, -78], [-72, -72], [-71, -78], [-71, -82], [-67, -89], [-69, -92]],
    },
    {
        icon: iFishSnow,
        text: `<h3>Fishing Spot</h3><p>Pike (50%)<br>Haddock (20%)<br>Cod (10%)<br>Black Grouper (5%)<br>Salmon Shark (4%)</p>`,
        layer: fishLayer,
        coords: [[56, -48], [-6, 40], [39, -43], [4, -49], [43, -48], [46, -45], [6, -55], [50, -41], [45, -49], [44, -58], [34, -69], [51, -66], [65, -43], [35, -88], [51, -80], [71, -41], [39, -89], [47, -87], [71, -48], [31, -98], [46, -97], [-8, 65], [-7, 66], [45, 96], [45, -102], [41, 104], [25, 111], [50, -156], [56, -102], [71, -88], [-42, 106], [41, 122], [40, 131], [64, -119], [61, 125], [62, -124], [66, -119], [63, 127], [69, 119], [28, -140], [35, -142], [41, -143], [62, -134], [43, 30], [44, -26], [62, 36], [68, 6], [71, -22], [70, 47], [68, 81], [69, 77], [69, 86], [60, 105], [61, 111], [70, 103], [46, 149], [35, -150], [59, -142], [47, 157], [48, 161], [54, 165], [61, 164]],
    },
    {
        icon: iFishDeep,
        text: `<h3>Fishing Spot</h3><p>Tuna (45%)<br>Stingray (20%)<br>Arctic Char (10%)<br>Swordfish (5%)<br>Salmon Shark (3%)</p>`,
        layer: fishLayer,
        coords: [[-50, -148], [-11, -55], [9, -61], [-31, -54], [28, -62], [-23, -125], [-63, -71], [-46, -137], [-47, -140], [-68, -110], [-13, -159], [38, -147], [-49, -146], [-33, -159], [44, -147], [41, -151], [-36, -164], [71, -43], [70, -106], [66, -128], [-64, -56], [-68, -32], [-70, -48], [-71, -63], [-67, -6], [-63, 78], [-68, 84], [36, 37], [-19, 63], [-58, 46], [27, 61], [35, 61], [-45, 65], [31, 66], [32, 68], [4, 80], [71, 41], [-54, 78], [36, 91], [2, 106], [21, 106], [52, 107], [7, 126], [28, 126], [74, 88], [67, 100], [23, 127], [71, 97], [73, 95], [-33, 136], [14, 135], [32, 131], [27, 135], [-66, 132], [35, 148], [71, 127], [73, 129]],
    },
    {
        icon: iFishStream,
        text: `<h3>Fishing Spot</h3><p>Perch (50%)<br>Pike (50%)<br>Trout (50%)<br>Catfish (20%)<br>Salmon (10%)<br>Rainbow Trout (10%)</p>`,
        layer: fishLayer,
        coords: [[12, 23], [12, -32], [-9, -72], [23, 32]]
    },
    {
        icon: iFishWhite,
        text: `<h3>Fishing Spot</h3><p>Whitefish (100%)</p>`,
        layer: fishLayer,
        coords: [[-4, 135], [-44, 130], [-47, 117], [-49, 113], [-15, -18]]
    },
    {
        icon: iFishArtic,
        text: `<h3>Fishing Spot</h3><p>Salmon (50%)<br>Cod (50%)<br>Arctic Char (5%)</p>`,
        layer: fishLayer,
        coords: [[43, 48]]
    },
    {
        icon: iFishCommonPerch,
        text: `<h3>Fishing Spot</h3><p>Perch (50%)<br>Haddock (20%)<br>Pike (10%)<br>Salmon (10%)<br>Trout (2%)</p>`,
        layer: fishLayer,
        coords: [[-54, 4], [-54, 8], [-54, 10], [-54, 12], [-54, 32], [-38, 51], [-40, 52], [-39, 57]]
    },
    {
        icon: iFishEpicTrout,
        text: `<h3>Fishing Spot</h3><p>Trout (40%)<br>Pike (20%)<br>Rainbow Trout (5%)</p>`,
        layer: fishLayer,
        coords: [[35, -36], [35, -20], [5, 20], [35, 13], [0, 53], [15, 54]]
    },
    {
        icon: iFishRarePike,
        text: `<h3>Fishing Spot</h3><p>Perch (60%)<br>Perch (20%)<br>Pike (20%)</p>`,
        layer: fishLayer,
        coords: [[-54, 8], [19, -55], [33, -54], [-54, 35], [-52, 64], [-26, 59], [-37, 58]]
    },
    {
        icon: iPlantChanterelles,
        text: `<h3>Chanterelles</h3><p>Plant</p>`,
        layer: plantLayer,
        coords: [[-62, -135], [1, -98], [15, -132], [13, -124], [-49, -79], [-47, -86], [-25, -84], [17, -73], [24, -80], [28, -76]] 
    },
    {
        icon: iPlantWheat,
        text: `<h3>Wheat</h3><p>Plant</p>`,
        layer: plantLayer,
        coords: [[-35, -114], [-42, -108], [-35, -136], [-36, -149], [-42, -154], [-18, -102], [-13, -95], [-61, -135], [1, -96], [15, -130], [19, -102], [1, -107], [-11, -36], [-52, 56], [-53, 60], [-52, 50], [-50.5, 12], [-47, 34], [-36, 46], [-34, 53], [-22, 56], [-18, 38], [-52.5, 35], [-29, 36], [-13, 55], [-21, 90], [-49, -77], [-47, -84], [-40, -90], [-20, -94], [-26, -77], [-24, -70], [-17, -69], [-13, -81], [-20, -84], [-8, -64], [6, -70], [-5, -73], [1, -80], [9, -78], [24, -78], [-16, -41], [-6, -18], [-37, 94]]
    },
    {
        icon: iPlantBlackberries,
        text: `<h3>Blackberries</h3><p>Plant</p>`,
        layer: plantLayer,
        coords: [[13, 77], [15, 82], [14, 93], [-11, -38], [-47, 42], [-34, 55], [-16, 36], [-45.5, 32], [-29, 34], [-3, 38], [-49, -2], [-45, -16], [-34, -22], [-32, -39], [-50, -32], [-55, -8], [-66, -67], [-68, -89], [-67, -94], [-57, -65], [-71, 27], [-68, 28], [-70, 70], [-13, 104], [-16, -39], [-61, 96], [-60, 103], [-63, 115], [-44, 134], [-37, 73]]
    },
    {
        icon: iPlantCloudberries,
        text: `<h3>Cloudberries</h3><p>Plant</p>`,
        layer: plantLayer,
        coords: [[10, 73], [4, 64], [62.5, -29], [-18, 36], [-5, 23], [-10, 45], [-71, 59], [-70, 62], [5, -19], [3, -5]] 
    },
    {
        icon: iPlantRaspberries,
        text: `<h3>Raspberries</h3><p>Plant</p>`,
        layer: plantLayer,
        coords: [[8, 69], [-45, 43], [-38, 45], [-16, 38], [-36, 37], [-49, -4], [-47, -16], [-34, -24], [-32, -41], [-46, -38], [-60, -56], [-27, 77], [-24, 82], [-5, 86], [-26, 123], [-13,90], [-11, -34]] 
    },
    {
        icon: iPlantKingcup,
        text: `<h3>Kingcup</h3><p>Plant</p>`,
        layer: plantLayer,
        coords: [[-47, 52], [-50.5, 53], [9, 71], [-16, -43], [-52, 12], [-10, 16], [-37, 53], [-22, 54], [-15, 55], [-32, -29], [-61, 61], [-22, 74], [-10, -22], [-12, -13], [-7, 9], [-16, 8], [3, 3], [-45, 79], [-49, 98]]
    },
    {
        icon: iPlantMezereon,
        text: `<h3>Mezereon</h3><p>Plant</p>`,
        layer: plantLayer,
        coords: [[-50.5, 55], [-29, 93]] 
    },
    { 
        icon: iPlantWindflower,
        text: `<h3>Windflower</h3><p>Plant</p>`,
        layer: plantLayer,
        coords: [[11, 71], [-52, 14], [-47, 32], [-13, 53], [-22, 74], [-13, 70], [-27, 128], [62.5, -31], [-6, -6], [3, 7], [26, -38], [-49, 100]]
    },
    {
        icon: iPlantHepatica,
        text: `<h3>Hepatica</h3><p>Plant</p>`,
        layer: plantLayer,
        coords: [[10, 69], [-50.5, 14], [-15, 53], [-13, 70], [61.5, -31], [-6, -16], [3, 5], [26, -40], [-60, 105]] 
    },
    {
        icon: iPlantSugarBeet,
        text: `<h3>Sugar Beet</h3><p>Plant</p>`,
        layer: plantLayer,
        coords: [[-29, 38], [-11, -40]] 
    },
    {
        icon: iPlantPoppy,
        text: `<h3>Poppy</h3><p>Plant</p>`,
        layer: plantLayer,
        coords: [[-61, -29], [-64, -30], [-64, -35], [-62, -41], [-24, -40], [61.5, -29]] 
    },
    {
        icon: iPlantBlackLotus,
        text: `<h3>Black Lotus</h3><p>Plant</p>`,
        layer: plantLayer,
        coords: [[-61, -27]] 
    },
]
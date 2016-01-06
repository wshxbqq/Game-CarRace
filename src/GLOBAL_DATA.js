var GLOBAL_DATA = {};
var GLOBAL_LAYER = null;

GLOBAL_DATA.is_first_load = true;

GLOBAL_DATA.Music = true;
GLOBAL_DATA.Sound = true;

GLOBAL_DATA.UserSocre = 0;
GLOBAL_DATA.UserBest = 0;

GLOBAL_DATA.Miles = 0;

GLOBAL_DATA.GAS_SPEED = 4;
GLOBAL_DATA.E_SPEED = 2;


GLOBAL_DATA.costingNormal = 0.06; //在正常路段  每一帧的消耗量
GLOBAL_DATA.costingWrong = 0.8;   //在错误路段  每一帧的消耗量
GLOBAL_DATA.milesDivision = 7.2;  // 最后公里数会整体除以一个数. 以控制 到一个合适的范围里.

GLOBAL_DATA.currentMode = 0;
GLOBAL_DATA.save = function () {

    cc.sys.localStorage.setItem("UserBest", GLOBAL_DATA.UserBest + "");

    cc.sys.localStorage.setItem("Music", GLOBAL_DATA.Music + "");

    cc.sys.localStorage.setItem("Sound", GLOBAL_DATA.Sound + "");

}

GLOBAL_DATA.load = function () {
    var userBest = cc.sys.localStorage.getItem("UserBest");
    GLOBAL_DATA.UserBest = userBest ? parseInt(userBest) : 0;
    GLOBAL_DATA.UserBest = parseInt(GLOBAL_DATA.UserBest);




    GLOBAL_DATA.Music = cc.sys.localStorage.getItem("Music") == "false" ? false : true;
    GLOBAL_DATA.Sound = cc.sys.localStorage.getItem("Sound") == "false" ? false : true;

}

GLOBAL_DATA.CITY = {};



GLOBAL_DATA.CITY["city_0"] = {};


GLOBAL_DATA.CITY["city_0"]["0"] = {
    car: { x: 290, y: 375 },
    car_diff: { x: 0, y: 0 },
    finnish_line: { x: 0, y: 85 },
    startChargingDiff: {
        x: 10,
        y: 35
    },

    map: [{ x: 349, y: 170, t: 1 },
        { x: 290, y: 221, t: 1 },

        { x: 290, y: 1050, t: 1 },
        { x: 365, y: 1125, t: 1 },

        { x: 512, y: 1125, t: 0 },
        { x: 573, y: 1187, t: 0 },

        { x: 573, y: 1336, t: 0 },
        { x: 515, y: 1394, t: 0 },

        { x: 342, y: 1394, t: 1 },
        { x: 282, y: 1453, t: 1 },

        { x: 282, y: 1784, t: 1 },
        { x: 344, y: 1846, t: 1 },

        { x: 860, y: 1846, t: 1 },
        { x: 919, y: 1777, t: 1 },

        { x: 919, y: 1604, t: 1 },
        { x: 866, y: 1551, t: 1 },

        { x: 781, y: 1551, t: 0 },
        { x: 709, y: 1476, t: 0 },

        { x: 709, y: 1316, t: 0 },
        { x: 767, y: 1260, t: 0 },

        { x: 1008, y: 1260, t: 1 },
        { x: 1079, y: 1191, t: 1 },

        { x: 1079, y: 907, t: 1 },
        { x: 1015, y: 842, t: 1 },

        { x: 759, y: 842, t: 0 },
        { x: 681, y: 763, t: 0 },

        { x: 681, y: 591, t: 1 },
        { x: 626, y: 536, t: 1 },


        { x: 578, y: 536, t: 0 },
        { x: 511, y: 469, t: 0 },

        { x: 511, y: 229, t: 1 },
        { x: 457, y: 170, t: 1 }],

    building: [
        { x: 290, y: 739, diff: { x: 130, y: 100 } },
        { x: 290, y: 1020, diff: { x: -130, y: 100 } },
        { x: 290, y: 1560, diff: { x: -130, y: 100 } },
        { x: 500, y: 1846, diff: { x: -110, y: 110 } },
        { x: 810, y: 1846, diff: { x: -110, y: 110 } },
        { x: 919, y: 1739, diff: { x: 100, y: 100 } },
        { x: 827, y: 1551, diff: { x: -100, y: 100 } },
        { x: 950, y: 1260, diff: { x: 100, y: 90 } },
        { x: 1004, y: 843, diff: { x: 0, y: 90 } },
        { x: 800, y: 840, diff: { x: 0, y: 90 } },
        { x: 513, y: 460, diff: { x: -90, y: 100 } }
    ],
    shift: [
        { x: 289, y: 739, d: 0, mode: 0 },
        { x: 289, y: 1020, d: 0, mode: 1 },
        { x: 280, y: 1560, d: 0, mode: 0 },
        { x: 500, y: 1840, d: 1, mode: 1 },
        { x: 810, y: 1840, d: 1, mode: 0 },
        { x: 922, y: 1739, d: 2, mode: 1 },
        { x: 827, y: 1550, d: 3, mode: 0 },
        { x: 950, y: 1260, d: 1, mode: 1 },
        { x: 1004, y: 843, d: 3, mode: 0 },
        { x: 800, y: 840, d: 3, mode: 1 },
        { x: 513, y: 460, d: 2, mode: 0 }
    ]

};

// ±±¾©ÏßÂ·2
GLOBAL_DATA.CITY["city_0"]["1"] = {
    startChargingDiff: {
        x: 10,
        y: 45
    },

    car: { x: 426, y: 784 },
    car_diff: { x: -28, y: -157 },
    finnish_line: { x: 0, y: 73 },
    map: [{ x: 426, y: 1757, t: 1 },
        { x: 499, y: 1818, t: 1 },

        { x: 932, y: 1814, t: 1 },
        { x: 985, y: 1757, t: 1 },

        { x: 984, y: 1474, t: 1 },
        { x: 914, y: 1403, t: 1 },

        { x: 668, y: 1403, t: 0 },
        { x: 600, y: 1337, t: 0 },

        { x: 600, y: 1119, t: 0 },
        { x: 662, y: 1051, t: 0 },

        { x: 916, y: 1050, t: 1 },
        { x: 984, y: 986, t: 1 },

        { x: 984, y: 255, t: 1 },
        { x: 913, y: 186, t: 1 },

        { x: 290, y: 186, t: 1 },
        { x: 228, y: 259, t: 1 },

        { x: 228, y: 549, t: 1 },
        { x: 295, y: 618, t: 1 },

        { x: 353, y: 618, t: 0 },
        { x: 425, y: 683, t: 0 }],
    building: [
        { x: 426, y: 1209, diff: { x: 108, y: 82 } },
        { x: 426, y: 1539, diff: { x: -110, y: 90 } },
        { x: 537, y: 1818, diff: { x: -110, y: 99 } },
        { x: 984, y: 1706, diff: { x: 99, y: 104 } },
        { x: 683, y: 1404, diff: { x: -89, y: 99 } },
        { x: 743, y: 1050, diff: { x: 80, y: 102 } },
        { x: 984, y: 970, diff: { x: 95, y: 108 } },
        { x: 984, y: 693, diff: { x: 102, y: 108 } },
        { x: 984, y: 350, diff: { x: 100, y: 105 } },
        { x: 669, y: 186, diff: { x: -71, y: 102 } },
        { x: 228, y: 526, diff: { x: -89, y: 103 } }
    ],
    shift: [
        { x: 426, y: 1209, d: 0, mode: 0 },
        { x: 426, y: 1539, d: 0, mode: 1 },
        { x: 537, y: 1818, d: 1, mode: 0 },
        { x: 984, y: 1706, d: 2, mode: 1 },
        { x: 683, y: 1404, d: 3, mode: 0 },
        { x: 743, y: 1050, d: 1, mode: 1 },
        { x: 984, y: 970, d: 2, mode: 0 },
        { x: 984, y: 693, d: 2, mode: 1 },
        { x: 984, y: 350, d: 2, mode: 0 },
        { x: 669, y: 186, d: 3, mode: 1 },
        { x: 228, y: 526, d: 0, mode: 0 }
    ]


};

//±±¾©µØÍ¼3
GLOBAL_DATA.CITY["city_0"]["2"] = {
    startChargingDiff: {
        x: -90,
        y: 40
    },

    finnish_line: { x: 0, y: 75 },
    car: { x: 219, y: 882 },
    car_diff: { x: -28, y: -157 },

    map: [{ x: 220, y: 1564, t: 1 },
        { x: 287, y: 1634, t: 1 },

        { x: 365, y: 1634, t: 1 },
        { x: 430, y: 1569, t: 1 },

        { x: 430, y: 1155, t: 0 },
        { x: 498, y: 1081, t: 0 },

        { x: 782, y: 1081, t: 0 },
        { x: 850, y: 1147, t: 0 },

        { x: 850, y: 1281, t: 0 },
        { x: 784, y: 1345, t: 0 },

        { x: 682, y: 1345, t: 1 },
        { x: 610, y: 1413, t: 1 },

        { x: 610, y: 1762, t: 1 },
        { x: 681, y: 1824, t: 1 },

        { x: 954, y: 1825, t: 1 },
        { x: 1027, y: 1755, t: 1 },

        { x: 1027, y: 265, t: 1 },
        { x: 960, y: 195, t: 1 },

        { x: 732, y: 195, t: 1 },
        { x: 660, y: 265, t: 1 },

        { x: 660, y: 560, t: 0 },
        { x: 580, y: 628, t: 0 },

        { x: 308, y: 628, t: 1 },
        { x: 222, y: 708, t: 1 },

        { x: 759, y: 842, t: 0 },
        { x: 681, y: 763, t: 0 },

        { x: 681, y: 591, t: 1 },
        { x: 626, y: 536, t: 1 },


        { x: 578, y: 536, t: 0 },
        { x: 511, y: 469, t: 0 },

        { x: 511, y: 229, t: 1 },
        { x: 457, y: 170, t: 1 }],

    building: [
        { x: 222, y: 1130,  diff: { x: -115, y: 93 } },
        { x: 222, y: 1532,  diff: { x: -114, y: 99 } },
        { x: 608, y: 1080,  diff: { x: 92, y: 109 } },
        { x: 612, y: 1728,  diff: { x: -73, y: 113 } },
        { x: 1026, y: 1713, diff: { x: -128, y: 100 } },
        { x: 1026, y: 1425, diff: { x: -106, y: 123 } },
        { x: 1026, y: 1005, diff: { x: -100, y: 100 } },
        { x: 1026, y: 570,  diff: { x: -82, y: 121 } },
        { x: 760, y: 192,   diff: { x: -105, y: 114 } },
        { x: 465, y: 627,   diff: { x: 78, y: 110 } }

    ],
    shift: [
        { x: 222, y: 1130,  d: 0, mode: 0 },
        { x: 222, y: 1532,  d: 0, mode: 1 },
        { x: 608, y: 1080,  d: 1, mode: 0 },
        { x: 612, y: 1728,  d: 0, mode: 1 },
        { x: 1026, y: 1713, d: 2, mode: 0 },
        { x: 1026, y: 1425, d: 2, mode: 1 },
        { x: 1026, y: 1005, d: 2, mode: 0 },
        { x: 1026, y: 570,  d: 2, mode: 1 },
        { x: 760, y: 192,   d: 3, mode: 0 },
        { x: 465, y: 627,   d: 3, mode: 1 }
    ]

};


GLOBAL_DATA.CURR_DATA = GLOBAL_DATA.CITY[window.cityid][window.cidx];

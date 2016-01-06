/// <reference path="../../Util/JQ/Component/device.js" />
/// <reference path="../../Util/JQ/Component/encrypt.js" />
/// <reference path="../../Util/JQ/Component/net.js" />
/// <reference path="../../Util/JQ/Component/sql.js" />
/// <reference path="../../Util/JQ/Component/ui.js" />
/// <reference path="../../Util/JQ/Component/util.js" />
/// <reference path="../../Util/JQ/Component/wx.js" />
/// <reference path="../../Util/JQ/JQ.js" />
/// <reference path="../../Util/underscore.js" />
/// <reference path="../../GLOBAL_DATA.js" />
/// <reference path="../../Util/util.js" />
 

var Layer_Guide_2 = {};

Layer_Guide_2.init = function (node, parentLayer) {

 
    
    Layer_Guide_2.layerNode = node;

    Layer_Guide_2.parentLayer = parentLayer;

    Layer_Guide_2.NextBtn = $(node, "Next_Btn");
   
    var a1 = cc.scaleTo(0.3, 1.8);
    var a2 = cc.scaleTo(0.3, 1.5);
    var seq = cc.sequence(a1, a2);
    var af = cc.repeatForever(seq);
    Layer_Guide_2.NextBtn.items[0].runAction(af);


    Layer_Guide_2.NextBtn.bind("touchend", function () {
        node.removeFromParent();
        parentLayer.zoomIn();
        parentLayer.scheduleUpdate();




    });

};
 
 
 
 
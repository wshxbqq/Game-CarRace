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
 

var Layer_Over = {};

Layer_Over.init = function (node, parentLayer) {

 
    
    Layer_Over.layerNode = node;

    Layer_Over.parentLayer = parentLayer;

    Layer_Over.Button_Again = $(node, "Button_Again");
    Layer_Over.Button_Redirect = $(node, "Button_Redirect");
    Layer_Over.Button_Presold = $(node, "Button_Presold");

    Layer_Over.Text_Mark = $(node, "Text_Mark");


    var utm_source = window.getQueryString("utm_source")||"unknow";

    
    Layer_Over.Button_Presold.bind("touchend", function () {
        location.href = "pages/test_form.html?mark=" + window.parseInt(GLOBAL_DATA.Miles) + "&utm_source=" + utm_source;
    });


    Layer_Over.Button_Redirect.bind("touchend", function () {
        location.href = "pages/form.html?mark=" + window.parseInt(GLOBAL_DATA.Miles) + "&utm_source=" + utm_source;
    });

    Layer_Over.Button_Again.bind("touchend", function () {
        GLOBAL_DATA.is_first_load = false;

        GLOBAL_DATA.Miles = 0;
        GLOBAL_DATA.UserSocre = 0;
        cc.director.runScene(new StartScence());



    });

};
 
 
 
 
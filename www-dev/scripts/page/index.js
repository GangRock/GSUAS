/**
 * Created by shijiuwei on 2014/12/28.
 */
define(function (require) {
    require("bootstrap");

    var $iframepage = $("#iframepage"),
        iFrameHeight  = function(ele) {
            var mainheight = $(ele).contents().find("body").height()+30;
            $(ele).height(mainheight);
        };
    $iframepage.on("load", function () {
        iFrameHeight(this);
    })
});
/**
 * Created by shijiuwei on 2014/12/31.
 */
define(function (require) {
    require("bootstrap");
    require("plugins/bootstrap/bootstrap-datepicker");
    require("plugins/ztree/jquery.ztree.all-3.5.min");
    var placeholder = require("plugins/placeholder/jquery.placeholder"),
        userSearchVld = require("dictSearchValidator"),
        setPIH = require("setParentIframeHeight"),
        resourcestree = require("resourcestree"),
        $searchUserBtn = $("#searchUserBtn"),
        $searchUser = $("#searchUser"),
        $addUserBtn = $("#addUserBtn"),
        $modifyModal = $("#modifyModal"),
        $addModal = $("#addModal");

    $(window.parent.document).find("#iframepage").height(614);
    //搜索
    $searchUserBtn.on("click", function () {
        $searchUser.show();
        setPIH.setHeight();
        var $searchUserRemove = $("#searchUserRemove");
        $searchUserRemove.on("click", function () {
            $searchUser.hide();
            setPIH.setHeight("", 86);
        });
    });

    $.fn.zTree.init($("#treeContentId"), resourcestree.setting, resourcestree.zNodes);

    $("input").placeholder();
    //userSearchVld.validator({formid: "#searchUserForm"});//表单验证
    $('#regDate').datepicker({"setDate": new Date(), "autoclose": true});

    //添加
    $addUserBtn.on("click", function () {
        $addModal.modal({
            remote: "resources-add.html"
        });
        $addModal.on('loaded.bs.modal', function (e) {
            console.log("ttt");
            $("#mainmodalConfirm").on("click", function () {
                $addModal.modal('hide');
            });
        });
    });


    return {}
});
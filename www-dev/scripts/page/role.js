/**
 * Created by shijiuwei on 2014/12/31.
 */
define(function (require) {
    require("bootstrap");
    require("plugins/bootstrap/bootstrap-datepicker");
    require("plugins/ztree/jquery.ztree.all-3.5.min");
    var placeholder = require("plugins/placeholder/jquery.placeholder"),
        /*userSearchVld = require("dictSearchValidator"),*/
        setPIH = require("setParentIframeHeight"),
        $searchUserBtn = $("#searchUserBtn"),
        $searchUser = $("#searchUser"),
        $addUserBtn = $("#addUserBtn"),
        /*$modifyModal = $("#modifyModal"),*/
        $addUserModal = $("#addUserModal");

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

    $("input").placeholder();
    //userSearchVld.validator({formid: "#searchUserForm"});//表单验证
    $('#regDate').datepicker({"setDate": new Date(), "autoclose": true});

    //添加
    $addUserBtn.on("click", function () {
        $addUserModal.modal({
            remote: "role-add.html"
        });
    });
    $addUserModal.on('loaded.bs.modal', function (e) {
        $("#mainmodalConfirm").on("click", function () {
            $addUserModal.modal('hide');
        });
    });

    return {}
});
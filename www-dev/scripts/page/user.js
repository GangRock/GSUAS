/**
 * Created by jiuwei.stone on 2014/12/29.
 */
define(function (require) {
    require("bootstrap");
    require("plugins/bootstrap/bootstrap-datepicker");
    var placeholder = require("plugins/placeholder/jquery.placeholder"),
        userSearchVld = require("userSearchValidator"),
        setPIH = require("setParentIframeHeight"),
        $searchUserBtn = $("#searchUserBtn"),
        $searchUser = $("#searchUser"),
        $addUserBtn = $("#addUserBtn"),
        $userlist = $("#userlist");

    //搜索
    $searchUserBtn.on("click", function () {
        $searchUser.show();
        setPIH.setHeight();
        var $searchUserRemove = $("#searchUserRemove");
        $searchUserRemove.on("click", function () {
            $searchUser.hide();
            setPIH.setHeight("",86);
        });
    });


    $("input").placeholder();
    userSearchVld.validator({formid:"#searchUserForm"});//表单验证
    $('#regDate').datepicker({});

    //添加
    $addUserBtn.on("click", function () {
        $("#addUserModal").modal({
            remote:"user-edit.html"
        });
    });
    //修改
    $(".userModify").on("click", function () {
        $("#addUserModal").modal({
            remote:"user-edit.html"
        });
    });
    //删除
    $(".userDelete").on("click", function () {
        $("#delUserModal").modal({

        });
    });

    return {};
});
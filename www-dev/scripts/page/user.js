/**
 * Created by jiuwei.stone on 2014/12/29.
 */
define(function (require) {
    require("bootstrap");
    require("plugins/bootstrap/bootstrap-datepicker");
    var placeholder = require("plugins/placeholder/jquery.placeholder"),
        userSearchVld = require("userSearchValidator"),
        $searchUserBtn = $("#searchUserBtn"),
        $searchUser = $("#searchUser"),
        $addUserBtn = $("#addUserBtn");

    $searchUserBtn.on("click", function () {
        $searchUser.show();
        var $searchUserRemove = $("#searchUserRemove");
        $searchUserRemove.on("click", function () {
            $searchUser.hide();
        })
    });
    $("input").placeholder();
    userSearchVld.validator({formid:"#searchUserForm"});//表单验证
    $('#regDate').datepicker({});
    $addUserBtn.on("click", function () {
        $("#addUserModal").modal({
            remote:"user-edit.html"
        });
    })

    return {};
});
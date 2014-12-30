/**
 * Created by jiuwei.stone on 2014/12/29.
 */
define(function (require) {
    require("bootstrap");
    require("plugins/bootstrap/bootstrap-datepicker");
    require("plugins/ztree/jquery.ztree.all-3.5.min");
    var placeholder = require("plugins/placeholder/jquery.placeholder"),
        userSearchVld = require("userSearchValidator"),
        setPIH = require("setParentIframeHeight"),
        orgztree = require("orgtree"),
        gangweiztree = require("gangweitree"),
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
        var $addUserModal = $("#addUserModal");
        $addUserModal.modal({
            remote:"user-edit.html"
        });

        $addUserModal.on('loaded.bs.modal', function (e) {
            var $dialogModal = $("#dialogModal"),
                $dialogTitle = $("#dialogTitle"),
                $dialogContent = $("#dialogContent"),
                $dialogCancel = $("#dialogCancel"),
                $dialogConfirm = $("#dialogConfirm");

            //组织添加
            var $addOrgBtnModal = $("#addOrgBtnModal"),
                $addOrgBtn = $("#addOrgBtn"),
                $closeOrgModel = $("#closeOrgModel");
            $addOrgBtn.on("click", function () {
                $addOrgBtnModal.modal();
            });
            $.fn.zTree.init($("#treeOrg"), orgztree.setting, orgztree.zNodes);
            $closeOrgModel.on("click", function () {
                $addOrgBtnModal.modal('hide');
            });
            //组织保存
            $("#saveOrgBtn").on("click", function () {
                $dialogModal.modal();
                $dialogModal.on('shown.bs.modal', function (e) {
                    $dialogTitle.text("组织保存");
                    $dialogContent.text("组织保存成功！");
                    $dialogCancel.hide();
                    $dialogConfirm.show();
                })
            });
            //组织删除
            $("#delOrgBtn").on("click", function () {
                $dialogModal.modal();
                $dialogModal.on('shown.bs.modal', function (e) {
                    $dialogTitle.text("组织删除");
                    $dialogContent.text("组织删除成功！");
                    $dialogCancel.hide();
                    $dialogConfirm.show();
                })
            });
            //岗位添加
            var addgangweiBtnModal = $("#addgangweiBtnModal"),
                addgangweiBtn = $("#addgangweiBtn"),
                closegangweiModel = $("#closegangweiModel");
            addgangweiBtn.on("click", function () {
                addgangweiBtnModal.modal();
            });
            $.fn.zTree.init($("#treegangwei"), gangweiztree.setting, gangweiztree.zNodes);
            closegangweiModel.on("click", function () {
                addgangweiBtnModal.modal('hide');
            });
            //岗位保存
            $("#savegangweiBtn").on("click", function () {
                $dialogModal.modal();
                $dialogModal.on('shown.bs.modal', function (e) {
                    $dialogTitle.text("岗位保存");
                    $dialogContent.text("岗位保存成功！");
                    $dialogCancel.hide();
                    $dialogConfirm.show();
                })
            });
            //岗位删除
            $("#delgangweiBtn").on("click", function () {
                $dialogModal.modal();
                $dialogModal.on('shown.bs.modal', function (e) {
                    $dialogTitle.text("岗位删除");
                    $dialogContent.text("岗位删除成功！");
                    $dialogCancel.hide();
                    $dialogConfirm.show();
                })
            });
        });

    });

    //删除
    $(".userDelete").on("click", function () {
        $("#delUserModal").modal();
    });

    return {};
});
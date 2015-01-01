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
        orgztree = require("orgtree"),
        gangweiztree = require("gangweitree"),
        $searchUserBtn = $("#searchUserBtn"),
        $searchUser = $("#searchUser"),
        $addUserBtn = $("#addUserBtn"),
        $modifyModal = $("#modifyModal"),
        $addUserModal = $("#addUserModal");

    setPIH.setHeight();
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
    userSearchVld.validator({formid: "#searchUserForm"});//表单验证
    $('#regDate').datepicker({"setDate": new Date(), "autoclose": true});

    //添加
    $addUserBtn.on("click", function () {
        $addUserModal.modal({
            remote: "dictionary-add.html"
        });
    });
    //修改
    $(".userModify").on("click", function () {
        $modifyModal.modal({
            remote: "dictionary-edit.html"
        });
    });
    //删除
    $(".userDelete").on("click", function () {
        $("#delUserModal").modal();
    });

    $modifyModal.on('loaded.bs.modal', function (e) {
        var $dialogModal = $("#dialogModal"),
            $dialogTitle = $("#dialogTitle"),
            $dialogContent = $("#dialogContent"),
            $dialogCancel = $("#dialogCancel"),
            $dialogConfirm = $("#dialogConfirm");

        //修改小类
        var $addOrgBtnModal = $("#addOrgBtnModal"),
            $cfOrgModel = $("#cfOrgModel"),
            $closeOrgModel = $("#closeOrgModel");

        $("#subClassView").find(".pencil").on("click", function () {
            $addOrgBtnModal.modal();
            $closeOrgModel.on("click", function () {
                $addOrgBtnModal.modal('hide');
            });
            $cfOrgModel.on("click", function () {
                $addOrgBtnModal.modal('hide');
            });
        });

        //删除小类
        $("#subClassView").find(".remove").on("click", function () {
            $dialogModal.modal();
            $dialogModal.on('shown.bs.modal', function (e) {
                /*$dialogTitle.text("组织删除");
                $dialogContent.text("组织删除成功！");
                $dialogCancel.hide();*/
                $dialogConfirm.show().on("click", function () {
                    $dialogModal.modal('hide');
                });
                $dialogCancel.show().on("click", function () {
                    $dialogModal.modal('hide');
                });
            })
        });
    });

    return {}
});
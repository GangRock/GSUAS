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
        resourcestree = require("resourcestree"),
        jOrgChart = require("plugins/jOrgChart/jquery.jOrgChart"),
        $searchUserBtn = $("#searchUserBtn"),
        $searchUser = $("#searchUser"),
        $addUserBtn = $("#addUserBtn"),
        $modifyModal = $("#modifyModal"),
        $addModal = $("#addModal");

    //$(window.parent.document).find("#iframepage").height(650);
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
        $addModal.modal({
            remote: "department-add.html"
        });
        $addModal.on('loaded.bs.modal', function (e) {
            console.log("ttt");
            $("#mainmodalConfirm").on("click", function () {
                $addModal.modal('hide');
            });
        });
    });

    //修改
    $(".pencil").on("click", function () {
        var $modifyModal = $("#modifyModal"),
            $cfModelModify = $("#cfModelModify");
        $modifyModal.modal({
            remote: "company-edit.html"
        });
        $modifyModal.on('loaded.bs.modal', function (e) {
            $cfModelModify.on("click", function () {
                $modifyModal.modal('hide');
            });
            $("#org").jOrgChart({
                chartElement : '#chart',
                dragAndDrop  : true
            });
        });
    });

    //删除
    $(".remove").on("click", function () {
        var $delModal = $("#delModal");
        $delModal.modal();
        $("#delConfirmMain").on("click", function () {
            $delModal.modal("hide");
        })
    });


    return {}
});
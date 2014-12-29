/**
 * Created by shijiuwei on 2014/12/27.
 */
define(function (require) {
    require("bootstrap");
    var myslider = require("slider"),
        loginValidator = require("loginValidator"),
        placeholder = require("plugins/placeholder/jquery.placeholder"),
        login= {};

    myslider.slider();//幻灯片
    $('input').placeholder();//ie8 placeholder
    loginValidator.validator({formid:"#login"});//表单验证

    return login;
});
/**
 * Created by shijiuwei on 2014/12/27.
 */
define(function (require) {
    require("plugins/bootstrapValidator/zh_CN.min");
    return {
        validator: function (o) {
            o = {
                formid: o.formid || "#login"
            };
            $(o.formid).bootstrapValidator({
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    username: {
                        validators: {
                            notEmpty: {
                                message: '请输入帐号'
                            }
                        }
                    },
                    password: {
                        validators: {
                            notEmpty: {
                                message: '请输入密码'
                            }
                        }
                    }
                }
            })
                .on('success.form.bv', function(e) {
                    //阻止表达提交
                    e.preventDefault();

                    //get表单实例
                    var $form = $(e.target);

                    //get BootstrapValidator实例
                    var bv = $form.data('bootstrapValidator');

                    // 这里你想干什么都行 ...
                    // 然后用defaultSubmit()方法提交表单
                    bv.defaultSubmit();
                });
        }
    };
});
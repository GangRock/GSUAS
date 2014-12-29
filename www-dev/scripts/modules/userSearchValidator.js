/**
 * Created by shijiuwei on 2014/12/27.
 */
define(function (require) {
    require("plugins/bootstrapValidator/zh_CN.min");
    return {
        validator: function (o) {
            o = {
                formid: o.formid || "#searchUserForm"
            };
            $(o.formid).bootstrapValidator({
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    username: {
                        selector: '.validator-least-one',
                        validators: {
                            callback: {
                                message: '请输入用户名或日期',
                                callback: function(value, validator, $field) {
                                    var isEmpty = true,
                                    // Get the list of fields
                                        $fields = validator.getFieldElements('username');
                                    for (var i = 0; i < $fields.length; i++) {
                                        if ($fields.eq(i).val() !== '') {
                                            isEmpty = false;
                                            break;
                                        }
                                    }
                                    if (!isEmpty) {
                                        // Update the status of callback validator for all fields
                                        validator.updateStatus('username', validator.STATUS_VALID, 'callback');
                                        return true;
                                    }
                                    return false;
                                }
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
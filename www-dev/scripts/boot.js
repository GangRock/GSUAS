requirejs.config({
    baseUrl: 'scripts/modules',
    paths: {
        plugins:'../plugins',
        page:'../page',
        jquery:'../plugins/jquery/jquery.min',
        bootstrap:'../plugins/bootstrap/bootstrap.min'
    },
    shim: {
        "bootstrap": ["jquery"],
        "plugins/bootstrapValidator/bootstrapValidator.min": ["jquery"],
        "plugins/bootstrapValidator/zh_CN.min":["plugins/bootstrapValidator/bootstrapValidator.min"],
        "plugins/bootstrap/bootstrap-datepicker":["bootstrap"],
        "plugins/ztree/jquery.ztree.all-3.5.min": ["jquery"]
    }
});
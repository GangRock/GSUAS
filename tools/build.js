{
    appDir: '../www-dev',
    mainConfigFile: '../www-dev/js/boot.js',
    dir: '../www-built',
    modules: [
        //First set up the common build layer.
        {
            //module names are relative to baseUrl
            name: '../common',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            include: ['jquery',
                      'app/lib',
                      'app/controller/Base',
                      'app/model/Base'
            ]
        },
        {
            name: 'app/main1',
            exclude: ['../common']
        },
        {
            name: 'app/main2',
            exclude: ['../common']
        }

    ]
}

(function () {

    requirejs.config({
        baseUrl: 'js/',//基本的路径,出发点在根目录下
        paths: {//配置路径
            dataService: './modules/dataService',
            alerter: './modules/alerter',
            jquery:'./libs/jquery.min.js'
        }
    })
    requirejs(['alerter'], function (alerter) {
        alerter.showMsg()
    })
})()

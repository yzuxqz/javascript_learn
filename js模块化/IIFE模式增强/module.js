//有独立的作用域
(function (window, $) {
    let msg = 'module'

    function foo() {
        console.log('foo()', msg)
    }

    window.module = foo
    $('body').css('background', 'red')

})(window, jQuery)

//有独立的作用域
(function (window) {
    let msg = 'module'

    function foo() {
        console.log('foo()', msg)
    }
    //给全局的window对象添加属性
    window.module={foo}
})(window)//闭包

function myModule() {
    let msg = 'my msg'

    function doSomething() {
        console.log(msg.toLowerCase())
    }

    function doSomething2() {
        console.log(mag.toUpperCase())
    }

    return {
        doSomething,
        doSomething2
    }
}

//如果是匿名函数的自调用，则暴露在window对象中
(function myModule2() {
    let msg = 'my msg'

    function doSomething() {
        console.log(msg.toLowerCase())
    }

    function doSomething2() {
        console.log(mag.toUpperCase())
    }

    window.myModule2 = {
        doSomething,
        doSomething2
    }
})()

function animate(obj, target, callback) {
    //先清除以前的定时器
    clearInterval(obj.time);
    //给不同的元素指定不同的定时器
    obj.time = setInterval(function () {
        //把步长值,上下取整看正负值
        var x = (target - obj.offsetLeft) / 10;
        if (x >= 0) {
            x = Math.ceil(x);
        } else {
            x = Math.floor(x);
        }
        if (obj.offsetLeft === target) {
            clearInterval(obj.time);
            //回调函数
            // if (callback) {
            //     callback();
            // }
            callback && callback();
        } else {
            obj.style.left = obj.offsetLeft + x + 'px';
        }
    }, 15)
}

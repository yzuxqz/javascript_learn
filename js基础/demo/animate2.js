let timer

function animate(obj, speed, target, style, callback) {
    let currentValue
    if (target < obj['offset' + style]) {
        speed = -speed
    }

    timer = setInterval(function () {
        let oldValue = obj['offset' + style]
        console.log('oldValue\t' + oldValue)
        currentValue = oldValue + speed
        if (speed > 0 && currentValue > target || speed < 0 && currentValue < target) {
            currentValue = target
        }
        obj.style[style.toLowerCase()] = currentValue + 'px'
        if (currentValue === target) {
            clearInterval(timer)
            callback && callback()
        }
    }, 10)

}

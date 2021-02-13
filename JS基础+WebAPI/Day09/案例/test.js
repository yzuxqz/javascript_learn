window.onload = function () {
    var ul = document.querySelector('ul');
    var lis = document.querySelectorAll('ul li');
    var ol = document.querySelector('.circle');
    var tab = document.querySelector('.tab');
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');
    ul.addEventListener('click',function () {alert(1);  })
    //动态生成小圆点
    for (var i = 0; i < lis.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i)
        ol.appendChild(li);

    }
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].addEventListener('click', function (e) {
            var index = this.getAttribute('index');
            animate(ul, -index * 770);
            circle = index;
            num = index;
            clean();
        })
    }



    //克隆第一张图片
    var li_last = lis[0].cloneNode(true);
    ul.appendChild(li_last);

    tab.addEventListener('mouseenter', function () {
        left.style.display = 'block';
        right.style.display = 'block';
        clearInterval(time_auto);

    })
    tab.addEventListener('mouseleave', function () {
        left.style.display = 'none';
        right.style.display = 'none';
        time_auto = setInterval(function () {
            right.click();
        }, 1500);
    })


    ol.children[0].className = 'current';
    //右按钮
    var num = 0;
    var circle = 0;
    var flag = true;
    right.addEventListener('click', function (e) {
        if (flag) {
            flag = false;
            num++;
            if (num === 7) {
                console.log('跳到第二张');
                ul.style.left = 0;
                num = 1;
            }
            animate(ul, -770 * num, function () {
                flag = true;
            });
            circle++;
            if (circle === 6) {
                circle = 0;
            }
            clean();
        }


    })

    //左按钮
    left.addEventListener('click', function (e) {
        if (flag) {
            flag = false;
            num--;
            if (num === -1) {
                ul.style.left = -770 * 6 + 'px';
                num = 5;
            }
            animate(ul, -770 * num, function () {
                flag = true;
            });
            circle--;
            if (circle === -1) {
                circle = 5;
            }
            clean();
        }
    })

    function clean() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = "";
        }
        ol.children[circle].className = 'current';
    }

    var time_auto = setInterval(function () {
        right.click();
    }, 1500);
}
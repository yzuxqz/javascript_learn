window.addEventListener('load', function () {
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');
    var tab = document.querySelector('.tab');
    var ul = document.querySelector('ul');
    var ol = this.document.querySelector('.circle')
    tab.addEventListener('mouseenter', function () {
        left.style.display = 'block';
        right.style.display = 'block';
        clearInterval(timer);
        //清除定时器变量
        timer = null;
    });
    tab.addEventListener('mouseleave', function () {
        left.style.display = 'none';
        right.style.display = 'none';
        timer = setInterval(function () {
            //手动调用点击事件
            right.click();
        }, 2000);
    });

    //1动态生成小圆圈
    for (var i = 0; i < ul.children.length; i++) {
        var li = this.document.createElement('li');
        //给小圆圈设置自定义属性index记录索引
        li.setAttribute('data-index', i);
        ol.appendChild(li);
        //////点击小圆点切换图片模块
        li.addEventListener('click', function () {
            //3排他思想ol里的li变色
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            //4点击ol里的小li移动图片 (图片宽度*索引号)
            var index = this.getAttribute('data-index');
            //9.当我们点击了某个小li就要把这个 li的索引号给num
            num = index;
            //10.当我们点击了某个小li就要把这个 li的索引号给circle
            circle = index;
            animate(ul, -770 * index);
        })
    };
    //2把ol里的第一个小li设置类名为  current
    ol.children[0].className = 'current';

    //6克隆第一张图片放在ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    //5点击右侧按钮图片滚动一张
    var num = 0; //记录点击右侧按钮的次数
    var circle = 0; //记录小圆点播放
    var flag = true;//节流阀
     ////点按钮切换图片模块，且小圆点跟随变化
    right.addEventListener('click', function () {
        //如果走到了最后复制得那张图片 ul 快速复原
        //7.无缝滚动，6把第一个li复制一份 放到 最后一个li 后面
        // 再次点击时再让ul快读得跳到最左侧：left为0
        if (flag) {
            flag = false;
            num++; //num为7时,迅速跳到第一张
            if (num == ul.children.length) {
                ul.style.left = 0;
                //跳到第一张之后，移动ul一张图片距离，到第二张图片
                num = 1;
            }
            animate(ul, -770 * num, function () {
                flag = true;
            });

            //8小圆圈跟随变化
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            ol.children[circle].className = 'current';
        }

    });

    //11左侧按钮
    left.addEventListener('click', function () {
        if (flag) {
            flag = false;
            num--;
            if (num == -1) {
                ul.style.left = -770 * (ul.children.length - 1) + 'px';
                //跳到第一张之后，移动ul一张图片距离，到第二张图片
                num = ul.children.length - 2;
            }
            animate(ul, -770 * num, function () {
                flag = true;
            });

            //8小圆圈跟随变化
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            circle--;
            if (circle == -1) {
                circle = ol.children.length - 1;
            }
            ol.children[circle].className = 'current';
        }
    });

    //12自动播放
    var timer = this.setInterval(function () {
        //手动调用点击事件
        right.click();
    }, 2000)
})

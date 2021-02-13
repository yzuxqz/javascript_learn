var that;
class Tab {
    constructor(id) {
        that = this;
        //获取元素
        this.main = document.querySelector(id);
        this.ul = this.main.querySelector('ul');
        this.add = this.main.querySelector('.tabadd span')
        this.div = this.main.querySelector('.tabscon');
        this.init();
    }
    //获取所有的li和section
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.guanbis = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
    }

    //初始化操作，让相关元素绑定事件
    init() {
        this.updateNode();
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.guanbis[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTba;
            this.sections[i].ondblclick = this.editTba;

        }
        this.add.onclick = this.addTab;

    }
    //1.切换功能
    toggleTab() {
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    //2.添加功能
    addTab() {
        that.clearClass();
        var random = Math.random();
        // var li = document.createElement('li');
        // that.ul.appendChild(li);
        var li = ' <li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section = ' <section class="conactive">测试' + random + '</section>'
        that.ul.insertAdjacentHTML('beforeend', li);
        that.div.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    //3.删除功能
    removeTab(e) {
        e.stopPropagation(); //防止触发li的切换点击事件
        var index = this.parentNode.index;
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        //当我们删除的不是选中状态的li时，原来的选中状态li保持不变
        if (document.querySelector('.liactive')) {
            return;
        }
        //当我们删除了选定状态的li的时候让它前一个li处于选中状态
        index--;
        that.lis[index] && that.lis[index].click();
    }
    //4.修改功能
    editTba() {
        //双击禁止选定文字
        // window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        var input = '<input type="text" value="' + this.innerHTML + '"/>';
        this.innerHTML = input;
        var ipt = this.children[0];
        ipt.select();
        //当我们离开文本框，把文本框的值给span
        ipt.onblur = function () {
            this.parentNode.innerHTML = this.value;
        }
        //按下回车也能把文本框的值给span
        ipt.onkeyup = function (e) {
            if (e.keyCode === 13) {
                this.blur();
            }
        }
    }
}

var tab = new Tab('#tab');
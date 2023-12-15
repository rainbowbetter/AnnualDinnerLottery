$(function() {
    //滑轮图片**********************************************************************************************
    // for (var i = 1; i <= 4; i++) {
    //     $('.cardpool_nav').children('li').eq(i - 1).css('background-image', 'url("sucai/photos/cardpool/cardpool' + i + '.jpg")');
    //     $('.cardpool_nav').children('li').eq(i - 1).attr("index", i - 1);
    // };
    $('.cardpool_nav').children('li').eq(0).css('background-image', 'url("sucai/photos/cardpool/cardpool3.jpg")');
    $('.cardpool_nav').children('li').eq(1).css('background-image', 'url("sucai/photos/cardpool/cardpool2.jpg")');
    $('.cardpool_nav').children('li').eq(2).css('background-image', 'url("sucai/photos/cardpool/cardpool1.jpg")');
    $('.cardpool_nav').children('li').eq(3).css('background-image', 'url("sucai/photos/cardpool/cardpool4.jpg")');
    $('.cardpool_nav li').on('click', function() {
        $('.cardpool').css('background-image', $(this).css("background-image"));
    });
    $('.cardpool').css('background-image','url("sucai/photos/cardpool/cardpool3.jpg")');
    //各个图片、文字大小**********************************************************************************************

    //数据板块**********************************************************************************************
    $('.yuanshi').text(9999); //原石数量页面同步


    //小窗取消键
    $('.changefalse').on('click', function() {
        $('.changeyy').hide();
    });
    $('.changetrue').on('click', function() {
        $('.changeyy').hide();
        var memberList = JSON.parse(localStorage.getItem('memberList'));
        var a = document.createElement('a');
        a.download = "一等奖.json";
        a.style.display="none";
        var list = memberList.filter(v=>v.type===1);
        var dat = JSON.stringify(list)
        var blob = new Blob([dat],{type:"Application/json"});
		a.href = URL.createObjectURL(blob);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        a = document.createElement('a');
        a.download = "二等奖.json";
        a.style.display="none";
        list = memberList.filter(v=>v.type===2);
        dat = JSON.stringify(list)
        blob = new Blob([dat],{type:"Application/json"});
		a.href = URL.createObjectURL(blob);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        a = document.createElement('a');
        a.download = "三等奖.json";
        a.style.display="none";
        list = memberList.filter(v=>v.type===3);
        dat = JSON.stringify(list)
        blob = new Blob([dat],{type:"Application/json"});
		a.href = URL.createObjectURL(blob);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        a = document.createElement('a');
        a.download = "特等奖.json";
        a.style.display="none";
        list = memberList.filter(v=>v.type===0);
        dat = JSON.stringify(list)
        blob = new Blob([dat],{type:"Application/json"});
		a.href = URL.createObjectURL(blob);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });

    var tcdh = function(who) {
        $('#dhvideo').prop('class', who);
        $('#dhvideo').prop('src', "sucai/video/" + who + ".mp4");
        $('.' + who).show();
        $('.pass').show();
        $('.' + who)[0].play(0);
        $('.' + who).on('ended pause', function() {
            $('.' + who).hide();
            $('.pass').hide();
            $('.result_bg').show();
        });
    };

    var geshu = 0; //统计是几抽的
    var szbtn = 0; //记录选择了几抽的
    var cardjl = []; //记录数组
    var generatedList = []; //生成的list

    var chu_j = function() {
        var rr = Math.floor(Math.random()*44)
        var member = szbtn == 1 ? generatedList[0] : generatedList[10-geshu]
        $('.result_name').hide();
        $('.result_bg img').prop('src', "./sucai/photos/qiyuan/" + rr + ".png");
        var settime = function() {
            setTimeout(() => {
                let membername=member.name+'['+member.cname+']';
                let stars='⭐⭐';
                if(type===3){stars='⭐⭐'}
                if(type===2){stars='⭐⭐⭐'}
                if(type===1){stars='⭐⭐⭐⭐'}
                if(type===0){stars='⭐⭐⭐⭐⭐'}
                $('.result_name').html("<p>" + membername + "<p/> <p style='font-size: 30px'>"+member.prize+stars+"</p>");
                $('.result_bg img').prop('src', "./sucai/photos/qiyuan/" + rr + ".png");
                $('.result_name').show();
            }, 150);
        };
        settime();
    };
    //点击了单抽的**********************************************************************************************
    $('.btn1').on('click', function() {
        var lastnum=getLastPinkBall();
        if(lastnum<1){alert("你的纠缠之源数量不够啦！");return;}
        setLastPinkBall(lastnum-1);
        // 抽卡后开始检测循环
        //if (getCurrency('pinkball') < 300 && getCurrency('pinkball') + 1 >= 300) timer1 = setInterval(pinkballup, oneminute), console.log("我开启了单抽里的计数器255行");
        //产生随机数
        var sjs = parseInt(Math.random() * 10000);
        $('.rand').text(sjs);
        //开始判断
        geshu = 1;
        szbtn = 1;
        generatedList = generateAward(1);
        // 出金开场视频
        tcdh('dccj');
        //初始修改出货样式src
        chu_j();
    });

    // 点击了十发的**********************************************************************************************
    $('.btn10').on('click', function() {
        var flag = true;
        //判断粉球数量是否够
        var lastnum=getLastPinkBall();
        if(lastnum<10){alert("你的纠缠之源数量不够啦！");return;}
        setLastPinkBall(lastnum-10);
        generatedList = generateAward(10);
        // 抽卡后开始检测循环
        //裴孝明模拟原神抽卡网页，不可抄袭，仅可用于学习！邮箱：2017649157@qq.com
        //if (getCurrency('pinkball') < 300 && getCurrency('pinkball') + 10 >= 300) timer1 = setInterval(pinkballup, oneminute), console.log("开启了十发里的计数器305行");
        geshu = 10;
        szbtn = 10;
        tcdh('slcj');
        chu_j();
    });

    //点击跳过的逻辑
    $('.pass').on('click', function() {
        $('#dhvideo')[0].pause();
    });
    //点击出货会下一个
    $('.result_bg').on('click', function() {
        geshu--;
        $('.result_name').hide();
        if (!geshu) $('.result_bg').hide();
        else chu_j();
    });
    $('.btn2').on('click', function() {
        createTables()
        $('.changeyy').show();
    });
    //自适应屏幕**********************************************************************************************
    var cspk = window.innerWidth;
    var cspg = window.innerHeight;
    var k = cspk / cspg;
    console.log("宽：" + cspk + ",高：" + cspg);
    console.log("以上是初始的宽高******************");
    //初始化屏幕数值参数函数
    var tzdx = function() {
        $('.cardpool_nav').css('border-radius', $('.cardpool_nav').innerWidth() * 0.15);
        $('.cardpool_nav li').css('border-radius', $('.cardpool_nav li').innerHeight() * 0.2);
        $('.cardpool_nav').css('box-shadow', parseInt($('.cardpool_nav').css('border-radius')) / 13.84 + "px " + parseInt($('.cardpool_nav').css('border-radius')) / 13.84 + "px " + parseInt($('.cardpool_nav').css('border-radius')) / 1.384 + "px rgba(0,0,0,0.5)");
        $('.cardpool').css('border-radius', $('.cardpool').innerHeight() * 0.05);
        $('.yuanshi_kz, .pinkball_kz').css('border-radius', $('.yuanshi_kz').innerHeight() * 0.5);
        $('.yuanshi_kz img, .pinkball_kz img').css('width', $('.yuanshi_kz').innerHeight() * 0.85);
        $('.yuanshi, .pinkball').css('font-size', $('.yuanshi_kz').innerHeight() * 0.5);
        $('.cardpool h1').css('font-size', $('.cardpool').innerHeight() * 0.055);
        //弹窗部分的（抽卡动画的实在不想做了，呜呜呜）
        $('.changeyy').css('width', $('.kuangjia').innerWidth());
        $('.changeyy').css('height', $('.kuangjia').innerHeight());
        $('.changeblock').css('border-radius', $('.changeblock').innerHeight() * 0.1);
        $('.changeblock h2').css('font-size', $('.changeblock').innerHeight() * 0.1);
        $('.changeffive, .changereduce, .changeplus, .changemax').css('font-size', $('.changeblock').innerHeight() * 0.06);
        $('.changenum').css('font-size', $('.changeblock').innerHeight() * 0.11);
        $('.changetotal').css('font-size', $('.changeblock').innerHeight() * 0.065);
        $('.changetrue, .changefalse').css('font-size', $('.changeblock').innerHeight() * 0.08);
        $('.changeffive, .changereduce, .changeplus, .changemax, .changenum').css('border-radius', $('.changenum').innerHeight() * 0.2);
        $('.changetrue, .changefalse').css('border-radius', $('.changetrue').innerHeight() * 0.2);
        $('.changetrue, .changefalse').css('box-shadow', parseInt($('.changetrue').css('font-size')) / 9 + "px " + parseInt($('.changetrue').css('font-size')) / 9 + "px " + parseInt($('.changetrue').css('font-size')) / 3.6 + "px rgba(0,0,0,0.3)");
        $('.changeffive, .changereduce, .changeplus, .changemax, .changenum').css('box-shadow', parseInt($('.changemax').css('font-size')) / 9 + "px " + parseInt($('.changemax').css('font-size')) / 9 + "px " + parseInt($('.changemax').css('font-size')) / 3.6 + "px rgba(0,0,0,0.3)");
    };
    //初始化屏幕数值参数
    tzdx();
    window.addEventListener('resize', function() {
        if (window.innerWidth > cspk) {
            // 页面在缩小
            $('.kuangjia').css('width', window.innerWidth);
            $('.dccj').css('width', window.innerHeight * k);
            $('.dccz').css('width', window.innerHeight * k);
            $('.dccl').css('width', window.innerHeight * k);
            $('.slcj').css('width', window.innerHeight * k);
            $('.slcz').css('width', window.innerHeight * k);
        } else {
            //页面在放大
            $('.kuangjia').css('width', cspk);
            $('.dccj').css('width', cspk);
            $('.dccz').css('width', cspk);
            $('.dccl').css('width', cspk);
            $('.slcj').css('width', cspk);
            $('.slcz').css('width', cspk);
        }
        if (window.innerHeight < cspg) {
            //页面在放大，我们要保持盒子总宽为初始宽度
            $('.kuangjia').css('height', cspg);
        } else {
            // 页面缩小了，要保持盒子大小为屏幕大小
            $('.kuangjia').css('height', window.innerHeight);
            $('.kuangjia').css('width', window.innerHeight * k);
        }
        //也面调整好了，就需要再调整其他的长宽
        tzdx();
    });
    $('.changeyy').hide();
    setPinkBall();
});
//裴孝明模拟原神抽卡网页，不可抄袭，仅可用于学习！邮箱：2017649157@qq.com

function createTables(){
    createTable(3,'tb3')
    createTable(2,'tb2')
    createTable(1,'tb1')
    createTable(0,'tb0')
}

function createTable(type,id){
    var memberList = JSON.parse(localStorage.getItem('memberList'));
    //这里是把上面创建的内容放入表格
    var tbody = document.getElementById(id)
    while (tbody.hasChildNodes()) {
        tbody.removeChild(tbody.firstChild);
    }
    var list =memberList.filter(v=>v.type===type);
    list.sort((a,b)=>a.id-b.id)
    //创建行tr
    for (var i = 0; i < list.length; i++) {
        var data=list[i]
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        //创建单元格,与数据有关
        var td0 = document.createElement('td');
        td0.innerHTML = i+1;
        tr.appendChild(td0);
        var td = document.createElement('td');
        td.innerHTML = data['name'];
        tr.appendChild(td);
        var td1 = document.createElement('td');
        td1.innerHTML = data['cname'];
        tr.appendChild(td1);

        var td2 = document.createElement('td');
        td2.innerHTML = data['prize'];
        tr.appendChild(td2);
    }
}

//初始是三等奖
var type=3;



//初始化数据
function initData(){
    let isconfirm = confirm('是否初始化数据')
    if(isconfirm == true){
        localStorage.setItem('memberList', JSON.stringify(initmemberList))
        localStorage.setItem('type1num', JSON.stringify(4))
        localStorage.setItem('type2num', JSON.stringify(10))
        localStorage.setItem('type3num', JSON.stringify(20))
        localStorage.setItem('type0num', JSON.stringify(1))
        setPinkBall()
        initPrize()
        alert("已初始化");
    }
}
if(!localStorage.getItem('memberList')){initData()}


function initPrize(){
    let prizes=[];
    addPrizeToList(prizes,'1000京东卡',0,1)
    addPrizeToList(prizes,'500京东卡',1,4)
    addPrizeToList(prizes,'荣耀手环7',2,4)
    addPrizeToList(prizes,'九阳空气炸锅',2,2)
    addPrizeToList(prizes,'小米AI音响',2,4)
    addPrizeToList(prizes,'云麦智能体脂秤',3,4)
    addPrizeToList(prizes,'罗技K270无线键盘',3,6)
    addPrizeToList(prizes,'小米AIR2 SE蓝牙耳机',3,6)
    addPrizeToList(prizes,'罗马仕充电宝',3,4)
    for(let i=0;i<prizes.length;i++){
        prizes[i]['id']=i;
    }
    localStorage.setItem('prizes', JSON.stringify(prizes))
}

function getPrize(num){
    let prizes = JSON.parse(localStorage.getItem('prizes'));
    let list=prizes.filter(v=>v.selected===undefined && v.type===type);
    shuffleArray(list);
    list = list.sort(()=>Math.random()-0.5).slice(0,num);
    for(var i=0;i<list.length;i++){
        for(var j=0;j<prizes.length;j++){
            if(prizes[j].id === list[i].id){
                prizes[j]['selected']=1
                list[i]['selected']=1
            }
        }
    }
    localStorage.setItem('prizes', JSON.stringify(prizes))
    return list;
}

function shuffleArray(array){
    for(let i=array.length-1;i>0;i--){
        let j= Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]]
    }
}

function addPrizeToList(prizes,name,type,nums){
    for(let i = 0;i<nums;i++){
        prizes.push({'name':name,'type':type})
    }
}

//切换类型
function setType(val){
    type=val;
    setPinkBall()
}

function setPinkBall(){
    $('.pinkball').text(getLastPinkBall());
}

function getLastPinkBall(){
    var lastnum=0;
    if(type==1){lastnum=localStorage.getItem('type1num')}
    if(type==2){lastnum=localStorage.getItem('type2num')}
    if(type==3){lastnum=localStorage.getItem('type3num')}
    if(type==0){lastnum=localStorage.getItem('type0num')}
    return lastnum;
}

function setLastPinkBall(num){
    if(type==1){localStorage.setItem('type1num',num)}
    if(type==2){localStorage.setItem('type2num',num)}
    if(type==3){localStorage.setItem('type3num',num)}
    if(type==0){localStorage.setItem('type0num',num)}
    setPinkBall();
}

function generateAward(num){
    var memberList = JSON.parse(localStorage.getItem('memberList'));
    var list=memberList.filter(v=>v.type===undefined);
    shuffleArray(list);
    list = list.sort(()=>Math.random()-0.5).slice(0,num);
    let prizes = getPrize(num)
    for(var i=0;i<list.length;i++){
        for(var j=0;j<memberList.length;j++){
            if(memberList[j].id === list[i].id){
                memberList[j]['type']=type
                list[i]['type']=type
                memberList[j]['prize']=prizes[i].name
                list[i]['prize']=prizes[i].name
            }
        }
    }
    localStorage.setItem('memberList', JSON.stringify(memberList))
    return list;
}
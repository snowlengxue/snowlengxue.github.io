/**
 * Created by vicky on 2016/11/9.
 */


$('.pic').click(function () {

    /**
     * @获取当前id值
     */
                            console.log("the ture id is:");console.log(this.id);
    ID = this.id;           console.log("the ID goted is");console.log(ID);

    /**
     * @提取被点击pic的尾标、前缀
     */

    tail = ID.slice(-2);      console.log("尾标是："+tail);
    dir = tail[0];            console.log("dir:"+tail[0]);
    num = tail[1];            console.log("num:"+tail[1]);
    pre = ID.slice(0,-2);     console.log("pre:"+pre);

    /**
     * @判断是L 还是 R
     */
    opp = num;                console.log("opp:"+opp);
    if(dir=="L") {
        opp = "R" + opp ;     console.log("opp:"+opp);
    }else {
        opp = "L" + opp;      console.log("opp:"+opp);
    };

    /**
     * @确定函数中各个元素的id值
     */
    var contentCap = $('#contentCap'+tail+' ');               console.log('#contentCap'+tail+' ');
    var source = $('#contentImg'+tail+'').attr("src");        console.log('#contentImg'+tail+' ');
    var des = $('#contentDes'+tail+'');                       console.log('#contentDes'+tail+'');

    /**
     * @开始执行动画
     */
    //刷新mban-caption文字
    var text = contentCap.text();
    var mbanCap = $('#mbanCap');
    mbanCap.text(text);
    //刷新mban-img图片
    $('#mbanImg').attr("src",source);
    //刷新图片解释文字
    var destext = des.text();
    var mbandes = $('#mbanDes');
    mbandes.text(destext);
    //以上是来把相应的内容传送给模板中

    /**
     * @把模板偏移到图片下方,把2个空div分别插入到对应图片下方，高度等于300px;
     */
    if($('.spacer').length > 0) {
        $('.spacer').remove();
        $('#mban').removeAttr('style');
    }else {};                                                     console.log('#'+ID+'');
    $('#'+ID+'').after("<div id='spacer1' class='spacer' style='width: 100%;height: 300px; display: none;'></div>");
    $('#'+pre+''+opp+'').after("<div id='spacer2' class='spacer' style='width: 100%;height: 300px; display: none;'></div>");
    $('.spacer').slideDown(1000);                                 console.log('#'+pre+''+opp+'');


    x = $('#spacer1').offset();                                   console.log('spacer1:'); console.log($('#spacer1').offset());
    xOpp = $('#spacer2').offset();                                console.log('spacer2:'); console.log($('#spacer2').offset());
                                                                  console.log("x.top");console.log(x.top);
    $('#mban').slideDown(1000);
    $('#mban').offset({top: x.top,left: this.left });             console.log('#mban:'); console.log($('#mban').offset());

    /**
     * @使参差的高度统一
     */
    parent = $("#spacer2").parent(".picContainer");               console.log("parent:");console.log($("#spacer2").parent(".picContainer"));
    y = $('#spacer2').offset();console.log("y:");                 console.log( $('#spacer2').offset());
    z = parent.offset();                                          console.log("z:");console.log(parent.offset());
    h2 = y.top - x.top;                                           console.log("h2:"+h2);
    z.top = z.top - h2;                                           console.log("z.top:"+z.top);
    parent.offset(z);console.log("parent.offset:");               console.log(parent.offset());

    //下面使description的内容始终在窗口可视区域的中间位置
    winH = $(window).height();
    h = winH * .2;
    $(document.body).animate({scrollTop: x.top - h }, 1000);

});

$('#mbanClose').click(function () {
    x = $('#'+ID+'').offset();
    $(document.body).animate({scrollTop: x.top}, 1000);
    $('#mban').slideUp(1000);
    $('.spacer').slideUp(1000);
    setTimeout("$('.picContainer').removeAttr('style')",1000);

});



/**
 * Created by vicky on 2016/11/10.
 */

var url_image_list = [];
image_list.forEach((item,index,image_list)=>{
    url_image_list.push(' url(' + item +') ')
})

//以下代码是随机切换图片的代码
var times = randomTimes(-1);
var image_ready = 1;
const image_fade_time = 1500;
const image_switch_time = 20000;
function randomTimes(_times){
    var _times_temp = Math.floor(Math.random()*(image_list.length)); 
    if(times!=_times_temp)
        return _times_temp;
    else{
        return randomTimes(_times_temp);
    }
        
}
setInterval(function () {
    if(image_ready){
        times = randomTimes(times)
        changeBg(times);
        console.log(times);
    }
}, image_switch_time);

function changeBg(times)
{
    image_ready=0;
    $(viewBg).fadeOut(image_fade_time,function(){
        $(viewBg).css("background-image", url_image_list[times]);
        $(viewBg).fadeIn(image_fade_time,function(){image_ready=1})
    });
}

const bannerContainer = $("#banner");
const viewBg = $("#web_bg");
const bannerMask = $("#banner .mask");
const bg = $(bannerContainer).css("background-image");
$(viewBg).css("background-image", url_image_list[times]);//'url()'
$(bannerContainer).css("background-image", "url()");
const color = $(bannerMask).css("background-color");
$(bannerMask).css("background-color", `rgba(0,0,0,0)`);
$(viewBg).css("background-color", color);

var scroll_switch = -1;
$(document).keydown(function(e){
    var key =  e.which;
    if(key == 115 || key == 122){
        if(scroll_switch == 1)
            $("body").css("overflow-y","auto");
        else
            $("body").css("overflow-y","hidden");
        scroll_switch = -1*scroll_switch;
    }
})
window.onload=function()
{
    document.onmousedown=function(event) //鼠标按下事件
    {
        var posy = event.pageY;
        var posx = event.pageX;
        // var l2d_ptop = live2d.position().top;
        // var l2d_pleft = live2d.position().left;
        var l2d_otop = live2d.offset().top;
        var l2d_oleft = live2d.offset().left ;
        var l2d_y =l2d_otop  ;
        var l2d_x =l2d_oleft ;
        if( posy > l2d_y && posy < l2d_y + live2d.height() )
            if( posx > l2d_x && posx < l2d_x + live2d.width() ){
                if(scroll_switch == 1)
                    $("body").css("overflow-y","auto");
                else
                    $("body").css("overflow-y","hidden");
                scroll_switch = -1*scroll_switch;
            }
    }
    // document.onmouseup=function(event)   //鼠标弹起事件
    // {
        
    // }
    // document.onmousemove=function(event)  //鼠标移动事件
    // {

    // }
}


var getl2d_tmr = setInterval(function () {
    live2d = $('div#live2d-widget');
    if(live2d.width()==null){
        console.log("no");
        live2d = $('div#live2d-widget');
    }
    else{
        clearTimeout(getl2d_tmr);
    }
}, 100);

// var live2d = $('div#live2d-widget');
// $("body").css("overflow-y","hidden");
//以下代码是顺序切换图片的代码

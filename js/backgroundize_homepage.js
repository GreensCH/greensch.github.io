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


$('live2d-widget-container').click(function(){
    console.log("clickmiku!");
});

// !(function() {
//     var scroll_switch = -1;
//     const body = $("body");
//     const live2d = document.getElementById("live2d-widget");
    // live2d.click(function () {
    //     console.log("click");
    //     if(scroll_switch == 1)
    //         body.css("overflow-y","auto");
    //     else
    //         body.css("overflow-y","hidden");
    //     scroll_switch = -1*scroll_switch;
    // });
//   })();



// var scroll_switch = -1;
// var body = $("body");
// var live2d = document.getElementById("live2d-widget");
// live2d.onclick = function(){
//     alert("click");
//     if(scroll_switch == 1)
//         body.css("overflow-y","auto");
//     else
//         body.css("overflow-y","hidden");
//     scroll_switch = -1*scroll_switch;
// };



$(function() {
    var scroll_switch = -1;
    const body = $("body");
    const live2d = $('div#live2d-widget');
    alert(live2d);
    live2d.click(function () {
        alert(this.className);
        if(scroll_switch == 1)
            body.css("overflow-y","auto");
        else
            body.css("overflow-y","hidden");
        scroll_switch = -1*scroll_switch;
    });
})();

// var live2d = $('div#live2d-widget');
// $("body").css("overflow-y","hidden");
//以下代码是顺序切换图片的代码
// setInterval(function () {
//     if(image_ready){
//         if(times
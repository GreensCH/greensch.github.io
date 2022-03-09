var image_list = [
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/背景页.jpg",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/96733090_p2.jpg",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/96733090_p3.jpg",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/96733090_p4.jpg",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/96247202_p0.jpg",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/96717167_p0.jpg"
];
var url_image_list = [];
image_list.forEach((item,index,image_list)=>{
    url_image_list.push(' url(' + item +') ')
})

var times = 1;
setInterval(function () {
    if(times<image_list.length){
        changeBg(times)
        times++;
    }
    else{
        changeBg(times);
        times=0;
    }
}, 10000);

function changeBg(times)
{
    $(viewBg).css("background-image", url_image_list[times]);
    console.log(times);
}

const bannerContainer = $("#banner");
const viewBg = $("#web_bg");
const bannerMask = $("#banner .mask");
const bg = $(bannerContainer).css("background-image");
$(viewBg).css("background-image", url_image_list[0]);//'url()'
$(bannerContainer).css("background-image", "url()");
const color = $(bannerMask).css("background-color");
$(bannerMask).css("background-color", `rgba(0,0,0,0)`);
$(viewBg).css("background-color", color);


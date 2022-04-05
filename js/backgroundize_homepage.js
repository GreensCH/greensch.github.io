var image_list = [
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/背景页.jpg",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/20220310112417.png",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/20220310112708.png",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/20220310112826.png",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/20220310112900.png",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/20220310113317.png",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/20220312211727.png",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/20220312211609.png",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/20220312211522.png",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/20220312211357.png",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/20220312211342.png",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/20220312211206.png",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/63883229_p0.jpg",
    "https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/94525092_p0.jpg",
    //"https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/20220310112049.png",
    //"https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/20220310112213.png",
    //"https://markdownpic-1301418409.cos.ap-nanjing.myqcloud.com/img/markdown_1/20220310112332.png",
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
//以下代码是顺序切换图片的代码
// setInterval(function () {
//     if(image_ready){
//         if(times
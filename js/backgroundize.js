if("undefined" == typeof bannerContainer){ 
    const bannerContainer = $("#banner");
    const viewBg = $("#web_bg");
    const bannerMask = $("#banner .mask");
    const bg = $(bannerContainer).css("background-image");
    $(viewBg).css("background-image", bg);//'url()'
    $(bannerContainer).css("background-image", "url()");
    const color = $(bannerMask).css("background-color");
    $(bannerMask).css("background-color", `rgba(0,0,0,0)`);
    $(viewBg).css("background-color", color);
  }


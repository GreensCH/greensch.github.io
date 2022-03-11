//歌曲列表，必须传入下列各参数，其中 url 与 cover 在本地需存于 source 目录，更多参数见文档：https://aplayer.js.org/#/zh-Hans/?id=%E5%8F%82%E6%95%B0

!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
      oldLoadAp && oldLoadAp();
  
      new APlayer({
        container: document.getElementById('aplayer'),
        fixed: false,
        autoplay: false,
        loop: 'all',
        order: 'random',
        theme: '#b7daff',
        preload: 'none',
        audio: [
            { name: 'The Sound of a Lost Generation', artist: 'Blitz Kids', url: '/music/Blitz Kids - The Sound of a Lost Generation.mp3', cover: '/music/The Sound of a Lost Generation.jpg' }
            ,{ name: 'シャナ', artist: 'Guiano,IA', url: '/music/Guiano,IA - シャナ.mp3', cover: '/music/シャナ.jpg' }
            ,{ name: 'さユり - birthday song-「め」弾き語りver', artist: 'さユり', url: '/music/さユり - birthday song-「め」弾き語りver.-.mp3' }    
        ]
      });
    }
  })();
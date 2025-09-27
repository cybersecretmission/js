let btn = document.querySelector('.btn');
let body = document.querySelector('.lightbox');
let audio = document.querySelector('#audio');
  btn.onclick = function(){
    body.classList.toggle('on');
    audio.play();
  }

//Video Play on Section Focus - First 3 sections
const sections = document.querySelectorAll('.focusSection');
const videos = document.querySelectorAll('.textWVideo video');
let focusSection;
window.addEventListener('scroll', function(){
    const scrollCenter = window.innerHeight/2+scrollY;
    let a = 0;
    for(let i=0;i<sections.length;i++){
        let n = a++;
        let scrollFocus = scrollCenter >= sections[n].offsetTop && scrollCenter < (sections[n].offsetTop + sections[n].clientHeight-2)
        if(focusSection != n && scrollFocus == true){
            focusSection = n;
            sections[n].classList.add('up');
            if(n<videos.length){videos[n].play();}
        };
        if (focusSection != n && sections[n].classList.contains('up')){
            sections[n].classList.remove('up');
            if(n<videos.length){videos[n].pause();}
        }
    };
});

//Video Play on hover - Product section
const isHover = e => e.parentElement.querySelector(':hover') === e;
let hoverPorductVideo;
const productVideoDiv = document.querySelectorAll('.videoWCaptionDiv');
const productVideos = document.querySelectorAll('.videoWCaptionDiv video');
const blackScreens = document.querySelectorAll('.blackScreenVideo');
document.addEventListener('mousemove', function checkHover() {
  let a = 0;
  for(let i=0;i<productVideoDiv.length;i++){
        n = a++;
        if(isHover(productVideoDiv[n])){
            hoverPorductVideo = n;
            productVideos[n].play();
            blackScreens[n].classList.add('hide');
        };
        if(isHover(productVideoDiv[n]) == false){
            productVideos[n].pause();
            blackScreens[n].classList.remove('hide');
        }
    }
});
//Pause all the videos if mouse is out
const body = document.querySelector('body');
const allVideos = document.querySelectorAll('video');
body.addEventListener('mouseleave', e => {
    let a = 0;
    for(let i=0;i<allVideos.length;i++){
        n = a++;
        allVideos[n].pause();
    }
})
//Sound Button
const soundButtons = document.querySelectorAll('.soundButton');
for(soundButton of soundButtons){
    soundButton.addEventListener('click', function(){
        allVideos.forEach(e => e.muted = false);
        soundButtons.forEach(e => e.classList.add('hide'));
    });
}

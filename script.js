const sections = document.querySelectorAll('.focusSection');
const videos = document.querySelectorAll('.textWVideo video');
const productVideos = document.querySelectorAll('.videoWCaptionDiv video');
const productVideoDiv = document.querySelectorAll('.videoWCaptionDiv');
let focusSection;
let hoverPorductVideo;
const isHover = e => e.parentElement.querySelector(':hover') === e;

document.addEventListener('mousemove', function checkHover() {
  let a = 0;
  for(let i=0;i<productVideoDiv.length;i++){
        n = a++;
        if(isHover(productVideoDiv[n])){
            hoverPorductVideo = n;
            productVideos[n].play();
        };
        if(isHover(productVideoDiv[n]) == false){
            productVideos[n].pause();
        }
    }
});

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

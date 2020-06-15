const sections = document.querySelectorAll('.focusSection');
const videos = document.querySelectorAll('.textWVideo video');
const productVideos = document.querySelectorAll('.videoWCaptionDiv video');
let focusSection;
function videoReady() {
    let b = 0;
    for(let i=0;i<videos.length;i++){
    let n = b++;
    //console.log(videos[n].readyState==4)
    }
};

const isHover = e => e.parentElement.querySelector(':hover') === e;

document.addEventListener('mousemove', function checkHover() {
  const hovered = isHover(productVideos[0]);
  if (hovered !== checkHover.hovered) {
    checkHover.hovered = hovered;
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

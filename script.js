const sections = document.querySelectorAll('.focusSection');
const videos = document.querySelectorAll('.textWVideo video');
let focusSection;
function videoReady() {
    let b = 0;
    for(let i=0;i<videos.length;i++){
    let n = b++;
    //console.log(videos[n].readyState==4)
    }
}

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

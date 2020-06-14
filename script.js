const sections = document.querySelectorAll(".focusSection");
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
        };
        if (focusSection != n && sections[n].classList.contains('up')){
            sections[n].classList.remove('up');
        }
    };


});

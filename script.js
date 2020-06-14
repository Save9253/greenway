const sections = document.querySelectorAll("section");
let focusSection;

window.addEventListener('scroll', function(){
    const scrollCenter = window.innerHeight/2+scrollY;
    let a = 0;
    for(let i=0;i<sections.length;i++){
        let n = a++;
        if(scrollCenter >= sections[n].offsetTop && scrollCenter < (sections[n].offsetTop + sections[n].clientHeight - 6)){
            return focusSection = n;
        }
        console.log(focusSection);
    };
});

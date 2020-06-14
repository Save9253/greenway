const sections = document.querySelectorAll("section");

/*for (section of sections){
    section.top = section.offsetTop;
    section.bottom = section.offsetTop + section.clientHeight - 6;
}

function test (){
    for(section of sections){
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    let f = 0;
    console.log(sections[b++].offsetTop);
    console.log(sections[d++].clientHeight);
    //console.log(sections[e++].top);
    //console.log(sections[f++].bottom);
}
}
test();
*/
window.addEventListener('scroll', function(){
    const scrollCenter = window.innerHeight/2+scrollY;
    let a = 0;
    console.log("start");
    for(let i=0;i<sections.length;i++){
        let n = a++;
        console.log(sections[n].offsetTop + " - Top" + n);
        console.log(scrollCenter + " - Scroll Center")
        console.log((sections[n].offsetTop + sections[n].clientHeight - 6) + " - Bottom" + n);
        //console.log((scrollCenter >= sections[n++].top) + " n" + nn++);
        //console.log((scrollCenter < sections[nnn++].bottom) + " n" + nnnn++);
        //console.log(scrollCenter <= sections[n++].top)

        //console.log(scrollCenter >= sections[n++].top && scrollCenter < sections[nn++].bottom)
       // if(scrollCenter >= sections[n++].top && scrollCenter < sections[nn++].bottom){
       //     console.log(nnn++);
       // }
    };
});

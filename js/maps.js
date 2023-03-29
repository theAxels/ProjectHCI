let mapLine = document.querySelectorAll(".mapLine")

// console.log(window.innerHeight)

window.addEventListener("scroll", ()=>{
    let i;
    let y = window.scrollY
    // console.log(Math.round(y/window.innerHeight))
    for(i = 0; i < mapLine.length; i++){
        // mapLine[i].classList.remove("active")
        mapLine[i].style.display = "none";
        mapLine[i].querySelector("#line").style.display = "none"
        mapLine[i].querySelector("#list").classList.remove("active")
    }
    // mapLine[Math.round(y/document.documentElement.clientHeight)].classList.add("active")
    let n = Math.round(y/document.documentElement.clientHeight)
    if(n == 1){
        mapLine[n-1].style.display = "none"
    } 
    if(n > 0 && n < mapLine.length){
        mapLine[n].style.display = "flex";
        mapLine[n].querySelector("#line").style.display = "flex"
        mapLine[n].querySelector("#list").classList.add("active")
    }
    // mapLine[mapLine.length].style.display = "none"
})


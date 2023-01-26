const boton = document.getElementById("boton");
const body = document.getElementById("body");
const video = document.getElementById("body-video");

body.className="BodyNone";
window.addEventListener("load",()=>{
    boton.addEventListener("click",()=>{
        video.className="BodyNone";
        body.className="BodyMostrar";
    })
})

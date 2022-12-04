const pagWeb = document.getElementById("body");
const video = document.getElementById("CerrarVideo");
const divVideo = document.getElementById("video");

eventos();

function eventos() {
    video.addEventListener("click",cerraVideo,false)
}

function cerraVideo(e) {
    divVideo.className="videoDispl";
    mostrarWeb();
}

function mostrarWeb(e) {
    pagWeb.className="container";
    video.removeEventListener("click",cerraVideo,false);
}
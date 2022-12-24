// get the track into javascript, this is currently broken for some reason, seem like a scoping issue
const track = document.getElementById("image-track");

function myFunction() {
    document.getElementById("demo").innerHTML = "SParagraph changed.";
    document.getElementById("left").style.visibility="hidden";
    document.getElementById("image-track").style.visibility="hidden";
}


window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
    
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;
    
    const percentage = (mouseDelta/maxDelta) * -100;

    track.style.transform = `translate(${percentage}%,0%)`;
}

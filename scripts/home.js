const track = document.getElementById("image-track");

function myFunction() {
    document.getElementById("demo").innerHTML = "Vanilla Javascript";
    const element = document.getElementById("tech-button");
    element.remove();
}


window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
    
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;   
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;
    const mouseChange = (mouseDelta/maxDelta) * 100;

    // change and bounds check
    let currentChange = mouseChange + parseFloat(track.dataset.prevPercentage);
    currentChange = Math.min(Math.max(currentChange,-50),0);

    // store this incase we unclick
    track.dataset.percentage = currentChange;
    // implement this change on the slider 
    track.style.transform = `translate(${currentChange}%,0%)`;
}

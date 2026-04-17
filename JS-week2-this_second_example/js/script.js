function upDate(previewPic){
    console.log("Hover triggered!");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    document.getElementById("message").innerHTML = previewPic.alt;

    document.getElementById("message").style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function undo(){
    document.getElementById("message").innerHTML =
        "Hover over an image to display the alt text.";

    document.getElementById("message").style.backgroundImage =
        "url('')";
}
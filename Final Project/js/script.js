function upDate(previewPic){
    console.log("Hover/Focus triggered");

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

function addTabFocus(){
    console.log("Page loaded");

    let images = document.querySelectorAll(".preview");

    for(let i = 0; i < images.length; i++){
        images[i].setAttribute("tabindex", "0");
    }
}


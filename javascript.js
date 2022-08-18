function dropdownFunc(elementNum) {
    var arrow = document.getElementById("arrow" + elementNum);
    var dropdown = document.getElementById("dropdown" + elementNum);
    if (arrow.src.slice(-10) == "narrow.png") {
        arrow.src = "images/uparrow.png";
        dropdown.style.display = "block";
    } else {
        arrow.src = "images/downarrow.png";
        dropdown.style.display = "none";
    };
};
function createBackground(root) {
    document.getElementById("fullDiv").style.display = "block";
    var fullImg = document.getElementById("fullImg")
    fullImg.src = root;
    document.getElementById("bodyID").style.overflow = "hidden";
    fullImg.style.width = "";
    fullImg.style.height = "";
    var viewW = window.innerWidth;
    var viewH = window.innerHeight;
    var imgW = fullImg.clientWidth;
    var imgH = fullImg.clientHeight;
    var viewAspect = viewW / viewH;
    var imgAspect = imgW / imgH;
    if (viewAspect < imgAspect) {
        alert("Set to height");
        fullImg.style.height = viewH + "px";
        fullImg.style.width = (viewH * imgAspect) + "px";
        window.scrollTo((document.body.scrollWidth / 2), 0);
        
    } else {
        alert("Set to width");
        fullImg.style.width = viewW + "px";
        fullImg.style.height = (viewW / imgAspect) + "px";
        window.scrollTo(0, (document.body.scrollHeight / 2) - 177); 
    };
};
function killBackground() {
    document.getElementById("fullDiv").style.display = "none";
    document.getElementById("bodyID").style.overflow = "auto";

};
function toggleCursor() {
    var fullDiv = document.getElementById("fullDiv");
    var feedback = document.getElementById("feedback");
    var cursorbutton = document.getElementById("cursorbutton");
    if (cursorbutton.innerHTML == "Hide Cursor") {
        feedback.innerHTML = "Hidden the cursor while images are open.";
        cursorbutton.innerHTML = "Show Cursor";
        fullDiv.style.cursor = "none";
    } else {
        feedback.innerHTML = "Shown the cursor while images are open.";
        cursorbutton.innerHTML = "Hide Cursor";
        fullDiv.style.cursor = "default";
    };
};
function reset() {
    document.getElementById("feedback").innerHTML = "Settings are at default."
    document.getElementById("cursorbutton").innerHTML = "Hide Cursor";
    document.getElementById("fullDiv").style.cursor = "default";
};

//
function takeNum() {
    var output = "";
    num1 = Number(document.getElementById("num1").value)
    num2 = Number(document.getElementById("num2").value)
    if (num1 < num2) {
        for (var counter = num1; counter < num2 + 1; counter++) {
            output += counter;
            output += " ";
        };
    } else if (num1 > num2) {
        for (var counter = num1; counter > num2 - 1; counter--) {
            output += counter;
            output += " ";
        };
    } else {
        output = "Numbers are the same"
    }
    document.getElementById("countsect").innerHTML = output;
}
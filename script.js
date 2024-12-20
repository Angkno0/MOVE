const box = document.getElementById("box");
let boxTopPosition = 0;
let boxLeftPosition = 0;


window.addEventListener("keydown", (e) => {
    if(e.key === "w"){
        boxTopPosition -= 10;
        box.style.top= boxTopPosition + "px";
    } else if(e.key === "a"){
        boxLeftPosition -= 10;
        box.style.left= boxLeftPosition + "px";
    } else if(e.key === "s"){
        boxTopPosition += 10;
        box.style.top= boxTopPosition + "px";
    } else if(e.key === "d"){
        boxLeftPosition += 10;
        box.style.left= boxLeftPosition + "px";
    } 
})
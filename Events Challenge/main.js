let submit = document.getElementById("submitButton");
let display = document.getElementById("outputDiv");
let inName = document.getElementById("nameInput");
let mouseTrack = document.getElementById("mouseTracker");
let coordinate = document.getElementById("coordinates");

// Click event
submit.addEventListener("click", submitName);
function submitName(){
    if(inName.value.trim() === ""){
        display.innerHTML = "<h3>Error: Please enter a name.</h3>";
        display.style.backgroundColor = "#FF0000";
    }
    else{
        display.innerHTML = `<h3>Welcome, ${inName.value}.</h3>`;
        display.style.backgroundColor = "#008000";
    }
}

// Mouse event
mouseTrack.addEventListener("mousemove", mouseRun);
function mouseRun(e){
    coordinate.innerHTML =  "<h3>Mouse X:" + e.offsetX + "</h3><h3>Mouse Y:" + e.offsetY + "</h3>";
}

// Keyboard event
inName.addEventListener("keydown", keyboardSubmit);
function keyboardSubmit(e){
    if(e.key === "Enter"){
        submitName();
    }
}
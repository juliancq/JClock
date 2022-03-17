const clock = document.querySelector("#clock");
const body = document.querySelector("body");

const colorPickerBg = document.querySelector("#color-picker-bg");
const colorPickerClock = document.querySelector("#color-picker-clock");
const bgColorWrapper = document.querySelector("#bg-color-wrapper");
const clockColorWrapper = document.querySelector("#clock-color-wrapper");

const closeBtn = document.querySelector("#close-btn");
const openBtn = document.querySelector("#open-btn");

loadColorsFromDB();

function loadColorsFromDB(){

    colorPickerBg.value = localStorage.getItem("bgColor") || "#3e3b3b";
    colorPickerClock.value = localStorage.getItem("clockColor") || "#f1e7e7";

    body.style.backgroundColor = localStorage.getItem("bgColor") || "#3e3b3b";
    clock.style.color = localStorage.getItem("clockColor") || "#f1e7e7";

    bgColorWrapper.style.backgroundColor = localStorage.getItem("bgColor") || "#3e3b3b";
    clockColorWrapper.style.backgroundColor = localStorage.getItem("clockColor") || "#f1e7e7";
}

function saveBackgroundColor(color){

    localStorage.setItem("bgColor", color)
}

function saveClockColor(color){

    localStorage.setItem("clockColor", color)
}   


setInterval(()=> {

    let date = new Date()
    
    clock.innerHTML = ` ${date.getHours()} : 
                        ${date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes()} :
                        ${date.getSeconds() > 10 ? date.getSeconds() : "0" + date.getSeconds()}`

},1000)

document.addEventListener("dblclick", ()=>{
    document.documentElement.requestFullscreen();
})

openBtn.addEventListener("click", ()=>{

    document.querySelector("#buttons").classList.remove("hidden");
    openBtn.classList.add("hidden");
})

closeBtn.addEventListener("click", ()=>{

    document.querySelector("#buttons").classList.add("hidden");
    openBtn.classList.remove("hidden")
})

colorPickerBg.addEventListener("input", () => {

    saveBackgroundColor(colorPickerBg.value);
    body.style.backgroundColor = colorPickerBg.value;
    bgColorWrapper.style.backgroundColor = colorPickerBg.value;
})

colorPickerClock.addEventListener("input", () => {

    saveClockColor(colorPickerClock.value)
    clock.style.color = colorPickerClock.value
    clockColorWrapper.style.backgroundColor = colorPickerClock.value;
})
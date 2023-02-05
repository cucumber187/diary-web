const hours = document.querySelector(".time__hours");
const minutes = document.querySelector(".time__minutes");
const seconds = document.querySelector(".time__seconds");

function clock(){
    const date = new Date();
    const getHour = date.getHours();
    const getMinute = date.getMinutes();
    const getSecond = date.getSeconds();

    hours.innerText = JSON.stringify(getHour).padStart(2, "0");
    minutes.innerText = JSON.stringify(getMinute).padStart(2, "0");
    seconds.innerText = JSON.stringify(getSecond).padStart(2, "0");
}

setInterval(clock, 1000);
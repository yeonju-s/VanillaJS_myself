const date = document.getElementById("date");
const clock = date.querySelector(".clock");
const today = date.querySelector(".today")


function setClock(){
    const time = new Date();
    const hour = String(time.getHours()).padStart(2,"0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${minutes}:${seconds}`;
}

setClock();
setInterval(setClock,1000);

const dateOf = new Date();
const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

today.innerText = `${dateOf.getFullYear()} / ${dateOf.getMonth()} / ${dateOf.getDate()} (${dayOfWeek[dateOf.getDay()]})`;
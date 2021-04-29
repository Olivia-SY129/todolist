const clockContainer = document.querySelector(".js-clock");
    clockTitle = clockContainer.querySelector("h1");


function getTime(){
    const date1 = new Date();
    const hours24 = date1.getHours();
    const minutes = date1.getMinutes();
    const seconds = date1.getSeconds();

    function am_pm(time) {
        if (time < 12) {
            return 'AM';
        } else { return 'PM'}
    }

    const hours = hours24 > 12 ? hours24 - 12 : hours24;

    clockTitle.innerText = `${am_pm(hours24)} ${ 
        hours < 10 ? `0${hours}` : hours} : ${
        minutes < 10 ? `0${minutes}` : minutes} : ${
            seconds < 10 ? `0${seconds}` : seconds}`;
}


function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
const handSeconds = document.getElementById('hand-seconds');
const handMinutes = document.getElementById('hand-minutes');
const handHours = document.getElementById('hand-hours');

function getTime(){
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const timeInterval = 6;

    handSeconds.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)';
    handMinutes.style.transform = 'rotate(' + (minutes * timeInterval) + 'deg)';
    handHours.style.transform = 'rotate(' + (hours * 30 + minutes / 2) + 'deg)';
}

setInterval(getTime, 100)


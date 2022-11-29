const seconHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setClockFace(){
    // now const variabble is not glabal its local to the method
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds /60) * 360) + 90
    secondHand.style.transform = 'rotate(${secondsDegrees}deg)';

    const minutes = now.getMinutes();
    const minutesDegrees = ((minute /60)* 360) + 90;
    minuteHand.style.transform = 'rotate(${minutesDegrees}deg)';
    
    const hours = now.getMinutes();
    const hoursDegrees = ((hours /60)* 360) + 90;
    hourHand.style.transform = 'rotate(${minutesDegrees}deg)';
}
//1000 millisecond is one second
setInterval(setClockFace,1000);
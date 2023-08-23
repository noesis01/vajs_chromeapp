const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const nowhour = String(date.getHours()).padStart(2,"0");
    const nowmin = String(date.getMinutes()).padStart(2,"0");
    const nowsec = String(date.getSeconds()).padStart(2,"0");
    
    nowtime = `${nowhour}:${nowmin}:${nowsec}`;
    
    clock.innerText = nowtime;
}
clock.innerText = getClock();
setInterval(getClock, 1000);
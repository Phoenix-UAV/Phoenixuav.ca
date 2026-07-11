const Countdown = document.getElementById("countdown");

function timer() {
    if (!Countdown) return;

    const now = new Date();
    const currentYear = now.getFullYear();
    let targetDate = new Date(Date.UTC(currentYear, 6, 2, 2, 30, 0));
    const resetDate = new Date(Date.UTC(currentYear, 6, 12, 2, 30, 0));

    let distance = 0;

    if (now < targetDate) {
        distance = targetDate.getTime() - now.getTime();
    } 
    
    else if (now < resetDate) {
        distance = 0;
    } 
    
    else {
        targetDate = new Date(Date.UTC(currentYear + 1, 6, 2, 2, 30, 0));
        distance = targetDate.getTime() - now.getTime();
    }

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Countdown.textContent = `${days.toString().padStart(2, "0")} : ${hours.toString().padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
}

timer();
setInterval(timer, 1000);
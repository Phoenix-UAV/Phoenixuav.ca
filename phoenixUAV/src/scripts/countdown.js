const Countdown = document.getElementById("countdown");
function timer () {
    const currentDate = new Date().getTime();
    const targetDate = new Date("July 2 2026 00:00:00");
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 /24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60

    Countdown.innerHTML = `${days.toString().padStart(2, "0")} : ${hours.toString().padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
    // console.log(formattedTime);
}
setInterval(timer, 900);
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2,'0');
    let second = String(now.getSeconds()).padStart(2,'0');

    const ampm = hours>=12 ? 'PM':'AM';
    hours = hours%12||12;
    hours = String(hours).padStart(2,'0');


    const currentTime  = `${hours}:${minutes}:${second}  ${ampm}`;
    document.getElementById("clock").textContent = currentTime;

    const options =  {weekday:'long', year:'numeric', month:'long', day:'numeric' };
    const today = now.toLocaleDateString('en-IN',options);
    document.getElementById("date").textContent = today; 
}

updateClock();

setInterval(updateClock,1000);
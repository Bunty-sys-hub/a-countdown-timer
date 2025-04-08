
const startDate = new Date().getTime(); 
const endDate = new Date("2025-04-08 22:31:00").getTime();




let x = setInterval(function updateTime() {
    const now  = new Date().getTime()
        const distanceCovered = now- startDate;
    
        const pendingTime = endDate - now;
    
        const daysInMillis = (24 * 60 * 60 * 1000)
        const hoursInMillis = ( 60 * 60 * 1000)
        const minuteInMillis = ( 60 * 1000)
        const secondsInMillis = ( 1000)
    
        const days = Math.floor(pendingTime / (24 * 60 * 60 *1000));
        const hours = Math.floor(pendingTime % (daysInMillis) / (60 * 60 *1000));
        const minutes = Math.floor(pendingTime % (hoursInMillis) / ( 60 *1000));
        const seconds = Math.floor(pendingTime % (minuteInMillis) / ( 1000));
       
    
        document.querySelector("#days").innerHTML = days
        document.querySelector("#hours").innerHTML = hours
        document.querySelector("#minutes").innerHTML = minutes
        document.querySelector("#seconds").innerHTML = seconds
    
        document.querySelector(".progress-line").style.width="100%";

        const totalTime = endDate - startDate;

        const persentageDistance = (distanceCovered / totalTime) *100;
        
        document.querySelector(".progress-line").style.width = persentageDistance + "%"
        if(totalTime < 0 ){
            
            clearInterval;
            document.getElementById("timing").innerHTML = "expired";

            document.querySelector(".progress-line").style.width = "100%";
            
        }
    
    },1000);

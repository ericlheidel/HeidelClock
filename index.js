function startClock(){

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = "AM";
    
    let clock = document.getElementById("clock");
    
        if (h == 0){
            h = 12;
        }
    
        if (h > 12){
            h = h - 12;
            ampm = "PM"
        }
    
        h = (h < 10) ? "0" + h : h;
        // if (h < 10){
        //     h = "0" + h;
        // } else {
        //     h = h;
        // }
    
        m = (m < 10) ? "0" + m : m;
        // if (m < 10){
        //     m = "0" + m;
        // } else {
        //     m = m;
        // }
    
        s = (s < 10) ? "0" + s : s;
        // if (s < 10){
        //     s = "0" + s;
        // } else {
        //     s = s;
        // }
    
        let time = h + " : " + m + " : " + s + " : " + ampm;
    
        clock.innerHTML = time;
        clock.textContent = time;
    
        setTimeout(startClock, 1000) 
    }
    
    startClock()
    
    function getDate(){
        let date = new Date();

        let year = date.getFullYear();
        let month = date.getMonth();
        let number = date.getDate();
        let day = date.getDay();

        let today = document.getElementById("today");

        let monthNames = ["Januray", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        let todayIs = dayNames[day] + " " + monthNames[month] + ", " + number;

        today.innerHTML = todayIs;


    }

    getDate()
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
    
    
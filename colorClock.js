function colorClock(){
    var date = new Date();
    
    var hours = date.getHours();
    if (hours < 10 ) {
      hours = '0' + hours;
    }
    
    var minutes = date.getMinutes();
    if (minutes < 10 ) {
      minutes = '0' + minutes;
    }
    
    var seconds = date.getSeconds();
    if (seconds < 10 ) {
      seconds = '0' + seconds;
    }
    
    var clockFace = hours  + ":" + minutes  + ":" + seconds;
    var hexColorBackground = '#' + "aa" + minutes + seconds;
    var hexColorClock = '#' + seconds + minutes + "ff"; 
      
    document.getElementById('clock').innerHTML = clockFace;
    
    document.body.style.background = hexColorBackground;
    document.getElementById('clock').style.color = hexColorClock;
      
    setTimeout(function() {colorClock();}, 1000);
    
}
    
colorClock();
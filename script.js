setInterval(()=>{
     date = new Date();
     gethours = date.getHours();
     getminutes = date.getMinutes();
     getseconds = date.getSeconds();
     getRotatedHours = gethours*30 + getminutes/2;
     getRotatedMinutes = 6*getminutes;
     getRotatedSeconds = 6*getseconds;
     document.getElementById("hour").style.transform = `rotate(${getRotatedHours}deg)`;
     document.getElementById("minute").style.transform = `rotate(${getRotatedMinutes}deg)`;
     document.getElementById("second").style.transform = `rotate(${getRotatedSeconds}deg)`;

},1000);
//your JS code here. If required.
let curtime=document.getElementById("timer");

let date=new Date();

setInterval(
    function(){
	    date=new Date();
		curtime.innerHTML=date.toLocaleString();
	},1000		
	
)
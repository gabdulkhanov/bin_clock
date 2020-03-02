var canv = document.getElementById("canv"),			
	ctx = canv.getContext('2d');
            
		canv.width  = 650;
		canv.height = 550;		
	
		ctx.strokeStyle = "#0000FF";
		ctx.strokeRect(18, 18, 654, 504);
		ctx.fillRect(20, 20, 650, 500);
	 
		var clock = [
		  [2, 2, 2, 2, 2, 2],
		  [2, 2, 2, 2, 2, 2],
		  [2, 2, 2, 2, 2, 2],
		  [2, 2, 2, 2, 2, 2]
		];			
			
		var sec, min, hour;			
			
		setInterval(function() {
			ctx.fillStyle = '#000';
			ctx.fillRect(0,0, canv.width,canv.height);	

			sec = new Date().getSeconds();
			min = new Date().getMinutes();
			hour = new Date().getHours();
		
			if (sec < 60) {				
				
				if (sec >= 10) {
					for (let temp = 0; temp < 4; temp++) {							
						clock[3-temp][5] = 2;						
					}
					for (let temp = 0; temp < dectobin(Math.trunc(sec / 10)).length; temp++) {
						clock[3-temp][4] = dectobin(Math.trunc(sec / 10)).charAt(temp);
					}
				}
				
				for (let temp = 0; temp < dectobin(sec % 10).length; temp++) {							
					clock[3-temp][5] = dectobin(sec % 10).charAt(temp);						
				}
				
			}
			
			if (sec == 0)	{					
				for (let temp = 0; temp < 4; temp++) {
					clock[temp][5] = 2;
					clock[temp][4] = 2;
				}
			}
			
			
			if (min < 60) {				
				
				if (min >= 10) {
					for (let temp = 0; temp < 4; temp++) {							
						clock[3-temp][3] = 2;						
					}
					for (let temp = 0; temp < dectobin(Math.trunc(min / 10)).length; temp++) {
						clock[3-temp][2] = dectobin(Math.trunc(min / 10)).charAt(temp);
					}
				}
				
					for (let temp = 0; temp < dectobin(min % 10).length; temp++) {							
						clock[3-temp][3] = dectobin(min % 10).charAt(temp);						
					}
				
			}
			if (min == 0) {					
				for (let temp = 0; temp < 4; temp++) {
					clock[temp][2] = 2;
					clock[temp][3] = 2;
				}
			}
			
			if (hour < 24) {				
				
				if (hour >= 10) {
					for (let temp = 0; temp < 4; temp++) {							
						clock[3-temp][1] = 2;						
					}
					for (let temp = 0; temp < dectobin(Math.trunc(hour / 10)).length; temp++) {
						clock[3-temp][0] = dectobin(Math.trunc(hour / 10)).charAt(temp);
					}
				}
				
					for (let temp = 0; temp < dectobin(hour % 10).length; temp++) {							
						clock[3-temp][1] = dectobin(hour % 10).charAt(temp);						
					}
				
			}
			if (hour == 0) {					
				for (let temp = 0; temp < 4; temp++) {
					clock[temp][0] = 2;
					clock[temp][1] = 2;
				}
			}
		
			ctx.fillStyle = "#00F";				
			ctx.font = "italic 30pt Arial";				
			ctx.fillText(sec, 450, 450);	
			ctx.fillText(min, 250, 450);
			ctx.fillText(hour, 100, 450);				
			
			for (var i = 0; i < 4; i++)
				for (var j = 0; j < 6; j++) {
					if (clock[i][j] == 0) {
						ctx.fillStyle = "#0000AA";
					}
					else if (clock[i][j] == 1) {
						ctx.fillStyle = "#BB0000";
					}
					else {
						ctx.fillStyle = "#000000";
					}
					ctx.fillRect(j*100, i*100, 100, 100);						
				}				
		}, 1000);
		/*конец таймера*/
		
		
	function dectobin(n) {
		var bin = "";	
		while (n != 0) {
			bin += Math.trunc(n) % 2;
			n = Math.trunc(n) / 2;					
		}
		bin = bin.substring(0, bin.length - 1);
		bin = bin.split("").reverse().join("");		
		return bin;
	}
var ball = document.getElementById('infiBall');
initial();


moveBall();

function initial(){

	var maxHeight = document.body.clientHeight;
	var maxWidth = document.body.clientWidth;
	ball.left = Math.round(Math.random()*maxWidth-100);
    ball.top = Math.round(Math.random()*maxHeight-100);
    console.log(ball.top)
	
	ball.collision = 0;
   	ball.mass = 1;
   	ball.xspeed = Math.round(Math.random()*8-4);
   	ball.yspeed = Math.round(Math.random()*8-4);
					
}

function moveBall()
{		
	setInterval(function(){
			if (ball.left<0) 
			{
				ball.left = 0;
				ball.xspeed *= -1;
				var audio = new Audio('39459__THE_bizniss__laser.wav');
				audio.play();
			}		// BOUNDRIES Left
			
			if (ball.left > window.innerWidth-100) {
				ball.left = window.innerWidth-100;
				ball.xspeed *= -1;
				var audio = new Audio('39459__THE_bizniss__laser.wav');
				audio.play();
			}	// BOUNDRIES Right
			
			if (ball.top<0) {
				ball.top = 0;
				ball.yspeed *= -1;
				var audio = new Audio('39459__THE_bizniss__laser.wav');
				audio.play();
			}		// BOUNDRIES Top
			
			if (ball.top>window.innerHeight-100) {
				ball.top = innerHeight-100;
				ball.yspeed *= -1;
				var audio = new Audio('39459__THE_bizniss__laser.wav');
				audio.play();
			}	// BOUNDRIES Bottom
			
			//GET THE NEW POSITION
			ball.left += ball.xspeed;
			ball.top += ball.yspeed;
			
			//APPLY THE NEW POSITION
		    //2D Transform
			ball.style.WebkitTransform = "translate3D("+ball.left+"px,"+ball.top+"px,0px)";//3D Transform fo better Performance
	},5);
   		
}
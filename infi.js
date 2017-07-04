var ball = document.getElementById('infiBall');

function initial(){

	ball.left = Math.round(Math.random()*window.innerWidth-30);
    ball.top = Math.random() * (i*minDist+50 - i*minDist) + i*minDist;
    console.log(ball.top)
	
		ball.collision = 0;
   		ball.mass = 1;
      	ball.xspeed = Math.round(Math.random()*8-4);
   		ball.yspeed = Math.round(Math.random()*8-4);
					
}
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;



background_image = "parkingLot.jpg";
greencar_image = "car2.png";

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;  
}


function uploadBackground() {
    ctx.uploadBackground(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
    ctx.uploadgreencar(car_imgTag, car_x, car_y, car_width, car_height);
}

	



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y >=0)
    {
        car_y = car_y - 10;
        console.log("When up arrow is pressed,  x = " + car_x + " | y = " +car_y);
         uploadBackground();
         uploadgreencar();
	}
}


function down()
{
	if(car_y >=500)
    {
        car_y = car_y + 10;
        console.log("When down arrow is pressed,  x = " + car_x + " | y = " +car_y);
         uploadBackground();
         uploadgreencar();
	}
}

function left()
{
	if(car_y >=0)
    {
        car_y = car_y - 10;
        console.log("When left arrow is pressed,  x = " + car_x + " | y = " +car_y);
         uploadBackground();
         uploadgreencar();
}
}

function right()
{
	if(car_y >=700)
    {
        car_y = car_y + 10;
        console.log("When right arrow is pressed,  x = " + car_x + " | y = " +car_y);
         uploadBackground();
         uploadgreencar();
}
}

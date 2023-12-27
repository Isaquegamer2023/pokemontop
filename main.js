var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("ash.png", function(Img) {
	player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({top:player_y,left:player_x});
	canvas.add(player_object);
	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({top:player_y,left:player_x});
	canvas.add(block_image_object);
	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '67')
{
	console.log("C e Shift pressionadas ao mesmo tempo");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '68')
{
	console.log("D e Shift pressionadas ao mesmo tempo");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

	if(keyPressed == '38')
	{
		up();
		console.log("cima");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("baixo");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("esquerda");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("direita");
	}
	if(keyPressed == '80')
	{
		new_image('parede.jpg'); 
		console.log("p");
	}
	if(keyPressed == '67')
	{
		new_image('ce.png'); 
		console.log("c");
	}
	if(keyPressed == '86')
	{
		new_image('grama.png'); 
		console.log("v");
	}
	if(keyPressed == '90')
	{
		new_image('ze.png'); 
		console.log("z");
	}
	if(keyPressed == '77')
	{
		new_image('madeira_tronco.jpg'); 
		console.log("m");
	}
	if(keyPressed == '83')
	{
		new_image('shi.png'); 
		console.log("s");
	}
	if(keyPressed == '65')
	{
		new_image('za.png'); 
		console.log("a");
	}
	if(keyPressed == '81')
	{
		new_image('qua.png'); 
		console.log("q");
	}
	if(keyPressed == '71')
	{
		new_image('gre.png'); 
		console.log("g");
	}
	if(keyPressed == '66')
	{
		new_image('zi.png'); 
		console.log("b");
	}
	
}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("altura da imagem do bloco = " + block_image_height);
		console.log("Quando a seta para cima é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("altura da imagem do bloco = " + block_image_height);
		console.log("Quando a seta para baixo é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("largura da imagem do bloco = " + block_image_width);
		console.log("Quando a seta esquerda é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("largura da imagem do bloco = " + block_image_width);
		console.log("Quando a seta direita é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
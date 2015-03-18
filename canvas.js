var canvas = document.getElementById("game-canvas");
var context = canvas.getContext("2d");

var bear = new Image();
bear.src = "images/1bitrender.png";

window.onload = function(){
	//Отключаем алиасинг
	context.webkitImageSmoothingEnabled = false;                                                                                
	context.mozImageSmoothingEnabled = false;                                                                                   
	context.imageSmoothingEnabled = false;
	//Рисуем
	drawBackground(); //Фон
}

function drawBackground(){
	context.drawImage(bear, 0, 0, canvas.width, canvas.height);
	
	var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
	var data = imageData.data;
	
	for (var i = 0; i < data.length; i += 4){
		switch ( data[i] ) {
			case 0:
				data[i] = 34; data[i+1] = 34; data[i+2] = 34;
				break
			case 255:
				data[i] = 51; data[i+1] = 51; data[i+2] = 51;
				break
			default:
				alert('Ошибка');
		}
	}
	context.putImageData(imageData, 0, 0);
	
}
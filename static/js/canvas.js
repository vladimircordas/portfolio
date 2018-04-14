$( window ).on( "load", function() {
	
function Banner(){
  // VARIJABLE ZA ISPISIVANJE RECI
  var keyword = "JUST ANOTHER";
  var keyword2 = "GENERIC";
  var keyword3 = "PORTFOLIO!";

	var canvas;
	var context;
	
	var bgCanvas;
	var bgContext;
	
	var width = window.innerWidth;
	var denseness = 8; // GUSTINA PARTICLEa
	if (width > 1024) {
		denseness = 12;
	} else {
		denseness = 8;
	}
	//SVAKI PARTICLE/IKONA
	var parts = [];
	
	var mouse = {x:-100,y:-100};
	var mouseOnScreen = false;
	
	var itercount = 0;
	var itertot = 40; // INICIJALNA BRZINA KOJOM SE PARTICLESi SLAZU U KARAKTERE
	
	
	
	this.initialize = function(canvas_id){
		canvas = document.getElementById(canvas_id);
		context = canvas.getContext('2d');

		
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		
		bgCanvas = document.createElement('canvas');
		bgContext = bgCanvas.getContext('2d');
		
		bgCanvas.width = window.innerWidth;
		bgCanvas.height = window.innerHeight;

		canvas.addEventListener('mousemove', MouseMove, false);
		canvas.addEventListener('mouseout', MouseOut, false);
			
		start();
	}
	
	var start = function(){
		// POZICIONIRANJE TEKSTA PREKO VISINE I SIRINE CANVASA I TEKSTA
		var textWidth = bgContext.measureText(keyword).width;
		var textWidth2 = bgContext.measureText(keyword2).width;
		var textWidth3 = bgContext.measureText(keyword3).width;
		var textHeight = bgContext.measureText(keyword).height;
		var textHeight2 = bgContext.measureText(keyword2).height;
		var textHeight3 = bgContext.measureText(keyword3).height;

		bgContext.fillStyle = "blue";
		bgContext.font = '26vmin impact';

		bgContext.textAlign = 'center';
    	bgContext.textBaseline = 'middle';
		bgContext.fillText(keyword, (canvas.width/2) - (textWidth / 2), (canvas.height/3.5));
		bgContext.fillText(keyword2, (canvas.width/2) - (textWidth2 / 2), (canvas.height/1.8));
		bgContext.fillText(keyword3, (canvas.width/2) - (textWidth3 / 2), (canvas.height/1.2));

		
		
		clear();	
		getCoords();
	}
	
	var getCoords = function(){
		var imageData, pixel, height, width;
		
		imageData = bgContext.getImageData(0, 0, canvas.width, canvas.height);
		
		// BRZO PREDJI PREKO SVIH PIKSELA - ZA OSTAVLJANJE RAZMAKA IZMEDJU PARTICLESa
	    for(height = 0; height < bgCanvas.height; height += denseness){
            for(width = 0; width < bgCanvas.width; width += denseness){   
               pixel = imageData.data[((width + (height * bgCanvas.width)) * 4) - 1];
                  //PIXEL JE CRN DA SE NE BI MOGLO CRTATI U/NA NJEMU
                  if(pixel == 255) {
                    drawCircle(width, height);
                  }
            }
        }
        
        setInterval( update, 40 );
	}
	
	var drawCircle = function(x, y){
		
		var startx = (Math.random() * canvas.width);
		var starty = (Math.random() * canvas.height);
		
		var velx = (x - startx) / itertot;
		var vely = (y - starty) / itertot;	
		
		parts.push(
			{c: '#' + (Math.random() * 0x949494 + 0xaaaaaa | 0).toString(16),
			 x: x, //CILJNA POZICIJA
			 y: y,
			 x2: startx, //STARTNA POZICIJA
			 y2: starty,
			 r: true, //PUSTANJE PARTICLEa SA TEKSTA ( letenje u random smeru )
			 v:{x:velx , y: vely}
			}
		)
	}
		
	var update = function(){
		var i, dx, dy, sqrDist, scale;
		itercount++;
		clear();
		for (i = 0; i < parts.length; i++){
					
			//AKO JE PARTICLE PUSTEN
			if (parts[i].r == true){
				//LETI U NEDOGLED
				parts[i].x2 += parts[i].v.x;
		        parts[i].y2 += parts[i].v.y;
			//PROVERA DA LI SU JOS NA EKRANU... AKO NISU, UBI IH?
			}
			if (itercount == itertot){
				parts[i].v = {x:(Math.random() * 6) * 2 - 6 , y:(Math.random() * 6) * 2 - 6};
				parts[i].r = false;
			}
			
	
			//Look into using svg, so there is no mouse tracking.
			//Find distance from mouse/draw!
			dx = parts[i].x - mouse.x;
	        dy = parts[i].y - mouse.y;
	        sqrDist =  Math.sqrt(dx*dx + dy*dy);
			// SIRINA KOJU POINTER ZAHVATA PRILIKOM RELEASA PARTICLEa
			if (sqrDist < 40){
				parts[i].r = true;
			} 			

			//CRTAJ KRUG - BOJA GRADIENT
			var grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);
			      // BOJA SA LEVE STRANE
			      grd.addColorStop(0, 'red');   
			      // BOJA SA DESNE STRANE
			      grd.addColorStop(1, '#150000');


			context.fillStyle = grd;//parts[i].c; // BOJA
			context.beginPath();
			var width = window.innerWidth;
			if (width > 1024) {
				context.arc(parts[i].x2, parts[i].y2, 4 ,0 , Math.PI*2, true); // VELICINA PARTICLEa ZA REZOLUCIJE ISPOD 1024px
				context.closePath();
		    	context.fill();
	    	} else {
	    		denseness = 12;
	    		context.arc(parts[i].x2, parts[i].y2, 2 ,2 , Math.PI*5, true); // VELICINA PARTICLEa ZA OSTALE REZOLUCIJE
				context.closePath();
		    	context.fill();
			}	
	    }
	}
	
	var MouseMove = function(e) {
	    if (e.layerX || e.layerX == 0) {
	    	//RESET POZICIJE PARTICLESa
	    	mouseOnScreen = true;
	    	
	    	
	        mouse.x = e.layerX - canvas.offsetLeft;
	        mouse.y = e.layerY - canvas.offsetTop;
	    }
	}
	
	var MouseOut = function(e) {
		mouseOnScreen = false;
		mouse.x = -100;
		mouse.y = -100;	
	}
	
	//OCISTI EKRAN CANVASa
	var clear = function(){
		context.fillStyle = 'black';
		context.beginPath();
  		context.rect(0, 0, canvas.width, canvas.height);
 		context.closePath();
 		context.fill();
	}
}


var banner = new Banner();
banner.initialize("canvas");

});
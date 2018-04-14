$(document).ready(function(e) {
	var currPlx, maxPlx, wPlx;
	/* 1=130 / 2=250 / 3 = 370*/
	var diff1 = 130, diff2 = 250, diff3 = 370;
	var time1 = 600, time2 = 1000, time3 = 1500;
	var slideTime = 1000;
	
	initPlx();
	
	$('#plx1').on('click',function(e){
		e.preventDefault();
		if(! $(this).hasClass('active')) {
			activeButton($(this));
			btnClk(0);
			$(".menu_btn_1, .menu_btn_1_fr").css({"background-position": "top"});
			$(".menu_btn_2, .menu_btn_2_fr").css({"background-position": "top"});
			$(".menu_btn_3, .menu_btn_3_fr").css({"background-position": "top"});
		}
	});
	$('#plx2, .maya_1, .maya_2, .maya_3').on('click',function(e){
		e.preventDefault();
		if(! $(this).hasClass('active')) {
			activeButton($(this));
			btnClk(1);
			$(".menu_btn_1, .menu_btn_1_fr").css({"background-position": "bottom"});
			$(".menu_btn_2, .menu_btn_2_fr").css({"background-position": "top"});
			$(".menu_btn_3, .menu_btn_3_fr").css({"background-position": "top"});
			$(".maya_poster_1").css({"display": "block"});
			$(".maya_poster_2").css({"display": "none"});
			$(".maya_poster_3").css({"display": "none"});
		}
	});
	$('#plx3, .honey_page').on('click',function(e){
		e.preventDefault();
		if(! $(this).hasClass('active')) {
			activeButton($(this));
			btnClk(2);
			$(".menu_btn_2, .menu_btn_2_fr").css({"background-position": "bottom"});
			$(".menu_btn_1, .menu_btn_1_fr").css({"background-position": "top"});
			$(".menu_btn_3, .menu_btn_3_fr").css({"background-position": "top"});
			$('.honey').css({"display": "block"});
			$('.choco').css({"display": "none"});
			switch_product_lang();
		}
	});
	$('.choco_page').on('click',function(e){
		e.preventDefault();
		if(! $(this).hasClass('active')) {
			activeButton($(this));
			btnClk(2);
			$(".menu_btn_2, .menu_btn_2_fr").css({"background-position": "bottom"});
			$(".menu_btn_1, .menu_btn_1_fr").css({"background-position": "top"});
			$(".menu_btn_3, .menu_btn_3_fr").css({"background-position": "top"});
			$('.honey').css({"display": "none"});
			$('.choco').css({"display": "block"});
			switch_product_lang();
		}
	});
	$('#plx4').on('click',function(e){
		e.preventDefault(); 
		if(! $(this).hasClass('active')) {
			activeButton($(this));
			btnClk(3);
			$(".menu_btn_3, .menu_btn_3_fr").css({"background-position": "bottom"});
			$(".menu_btn_2, .menu_btn_2_fr").css({"background-position": "top"});
			$(".menu_btn_1, .menu_btn_1_fr").css({"background-position": "top"});
		}
	});
		
	function activeButton(elem) {
		$('#plx1, #plx2, .maya_1, .maya_2, .maya_3, #plx3, .honey_page, .choco_page, #plx4').addClass('active');
		setTimeout (function(){
		$('#plx1, #plx2, .maya_1, .maya_2, .maya_3, #plx3, .honey_page, .choco_page, #plx4').removeClass('active');
		elem.addClass('active')}, 1800);
	}

	function btnClk(num){
		var dir = false;
		for(n=0;n<maxPlx;n++){
			$('#plx li.page:eq('+n+') .elem1').css('left','');
			$('#plx li.page:eq('+n+') .elem2').css('left','');
			$('#plx li.page:eq('+n+') .elem3').css('left','');
		}
		if(currPlx != num){
			if(currPlx > num) dir = true;
			outAnim(currPlx, dir);
			currPlx = num;
			inAnim(currPlx, dir);
			$('#plx li.page:eq(0)').stop().animate({'margin-left': -currPlx * wPlx},slideTime);
			//$('#plx ul').animate({'background-position': '('+(num*25)+'% 0px)'},slideTime*3);
			
			if ($.browser.mozilla || $.browser.opera) {      
				$('#plx ul').stop().css({	'background-position': (num*-8) + '% 0px', '-moz-transition': 'all '+ slideTime*3 +'ms ease', '-o-transition': 'all '+ slideTime*3 +'ms ease' })
			} else {
				$('#plx ul').stop().animate({ 'background-position-x': (num*-8) + '%' }, slideTime*3);
			}
		}
	}
	
	function outAnim(num, dir){
		var mp = 1;
		if(dir) mp = -mp;
		
		st1 = parseInt($('#plx li.page:eq('+num+') .elem1').css('left'));
		st2 = parseInt($('#plx li.page:eq('+num+') .elem2').css('left'));
		st3 = parseInt($('#plx li.page:eq('+num+') .elem3').css('left'));

		$('#plx li.page:eq('+num+') .elem1').stop().animate({'left':(st1 - (diff1 * mp))+'px'},time1);
		$('#plx li.page:eq('+num+') .elem2').stop().animate({'left':(st2 - (diff2 * mp))+'px'},time2);
		$('#plx li.page:eq('+num+') .elem3').stop().animate({'left':(st3 - (diff3 * mp))+'px'},time3);
		
	}
	
	function inAnim(num, dir){
		var mp = 1;
		if(dir) mp = -mp;
		$('#plx li.page:eq('+num+') .elem1').css('left','');
		$('#plx li.page:eq('+num+') .elem2').css('left','');
		$('#plx li.page:eq('+num+') .elem3').css('left','');
		st1 = parseInt($('#plx li.page:eq('+num+') .elem1').css('left'));
		st2 = parseInt($('#plx li.page:eq('+num+') .elem2').css('left'));
		st3 = parseInt($('#plx li.page:eq('+num+') .elem3').css('left'));
		$('#plx li.page:eq('+num+') .elem1').css('left',(st1 + (diff1 * mp)) + 'px');
		$('#plx li.page:eq('+num+') .elem2').css('left',(st2 + (diff2 * mp)) + 'px');
		$('#plx li.page:eq('+num+') .elem3').css('left',(st3 + (diff3 * mp)) + 'px');
		
		
		$('#plx li.page:eq('+num+') .elem1').animate({'left':st1 + 'px'},time1);
		$('#plx li.page:eq('+num+') .elem2').animate({'left':st2 + 'px'},time2);
		$('#plx li.page:eq('+num+') .elem3').animate({'left':st3 + 'px'},time3);
	}
	
	function initPlx(){
		$('#plx li.page').each(function(i, e) {
			$(this).css('width', $('#plx').width() + 'px');
		});
		currPlx = 0;
		maxPlx = $('#plx li.page').length - 1;
		wPlx = $('#plx').width();
		$('#plx ul').css('width', maxPlx*wPlx + 'px');
		$('#plx li.page:eq(0)').css('margin-left',0);
	}
	
	$(window).resize(function() {
		initPlx();
	});
	
});
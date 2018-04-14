//var lang = "nl";

function getParameterByName(name) {
 name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
 var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
 results = regex.exec(location.search);
 return results == null ? "" : 
  decodeURIComponent(results[1].replace(/\+/g, " "));
}



var page = "home"
var lang = getParameterByName("lng");



$(document).ready(function(){	
	
//alert(lng);

if(lang=="nl"){
	$('.fr' ).css('display', 'none');
	$('.nl' ).css('display', 'block');
	$(".lang_fr").removeClass("lang_active");
	$(".lang_nl").addClass("lang_active");
		$(".nl, .menu_btn_1, .menu_btn_2, .menu_btn_3, .scroll_box_nl").css({"display": "block"});
			$(".fr, .menu_btn_1_fr, .menu_btn_2_fr, .menu_btn_3_fr, .scroll_box_fr").css({"display": "none"});
			$(".scroll_box_nl").mCustomScrollbar("update");
			$(".lang_nl").addClass("lang_active");
			$(".lang_fr").removeClass("lang_active");
			$(".fb_btn").css({"left": "685px"});
			lang="nl";
	
	
}
if(lang=="fr"){
	$('.nl' ).css('display', 'none');
	$('.fr' ).css('display', 'block');
	$(".lang_nl").removeClass("lang_active");
	$(".lang_fr").addClass("lang_active");
		$(".fr, .menu_btn_1_fr, .menu_btn_2_fr, .menu_btn_3_fr, .scroll_box_fr").css({"display": "block"});
			$(".nl, .menu_btn_1, .menu_btn_2, .menu_btn_3, .scroll_box_nl").css({"display": "none"});
			$(".scroll_box_fr").mCustomScrollbar("update");
			/*$(".lang_fr").removeClass(".lang_fr");
			$(".lang_nl").addClass(".lang_nl");*/
			$(".lang_fr").addClass("lang_active");
			$(".lang_nl").removeClass("lang_active");
			$(".fb_btn").css({"left": "690px"});
			lang="fr";
		
}
if(lang==null || (lang!="nl" && lang!="fr")){
	$('.fr' ).css('display', 'none');
	$('.nl' ).css('display', 'block');
	$(".lang_fr").removeClass("lang_active");
	$(".lang_nl").addClass("lang_active");
		$(".nl, .menu_btn_1, .menu_btn_2, .menu_btn_3, .scroll_box_nl").css({"display": "block"});
			$(".fr, .menu_btn_1_fr, .menu_btn_2_fr, .menu_btn_3_fr, .scroll_box_fr").css({"display": "none"});
			$(".scroll_box_nl").mCustomScrollbar("update");
			$(".lang_nl").addClass("lang_active");
			$(".lang_fr").removeClass("lang_active");
			$(".fb_btn").css({"left": "685px"});
			lang="nl";	
}



	
		
	$(".maya_home_blink, .maya_spaarkaart_blink, .maya_bee_products_blink, .maya_reglement_blink").blinker({
			timeHidden: 2000,
			intervalRangeStart: 150,
			intervalRangeStop: 50
		});
	/*$('#plx2, .maya_1, .maya_2, .maya_3').click(function(){
		if(! $(this).hasClass('active')) {
			$(".menu_btn_1").css({"background-position": "bottom"});
			$(".menu_btn_2").css({"background-position": "top"});
			$(".menu_btn_3").css({"background-position": "top"});
			$(".maya_poster_1").css({"display": "block"});
			$(".maya_poster_2").css({"display": "none"});
			$(".maya_poster_3").css({"display": "none"});
		}
		
	});
	$('#plx3, .honey_page, .choco_page').click(function(){
		if(! $(this).hasClass('active')) {
			$(".menu_btn_2").css({"background-position": "bottom"});
			$(".menu_btn_1").css({"background-position": "top"});
			$(".menu_btn_3").css({"background-position": "top"});
			$('.honey').css({"display": "block"});
			$('.choco').css({"display": "none"});
		}
	});
	$('#plx4').click(function(){
		if(! $(this).hasClass('active')) {
			$(".menu_btn_3").css({"background-position": "bottom"});
			$(".menu_btn_2").css({"background-position": "top"});
			$(".menu_btn_1").css({"background-position": "top"});
		}
	});
	$('#plx1').click(function(){
		if(! $(this).hasClass('active')) {
			$(".menu_btn_1").css({"background-position": "top"});
			$(".menu_btn_2").css({"background-position": "top"});
			$(".menu_btn_3").css({"background-position": "top"});
		}
	});*/

	function switch_product(){
		if($('.honney_bottle').css("display") == ("block")){
			if (lang == "nl"){
				$('.product_text_honing, .honney_bottle, .product_honing').stop().fadeOut().css("display", "none");
				$('.product_text_choco, .choco_bottle, .product_choco').stop().fadeIn().css("display", "block");
				
				$('.product_text_honing_fr').stop().fadeOut().css("display", "none");
				$('.product_text_choco_fr').stop().fadeOut().css("display", "none");
			}
			if (lang == "fr"){
				$('.product_text_honing_fr, .honney_bottle, .product_miel').stop().fadeOut().css("display", "none");
				$('.product_text_choco_fr, .choco_bottle, .product_choco').stop().fadeIn().css("display", "block");
				
				$('.product_text_choco_fr').css({"position": "absolute",
					"font-family": "blue_highwaybold",
					"font-size": "16px",
					"color": "#FF0000",
					"text-decoration": "none",
					"line-height": "130%",
					"letter-spacing": "0px",
					"margin-top": "120px"
				});
				
				$('.product_text_honing').stop().fadeOut().css("display", "none");
				$('.product_text_choco').stop().fadeOut().css("display", "none");
			}
		}
		else {
			if (lang == "nl"){
				$('.product_text_honing, .honney_bottle, .product_honing').stop().fadeIn().css("display", "block");
				$('.product_text_choco, .choco_bottle, .product_choco').stop().fadeOut().css("display", "none");
				
				$('.product_text_honing_fr').stop().fadeOut().css("display", "none");
				$('.product_text_choco_fr').stop().fadeOut().css("display", "none");
			}
			if (lang == "fr"){
				$('.product_text_honing_fr, .honney_bottle, .product_miel').stop().fadeIn().css("display", "block");
				$('.product_text_choco_fr, .choco_bottle, .product_choco').stop().fadeOut().css("display", "none");
				
				$('.product_text_honing').stop().fadeOut().css("display", "none");
				$('.product_text_choco').stop().fadeOut().css("display", "none");
			}
		}
	}
		
		
		
		
	
		
		
		
		/*
			
		else if($('.product_text_honing').css("display") == ("none")){
			if (lang == "nl"){
				$('.product_text_honing, .honney_bottle').stop().fadeIn().css("display", "block");
				$('.product_text_choco, .choco_bottle').stop().fadeOut().css("display", "none");
				
				$('.product_text_honing_fr').stop().fadeOut().css("display", "none");
				$('.product_text_choco_fr').stop().fadeOut().css("display", "none");
			}
			if (lang == "fr"){
				$('.product_text_honing_fr').stop().fadeOut().css("display", "none");
				$('.product_text_choco_fr').stop().fadeOut().css("display", "none");
			}
		}
		else if($('.product_text_honing_fr').css("display") == ("block")){
			if (lang == "fr"){
				$('.product_text_honing_fr, .honney_bottle').stop().fadeOut().css("display", "none");
				$('.product_text_choco_fr, .choco_bottle').stop().fadeIn().css("display", "block");
			}
			if (lang == "nl"){
				$('.product_text_honing').stop().fadeOut().css("display", "none");
				$('.product_text_choco').stop().fadeOut().css("display", "none");
			}
		}
		else if($('.product_text_honing_fr').css("display") == ("none")){
			if (lang == "fr"){
				$('.product_text_honing_fr, .honney_bottle').stop().fadeOut().css("display", "block");
				$('.product_text_choco_fr, .choco_bottle').stop().fadeIn().css("display", "none");
			}
			if (lang == "nl"){
				$('.product_text_honing').stop().fadeOut().css("display", "none");
				$('.product_text_choco').stop().fadeOut().css("display", "none");
			}
			}*/

	
	$('.product_slider_previous').click(function(){
		$('.glow').stop(true,true).fadeIn(500).fadeOut(500);
		switch_product();
		
		
		/*$('.honey').css({"display": "none"});
		$('.choco').css({"display": "block"});*/
	});
	$('.product_slider_next').click(function(){
		$('.glow').stop(true,true).fadeIn(500).fadeOut(500);
		switch_product();
		
		/*$('.honey').css({"display": "none"});
		$('.choco').css({"display": "block"});*/
	});


	function forward_cycle_posters(){
		if($('.maya_poster_1').css("display") == ("block")){
			$('.maya_poster_1').stop(true,true).fadeOut();
			$('.maya_poster_2').fadeIn();
		}
		else if($('.maya_poster_2').css("display") == ("block")){
			$('.maya_poster_2').stop(true,true).fadeOut();
			$('.maya_poster_3').fadeIn();
		}
		else if($('.maya_poster_3').css("display") == ("block")){
			$('.maya_poster_1').fadeIn();
			$('.maya_poster_3').stop(true,true).fadeOut();
		}
	}
	function backward_cycle_posters(){
		if($('.maya_poster_1').css("display") == ("block")){
			$('.maya_poster_1').stop(true,true).fadeOut();
			$('.maya_poster_3').fadeIn();
		}
		else if($('.maya_poster_3').css("display") == ("block")){
			$('.maya_poster_2').fadeIn();
			$('.maya_poster_3').stop(true,true).fadeOut();
		}
		else if($('.maya_poster_2').css("display") == ("block")){
			$('.maya_poster_1').fadeIn();
			$('.maya_poster_2').stop(true,true).fadeOut();
		}
	}
	
		$('.maya_slider_next').click(function(){
			forward_cycle_posters();
		});
		$('.maya_slider_previous').click(function(){
			backward_cycle_posters();
	});

	$(".maya_1").click(function(){
		$(".maya_poster_1").css({"display": "none"});
		$(".maya_poster_2").css({"display": "none"});
		$(".maya_poster_3").css({"display": "block"});
	});
	$(".maya_2").click(function(){
		$(".maya_poster_1").css({"display": "block"});
		$(".maya_poster_2").css({"display": "none"});
		$(".maya_poster_3").css({"display": "none"});
	});
	$(".maya_3").click(function(){
		$(".maya_poster_1").css({"display": "none"});
		$(".maya_poster_2").css({"display": "block"});
		$(".maya_poster_3").css({"display": "none"});
	});



	/*$(".lang_fr").click(function(){
		$(".fr, .menu_btn_1_fr, .menu_btn_2_fr, .menu_btn_3_fr, .scroll_box_fr").css({"display": "block"});
		$(".nl, .menu_btn_1, .menu_btn_2, .menu_btn_3, .scroll_box_nl").css({"display": "none"});
		$(".scroll_box_fr").mCustomScrollbar("update");
		/*$(".lang_fr").removeClass(".lang_fr");
		$(".lang_nl").addClass(".lang_nl");*/
		/*$(".lang_fr").addClass("lang_active");
		$(".lang_nl").removeClass("lang_active");
		$(".fb_btn").css({"left": "690px"});
		lang="fr";
		
		//switch_product();
		//switch_product_lang();
		//return false;
	});*/
	/*$(".lang_nl").click(function(){
		$(".nl, .menu_btn_1, .menu_btn_2, .menu_btn_3, .scroll_box_nl").css({"display": "block"});
		$(".fr, .menu_btn_1_fr, .menu_btn_2_fr, .menu_btn_3_fr, .scroll_box_fr").css({"display": "none"});
		$(".scroll_box_nl").mCustomScrollbar("update");
		$(".lang_nl").addClass("lang_active");
		$(".lang_fr").removeClass("lang_active");
		$(".fb_btn").css({"left": "685px"});
		lang="nl";
		//switch_product();
		//switch_product_lang();
		//return false;
	});*/
	
	
});



function switch_product_lang(){
		if($('.honney_bottle').css("display") == ("block")){ 
			if (lang == "nl"){
				$('.product_text_honing, .honney_bottle, .product_honing').stop().fadeIn().css("display", "block");
				$('.product_text_choco, .choco_bottle').stop().fadeOut().css("display", "none");
				
				$('.product_text_honing_fr, .product_miel').stop().fadeOut().css("display", "none");
				$('.product_text_choco_fr').stop().fadeOut().css("display", "none");
			}
			if (lang == "fr"){
				$('.product_text_honing_fr, .honney_bottle, .product_miel').stop().fadeIn().css("display", "block");
				$('.product_text_choco_fr, .choco_bottle').stop().fadeOut().css("display", "none");
				
				$('.product_text_choco_fr').css({"position": "absolute",
					"font-family": "blue_highwaybold",
					"font-size": "16px",
					"color": "#FF0000",
					"text-decoration": "none",
					"line-height": "130%",
					"letter-spacing": "0px",
					"margin-top": "120px"
				});
				
				$('.product_text_honing, .product_honing').stop().fadeOut().css("display", "none");
				$('.product_text_choco').stop().fadeOut().css("display", "none");
			}
		}
		else {
			if (lang == "nl"){
				$('.product_text_honing, .honney_bottle, .product_honing').stop().fadeOut().css("display", "none");
				$('.product_text_choco, .choco_bottle').stop().fadeIn().css("display", "block");
				
				$('.product_text_honing_fr').stop().fadeOut().css("display", "none");
				$('.product_text_choco_fr').stop().fadeOut().css("display", "none");
			}
			if (lang == "fr"){
				$('.product_text_honing_fr, .honney_bottle, .product_miel').stop().fadeOut().css("display", "none");
				$('.product_text_choco_fr, .choco_bottle').stop().fadeIn().css("display", "block");
				
				$('.product_text_honing').stop().fadeOut().css("display", "none");
				$('.product_text_choco').stop().fadeOut().css("display", "none");
			}
		}
}

/*$(document).ready(function(){
		$('.menu_btn_1').click(function(e){
			e.preventDefault();
			$('body').stop().animate({
      	'backgroundPosition-x': '-=500px'}, 1500);
      		$(".homepage_1").stop().animate({
		left: '-=2000px'}, 1200);
			$(".homepage_2").stop().animate({
		right: '+=2200px'}, 1300);
			$(".homepage_3").stop().animate({
		left: '-=1500px'}, 1800);
	});
		$('.menu_btn_2').click(function(e){
			e.preventDefault();
			$('body').stop().animate({
		'backgroundPosition-x': '-=500px'}, 1500);
			$('.spaarkaart_1').stop().animate({
		left: '-=2000px'}, 1500);
			$('.spaarkaart_2').stop().animate({
		left: '-=2200px'}, 1200);
			$('.spaarkaart_3').stop().animate({
		left: '-2000px'}, 1800);
	});
		$('.menu_btn_3').click(function(e){
			e.preventDefault();
			$('body').stop().animate({
		'backgroundPosition-x': '-=500px'}, 1500);
			$('.producten_1').stop().animate({
		left: '-=2500px'}, 1800);
			$('.producten_2').stop().animate({
		left: '-=2200px'}, 1500);
			$('.producten_3').stop().animate({
		left: '-2500px'}, 3000);
	});
		$('.logo').click(function(e){
			e.preventDefault();
			$('body').stop().animate({
		'backgroundPosition-x': '-=500px'}, 1500);
			$('.reglement_1').stop().animate({
		left: '-=2500px'}, 1800);
			$('.reglement_2').stop().animate({
		left: '-=2200px'}, 1500);
			$('.reglement_3').stop().animate({
		left: '-2500px'}, 3000);
	});


$(window).load(function(){
		$("#products, #reglement, #spaarkaart").css({"display": "block"});
		$(".maya_1").animate({top: "-=620px"}, 500, 'easeInOut');
		$(".maya_2").animate({top: "-=620px"}, 750, 'easeInOut');
		$(".maya_3").animate({top: "-=620px"}, 700, 'easeInOut');
		$(".maya_home").animate({'left': 623},{ queue:false, duration:2500 },'easeOut').animate({'top': 53}, 3000, 'expoout');
		/*$(".maya_home").animate({'top': 53}, 3000, 'backout');*/
			/*left: [623, 'easeOut'],			
			top: [53, 'backout']
			}, 2500);*/
	/*});
});*/
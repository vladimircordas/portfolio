// CLICK FUNCTION TO SECTION
$(document).ready(function() {
    $("#about-btn, #omeni-btn").click(function() {
        $('html, body').stop().animate({
            scrollTop: $("#about").position().top - 120
        }, 800);
    });
    $("#mywork-btn, #mojiradovi-btn").click(function() {
        $('html, body').stop().animate({
            scrollTop: $("#work").position().top - 80
        }, 800);
    });
    $("#contact-us-btn, #kontakt-btn").click(function() {
        $('html, body').stop().animate({
            scrollTop: $("#contactme").position().top - 120
        }, 800);
    });
    $("#intro-btn, #uvod-btn").click(function() {
        $('html, body').stop().animate({
            scrollTop: $("body").position().top
        }, 800);
    });
    $("#get-in-touch-btn, #get-in-touch-btn-srb").click(function() {
        $('html, body').stop().animate({
            scrollTop: $("#contactme").position().top - 120
        }, 800);
    });
});

$(document).ready(function() {
        $("#lng-srb").click(function() {
        $('.lng-eng').css('display', 'none');
        $('.lng-srb').css('display', 'block');
        $('#lng-eng').removeClass('lng-active');
        $('#lng-srb').addClass('lng-active');
        $('.lng-eng').addClass('lng-display-none-nav');
        $('.lng-srb').removeClass('lng-display-none-nav');
    });
    $("#lng-eng").click(function() {
        $('.lng-srb').css('display', 'none');
        $('.lng-eng').css('display', 'block');
        $('#lng-srb').removeClass('lng-active');
        $('#lng-eng').addClass('lng-active');
        $('.lng-srb').addClass('lng-display-none-nav');
        $('.lng-eng').removeClass('lng-display-none-nav');
    });
});
/*
$(document).ready(function() {
    var width = $(window).width();
    if (width < 992) {
        $("#canvas").hide();
        $("#about").css('margin-top', '100px');
    } else if ( width >= 993 ) {
        $("#canvas").show();
        $("#about").css('margin-top', '0px');
    }
});
*/
// GO TO TOP ON PAGE RELOAD
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});





// SCROLL MENU SECTION INDICATION
$(document).ready(function() {

    /**
     * This part causes smooth scrolling using scrollto.js
     * We target all a tags inside the nav, and apply the scrollto.js to it.
     */
/*   $("nav a").click(function(evn) {
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash);
    });
*/
    /**
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and 
     * manipulation, class adding and class removing, and conditional testing
     */
    var aChildren = $("nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i = 0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function() {
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top - 150; // get the offset of the div from the top of page
           
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("nav-active");
            } else {
                $("a[href='" + theID + "']").removeClass("nav-active");
            }
        }

        if (windowPos + windowHeight == docHeight) {
            if (!$("nav li:last-child a").hasClass("nav-active")) {
                var navActiveCurrent = $(".nav-active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                $("nav li:last-child a").addClass("nav-active");
            }
        }
    });
});

window.onload=function(){
document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });
}

$(document).ready(function(){
    $(".form-group").focus(function(){
        $(".control-label").addClass('.focused');
    });
    $("input, textarea").blur(function(){
        $(this).next(".control-label").removeClass('focused');
    });
    $(".menu-buttons, .musicButtons").click(function (e) {
        
        // Remove any old one
        $(".ripple").remove();
      
        // Setup
        var posX = $(this).offset().left,
            posY = $(this).offset().top,
            buttonWidth = $(this).width(),
            buttonHeight =  $(this).height();
        
        // Add the element
        $(this).prepend("<span class='ripple'></span>");
      
        
       // Make it round!
        if(buttonWidth >= buttonHeight) {
          buttonHeight = buttonWidth;
        } else {
          buttonWidth = buttonHeight; 
        }
        
        // Get the center of the element
        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2;
        
       
        // Add the ripples CSS and start the animation
        $(".ripple").css({
          width: buttonWidth,
          height: buttonHeight,
          top: y + 'px',
          left: x + 'px'
        }).addClass("rippleEffect");
      });
});


    

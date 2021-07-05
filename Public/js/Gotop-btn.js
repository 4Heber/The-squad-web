$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40) {
            $("#gotop-btn").fadeIn();
        }
        else{$("#gotop-btn").fadeOut();
        }
    });

    $("#gotop-btn").click(function(){
        $('html ,body').animate({scrollTop : 0}, 1200);
    });
});
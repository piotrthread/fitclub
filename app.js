$(function() {
    //--------SLIDER
    let index = 1;
    let slider = $(".slider");
    let slides = $(".slides");
    let slide = $(".slide");
    let controls = $(".dot");
    $(controls[0]).addClass("dot-active");

    function startSlider(){
        interval = setInterval(function () {
             $(slides).animate({'margin-left':'-=100vw'}, 1500, function () {
                 index++;
                 if(index === slide.length){
                     index = 1;
                     $(slides).css({'margin-left':'0'});
                 }
                 if(index == 1){
                    $(controls[0]).addClass("dot-active");
                    $(controls[1]).removeClass("dot-active");
                    $(controls[2]).removeClass("dot-active");
                 }
                 if(index == 2){
                    $(controls[1]).addClass("dot-active");
                    $(controls[0]).removeClass("dot-active");
                    $(controls[2]).removeClass("dot-active");
                 }
                 if(index == 3){
                    $(controls[2]).addClass("dot-active");
                    $(controls[0]).removeClass("dot-active");
                    $(controls[1]).removeClass("dot-active");
                 }
                 if(index == 4){
                    $(controls[0]).addClass("dot-active");
                    $(controls[1]).removeClass("dot-active");
                    $(controls[2]).removeClass("dot-active");
                 }
             });
         },3500);
    }
 
    function stopSlider() {
        clearInterval(interval);
    }

    $(slider).on('mouseenter', stopSlider);
    $(slider).on('mouseleave', startSlider);
    startSlider();

//------------SLIDER CONTROLS
    
        $(controls[0]).on("click", function(){
            $(slides).animate({'margin-left':'0vw'}, 1500);
            $(this).addClass("dot-active");
            $(controls[1]).removeClass("dot-active");
            $(controls[2]).removeClass("dot-active");
        });
        $(controls[1]).on("click", function(){
            $(slides).animate({'margin-left':'-100vw'}, 1500);
            $(this).addClass("dot-active");
            $(controls[0]).removeClass("dot-active");
            $(controls[2]).removeClass("dot-active");
        });
        $(controls[2]).on("click", function(){
            $(slides).animate({'margin-left':'-200vw'}, 1500);
            $(this).addClass("dot-active");
            $(controls[0]).removeClass("dot-active");
            $(controls[1]).removeClass("dot-active");
        });

//------------PARALAX
    let header = $(".paralax");
    let products = $(".articles .container");
    $(window).on("scroll", function(){
        let scroll = $(window).scrollTop();
        let margin = -250 + (scroll*0.6);
        $(header).css({"background-position-y" : margin});
        if(window.innerWidth > 1004 ){
            if(scroll > 1500){
                $(products).css({"top": "160px"});
            }else{
                $(products).css({"top": "800px"});
            }
        }else{
            if(scroll > 1100){
                $(products).css({"top": "160px"});
            }else{
                $(products).css({"top": "800px"});
            }
        }
        
    });

    
    


});

//1050
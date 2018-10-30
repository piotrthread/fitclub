$(function() {
    //--------SLIDER
    let index = 1;
    let slider = $(".slider");
    let slides = $(".slides");
    let slide = $(".slide");

    function startSlider(){
        interval = setInterval(function () {
             $(slides).animate({'margin-left':'-=100vw'}, 1500, function () {
                 index++;
                 if(index === slide.length){
                     index = 1;
                     $(slides).css({'margin-left':'0'});
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
//------------PARALAX
    let header = $(".paralax");
    let products = $(".articles .container");
    $(window).on("scroll", function(){
        let scroll = $(window).scrollTop();
        let margin = -250 + (scroll*0.6);

        $(header).css({"background-position-y" : margin});

        if(scroll > 1500){
            $(products).css({"top": "160px"});
        }else{
            $(products).css({"top": "800px"});
        }
    });

    
    


});

//1050
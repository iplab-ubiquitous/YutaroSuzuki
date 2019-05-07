$(function(){
    revisePadding();
    $(window).on("resize",revisePadding);

    function revisePadding(){
        $(".background_img").css({
            "padding-top":$("header")[0].offsetHeight + "px",
        });
    }
});

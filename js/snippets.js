$(document).ready(function(){
    
    // Mainmenu linkbox
    
    // hide mainmenu
    $('.optionsSubmenu').hide();
    $('.optionsMainmenu li').click(function() {
        $('.optionsSubmenu').slideToggle();
        $('.optionsMainmenu').slideToggle();
    });

    // raty
    $('.rates').raty({
        starOff: 'img/rate-off.png',
        starOn : 'img/rate-on.png',
        hints: ['rossz', 'elmegy', 'atlagos', 'jo', 'szuper']
    });
    
     // articleBox hover
    $('.articleBox', this).mouseenter(function() {
        $('.activeLayer', this).fadeTo(200, 0.7, function () {
            $("span").fadeIn(100);
        });
    });
    $('.articleBox', this).mouseleave(function() {
        $('.activeLayer', this).fadeOut(100);
    });
    
    // CONTENT SCROLL
    
    (function($){
        $(window).load(function(){
            $(".contentScroll").mCustomScrollbar({
            autoDraggerLength:false
          });
        });
    })(jQuery);
    
    // GALLERY

    $(function() {
      $('.snippetGallery').slidesjs({
        width: 470,
        height: 270,
        pagination: {
            active: false
        },
        navigation: {
            active: false
        }
      });
    });
    
    // BIG TARGET
    $(".homepage .articleBox .image, .homepage .articleBox .articleBoxContent").click(function(){
    	window.location=$(this).parents(".articleBox").find("a.hiddenLink").attr("href");return false;
    });
});
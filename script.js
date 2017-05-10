/*==================================================================
 Smooth Scroll Function
==================================================================*/

$(function () {
        $('a[href^=#]').click(function () {
                var speed = 800;
                var href = $(this).attr("href");
                var target = $(href == "#" || href == "" ? 'html' : href);
                var position = target.offset().top + 0;
                $("html, body").animate({
                        scrollTop: position
                    }, speed, "swing");
                return false;
            });
    });

/*==================================================================
 Window Resize Function
==================================================================*/


var timer = false;
var x = 600;
$(window).resize(function() {
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
    var w = $(window).width();
		console.log(w);
		if (w <= x) {
        $('#element').css({
            'background-color': '#333'
        });
    } else {
        $('#element').css({
           'background-color': '#fff'
        });
    }
	}, 200);
});	

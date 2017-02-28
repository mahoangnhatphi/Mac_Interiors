$(function () {

    $(window).load(function () {
        var deviceWidth = $(window).outerHeight();
        $('#load_screen').css('height', $(window).outerHeight() + 'px');
        setTimeout(function () {
            $('#load_screen').fadeOut(1000);
            $('#content-wrapper').fadeIn(500);
        }, 4000);
    });

    $('#bar').click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        $('#third').hide();
        $('#first').css({
            transition: 'all 0.5s ease-in-out',
            transform: 'rotate(45deg) translate(20%, 310%)',
            'background-color': 'white'
        });

        $('#second').css({
            transition: 'all 0.5s ease-in-out',
            transform: 'rotate(135deg)',
            'background-color': 'white'
        });
        $('.menu-title').show();
        /*$('.menu-title').animate({
            marginLeft: '550px'
        }, {
            queue: true,
            duration: 5000
        });*/

        $('#menu-title-wrapper').css({
            'opacity': '1'
        });
        for (var i = 1; i <= 11; i++) {
            var stringID = '#title' + i;
            $(stringID).animate({
                marginLeft: '100px',
                marginTop: '15px',
                opacity: '1',
            }, 100 * i);
        }
        $('#menu').css({
            transform: 'translateX(0px)'
        });
        setTimeout(function () {
            $('#bar').hide();
        }, 400);
    });

    $('#close-button').click(function () {
        $('#menu').css({
            transform: 'translateX(-700px)'
        });
        $('#bar').show();
        $('#third').show();
        $('#first').css({
            transform: 'rotate(0deg) translate(0, 0)',
            'background-color': '#FFEF00'
        });

        $('#second').css({
            transform: 'rotate(0deg)',
            'background-color': '#FFEF00'
        });
        $('.menu-title').hide();
        $('.menu-title').css('margin-left', '50px');
        $('.menu-title').css('margin-top', '-50px');
        $('#menu-title-wrapper').css({
            'opacity': '0'
        });
    });

    $('#header-negator').click(function () {
        $("html, body").animate({
            scrollTop: $('#header').offset().top
        }, 1000);
    });


    var checkHover = false;

    $('#header-negator').mouseover(function () {
        checkHover = true;
    });

    $('#header-negator').mouseleave(function () {
        checkHover = false;
    });

    var loop = function () {
        if (checkHover)
            $('#header-negator img').animate({
                paddingTop: '7px'
            }, 500, function () {
                $('#header-negator img').animate({
                    paddingTop: '0px'
                }, 100);
            });
    }

    setInterval(loop, 1000);


    $(window).scroll(function () {
        var view = $(window).scrollTop();
        var displayView = $(window).outerHeight();
        if (view > displayView) {
            $('#header').css({
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'z-index': 100,
                'opacity': '0.8'
            });
        } else {
            $('#header').css({
                'position': 'relative',
                'opacity': '1'
            });
        }
    });
});
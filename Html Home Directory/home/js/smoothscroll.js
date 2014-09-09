var Parallax = {
    utils: {
        doSlide: function(section) {
            var top = section.position().top;
            $('#wrap').stop().animate({
                top: -top
            }, 600, 'linear', function() {
                section.addClass('slided').siblings('div.sektion').removeClass('slided');
            });
        }
    },
    fn: {
        setHeights: function() {
            $('div.sektion').height($(window).height());
        },
        onSiteScroll: function() {
            var section = null;

            $('#wrap').mousewheel(function(event, delta) {
                event.preventDefault();
                if (delta < 0) { // down
                    section = ($('.slided').length) ? $('.slided') : $('#stage');
                    var next = (section.next().length) ? section.next() : $('#stage');
                    Parallax.utils.doSlide(next);
                }
                else if(delta > 0) { // up
                    section = ($('.slided').length) ? $('.slided') : $('#stage');
                    var prev = (section.prev().length) ? section.prev() : $('#stage');
                    Parallax.utils.doSlide(prev);
                }
            });


        }
    },

    init: function() {
        for (var prop in this.fn) {
            if (typeof this.fn[prop] === 'function') {
                this.fn[prop]();
            }
        }
    }
};

Parallax.init();​
$(document).ready(function() {    
    
    $("#work-btn").click(function(){            
        $('html, body').animate({
                scrollTop: $("#shop").position().top-50
            }, 1000);
    });
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    $('.list-group>a').on('click', function(){
        $('#wrapper').toggleClass('toggled');
        
        $('#hamburger').removeClass('fa-times');
        $('#hamburger').addClass('fa-bars');

    });
    

    $("#hamburger").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        
        $("#hamburger").toggleClass("fa-bars");
        $("#hamburger").toggleClass("fa-times");
        $(".push-wrapper").toggleClass('push');
        
      });
    $("#nav-home").click(function(){            
        $('html, body').animate({
                scrollTop: $("#body").position().top-50
            }, 1000);
            $(".push-wrapper").toggleClass('push');

    });

    $("#nav-contact").click(function(){            
        $('html, body').animate({
                scrollTop: $("#contact").position().top-70
            }, 1000);
    });

    $("#nav-scriptures").click(function(){            
        $('html, body').animate({
                scrollTop: $("#scriptures").position().top-100
            }, 1000);
    });

    $("#nav-books").click(function(){            
        $('html, body').animate({
                scrollTop: $("#books").position().top-100
            }, 1000);
    });

    $("#nav-articles").click(function(){            
        $('html, body').animate({
                scrollTop: $("#articles").position().top-100
            }, 1000);
    });

    $("#nav-videos").click(function(){            
        $('html, body').animate({
                scrollTop: $("#videos").position().top-100
            }, 1000);
    });

    $("#top-icon").click(function(){            
        $('html, body').animate({
                scrollTop: $("#body").position().top-0
            }, 1000);
    });
    $("#thumb-1, #thumb-2, #thumb-3, #thumb-4, #thumb-5, #thumb-6").mouseenter(function(){
        $(this).find('.text').animate({top: '+=35%'}, '200');
        $(this).find('button').animate({bottom: '+=25%'}, '200');
      });
    $("#thumb-1, #thumb-2, #thumb-3, #thumb-4, #thumb-5, #thumb-6").mouseleave(function(){
        $(this).find('.text').animate({top: '-=35%'}, '200');
        $(this).find('button').animate({bottom: '-=25%'}, '200');
      });
      $('.modal').on('hide.bs.modal', function() {
        var memory = $(this).html();
        $(this).html(memory);
      })


    
})


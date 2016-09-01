$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).parent().removeClass('active');
        })
        $(this).parent().addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 70
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

     //Highlight the correct menu item
    var scrollPos = $(document).scrollTop();
    $('.sidebar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position() != undefined || refElement.position() != null) {
        if (refElement.position().top - 50 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-sidebar li').removeClass("active");
            currLink.parent().addClass("active");
        }
        else{
            currLink.parent().removeClass("active");
        }
        }
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();

    $('.sidebar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position() != undefined || refElement.position() != null) {
        if (refElement.position().top - 50 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-sidebar li').removeClass("active");
            currLink.parent().addClass("active");
        }
        else{
            currLink.parent().removeClass("active");
        }
        }
    });
}

function runGetRequest(url, responseArea) {
    console.log("GET URL: " + url);
    $(responseArea).find("span").show();
    $.ajax( url )
        .done(function(response) {
            $(responseArea).empty();
            $(responseArea).jsonViewer(response, {collapsed: true, withQuotes: true});
        })
        .fail(function() {
            $(responseArea).empty();
            $(responseArea).text('I am awesome');
    });
}

function runPostRequest(url, payload, responseArea) {
    console.log("POST URL: " + url);
    $(responseArea).find("span").show();
    $.post(url, payload)
        .done(function(response) {
            $(responseArea).empty();
            $(responseArea).jsonViewer(response, {collapsed: true, withQuotes: true});
        })
        .fail(function() {
            $(responseArea).empty();
            $(responseArea).text('I am awesome');
    });
}
$(document).ready(function() {

    $('nav.navbar').on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });

    // Initialize main nav.
    $("#mainNav a").on("click", function() {
       $(".nav").find(".active").removeClass("active");
       $(this).parent().addClass("active");
    });

    // Initialize tabs for Sunday Messages
    $('#messageTabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('#audio2_html5_white').audio2_html5({
        skin: 'whiteControllers',
        autoPlay:false,
        initialVolume:0.1,
        responsive:true,
        shuffle:false,
        playerWidth:570,
        songTitleColor: '#f9f9f9',
        showPlaylistNumber:false,
        showShuffleBut:false,
        showFacebookBut:false,
        showTwitterBut:false,
        showBuyBut:false,
        showLyricsBut:false,
        showAuthor:false
    });
});

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

    // dataTables
    // $('table.messages').DataTable({
    //     responsive: true
    // });

    // Audio Player
    $('audio').audioPlayer();
});

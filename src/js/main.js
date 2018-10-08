$(document).ready(function() {

    $('nav.navbar').on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });

    $(".nav a").on("click", function(){
       $(".nav").find(".active").removeClass("active");
       $(this).parent().addClass("active");
    });

    $('#myTabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // dataTables
    $('table.messages').DataTable();
});

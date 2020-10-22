$(document).ready(function() {
    var filterizd = $(".filtr-container").filterizr({});

    $(".listaFiltroItem").on('click', function() {
        $(".listaFiltroItem").removeClass("active");
        $(this).addClass("active");
    });
});
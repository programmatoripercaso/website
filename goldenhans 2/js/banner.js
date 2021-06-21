let $banner = '<div id="carousel-example-generic" class="carousel slide bigBanner" data-ride="carousel"> ' +

    '<ol class="carousel-indicators"> ' +
    '    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li> ' +
    '    <li data-target="#carousel-example-generic" data-slide-to="1"></li> ' +
    '    <li data-target="#carousel-example-generic" data-slide-to="2"></li> ' +
    '    <li data-target="#carousel-example-generic" data-slide-to="3"></li> ' +
    '    <li data-target="#carousel-example-generic" data-slide-to="4"></li> ' +

    '</ol> ' +


    '<div class="carousel-inner banner_hans" role="listbox"> ' +
    '<div class="item active"> ' +
    '    <img src="./img/banner.png" class="img-responsive" alt="Responsive image"> ' +
    '</div> ' +
    '<div class="item"> ' +
    '    <img src="./img/banner1.png" class="img-responsive" alt="Responsive image"> ' +
    '    <div class="carousel-caption"> ' +

    '    </div> ' +
    '</div> ' +
    '<div class="item"> ' +
    '    <img src="./img/banner2.png" class="img-responsive" alt="Responsive image"> ' +
    '    <div class="carousel-caption"> ' +

    '   </div> ' +
    '</div> ' +
    '<div class="item"> ' +
    '    <img src="./img/banner3.png" class="img-responsive" alt="Responsive image"> ' +
    '    <div class="carousel-caption"> ' +

    '    </div> ' +
    '</div> ' +
    '<div class="item"> ' +
    '    <img src="./img/banner4.png" class="img-responsive" alt="Responsive image"> ' +
    '    <div class="carousel-caption"> ' +

    '    </div> ' +
    '</div> ' +
    '</div> ' +


    '<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev"> ' +
    '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> ' +
    '<span class="sr-only">Previous</span> ' +
    '</a> ' +
    '<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next"> ' +
    '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> ' +
    '<span class="sr-only">Next</span> ' +
    '</a> ' +
    '</div>'
$(document).ready(function() {
    $('#banners').append($banner)
})
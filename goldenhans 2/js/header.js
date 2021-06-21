$(document).ready(function() {
    let $header = '<nav class="navbar navbar-default navbar-fixed-top"> ' +
        '<div class="container-fluid container nav_bar_hans"> ' +
        ' <div class="navbar-header"> ' +
        '        <button type="button" class="navbar-toggle collapsed" onclick="addClass()" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> ' +
        '            <span class="sr-only">Toggle navigation</span> ' +
        '            <span class="icon-bar"></span> ' +
        '           <span class="icon-bar"></span> ' +
        '            <span class="icon-bar"></span> ' +
        '        </button> ' +
        '    </div> ' +

        '    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> ' +
        '        <ul class="nav navbar-nav navbarCenter"> ' +
        '            <li><a href="./index.html">HOMEPAGE</a></li> ' +
        '            <li><a href="./piatti_tipici.html">PIATTI TIPICI</a></li> ' +
        '            <li><a href="./about_us.html">ABOUT US</a></li> ' +
        '            <li><a href="./chef.html">CHEF</a></li> ' +
        '            <li><a href="./contattaci.html">CONTATTACI</a></li> ' +
        '        </ul> ' +
        '        <ul class="nav navbar-nav navbar-right changeLanguage"> ' +
        '           <li><a>CINESE</a></li> ' +
        '           <li class="null_line"><a>|</a></li> ' +
        '           <li><a>ITALIANO</a></li> ' +
        '       </ul> ' +
        '   </div> ' +

        '</div> ' +
        '</nav>'
    $('#headers').append($header)
})
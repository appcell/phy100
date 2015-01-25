$(document).ready(function () {
    $('.modify').height($('#container').height());
    $(window).resize(function () {
        $('.modify').height($('#container').height());
    });
});


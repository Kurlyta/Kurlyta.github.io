$(document).ready(function () {
    $('#request').click(function () {
        $('.form-input').toggleClass('visible');
    });

    $('#close-request').click(function () {
        $('.form-input').removeClass('visible');
    });
});
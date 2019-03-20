$(document).ready(function () {
    $('#request').click(function () {
        $('.form-input').toggleClass('visible');
        $('.button-wrapper-left').toggleClass('show');
        $('.button-wrapper-right').toggleClass('show');
    });

    $('#close-request').click(function () {
        $('.form-input').removeClass('visible');
      $('.button-wrapper-left').removeClass('show');
      $('.button-wrapper-right').removeClass('show');
    });
});
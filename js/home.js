$(document).ready(function(){
    $('#goHome').click(function(){
        $('.home').css('display', 'block');
        $('.active_details').css('display', 'none');
        $('.hobby').css('display', 'none');
        $('.mail').css('display', 'block');
        $('#goHome').css('font-weight' ,'bold');
        $('#goHome').css('color' ,'black');
        $('#goActive').css('font-weight' ,'400');
        $('#goActive').css('color' ,'gray');
        $('#goHobby').css('font-weight' ,'400');
        $('#goHobby').css('color' ,'grey');
        if($(window).width() <= 800){$('.menu').slideToggle();}
    });
});
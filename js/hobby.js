$(document).ready(function(){
    $('#goHobby').click(function(){
        $('.home').css('display', 'none');
        $('.active_details').css('display', 'none');
        $('.hobby').css('display', 'block');
        $('.mail').css('display', 'block');
        $('#goHome').css('font-weight' ,'400');
        $('#goHome').css('color' ,'gray');
        $('#goActive').css('font-weight' ,'400');
        $('#goActive').css('color' ,'gray');
        $('#goHobby').css('font-weight' ,'bold');
        $('#goHobby').css('color' ,'black');
        if($(window).width() <= 800){$('.menu').slideToggle();}
    });
    
});
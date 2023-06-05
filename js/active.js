$(document).ready(function(){
    $('#goActive').click(function(){
        $('.home').css('display', 'none');
        $('.active_details').css('display', 'block');
        $('.hobby').css('display', 'none');
        $('.mail').css('display', 'none');  
        $('#goActive').css('font-weight' ,'bold');
        $('#goActive').css('color' ,'black');
        $('#goHome').css('font-weight' ,'400');
        $('#goHome').css('color' ,'gray');
        $('#goHobby').css('font-weight' ,'400');
        $('#goHobby').css('color' ,'grey');
        $('.two-one').css('display', 'inline');
        $('.one-two').css('display', 'inline');
        $('.one-one').css('display', 'inline');
        if($(window).width() <= 800){$('.menu').slideToggle();}
    });
    $('#goTO').click(function(){
        $('.two-one').css('display', 'inline');
        $('.one-two').css('display', 'none');
        $('.one-one').css('display', 'none');
    });
    $('#goOT').click(function(){
        $('.two-one').css('display', 'none');
        $('.one-two').css('display', 'inline');
        $('.one-one').css('display', 'none');
    });
    $('#goOO').click(function(){
        $('.two-one').css('display', 'none');
        $('.one-two').css('display', 'none');
        $('.one-one').css('display', 'inline');
    });
});
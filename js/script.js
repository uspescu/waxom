function GetClock(){
var d=new Date();
var nhour=d.getHours(),nmin=d.getMinutes();
if(nmin<=9) nmin="0"+nmin

document.getElementById('clockbox').innerHTML=""+nhour+":"+nmin+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
}




  $(document).ready(function(){
    $('#homeslider').bxSlider();
    });


      $(document).ready(function(){
    $('.text1').hover(function() {
  $('.text1 h4').css('color','#c7b299');
  }, function(){
  $('.text1 h4').css('color','black');
  });

  $('.text2').hover(function() {
$('.text2 h4').css('color','#c7b299');
}, function(){
$('.text2 h4').css('color','black');
});

$('.text3').hover(function() {
$('.text3 h4').css('color','#c7b299');
}, function(){
$('.text3 h4').css('color','black');
});

$('.text4').hover(function() {
$('.text4 h4').css('color','#c7b299');
}, function(){
$('.text4 h4').css('color','black');
});


$('.photo-projects').hover(function(){
  $(this).find('.p-text').css('background-color','#362f2d');
  $(this).find('.p-text h4').css('color','#fff');
  $(this).find('.p-text p').css('color','#c7b299');
}, function(){
  $(this).find('.p-text').css('background-color','#fbfaf8');
  $(this).find('.p-text h4').css('color','#c7b299');
  $(this).find('.p-text p').css('color','#d1d1d1');
});

$('.photo-projects').hover(function(){
  $(this).find('.icons').toggle();
});


$('.user').hover(function(){
  $(this).find('i').css('color','#fff');
  $(this).find('h2').css('color','#c7b299');
}, function(){
  $(this).find('i').css('color','#c7b299');
  $(this).find('h2').css('color','#fff');
});


$('.photo-slide').hover(function(){
  $(this).find('.photo-text').css('background-color','#362f2d');
  $(this).find('.photo-text h4').css('color','#c7b299');
  $(this).find('.photo-text p').css('color','#fff');
  $(this).find('.photo-text a').css('color','#c7b299');

}, function(){
  $(this).find('.photo-text').css('background-color','#fff');
  $(this).find('.photo-text h4').css('color','#656565');
  $(this).find('.photo-text p').css('color','#8c8c8c');
  $(this).find('.photo-text a').css('color','#656565');

});



$(".photo-slide").hover(function() {
$(this).find( '.date' ).attr("src","images/date-hover.png");
}, function() {
  $(this).find(".date").attr("src","images/date.png");
});

$(document).ready(function(){
  $('.slider1').bxSlider({
    slideWidth: 320,
    slideMargin: 10
  });
});

$(document).ready(function(){
  $('.bxslider').bxSlider();
});


        jQuery( document ).ready(function() {
          $('.resp-button').click(function(){
            $('.nav').slideToggle(0);
          });
        });



});

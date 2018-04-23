$(document).ready(function(){  
  $('.question').click(function(){
    var next = $(this).next('.content');
    $(this).siblings('.content').not(next).slideUp("fast");
    next.slideToggle("fast");
  });
  
  $(".content").click(function(){
    $(this).siblings('.content').slideUp("fast");
    $(this).slideToggle("fast");
  });
});

$(function(){
  $(".question").click(function(e){
    e.preventDefault();
    $('html,body').scrollTo(this.hash,this.hash); 
  });
});
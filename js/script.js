$(document).ready(function(){



  $("#contactpage").hide();
  $("#projectspage").hide();

  //animate from clicking navbar
  $("#about").click(function(){
      $("#shape").animate({right:"22.5em"});
      $("#projectspage").fadeOut();
      $("#contactpage").fadeOut();
      $("#aboutpage").fadeIn();
  });
  $("#projects").click(function(){
      $("#shape").animate({right:"15em"});
      $("#contactpage").fadeOut();
      $("#aboutpage").fadeOut();
      $("#projectspage").fadeIn();

  });
  $("#contact").click(function(){
      $("#shape").animate({right:"7.5em"});
      $("#projectspage").fadeOut();
      $("#aboutpage").fadeOut();
      $("#contactpage").fadeIn();
  });
  $("#resume").click(function(){
    $("#shape").animate({right:"0em"});
    $("#projectspage").fadeOut();
    $("#aboutpage").fadeOut();
    $("#contactpage").fadeOut();
    $('a[href$=".pdf"]').prop('Resume-Spring 2016 1.06.pdf', '_blank');
  });


});



/*function fadePages(bool about, bool projects, bool contact){

}*/

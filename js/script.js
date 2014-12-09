$(document).ready(function(){



  $("#contactpage").hide();
  $("#projectspage").hide();

  //animate from clicking navbar
  $("#about").click(function(){
      $("#shape").animate({right:"15em"});
      $("#projectspage").fadeOut();
      $("#contactpage").fadeOut();
      $("#aboutpage").fadeIn();
  });
  $("#projects").click(function(){
      $("#shape").animate({right:"7.5em"});
      $("#contactpage").fadeOut();
      $("#aboutpage").fadeOut();
      $("#projectspage").fadeIn();

  });
  $("#contact").click(function(){
      $("#shape").animate({right:"0em"});
      $("#projectspage").fadeOut();
      $("#aboutpage").fadeOut();
      $("#contactpage").fadeIn();
  });
  


});



/*function fadePages(bool about, bool projects, bool contact){

}*/

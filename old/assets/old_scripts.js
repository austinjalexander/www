$(document).ready(function() {

    var languages = {
      strings: ["Python, Ruby, Java  "],
      typeSpeed: 50
    }
    var web_frameworks = {
      strings: ["Ruby on Rails, Django  "],
      typeSpeed: 50
    }
    var interests = {
      strings: ["AI, Data Science, Optimization, SW Engin, Web App Dev  "],
      typeSpeed: 50
    }
    var libraries = {
      strings: ["Pandas, NumPy, SciPy, Matplotlib, scikit-learn, jQuery, D3  "],
      typeSpeed: 50
    }
    var data_stores = {
      strings: ["PostgreSQL, MongoDB  "],
      typeSpeed: 50
    }
    var techniques = {
      strings: ["Machine Learning  "],
      typeSpeed: 50
    }

    $("#languages_button").click(function(){
      $("#typed-cursor").remove();
      $("#output").replaceWith("<span id='output'></span>");
      $("#output").typed(languages);
    });
    $("#web_frameworks_button").click(function(){
      $("#typed-cursor").remove();
      $("#output").replaceWith("<span id='output'></span>");
      $("#output").typed(web_frameworks);
    });
    $("#interests_button").click(function(){
      $("#typed-cursor").remove();
      $("#output").replaceWith("<span id='output'></span>");
      $("#output").typed(interests);
    }); 
    $("#libraries_button").click(function(){
      $("#typed-cursor").remove();
      $("#output").replaceWith("<span id='output'></span>");
      $("#output").typed(libraries);
    });
    $("#data_stores_button").click(function(){
      $("#typed-cursor").remove();
      $("#output").replaceWith("<span id='output'></span>");
      $("#output").typed(data_stores);
    });
    $("#techniques_button").click(function(){
      $("#typed-cursor").remove();
      $("#output").replaceWith("<span id='output'></span>");
      $("#output").typed(techniques);
    });

});


$(document).keydown(function(e) {
  if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
    $("#gatekeeper").click(function() {
      $(this).slideUp();
      $("body").fadeOut(2000);
      setTimeout(theNet, 3000);
      function theNet() { 
        window.location = "https://www.youtube.com/watch?v=pXPXMxsXT28";
      }
    });
  }
});

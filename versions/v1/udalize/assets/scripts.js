var api_url = "https://udalize.herokuapp.com";

"use strict";
$(document).ready(function() {
  $.getJSON(api_url, function(data) {
    $.each(data, function(key, values) {
      
      var appendResources = function appendResourcesF(div, resources) {
        for (var i = 0; i < resources.length; i++) {

          var html = "<p><a href='" + api_url + resources[i];
              html += "' target='_blank'>" + resources[i]
              html += "</a></p>"

          $(div).append(html);
        }
      };
      
      appendResources("#course_resources", values[0]['course']);
      appendResources("#degree_resources", values[1]['degree']);

    });
  });

});
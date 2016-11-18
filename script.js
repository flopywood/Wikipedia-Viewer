$(document).ready(function() {

  $("#search").click(function() {

    var searchTerm = document.getElementById("searchTerm").value;
    var wikiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&limit=10&format=json&callback=?";

    $.ajax({
      type: "GET",
      url: wikiURL,
      dataType: "jsonp",
      success: function(data) {
       // console.log(data);

        document.getElementById("wikiSearchResults").innerHTML = "";

        var title = data[1];
        var summaries = data[2];
        var links = data[3];

        for (i = 0; i < title.length; i++) {

          document.getElementById("wikiSearchResults").innerHTML += "<div id='row'><div class='col-md-6 col-md-offset-3'></div><a href=" + links[i]  + "><div class='result col-md-6 col-md-offset-3'><h3>" + title[i] + "</h3><blockquote>" + summaries[i] + "</blockquote></a><div class='col-md-6 col-md-offset-3'></div></div>";
        }
        console.log(title[0] + summaries[0] + links[0]);


      },
      error: function(displayErrorMessage) {
        alert("Error");
      },
    });

  });

});

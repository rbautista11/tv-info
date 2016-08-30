
//Gets user selected text
chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    findID(selection[0], function(id) {
      console.log(id);
      getPoster(id, function(posterSource) {
        document.getElementById("posterImage").src = posterSource;
        getSummary(id, function(title, rating, runtime, network, year, overview) {
          document.getElementById("title").innerHTML = title;
          document.getElementById("rating").innerHTML = rating;
          document.getElementById("runtime").innerHTML = runtime;
          document.getElementById("network").innerHTML = network;
          document.getElementById("year").innerHTML = year;
          document.getElementById("overview").innerHTML = overview;

        });
      });
    });
});

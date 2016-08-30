
//Gets user selected text
chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    if(!selection[0] || selection[0].length === 0){
      return;
    }
    findID(selection[0], function(id) {
      console.log(id);
      getPoster(id, function(posterSource) {
        document.getElementById("posterImage").src = posterSource;
        getSummary(id, function(title, rating, runtime, network, year, overview) {
          document.getElementById("title").innerHTML = title;
          document.getElementById("rating").innerHTML = "Rating: " + rating;
          document.getElementById("runtime").innerHTML = "Runtime: " + runtime + " min";
          document.getElementById("network").innerHTML = "Network: " + network;
          document.getElementById("year").innerHTML = "Year: " + year;
          document.getElementById("overview").innerHTML = overview;

        });
      });
    });
});

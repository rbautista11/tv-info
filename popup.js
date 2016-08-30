
//Gets user selected text
chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    findID(selection[0], function(id) {
      console.log(id);
      getPoster(id, function(posterSource) {
        document.getElementById("posterImage").src = posterSource;
      });
    });
});

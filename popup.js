
//Gets user selected text
chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    var id = findID(selection[0]);
    
});


function findID(input) {
  var request = new XMLHttpRequest();
  var query = 'https://api.trakt.tv/search/show?query=' + input;

  request.open('GET', query);

  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('trakt-api-version', '2');
  request.setRequestHeader('trakt-api-key', apiKey);

  request.onreadystatechange = function () {
    if(this.readyState == 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
      var obj = JSON.parse(this.responseText);
      return obj[0].show.ids.slug);
    }
  };

  request.send();
}




/*
var request = new XMLHttpRequest();

request.open('GET', 'https://api.trakt.tv/shows/game-of-thrones');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('trakt-api-version', '2');
request.setRequestHeader('trakt-api-key', apiKey);


request.onreadystatechange = function () {
  if(this.readyState == 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};
request.send();
*/

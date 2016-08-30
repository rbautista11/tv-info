
function findID(input, callback) {
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
      callback(obj[0].show.ids.slug);
    }
  };

  request.send();
}

function getPoster(id, callback) {

  var request = new XMLHttpRequest();
  var query = 'https://api.trakt.tv/shows/' + id + '?extended=images';

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
      callback(obj.images.poster.thumb);

    }
  };

  request.send();
}

function getSummary(id, callback) {
  var request = new XMLHttpRequest();
  var query = 'https://api.trakt.tv/shows/' + id + '?extended=full';
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
      callback(obj.overview);
    }
  };
  request.send();
}

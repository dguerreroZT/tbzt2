function spawn(generatorFunc) {
  function continuer(verb, arg) {
    var result;
    try {
      result = generator[verb](arg);
    } catch (err) {
      return Promise.reject(err);
    }
    if (result.done) {
      return result.value;
    } else {
      return Promise.resolve(result.value).then(callback, errback);
    }
  }
  var generator = generatorFunc();
  var callback = continuer.bind(continuer, "next");
  var errback = continuer.bind(continuer, "throw");
  return callback();
}


var contentLoaded = {}

function loadContent(file){
    if (contentLoaded[file]){
        return contentLoaded[file] // Se agrega para no cargar desde archivo varias veces
    }
    
    return new Promise(function(fnResolve, fnReject){
        $.get(file, function(html){
            contentLoaded[file] = html;
            fnResolve(html)
        })
    })
}

var urlParams;
$(function() { 
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})
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
    return new Promise(function(fnResolve, fnReject){
        if (contentLoaded[file]){
            fnResolve(contentLoaded[file]) // Se agrega para no cargar desde archivo varias veces
        }
        else{
            $.get(file, function(html){
                contentLoaded[file] = html;
                fnResolve(html)
            })
        }
    })
}

function getDateValue(d){
    var regex = /\/Date\(([0-9]+)\)\//g
    var rgxResult = regex.exec(d)
    if (rgxResult){
        d = new Date(Number(rgxResult[1]))
        
        var monthNames = ['Ene','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
        
        return (d.getDate() + '/' + monthNames[d.getMonth()] + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds())
    }
    return d
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
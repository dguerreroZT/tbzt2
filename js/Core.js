Core = new function(){
    this.newId = function(len){
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
      return (s4() + s4()).substring(0,len);
    }

    
    this.timeStamp = function(){
        var d = new Date()
        return d.getTime()
    }
    
    this.getData = function(tableName){
        let val = localStorage.getItem(tableName)
        if(val == ""){return false}
        return JSON.parse(localStorage.getItem(tableName))
    }
    
    this.setData = function(tableName, data){
        localStorage.setItem(tableName, JSON.stringify(data))
    }

    this.request = function(config){
        return new Promise(function(fnResolve, fnReject){
            console.log(config)
          $.ajax({
            url: config.url,
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(config.data),
            success: function (data) {
                data = data.d /// Comentar esta linea para NodeJS / Descomentar para ASP.NET
                if(data.OK){
                  fnResolve(data)
                }else{
                  fnReject(data.Message)
                }
            },
            error: function (jqXHR, textStatus, errorThrown){
              fnReject(errorThrown)
            }

          });
        })
    }
}


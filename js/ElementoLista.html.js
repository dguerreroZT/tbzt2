function agregarElementoListado(config){
    return loadContent("elementoLista.html")
    .then(function(html){
        for (var property in config.data){
            var sVal = new RegExp("{{" + property + "}}", "g")
            html = html.replace(sVal, config.data[property]);
        }
        var idIcon = Core.newId(8);
        var idImage = Core.newId(4);
        
        
        
        var sValIcon = new RegExp("{{idIcon}}", "g")
        html = html.replace(sValIcon, idIcon);
        
        var sValImage = new RegExp("{{idImage}}", "g")
        html = html.replace(sValImage, idImage);
        
        //config.html = html; /// asignamos el html como propiedad del objeto
        
        $('#' + config.div).append(html)
        
        if(config.data.Img){
            $("#" + idIcon).remove()
            $("#" + idImage).css({src:config.data.Img})
        }else{
            $("#" + idImage).remove()
        }
        
    })
}

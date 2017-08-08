function agregarElementoListado(config){
    return loadContent("elementoLista.html")
    .then(function(html){
        for (let property in config.data){
            let sVal = new RegExp("{{" + property + "}}", "g")
            html = html.replace(sVal, config.data[property]);
        }
        let idIcon = Core.newId(8);
        let idImage = Core.newId(4);
        
        
        
        let sValIcon = new RegExp("{{idIcon}}", "g")
        html = html.replace(sValIcon, idIcon);
        
        let sValImage = new RegExp("{{idImage}}", "g")
        html = html.replace(sValImage, idImage);
        
        //config.html = html; /// asignamos el html como propiedad del objeto
        
        $('#' + config.div).append(html)
        
        if(config.data.Img){
            $("#" + idIcon).remove()
        }else{
            $("#" + idImage).remove()
        }
        
    })
}

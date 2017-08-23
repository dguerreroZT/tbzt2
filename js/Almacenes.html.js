$(function(){
	$('.animsition').animsition();
    
	function cargarListado(){
		TireBits.Almacenes.listado()
        .then(function(Almacenes){
            var sequence = Promise.resolve()
            
            Almacenes.forEach(function(Almacen){
                sequence = sequence.then(function(){
                    return agregarElementoListado({
                        div:"lstAlmacenes",
                        data:{
                            idElement: Almacen.AlmacenID,
                            Icon:"pin_drop",
                            Titulo: "Almacen: " + Almacen.Nombre,
                            Subtitulo1: Almacen.DirCalle + " " + Almacen.DirNumero + ", " + Almacen.DirColonia,
                            Subtitulo2: "<b>Teléfono: </b>" + Almacen.Telefono
                        }
                    })
                })
            })
        })
        /*
        spawn(function *(){
			try{
				let Almacenes = yield TireBits.Almacenes.listado()
                console.log(Almacenes)
                for (let Almacen of Almacenes){
                    let finished = yield agregarElementoListado({
                        div:"lstAlmacenes",
                        data:{
                            idElement: Almacen.AlmacenID,
                            Icon:"pin_drop",
                            Titulo: "Almacen: " + Almacen.Nombre,
                            Subtitulo1: Almacen.DirCalle + " " + Almacen.DirNumero + ", " + Almacen.DirColonia,
                            Subtitulo2: "<b>Teléfono: </b>" + Almacen.Telefono
                        }
                    })
                }
                
			}catch(err){
				console.log(err)
			}

		})*/
	}
    
    clickElement = function(AlmacenID){
        window.location = "Almacen.html?id=" + AlmacenID
    }
    
    $("#btnAdd").click(function(){
		window.location = "Almacen.html"
	})

    $("#btnSearch").click(function(){
        $("#navBuscar").css({display:"block"})
        $("#Buscar").focus();        
    })

    $("#cerrarBusqueda").click(function(){
        $("#navBuscar").css({display:"none"})
        $("#Buscar").val("");        
    })
    
    
    cargarListado()

})
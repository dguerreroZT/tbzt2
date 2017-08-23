$(function(){
	$('.animsition').animsition();
    
	function cargarListado(){
		TireBits.Vehiculos.listado()
        .then(function (Vehiculos){
            var sequence = Promise.resolve();
            
            Vehiculos.forEach(function(Vehiculo){
                sequence = sequence.then(function(){
                    return agregarElementoListado({
                        div:"lstVehiculos",
                        data:{
                            idElement: Vehiculo.VehiculoID,
                            Icon:"local_shipping",
                            Titulo: "Nº Económico: " + Vehiculo.NoEconomico,
                            Subtitulo1: Vehiculo.Marca + "; " + Vehiculo.Modelo,
                            Subtitulo2: "<b>Placas: </b>" + Vehiculo.Placas
                        }
                    })
                }) 
            })
        })
        
        /*
        spawn(function *(){
			try{
				let Vehiculos = yield TireBits.Vehiculos.listado("abcd")

                for (let Vehiculo of Vehiculos){
                    let finished = yield agregarElementoListado({
                        div:"lstVehiculos",
                        data:{
                            idElement: Vehiculo.VehiculoID,
                            Icon:"local_shipping",
                            Titulo: "Número Económico: " + Vehiculo.NoEconomico,
                            Subtitulo1: Vehiculo.Marca + "; " + Vehiculo.Modelo,
                            Subtitulo2: "<b>Placas: </b>" + Vehiculo.Placas
                        }
                    })
                }
                
			}catch(err){
				console.log(err)
			}

		})
        */
	}
    
    clickElement = function(VehiculoID){
        window.location = "Vehiculo.html?id=" + VehiculoID
    }
    
    $("#btnAdd").on('click touchstart',function(){
		window.location = "editarVehiculo.html"
	})

    $("#btnSearch").on('click touchstart', function(){
        $("#navBuscar").css({display:"block"})
        $("#Buscar").focus();        
    })

    $("#cerrarBusqueda").on('click touchstart', function(){
        $("#navBuscar").css({display:"none"})
        $("#Buscar").val("");        
    })
    
    
    cargarListado()

})
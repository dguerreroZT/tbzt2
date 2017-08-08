$(function(){
	$('.animsition').animsition();
    
	function cargarListado(){
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
	}
    
    clickElement = function(VehiculoID){
        window.location = "editarVehiculo.html?id=" + VehiculoID
    }
    
    $("#btnAdd").click(function(){
		window.location = "editarVehiculo.html"
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
$(function(){
	//$('.animsition').animsition();
     $('.parallax').parallax();
    var ListadoVehiculosMediciones = []
    
    function agregarFila(Medicion){
        let row = $("<tr>")
        let col_Fecha  = $("<td>").html(getDateValue(Medicion.Fecha)); 
        let col_Kilometraje  = $("<td>").html(Medicion.Kilometraje); 
        
        
        row.append(col_Fecha)
        row.append(col_Kilometraje)
        
        $("#tbMediciones").append(row)
        
        return true
    }
    
    
	function cargarListadoMediciones(){
		spawn(function *(){
			try{
                let vehiculoID = urlParams.id || ""
				let Mediciones = yield TireBits.Vehiculos.listadoMediciones(vehiculoID)
                ListadoVehiculosMediciones = Mediciones
                for (let Medicion of ListadoVehiculosMediciones){
                    let finished = yield agregarFila(Medicion)
                }
                
			}catch(err){
				console.log(err)
			}

		})
	}

    function cargarDatos(){
        return spawn(function *(){
            let vehiculoID = urlParams.id || ""
            let vehiculo = yield TireBits.Vehiculos.obtener(vehiculoID)
            
            if(vehiculo){
                $("#txtNoEconomico").html(vehiculo.NoEconomico)
                $("#txtMarca").html(vehiculo.Marca)
                $("#txtModelo").html(vehiculo.Modelo)
                $("#txtAño").html(vehiculo.Año)
                $("#txtFechaUltimaMedicion").html(getDateValue(vehiculo.FechaUltimaMedicion))
                $("#txtKilometraje").html(vehiculo.Kilometraje)
                
                
                Materialize.updateTextFields();
            }
        })
    }

    $("#btnEditar").click(function(){
        window.location = "EditarVehiculo.html?id=" + urlParams.id || ""
    })
    
    cargarDatos()
    cargarListadoMediciones()
    
    

})
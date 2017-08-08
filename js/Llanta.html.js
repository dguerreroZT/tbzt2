$(function(){
	//$('.animsition').animsition();
     $('.parallax').parallax();
    var ListadoLlantasMediciones = []
    
    function agregarFila(Medicion){
        let row = $("<tr>")
        let col_Fecha  = $("<td>").html(getDateValue(Medicion.Fecha)); 
        let col_Presion  = $("<td>").html(Medicion.Presion); 
        let col_Profundidad  = $("<td>").html(Medicion.Profundidad); 
        
        
        row.append(col_Fecha)
        row.append(col_Presion)
        row.append(col_Profundidad)
        
        $("#tbMediciones").append(row)
        
        return true
    }
    
    
	function cargarListadoMediciones(){
		spawn(function *(){
			try{
                let llantaID = urlParams.id || ""
				let Mediciones = yield TireBits.Llantas.listadoMediciones(llantaID)
                ListadoLlantasMediciones = Mediciones
                for (let Medicion of ListadoLlantasMediciones){
                    let finished = yield agregarFila(Medicion)
                }
                
			}catch(err){
				console.log(err)
			}

		})
	}

    function cargarDatos(){
        return spawn(function *(){
            let llantaID = urlParams.id || ""
            let llanta = yield TireBits.Llantas.obtener(llantaID)
            console.log(llanta)
            if(llanta){
                $("#txtNoEconomico").html(llanta.NoEconomico)
                $("#txtMarca").html(llanta.Marca)
                $("#txtModelo").html(llanta.Modelo)
                $("#txtMedida").html(llanta.Medida)
                $("#txtFechaUltimaMedicion").html(getDateValue(llanta.FechaUltimaMedicion))
                $("#txtPresion").html(llanta.Presion)
                $("#txtProfundidad").html(llanta.Profundidad)
                
                
                Materialize.updateTextFields();
            }
        })
    }

    
    cargarDatos()
    cargarListadoMediciones()
    
    

})
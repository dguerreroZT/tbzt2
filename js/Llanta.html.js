$(function(){
	//$('.animsition').animsition();
     $('.parallax').parallax();
    var ListadoLlantasMediciones = []
    
    function agregarFila(Medicion){
        var row = $("<tr>")
        var col_Fecha  = $("<td>").html(getDateValue(Medicion.Fecha)); 
        var col_Presion  = $("<td>").html(Medicion.Presion); 
        var col_Profundidad  = $("<td>").html(Medicion.Profundidad); 
        
        
        row.append(col_Fecha)
        row.append(col_Presion)
        row.append(col_Profundidad)
        
        $("#tbMediciones").append(row)
        
        return true
    }
    
    
	function cargarListadoMediciones(){
        var llantaID = urlParams.id || ""
        TireBits.Llantas.listadoMediciones(llantaID)
        .then(function(Mediciones){
            ListadoLlantasMediciones = Mediciones
            for (var Medicion of ListadoLlantasMediciones){
                agregarFila(Medicion)
            }
        })
        
        
        /*
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

		})*/
	}

    function cargarDatos(){
        var llantaID = urlParams.id || ""
        TireBits.Llantas.obtener(llantaID)
        .then(function(llanta){
            if(llanta){
                $("#txtNoEconomico").html(llanta.NoEconomico)
                $("#txtMarca").html(llanta.Marca)
                $("#txtModelo").html(llanta.Modelo)
                $("#txtMedida").html(llanta.Medida)
                $("#txtFechaUltimaMedicion").html(getDateValue(llanta.FechaUltimaMedicion))
                $("#txtPresion").html(llanta.Presion)
                $("#txtProfundidad").html(llanta.Profundidad)
                
                Materialize.updateTextFields();
            }else{
                Materialize.toast('No se encontró información de esta llanta', 3000,'',function(){
                    window.location = "Llantas.html"
                })
            }
        })
            
        /*
        return spawn(function *(){
            let llantaID = urlParams.id || ""
            let llanta = yield TireBits.Llantas.obtener(llantaID)
            
            if(llanta){
                $("#txtNoEconomico").html(llanta.NoEconomico)
                $("#txtMarca").html(llanta.Marca)
                $("#txtModelo").html(llanta.Modelo)
                $("#txtMedida").html(llanta.Medida)
                $("#txtFechaUltimaMedicion").html(getDateValue(llanta.FechaUltimaMedicion))
                $("#txtPresion").html(llanta.Presion)
                $("#txtProfundidad").html(llanta.Profundidad)
                
                
                Materialize.updateTextFields();
            }else{
                Materialize.toast('No se encontró información de esta llanta', 3000,'',function(){
                    window.location = "Llantas.html"
                })
            }
        })*/
    }

    $("#btnEditar").click(function(){
        window.location = "editarLlanta.html?id=" + urlParams.id;
    })
    
    $("#btnAgregarMedicion").click(function(){
        window.location = "editarMedicion.html?llanta=" + urlParams.id;
    })
    
    
    cargarDatos()
    cargarListadoMediciones()
    
    

})
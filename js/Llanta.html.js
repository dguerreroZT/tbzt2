$(function(){
	//$('.animsition').animsition();
    var ListadoLlantas = []
    
    function agregarFila(Llanta){
        let row = $("<tr>")
        let col_NoEconomico  = $("<td>").html(Llanta.NoEconomico); 
        let col_Marca  = $("<td>").html(Llanta.Marca); 
        let col_Presion  = $("<td>").html(Llanta.Presion); 
        let col_Profundidad  = $("<td>").html(Llanta.Profundidad); 
        
        
        row.append(col_NoEconomico)
        row.append(col_Marca)
        row.append(col_Presion)
        row.append(col_Profundidad)
        
        $("#tbLlantas").append(row)
        
        return true
    }
    
    
	function cargarListadoMediciones(){
		spawn(function *(){
			try{
				let Llantas = yield TireBits.Llantas.listado()
                ListadoLlantas = Llantas
                for (let Llanta of Llantas){
                    let finished = yield agregarFila(Llanta)
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
            
            if(llanta){
                $("#txtNoEconomico").html(llanta.NoEconomico)
                $("#txtMarca").html(llanta.Marca)
                $("#txtModelo").html(llanta.Modelo)
                $("#txtMedida").html(llanta.Medida)
                $("#txtUltimaMedicion").html(llanta.UltimaMedicion)
                $("#txtPresion").html(llanta.Presion)
                $("#txtProfundidad").html(llanta.Profundidad)
                
                
                Materialize.updateTextFields();
            }
        })
    }

    
    cargarDatos()
    cargarListadoMediciones()
    
    

})
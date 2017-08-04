$(function(){
	//$('.animsition').animsition();
    var ListadoLlantas = []
    
    function buscar(str, limit){
        let llantasFiltradas = []
        if(str == ""){llantasFiltradas = ListadoLlantas}
        else{
            str = str.toUpperCase()
            let i = 0
            for (let llanta of ListadoLlantas){
                if(
                    llanta.NoEconomico.toUpperCase().includes(str) || 
                    llanta.Marca.toUpperCase().includes(str)
                ){
                    llantasFiltradas.push(llanta)
                    i++;
                    if(limit && (i>10)){break;}
                }
                
            }
        }
        
        $("#tbLlantas").empty()
        for (let llantaFiltrada of llantasFiltradas){
            agregarFila(llantaFiltrada)
        }
    
    }
    
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
    
    
	function cargarListado(){
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
    
    
    //function buscarCompleto(){
    //    let str = $("#Buscar").val()
    //    buscar(str)
    //}
    //
    //var fnBuscar
    
    $("#Buscar").bind("change paste keyup",function(){
        let str = $("#Buscar").val()
        buscar(str)
        //if(fnBuscar){clearTimeout(fnBuscar)}
        //fnBuscar = setTimeout(buscarCompleto,1000)
    })
    
    cargarListado()
    
    

})
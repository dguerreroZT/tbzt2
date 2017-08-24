$(function(){
	$('.animsition').animsition();
    var ListadoLlantas = []
    
    //funcion para filtrar la llanta por numero economico o marca
    function buscar(str, limit){
        var llantasFiltradas = []
        if(str == ""){llantasFiltradas = ListadoLlantas}
        else{
            str = str.toUpperCase()
            var i = 0
            for (var llanta of ListadoLlantas){
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
        for (var llantaFiltrada of llantasFiltradas){
            agregarFila(llantaFiltrada)
        }
    
    }
    
    //si se agrega una nueva llanta se agregan filas a la tabla
    function agregarFila(Llanta){
        var row = $("<tr>")
        var col_NoEconomico  = $("<td>").html(Llanta.NoEconomico); 
        var col_Marca  = $("<td>").html(Llanta.Marca); 
        var col_Presion  = $("<td>").html(Llanta.Presion); 
        var col_Profundidad  = $("<td>").html(Llanta.Profundidad); 
        
        
        row.append(col_NoEconomico)
        row.append(col_Marca)
        row.append(col_Presion)
        row.append(col_Profundidad)
        
        $("#tbLlantas").append(row)
        row.css({cursor:"pointer"})
        row.click(function(){
            window.location = "Llanta.html?id=" + Llanta.LlantaID
        })
        
        return true
    }
    
    
	function cargarListado(){
		TireBits.Llantas.listado()
        .then(function(Llantas){
            for (var Llanta of Llantas){
                agregarFila(Llanta)
            }
        })
        
        /*
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

		})*/
	}
    
    function cerrarBusqueda(){		
         $("#navBuscar").css({display:"none"})		
         $("#Buscar").val("");
     }
    
    //function buscarCompleto(){
    //    let str = $("#Buscar").val()
    //    buscar(str)
    //}
    //
    //var fnBuscar
    
    $("#Buscar").bind("change paste keyup",function(){
        var str = $("#Buscar").val()
        buscar(str)
        //if(fnBuscar){clearTimeout(fnBuscar)}
        //fnBuscar = setTimeout(buscarCompleto,1000)
    })

    $("#Buscar").focusout(function(){
        var str = $("#Buscar").val()
        if (str == ""){
            cerrarBusqueda()
        }
        //if(fnBuscar){clearTimeout(fnBuscar)}
        //fnBuscar = setTimeout(buscarCompleto,1000)
    })
    
    $("#cerrarBusqueda").click(function(){
        cerrarBusqueda()
        buscar("")
    })
    
    $("#btnSearch").click(function(){
        $("#navBuscar").css({display:"block"})
        $("#Buscar").focus();        
    })
    
    cargarListado()
    
    

})
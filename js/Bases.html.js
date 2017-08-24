$(function(){
	$('.animsition').animsition();
    
    //funcion para mostrar los datos de cada base    
	function cargarListado(){
		spawn(function *(){
			try{
				let Bases = yield TireBits.Bases.listado()
                console.log(Bases)
                for (let Base of Bases){
                    let finished = yield agregarElementoListado({
                        div:"lstBases",
                        data:{
                            idElement: Base.BaseID,
                            Icon:"pin_drop",
                            Titulo: "Base: " + Base.Nombre,
                            Subtitulo1: Base.DirCalle + " " + Base.DirNumero + ", " + Base.DirColonia,
                            Subtitulo2: "<b>Teléfono: </b>" + Base.Telefono
                        }
                    })
                }
                
			}catch(err){
				console.log(err)
			}

		})
	}
    
    clickElement = function(BaseID){
        window.location = "Base.html?id=" + BaseID
    }
    
    $("#btnAdd").click(function(){
		window.location = "Base.html"
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
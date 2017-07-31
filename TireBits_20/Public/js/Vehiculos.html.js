$(function(){
	//$('.animsition').animsition();
    
	// Check Login
	//function Login(username, nip){
		spawn(function *(){
			try{
				let Vehiculos = yield TireBits.Vehiculos.listado("abcd")

                for (let Vehiculo of Vehiculos){
                    let finished = yield agregarElementoListado({
                        div:"lstVehiculos",
                        data:{
                            Icon:"local_shipping",
                            Titulo: "Número Económico: " + Vehiculo.NoEconomico,
                            Subtitulo1: "Marca: " + Vehiculo.Marca + "; Modelo: " + Vehiculo.Modelo,
                            Subtitulo2: "Placas:" + Vehiculo.Placas
                        }
                    })
                }
                
			}catch(err){
				console.log(err)
			}

		})
	//}
    

    $("#btnAdd").click(function(){
		window.location = "editarVehiculo.html"
	})


})
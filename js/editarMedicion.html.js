$(function() {
    $('select').material_select();
    $('.modal').modal();
    //declaracion de variables globales 
    var UbicacionActual = {
        Ubicacion: '',
        DescripcionUbicacion: '',
        Lugar:'',
        Posicion: 0,
        MedicionVehiculo: '',
        Kilometraje: 0
        
    }
    var EstadoActual = []
    
    var Bases = []
    var Almacenes = []
    var Vehiculos = []
    
    //funcion para obtener el valor del semaforo
    function obtenerHtmlSemaforo(semaforo){
        return loadContent("editarMedicion_Semaforo.html")
        .then(function(html){
            for (var property in semaforo){
                var sVal = new RegExp("{{" + property + "}}", "g")
                html = html.replace(sVal, semaforo[property]);
            }
            semaforo.html = html; /// asignamos el html como propiedad del objeto
            
            return semaforo
        })
    }
    
    //Funcion que muestra los estados de la llanta en el modal
    function cargarListadoEstados(){
		var llantaID = urlParams.llanta || ""
        TireBits.Llantas.obtenerEstado(llantaID)
        .then(function(Estados){
            var estPromises = Estados.map(obtenerHtmlSemaforo)

            Promise.all(estPromises)
            .then(function(){
                /// Usar FOR en lugar de ForEach debido a que estamos usando Promises
                for (var estPromise of estPromises){
                    estPromise.then(function(est){
                        $("#lstSemaforoEstado").append(est.html)
                        EstadoActual.push(est)
                    })
                }
                
            })
            
        })
        

        /*
        spawn(function *(){
			try{
                let llantaID = urlParams.llanta || ""
				let Estados = yield TireBits.Llantas.obtenerEstado(llantaID)
				let estPromises = Estados.map(obtenerHtmlSemaforo)
                
                /// Usar FOR en lugar de ForEach debido a que estamos usando Promises
                for (let estPromise of estPromises){
                    let est = yield estPromise;
                    $("#lstSemaforoEstado").append(est.html)
                    EstadoActual.push(est)
                }
                
                console.log(EstadoActual)
                
                
			}catch(err){
				console.log(err)
			}

		})
        */
	}
    
    function cargarDatos(){
        var llantaID = urlParams.llanta || ""
        TireBits.Llantas.obtenerUltimaMedicion(llantaID)
        .then(function(medicionLlanta){
            if(medicionLlanta){
                $("#lblNoEconomico").html(medicionLlanta.NoEconomico)
                $("#lblUbicacion").html(medicionLlanta.DescripcionUbicacion + ' ' + medicionLlanta.Lugar + (medicionLlanta.Posicion ? '; Posición ' + medicionLlanta.Posicion : ''))
                $("#lblKilometraje").html(medicionLlanta.Kilometraje || 0.0)
                $("#txtPresion").val(medicionLlanta.Presion || 0.0)
                $("#txtProfundidad").val(medicionLlanta.Profundidad || 0.0)
                //$("#txtNotas").val(medicionLlanta.Notas)

                UbicacionActual.Ubicacion = medicionLlanta.Ubicacion
                UbicacionActual.DescripcionUbicacion = medicionLlanta.DescripcionUbicacion
                UbicacionActual.Lugar = medicionLlanta.Lugar
                UbicacionActual.Posicion = medicionLlanta.Posicion
                UbicacionActual.MedicionVehiculo = medicionLlanta.MedicionVehiculo
                UbicacionActual.Kilometraje = medicionLlanta.Kilometraje

                console.log(UbicacionActual)

                Materialize.updateTextFields();
            }
        })

        
        /*
        return spawn(function *(){
            let llantaID = urlParams.llanta || ""
            let medicionLlanta = yield TireBits.Llantas.obtenerUltimaMedicion(llantaID)
            
            if(medicionLlanta){
                $("#lblNoEconomico").html(medicionLlanta.NoEconomico)
                $("#lblUbicacion").html(medicionLlanta.DescripcionUbicacion + ' ' + medicionLlanta.Lugar + (medicionLlanta.Posicion ? '; Posición ' + medicionLlanta.Posicion : ''))
                $("#lblKilometraje").html(medicionLlanta.Kilometraje || 0.0)
                $("#txtPresion").val(medicionLlanta.Presion || 0.0)
                $("#txtProfundidad").val(medicionLlanta.Profundidad || 0.0)
                //$("#txtNotas").val(medicionLlanta.Notas)

                UbicacionActual.Ubicacion = medicionLlanta.Ubicacion
                UbicacionActual.DescripcionUbicacion = medicionLlanta.DescripcionUbicacion
                UbicacionActual.Lugar = medicionLlanta.Lugar
                UbicacionActual.Posicion = medicionLlanta.Posicion
                UbicacionActual.MedicionVehiculo = medicionLlanta.MedicionVehiculo
                UbicacionActual.Kilometraje = medicionLlanta.Kilometraje
             
                console.log(UbicacionActual)
                
                Materialize.updateTextFields();
            }
        })*/
    }
    
    function cargarLugares(){

    }
    
    
   //funcion para mostrar el modal de edicion de ubicacion
    $("#btnCorregirUbicacion").click(function(){
        $("#cboUbicacion").val(UbicacionActual.Ubicacion)
        $("#cboUbicacion").val(UbicacionActual.Ubicacion)
        
    })
    //funcion para mostrar el modal de edicion de kilometraje
    $("#btnCorregirKilometraje").click(function(){
        $("#txtKilometraje").val(UbicacionActual.Kilometraje)
        Materialize.updateTextFields();
        setTimeout(function(){$("#txtKilometraje").focus();$("#txtKilometraje").select()})
        
    })
    
    $("#btnUbicacionAceptar").click(function(){
        $("#modalCorregirUbicacion").modal('close');
    })
    
    function corregirKilometraje(){
        UbicacionActual.Kilometraje = $("#txtKilometraje").val()
        UbicacionActual.MedicionVehiculo="";
        $("#lblKilometraje").html(UbicacionActual.Kilometraje)
        $("#modalCorregirKilometraje").modal('close');
    }
    
    $('#txtKilometraje').keypress(function(e) {
        var code = e.keyCode || e.which;
        if(code==13){
            corregirKilometraje()
        }
    });
    
    $("#btnKilometrajeAceptar").click(function(){
        corregirKilometraje()
    })
    
    cargarDatos()
    cargarListadoEstados()
    
});



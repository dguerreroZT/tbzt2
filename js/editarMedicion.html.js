$(function() {
    $('select').material_select();
    $('.modal').modal();
    
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
    
    function obtenerHtmlSemaforo(semaforo){
        return loadContent("editarMedicion_Semaforo.html")
        .then(function(html){
            for (let property in semaforo){
                let sVal = new RegExp("{{" + property + "}}", "g")
                html = html.replace(sVal, semaforo[property]);
            }
            semaforo.html = html; /// asignamos el html como propiedad del objeto
            
            return semaforo
        })
    }
    
    function cargarListadoEstados(){
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
	}
    
    function cargarDatos(){
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
        })
    }
    
    function cargarLugares(){
        return spawn(function *(){
            
        })
    }
    
    
   
    $("#btnCorregirUbicacion").click(function(){
        $("#cboUbicacion").val(UbicacionActual.Ubicacion)
        $("#cboUbicacion").val(UbicacionActual.Ubicacion)
        
    })
    
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



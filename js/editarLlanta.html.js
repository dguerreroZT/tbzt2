$(function() {
    $('select').material_select();
    $('.modal').modal();

    /*function valida(e){
        tecla = (document.all) ? e.keyCode : e.which;


        if (tecla==8){
            return true;
        }


        patron =/[0-9]/;
        tecla_final = String.fromCharCode(tecla);
        return patron.test(tecla_final);
    }*/
    
    
    function guardarDatos(){
        return spawn(function *(){
            let llanta = {
                LlantaID: urlParams.id || "",
                NoEconomico:$("#txtNoEconomico").val(),
                Marca:$("#txtMarca").val(),
                Modelo:$("#txtModelo").val(),
                Medida:$("#txtMedida").val(),
                Costo:$("#txtCosto").val(),
                Notas:$("#txtNotas").val()
            }

            let llantaGuardada = yield TireBits.Llantas.guardar(llanta)
            if(llantaGuardada){
                window.location = "Llanta.html?id=" + urlParams.id || ""
            }
        })
    }
    
    function cargarDatos(){
        return spawn(function *(){
            let llantaID = urlParams.id || ""
            let llanta = yield TireBits.Llantas.obtener(llantaID)
            
            if(llanta){
                $("#txtNoEconomico").val(llanta.NoEconomico)
                $("#txtMarca").val(llanta.Marca)
                $("#txtModelo").val(llanta.Modelo)
                $("#txtMedida").val(llanta.Medida)
                $("#txtCosto").val(llanta.Costo || 0.0)
                $("#txtNotas").val(llanta.Notas)

                Materialize.updateTextFields();
            }
        })
    }
    
    
    function cargarMarcasLlantas(){
        return spawn(function *(){
            let MarcasLlantas = yield TireBits.obtenerMarcasLlantas() 
            let dataMarcas = {}
            for (let marca in MarcasLlantas){
                let MarcaDescricpion = MarcasLlantas[marca]
                dataMarcas[MarcaDescricpion] = ""
            }
            $('#txtMarca').autocomplete({
                data: dataMarcas,
                limit: 5, // The max amount of results that can be shown at once. Default: Infinity.
                onAutocomplete: function(val) {
                  // Callback function when value is autcompleted.
                },
                minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
            });
        })
    }
    
    function cargarModelosLlantas(){
        return spawn(function *(){
            let ModelosLlantas = yield TireBits.obtenerModelosLlantas() 
            let dataModelos = {}
            for (let Modelo in ModelosLlantas){
                let ModeloDescricpion = ModelosLlantas[Modelo]
                dataModelos[ModeloDescricpion] = ""
            }
            $('#txtModelo').autocomplete({
                data: dataModelos,
                limit: 5, // The max amount of results that can be shown at once. Default: Infinity.
                onAutocomplete: function(val) {
                  // Callback function when value is autcompleted.
                },
                minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
            });
        })
    }
    
    function cargarMedidasLlantas(){
        return spawn(function *(){
            let MedidasLlantas = yield TireBits.obtenerMedidasLlantas() 
            let dataMedidas = {}
            for (let Medida in MedidasLlantas){
                let MedidaDescricpion = MedidasLlantas[Medida]
                dataMedidas[MedidaDescricpion] = ""
            }
            $('#txtMedida').autocomplete({
                data: dataMedidas,
                limit: 5, // The max amount of results that can be shown at once. Default: Infinity.
                onAutocomplete: function(val) {
                  // Callback function when value is autcompleted.
                },
                minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
            });
        })
    }
    
    function cargarListas(){
        cargarMarcasLlantas()
        cargarModelosLlantas()
        cargarMedidasLlantas()
    }
    
    $("#btnGuardar").click(guardarDatos);
    
    $("#btnCancelar").click(function(){
        if(urlParams.id){
            window.location = "Llanta.html?id=" + urlParams.id;
        }else{
            window.location = "Llantas.html"
        }
    });
    
    setTimeout(function(){
        $("#txtNoEconomico").focus();
    })

    cargarListas()
    
    cargarDatos()
    
    
  });
          
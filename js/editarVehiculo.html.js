$(function() {
    //$('select').material_select();
    $('.modal').modal();
    
    
    var TipoVehiculo = ""
    
    function guardarDatos(){
        return spawn(function *(){
            let vehiculo = {
                VehiculoID: urlParams.id || "",
                NoEconomico:$("#txtNoEconomico").val(),
                Placas:$("#txtPlacas").val(),
                Marca:$("#txtMarca").val(),
                Modelo:$("#txtModelo").val(),
                Año:$("#txtAño").val(),
                TipoVehiculo:TipoVehiculo,
                Notas:$("#txtNotas").val()
            }

            let vehiculoGuardado = yield TireBits.Vehiculos.guardar(vehiculo)
            if(vehiculoGuardado){
                window.location = "Vehiculo.html?id=" + urlParams.id || ""
            }
        })
    }
    
    function cargarDatos(){
        return spawn(function *(){
            let vehiculoID = urlParams.id || ""
            let vehiculo = yield TireBits.Vehiculos.obtener(vehiculoID)
            
            if(vehiculo){
                $("#txtNoEconomico").val(vehiculo.NoEconomico)
                $("#txtPlacas").val(vehiculo.Placas)
                $("#txtMarca").val(vehiculo.Marca)
                $("#txtModelo").val(vehiculo.Modelo)
                $("#txtAño").val(vehiculo.Año)
                $("#txtNotas").val(vehiculo.Notas)
                $("#txtTipoVehiculo").html(vehiculo.TipoVehiculo)
                TipoVehiculo = vehiculo.TipoVehiculo

                Materialize.updateTextFields();
            }
        })
    }
    
    function cargarTiposVehiculos(){
        return spawn(function *(){
            let TiposVehiculos = yield TireBits.obtenerTiposVehiculos()
            for (let tipo in TiposVehiculos){
                let TipoVehiculoDescripcion = TiposVehiculos[tipo]
                let link = $("<a>")
                link.attr({id:tipo ,href:"#!"})
                link.addClass("collection-item")
                link.html(TipoVehiculoDescripcion)
                link.click(function(){
                    $("#txtTipoVehiculo").html(TipoVehiculoDescripcion)
                    TipoVehiculo = TipoVehiculoDescripcion
                    $('#modalTipoVehiculo').modal('close');
                })
                $("#lstTiposVehiculos").append(link)
            }
        })
    }
    
    function cargarMarcasVehiculos(){
        return spawn(function *(){
            let MarcasVehiculos = yield TireBits.obtenerMarcasVehiculos() 
            let dataMarcas = {}
            for (let marca in MarcasVehiculos){
                let MarcaDescricpion = MarcasVehiculos[marca]
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
    
    function cargarModelosVehiculos(){
        return spawn(function *(){
            let ModelosVehiculos = yield TireBits.obtenerModelosVehiculos() 
            let dataModelos = {}
            for (let Modelo in ModelosVehiculos){
                let ModeloDescricpion = ModelosVehiculos[Modelo]
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
    
    function cargarListas(){
        cargarTiposVehiculos()
        cargarMarcasVehiculos()
        cargarModelosVehiculos()
    }
    
    $("#btnGuardar").click(guardarDatos);
    
    $("#btnCancelar").click(function(){
        if(urlParams.id){
            window.location = "Vehiculo.html?id=" + urlParams.id;
        }else{
            window.location = "Vehiculos.html"
        }
    });
    
    setTimeout(function(){
        $("#txtNoEconomico").focus();
    })

    cargarListas()
    
    cargarDatos()
    
    
  });
          
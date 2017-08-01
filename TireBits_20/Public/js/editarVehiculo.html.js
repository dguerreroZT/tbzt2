$(function() {
    //$('select').material_select();
    $('.modal').modal();
    
    
    var TipoVehiculo = ""
    
    
    function guardarDatos(){
        return spawn(function *(){
            let vehiculo = {
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
                window.location = "Vehiculos.html"
            }
        })
    }
    
    function cargarDatos(){
        return spawn(function *(){
            let vehiculoID = ""
            let vehiculo = yield TireBits.Vehiculos.obtener(vehiculoID)
            
            $("#txtNoEconomico").val(vehiculo.NoEconomico)
            $("#txtPlacas").val(vehiculo.Placas)
            $("#txtMarca").val(vehiculo.Marca)
            $("#txtModelo").val(vehiculo.Modelo)
            $("#txtAño").val(vehiculo.Año)
            $("#txtNotas").val(vehiculo.Notas)
            $("#txtTipoVehiculo").html(vehiculo.TipoVehiculo)
            TipoVehiculo = vehiculo.TipoVehiculo
            
            Materialize.updateTextFields();
        })
    }
    
    function cargarTiposVehiculo(){
        return spawn(function *(){
            let TiposVehiculo = yield TireBits.listadoTiposVehiculo()
            for (let tipo in TiposVehiculo){
                let TipoVehiculoDescripcion = TiposVehiculo[tipo]
                let link = $("<a>")
                link.attr({id:tipo ,href:"#!"})
                link.addClass("collection-item")
                link.html(TipoVehiculoDescripcion)
                link.click(function(){
                    $("#txtTipoVehiculo").html(TipoVehiculoDescripcion)
                    TipoVehiculo = TipoVehiculoDescripcion
                    $('#modalTipoVehiculo').modal('close');
                })
                $("#lstTiposVehiculo").append(link)
            }
        })
    }
    
    function cargarMarcasVehiculo(){
        return spawn(function *(){
            let MarcasVehiculo = yield TireBits.listadoMarcasVehiculo() 
            let dataMarcas = {}
            for (let marca in MarcasVehiculo){
                let MarcaDescricpion = MarcasVehiculo[marca]
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
    
    function cargarModelosVehiculo(){
        return spawn(function *(){
            let ModelosVehiculo = yield TireBits.listadoModelosVehiculo() 
            let dataModelos = {}
            for (let Modelo in ModelosVehiculo){
                let ModeloDescricpion = ModelosVehiculo[Modelo]
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
        cargarTiposVehiculo()
        cargarMarcasVehiculo()
        cargarModelosVehiculo()
    }
    
    setTimeout(function(){
        $("#txtNoEconomico").focus();
    })

    cargarListas()
    
    cargarDatos()
    
    
  });
          
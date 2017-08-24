$(function() {
  $(".button-collapse").sideNav();
  	 $('select').material_select();

   $(".button-collapse").sideNav();
   $(document).ready(function(){
      $('.parallax').parallax();
   });
    
    //funcion que toma los datos de cada campo del formulario y los guarda
    function guardarDatos(){
        var base = {
            BaseID: urlParams.id || "",
            Nombre:$("#txtNombre").val(),
            DirCalle:$("#txtCalle").val(),
            DirNumero:$("#txtNumero").val(),
            DirColonia:$("#txtColonia").val(),
            DirMunicipio:$("#txtMunicipio").val(),
            DirEstado:$("#txtEstado").val(),
            DirCodigoPostal:$("#txtCodigoPostal").val(),
            Telefono:$("#txtTelefono").val(),,
            Fax:$("#txtFax").val(),,
            CorreoElectronico:$("#txtCorreoElectronico").val(),
            Notas:$("#txtNotas").val()
        }

        //al guardar los datos manda a la ventana de vehiculos
        TireBits.Vehiculos.guardar(vehiculo)
        .then(function(vehiculoGuardado){
            if(vehiculoGuardado){
                window.location = "Vehiculo.html?id=" + urlParams.id || ""
            }
        })
        
        /*
        return spawn(function *(){
            let base = {
                BaseID: urlParams.id || "",
                Nombre:$("#txtNombre").val(),
                DirCalle:$("#txtCalle").val(),
                DirNumero:$("#txtNumero").val(),
                DirColonia:$("#txtColonia").val(),
                DirMunicipio:$("#txtMunicipio").val(),
                DirEstado:$("#txtEstado").val(),
                DirCodigoPostal:$("#txtCodigoPostal").val(),
                Telefono:$("#txtTelefono").val(),,
                Fax:$("#txtFax").val(),,
                CorreoElectronico:$("#txtCorreoElectronico").val(),
                Notas:$("#txtNotas").val()
            }

            let vehiculoGuardado = yield TireBits.Vehiculos.guardar(vehiculo)
            if(vehiculoGuardado){
                window.location = "Vehiculo.html?id=" + urlParams.id || ""
            }
        })*/
    }
    
    //funcion que muestra los datos previamente guardados
    function cargarDatos(){
        var baseID = urlParams.id || ""
        TireBits.Bases.obtener(baseID)
        .then(function(base){
            if(base){
                $("#txtNombre").html("Base " + base.Nombre)
                $("#txtCalle").html(base.DirCalle)
                $("#txtNumero").html(base.DirNumero)
                $("#txtColonia").html(base.DirColonia)
                $("#txtMunicipio").html(base.DirMunicipio)
                $("#txtEstado").html(base.DirEstado)
                $("#txtCodigoPostal").html(base.DirCodigoPostal)
                $("#txtTelefono").html(base.Telefono)
                $("#txtFax").html(base.Fax)
                $("#txtCorreoElectronico").html(base.CorreoElectronico)
                $("#txtNotas").html(base.Notas)

                Materialize.updateTextFields();
            }
        })
            
        
        /*
        return spawn(function *(){
            let baseID = urlParams.id || ""
            let base = yield TireBits.Bases.obtener(baseID)
            
            if(base){
                $("#txtNombre").html("Base " + base.Nombre)
                $("#txtCalle").html(base.DirCalle)
                $("#txtNumero").html(base.DirNumero)
                $("#txtColonia").html(base.DirColonia)
                $("#txtMunicipio").html(base.DirMunicipio)
                $("#txtEstado").html(base.DirEstado)
                $("#txtCodigoPostal").html(base.DirCodigoPostal)
                $("#txtTelefono").html(base.Telefono)
                $("#txtFax").html(base.Fax)
                $("#txtCorreoElectronico").html(base.CorreoElectronico)
                $("#txtNotas").html(base.Notas)

                
                
                Materialize.updateTextFields();
            }
        })
        */
    }
    
    $("#btnGuardar").click(guardarDatos);
    
    $("#btnCancelar").click(function(){
        window.location = "Vehiculo.html?id=" + urlParams.id || ""
    });
    
    setTimeout(function(){
     $("#txtNomBase").focus();
    })
    
    cargarDatos()
});
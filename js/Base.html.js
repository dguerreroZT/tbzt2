$(function(){
	//$('.animsition').animsition();
     $('.parallax').parallax();


    function cargarDatos(){
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
    }

    $("#btnEditar").click(function(){
        window.location = "EditarBase.html?id=" + urlParams.id || ""
    })
    
    cargarDatos()
    
    

})
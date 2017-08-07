$(function(){
	$('.animsition').animsition();
    
    
    function obtenerHtmlEmpresa(emp){
        return loadContent("seleccionarEmpresa_Empresas.html")
        .then(function(html){
            for (let property in emp){
                let sVal = new RegExp("{{" + property + "}}", "g")
                html = html.replace(sVal, emp[property]);
            }
            emp.html = html; /// asignamos el html como propiedad del objeto
            
            return emp
        })
    }
    
    function obtenerHtmlBase(base){
        return loadContent("seleccionarEmpresa_Bases.html")
        .then(function(html){
            for (let property in base){
                let sVal = new RegExp("{{" + property + "}}", "g")
                html = html.replace(sVal, base[property]);
            }
            base.html = html; /// asignamos el html como propiedad del objeto
            
            return base
        })
    }
    
    function cargarListado(){
		spawn(function *(){
			try{
				let Empresas = yield TireBits.Usuarios.obtenerAccesoBases("Super")
				let empPromises = Empresas.map(obtenerHtmlEmpresa)
                
                /// Usar FOR en lugar de ForEach debido a que estamos usando Promises
                for (let empPromise of empPromises){
                    let emp = yield empPromise;
                    $("#lstEmpresas").append(emp.html)
                    
                    let basePromises = emp.Bases.map(obtenerHtmlBase)
                    for (let basePromise of basePromises){
                        let base = yield basePromise;
                        $("#" + emp.EmpresaID).append(base.html)
                    }
                    
                }
                
                
			}catch(err){
				console.log(err)
			}

		})
	}
    
    
    cargarBase = function(EmpresaID, BaseID){
        spawn(function *(){
            let terminado = yield TireBits.Bases.ingresar(EmpresaID, BaseID)
            window.location = "menu.html"
        })
    }
    
    cargarListado()
    
	/*
    $("#btnLogin").click(function(){
		var username = $("#txtUsuario").val();
		var nip = $("#txtNip").val();
		Login(username, nip)
	})
    */

})
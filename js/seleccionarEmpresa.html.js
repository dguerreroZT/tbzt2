$(function(){
	$('.animsition').animsition();
    
    
    function obtenerHtmlEmpresa(emp){
        return loadContent("seleccionarEmpresa_Empresas.html")
        .then(function(html){
            for (var property in emp){
                var sVal = new RegExp("{{" + property + "}}", "g")
                html = html.replace(sVal, emp[property]);
            }
            emp.html = html; /// asignamos el html como propiedad del objeto
            
            return emp
        })
    }
    
    function obtenerHtmlBase(base){
        return loadContent("seleccionarEmpresa_Bases.html")
        .then(function(html){
            for (var property in base){
                var sVal = new RegExp("{{" + property + "}}", "g")
                html = html.replace(sVal, base[property]);
            }
            base.html = html; /// asignamos el html como propiedad del objeto
            
            return base
        })
    }
    
    function cargarListado(){
		try{
            TireBits.Usuarios.obtenerAccesoBases("Super")
            .then(function(Empresas){
                var empPromises = Empresas.map(obtenerHtmlEmpresa)
                Promise.all(empPromises)
                .then(function(){
                    for(var empPromise of empPromises){
                        empPromise.then(function(emp){
                            $("#lstEmpresas").append(emp.html)

                            var basePromises = emp.Bases.map(obtenerHtmlBase)
                            Promise.all(basePromises)
                            .then(function(){
                                for(var basePromise of basePromises){
                                    basePromise.then(function(base){
                                        $("#" + emp.EmpresaID).append(base.html)
                                    })
                                }
                            })
                        })
                    }
                })
            })
        }catch(err){
            console.log(err)
        }
        
        /*
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
        */
	}
    
    
    cargarBase = function(EmpresaID, BaseID){
        TireBits.Bases.ingresar(EmpresaID, BaseID)
        .then(function(terminado){
            if(terminado){
                window.location = "menu2.html"
            }
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
$(function(){
	$('.animsition').animsition();
	 $('#msgError').modal();

    
	// Check Login
	function Login(username, nip){
        try{
            TireBits.Usuarios.ingresar(username,nip)
             .then(function(logged) {
                if(logged){
                    window.location="seleccionarEmpresa.html";
                }else{
                     $('#msgError').modal('open');
                }
            })
            .catch(function(msg){
                alert(msg)
            })
        
        }catch(err){
				console.log(err)
                alert(err)
        }
				
        
        /*
		spawn(function *fn(){
			try{
				let logged = yield TireBits.Usuarios.ingresar(username,nip)
				if(logged){
					alert("Login Correcto!!!!")
					window.location="seleccionarEmpresa.html";
				}else{
                     alert("No login")
					 $('#msgError').modal('open');
				}
			}catch(err){
				console.log(err)
                alert(err)
			}

		})
        */
	}
    
    function iniciarLogin(){
        var username = $("#txtUsuario").val();
		var nip = $("#txtNip").val();
		Login(username, nip)
    }

    $('#txtUsuario').keypress(function(e) {
        var code = e.keyCode || e.which;
        if(code==13){
            iniciarLogin()
        }
    });
    
    $('#txtNip').keypress(function(e) {
        var code = e.keyCode || e.which;
        if(code==13){
            iniciarLogin()
        }
    });
    
	$("#btnLogin").click(function(){
		iniciarLogin()
	})	
})
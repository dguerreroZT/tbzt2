$(function(){
	$('.animsition').animsition();
	 $('#msgError').modal();


	// Check Login
	function Login(username, nip){
		spawn(function *(){
			try{
				let logged = yield TireBits.Usuarios.ingresar(username,nip)
				if(logged){
					//alert("Login Correcto!!!!")
					window.location="seleccionarEmpresa.html";
				}else{
					 $('#msgError').modal('open');
				}
			}catch(err){
				console.log(err)
			}

		})
	}

	$("#btnLogin").click(function(){
		var username = $("#txtUsuario").val();
		var nip = $("#txtNip").val();
		Login(username, nip)
	})

})

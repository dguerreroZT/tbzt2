$(function(){
	$('.animsition').animsition();


	// Check Login
	function Login(username, nip){
		spawn(function *(){
			try{
				let logged = yield TireBits.Usuarios.ingresar(username,nip)
				if(logged){
					alert("Login Correcto!!!!")
				}else{
					alert("--- Usuario o contraseña incorrectos ---")
				}
			}catch(err){
				console.log(err)
			}

		})
	}

	//$("#btnLogin").click(function(){
	//	var username = $("#txtUsuario").val();
	//	var nip = $("#txtNip").val();
	//	Login(username, nip)
	//})

})
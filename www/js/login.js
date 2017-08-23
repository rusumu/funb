$ ('document').ready(function(){
	
	//saat tombol submit di klik
	$("#submit").click(function(){
		
		//ambil value elemen login
		var nis = $("#name").val();
		var pwd = $("#password").val();
		// buat session nis
		localStorage.setItem('nis',nis);
		
		// kirim ke server
		$.post("http://rusiamee.000webhostapp.com/biologi/login.php",{
			nis:nis,
			pwd:pwd
		},function(result){
			$("#LoginResult").show();
			$("#LoginResult").html(result);
			
		});
	});
});
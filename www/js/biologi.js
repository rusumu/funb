$ ('document').ready(function(){
	$("#ambilSoal").click(function(){
			/******fungsi getjson ******/
		var nomor = $('#nomor').val();
		$.getJSON('http://rusiamee.000webhostapp.com/biologi/soal.php?n='+nomor, function (data){
			//wadah dari id soal
			$("#soal li").remove ();
			$.each(data,function(index,soal){
				$('#soal').append("<li>"+
				"<p>"+soal.n+"</p>"+
				"<p>"+soal.p+"</p>"+
				"<p>"+soal.a+"</p>"+
				"<p>"+soal.b+"</p>"+
				"<p>"+soal.c+"</p>"+
				"<p>"+soal.d+"</p>"+
				"</li>"
				);
			})
			
	
		});
		
	});
	
		
	
	
});
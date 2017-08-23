$('document').ready(function(){
	var nis = localStorage.getItem('nis');
	$("#nisiswa").html(nis);
			/******fungsi getjson ******/
		$.getJSON('http://rusiamee.000webhostapp.com/biologi/bab.php', function (data){
			//wadah dari id soal
			$("#bab li").remove ();
			$.each(data,function(index,bab){
				$('#bab').append("<li class='list-group-item'>"+
				"<p>"+bab.no+
				". <a href=javascript:void(0) onclick=ambilsoal('"+bab.no+"')>"+bab.bahasan+",</a></p>"+
				"</li>"
				);
			})
		});	
	//pada saat tombol lgout di klik
	$('#lgout').click(function(){
		//hapus nis dari memori
		localStorage.setItem('nis','');
		//arahkan ke index.html
		window.location='index.html';
		
	});
	
});

function ambilsoal(bab){
	localStorage.setItem('bab',bab);
	window.location='soal.html';
}
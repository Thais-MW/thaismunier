$(function(){ 
	function Livro (titulo, descricao, genero, autor){
		this.titulo = titulo;
		this.descricao  = descricao;
		this.genero = genero;
		this.autor = autor;
	}
	let acervoArray = new Array();
	$("#add_acervo").click(function(){

		let tituloLivro =$("#titulo").val();
		let descrLivro =$("#descricao").val();
		let generoLivro =$("#genero").val();
		let autorLivro =$("#autor").val();
		let livro = new Livro(tituloLivro, descrLivro, generoLivro, autorLivro);
		acervoArray.push(livro);
		
		$("input[name='acervo_post']").val(JSON.stringify(acervoArray));
		$("#acervo").append(
		$("<div class='row' id='acervo'>").append(
		$("<div class='col-3' id='table2'>").append(
		$("<h3>").text(tituloLivro))).append(
		$("<div class='col-4' id='table2'>").append(
		$("<h3>").text(descrLivro))).append(
		$("<div class='col-2' id='table2'>").append(
		$("<h3>").text(generoLivro))).append(
		$("<div class='col-2' id='table2'>").append(
		$("<h3>").text(autorLivro))));
	})

		$("#acervo").on("click","img", function(){
		$(this).parents("#acervo tr").remove();
	})

			$("#titulo").val("");
			$("#descricao").val("");
			$("#autor").val("");
})
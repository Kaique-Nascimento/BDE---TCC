<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Coronatec</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
		
	<script src="js/funcoes-etec.js"></script>
	
    
	<style>
	
		.linha
		{
			display:none;
		}
		
		.estilo1
		{
            width:200px; 
            height:200px; 
            margin-top: -2%; 
            margin-left: 28%; 
            background-color: black;
            border-radius: 20px;
		}
		
		.botao
		{
			color: white; 
			width: 92px; 
			height: 50px;
		}
		
		.estilo
		{
			color: white; 
		}
        
        input[type='file'] 
        {
            display: none;
        }
		
        .foto
        {
          background-color: #3498db;
          border-radius: 5px;
          color: #fff;
          cursor: pointer;
          margin: 10px;
          padding: 6px 20px
        }
        
		.borda
		{
			border: 4px solid #000;
			border: 3px solid #fff;
            width:200px; 
            height:200px; 
            margin-top: 5%; 
            margin-left: 18%; 
            background-color: white;
            border-radius: 20px;
		}
		
	</style>
	
</head>


<?php


	if(isset($_FILES["arquivo"])) {

		$dir = "imgs"; 
		// recebendo o arquivo multipart 
		$arquivo = $_FILES["arquivo"];

		// recebendo o nome do novo arquivo
		$nomeimagem = $_POST['nomeArq'];
		$tipo = '.png';

		if ($nomeimagem != "")
		{
			// Move o arquivo da pasta temporaria de upload para a pasta de destino 
			if (move_uploaded_file($arquivo["tmp_name"], "$dir/".$nomeimagem.$tipo)) 
			{ 
				echo "<script>if (localStorage.getItem('lingua') == 1) { alert('Arquivo enviado com sucesso!'); } else { alert('Send success!'); }</script>";
			} 
			else
			{ 
				echo "Erro, o arquivo n&atilde;o pode ser enviado."; 
			}    
		} 
	  }
	
	
?>

<body onload="traducao(), selUF()">

<div class="container" style="margin-top: 1%;">
	
	<div class="row" style="margin-top: 0%; background-color: black">
	 
		<div class="col-sm-4">	
		
			<img src="imgs/covidTerra.jpg" class="estilo" style="width:80%; margin-top: 10%; background-color: black" >

			<img onclick="tradutor(1)" src="imgs/brasil.jpg" class="estilo" style="width:10%; margin-left: 27%; margin-top: 7%; background-color: black" >
			<img onclick="tradutor(2)" src="imgs/england.jpg" class="estilo" style="width:10%; margin-left: 2%;margin-top: 7%; background-color: black" >
            
            <input type="button" id="covid" style="margin-top: 10%; margin-left:20%" type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#explica" value="O que é Covid?">
			
		</div>
		
		<div class="col-sm-4">
					
			<p id="titulo" style="color: green; font-size: 40px; text-align: center; margin-left:10%; margin-top: 5%">PESQUISA DO CORONAVIRUS</p>
					
			<div style="margin-left:0%">
			
				<form class="form-horizontal estilo" action="">
					
					<div class="form-group">
					
						<label id="tnome" class="control-label estilo" for="idade">Nome:</label>

						<input type="text" class="form-control" style="width:400px;" id="nome" placeholder="" name="nome">

						<label id="tidade" class="control-label estilo" for="idade">Idade:</label>
         
						<input type="text" class="form-control" id="idade" style="width:50px" placeholder="" name="idade">
	
						<label id="tsexo" class="control-label estilo" for="sexo">Sexo:</label>
        
						<fieldset>
							<select name="category" class="form-control" id="sexo" style="width:150px">
								<option value="0">----</option>
								<option id="smasc" value="1">Masculino</option>
								<option id="sfemi" value="2">Feminino</option>
							</select>							
						</fieldset>
						
						<label id="ttemp" class="control-label estilo" for="temp">Temperatura:</label>
         
						<label id="tUF" class="control-label estilo" style="margin-left: 17%" for="origem">Origem:</label>
						
						<input type="text" class="form-control" id="temp" style="width:90px" placeholder="" name="temp">
        
						<fieldset style="margin-left: 42%; margin-top: -8%">
							<select name="category" id="uf"  class="form-control" style="width: 80px;">
								<option id="opc" value="0">----</option>
							</select>
						</fieldset>
                        		
					</div>			
					
				 </form>	
				
			</div>
			
			<br><br>
			
		</div>
		
		<div class="col-sm-4">	
			
			<div style="margin-left:18%;margin-top:6%">
				<label style="margin-left:24%" id="texto" class="estilo"></label> 		
				
				<div class="borda">
					<img src="imgs/etecVac.jpg" class="" style="width:100%; margin-left:0%; margin-top:14%">
				</div>
				
			</div>

			<div style="margin-left:18%; margin-top:12%">
			
				<form enctype="multipart/form-data" method="post" name="acao">
					
                    <input type="button" class="btn btn-success botao" id="grava" value="GRAVA" onclick="registra()">
                    <input type="button" class="btn btn-success botao" id="resumo" value="RESUMO" onclick="estatisticas()">
                    <input type="button" class="btn btn-success botao" id="cadastro" data-toggle="modal" onclick="lista()" value="LISTA" data-target="#lista">
          <!--          <label for="arquivo" class="foto" style="margin-left:18%; margin-top: 7%">Foto</label> 
					<label class="foto" style="margin-left:18%; margin-top: 7%" for="arquivo">Foto</label> -->
					<div class="form-group">
						<label style="margin-left:18%; margin-top: 7%" class="foto" id="fotos" for="arquivo"> FOTO </label>
						<input type="file" class="form-control-file" id="arquivo" name="arquivo" for="arquivo" accept=".jpg,.png">
						<input type="submit" id="gravar" value="Gravar" class="btn btn-primary">
						<br>
						<input style="margin-left:28%;" size=10px type=text id="nomeArq" value="" for="nomeArq" name="nomeArq">	  					

					</div>
                </form>
			</div>
		</div>	
		
	</div>	
	
	<div class="row" style="margin-top: 0%; background-color: black">
	
		<div class="col-sm-4" id="foto">	

			<img src="imgs/covid2.jpg" class="estilo" style="width:80%; margin-left:4%; margin-top:0%">
					
		</div>	
		
		<div class="col-sm-4" style="margin-top: -2%; color: white;  border: 3px solid #fff">
			<br>
			<div style="margin-left: 25%">
				<h5 id="tpesq">Entrevistados:</h5>
				<h5 id="tfebril">Total Febris:</h5>
				<h5 id="trisco">Grupo de Risco:</h5>
				<h5 id="frisco">Febris de Risco:</h5>
				<h5 id="tmasc">Masculino:</h5>
				<h5 id="tfemi">Feminino:</h5>
				<br>
			</div>
		</div>	

		<div class="col-sm-4">	
            
            <a>
                <input type="file" id="arquivo" name="arquivo">
                <img id="preview" src="" class="estilo1">
            </a>
            
		</div>	
		
	</div>

	<div class="row" style="margin-top: 0%; background-color: black">	
	   <br><br>
	</div>
	
<!--	<div class="row" style="background-color: black">
	   <br><br>
        <div style="margin-left: 20%;">
            <a style="color:white;font-size: 18px" href="https://aluno.etecarmine.com.br/2DS-M/Melissa/index.html">Melissa / </a>
            <a style="color:white;font-size: 18px" href="https://aluno.etecarmine.com.br/2DS-M/LuizSouza/CoronaTecJS/index.html">Luis Souza / </a>
            <a style="color:white;font-size: 18px" href="https://aluno.etecarmine.com.br/2DS-M/VictorAntunes/PW/index.html">Victor Antunes / </a>       
            <a style="color:white;font-size: 18px" href="https://aluno.etecarmine.com.br/2DS-M/Ryan/index.html">Ryan / </a>
            <a style="color:white;font-size: 18px" href="https://aluno.etecarmine.com.br/2DS-M/Taina/index.html">Taina / </a>
            <a style="color:white;font-size: 18px" href="https://aluno.etecarmine.com.br/2DS-M/Marlon/index.html">Marlon / </a>   
            <a style="color:white;font-size: 18px" href="https://aluno.etecarmine.com.br/2DS-M/Thales/index.html">Thales / </a>
            <a style="color:white;font-size: 18px" href="https://aluno.etecarmine.com.br/2DS-M/ViniciusS/Coronatec/index.html">Vinicius  </a>
        </div>
    </div>
-->

</div>

<!-- Modal -->
<div id="lista" class="modal fade" role="dialog">

  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
	
	  <div class="modal-header" style="height: 60px">
	  
		<button type="button" class="close" data-dismiss="modal">&times;</button>
		
          <a id="mcad" class="modal-title" style="color: blue; font-size: 24px">LISTA DA PESQUISA</a>
		  <img class="estilo" style="width:15%; margin-left: 80%; margin-top: -10%">
	
		
	  </div>
	  
      <div class="modal-body">
	  
			<table class="table table-striped">
				<thead>
				  <tr>
					<th id="mnome">Nome</th>
					<th id="midade" style="text-align: center">Idade</th>
					<th id="morigem" style="text-align: center">Origem</th>
				  </tr>
				</thead>
				<tbody id="lnome">
				  <tr>
					<td></td>
				  </tr>
				</tbody>
			 </table>	  
			 
      </div>
	  
      <div class="modal-footer">
        
      </div>
	     
    </div>

  </div>
  
</div>


<div id="explica" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 id="frase" class="modal-title">Conheça o Covid</h4>
      </div>
      <div class="modal-body">
        <p id="frase2">Covid é uma doença originada na China e ganhou força no inicio de 2020.......</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
      </div>
    </div>

  </div>
</div>  

<script>

 function readImage() 
    {
        if (this.files && this.files[0]) 
        {
            var file = new FileReader();
            file.onload = function(e) 
            {
                document.getElementById("preview").src = e.target.result;
            };       
            
            file.readAsDataURL(this.files[0]);
        }
   }
    
document.getElementById("arquivo").addEventListener("change", readImage, false);
    
</script>

</body>

</html>
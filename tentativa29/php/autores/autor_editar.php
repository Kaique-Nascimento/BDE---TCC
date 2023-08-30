<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["nome"]) && isset($_REQUEST["nacionalidade"]) &&
   isset($_REQUEST["nascimento"]) && isset($_REQUEST["falecimento"]) &&
   isset($_REQUEST["biografia"]) && isset($_REQUEST["categoria"]) &&
   isset($_REQUEST["periodo"]) && isset($_REQUEST["codigo"])) {

    // Obter os dados do formulário
    $autor = $_REQUEST["nome"];
    $nacionalidade = $_REQUEST["nacionalidade"];
    $nascimento = $_REQUEST["nascimento"];
    $falecimento = $_REQUEST["falecimento"];
    $biografia = $_REQUEST["biografia"];
    $valor_categoria = $_REQUEST["categoria"];
    $valor_periodo = $_REQUEST["periodo"];
    $codigo = $_REQUEST["codigo"];

    $sql = "UPDATE tb03_autor
	SET
	tb03_nome_autor=?,
		tb03_biografia=?,
		tb03_nascimento=?,
		tb03_obito=?,
		tb03_nacionalidade=?,
		tb03_foto_autor=NULL,
		tb03_id_categoria= (SELECT tb04_id_categoria FROM tb04_categoria WHERE  tb04_nome_categoria = ?),
		tb03_id_periodo= (SELECT tb05_id_periodo from tb05_periodo where tb05_nome_periodo = ?)
	WHERE tb03_id_autor=?";

    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($autor, $biografia, $nascimento, $falecimento,
        $nacionalidade, $valor_categoria, $valor_periodo, $codigo));        
        $mensagem = "Registro alterado com sucesso!".$codigo;
    } catch (PDOException $e) {
        $mensagem = "Erro ao alterar o registro!";
    }
    
} else {
    $mensagem = "Os dados não foram informados!";
}


echo json_encode(array("mensagem" => $mensagem));
?>
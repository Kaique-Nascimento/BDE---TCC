<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["nome"]) && isset($_REQUEST["codigo"])) {

    $nome = $_REQUEST["nome"];
    $codigo = $_REQUEST["codigo"];
    $sql = "UPDATE tb04_categoria
	SET
		tb04_nome_genero=?
	WHERE tb04_id_genero=?";
    
    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($nome, $codigo));
        
        $mensagem = "Registro alterado com sucesso!";
    } catch (PDOException $e) {
        $mensagem = "Erro ao alterar o registro!";
    }
    
} else {
    $mensagem = "Os dados não foram informados!";
}


echo json_encode(array("mensagem" => $mensagem));
?>
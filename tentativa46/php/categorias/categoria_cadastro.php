<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["nome"])) {

    $categoria = $_REQUEST["nome"];

    $sql = "SELECT tb04_nome_categoria FROM tb04_categoria where tb04_nome_categoria = ?";
    $comando = $banco->prepare($sql);
    $comando->execute(array($categoria));
    if($comando->fetch()) {
        $mensagem = "Categoria existente!";
        echo json_encode(array("mensagem" => $mensagem));
        exit();
    }

    $sql = "INSERT INTO tb04_categoria
	(tb04_id_categoria, tb04_nome_categoria)
	VALUES (NULL, ?)";
    
    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($categoria));
        
        $mensagem = "Registro inserido com sucesso!";
    } catch (PDOException $e) {
        $mensagem = "Erro ao inserir o registro!";
    }
    
} else {
    $mensagem = "Os dados não foram informados!";
}


echo json_encode(array("mensagem" => $mensagem));
?>


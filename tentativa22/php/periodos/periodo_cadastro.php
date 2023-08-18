<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["nome"]) && isset($_REQUEST["inicio"])  && isset($_REQUEST["fim"])) {

    $periodo = $_REQUEST["nome"];
    $inicio = $_REQUEST["inicio"];
    $fim = $_REQUEST["fim"];

    $sql = "SELECT tb05_id_periodo, tb05_nome_periodo, tb05_inicio, tb05_fim
	FROM tb05_periodo where tb05_nome_periodo = ?";
    $comando = $banco->prepare($sql);
    $comando->execute(array($periodo));
    if($comando->fetch()) {
        $mensagem = "Período existente!";
        echo json_encode(array("mensagem" => $mensagem));
        exit();
    }

    $sql = "INSERT INTO tb05_periodo
	(tb05_id_periodo, tb05_nome_periodo, tb05_inicio, tb05_fim)
	VALUES (NULL, ?,? , ?)";
    
    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($periodo, $inicio, $fim));
        
        $mensagem = "Registro inserido com sucesso!";
    } catch (PDOException $e) {
        $mensagem = "Erro ao inserir o registro!";
    }
    
} else {
    $mensagem = "Os dados não foram informados!";
}


echo json_encode(array("mensagem" => $mensagem));
?>


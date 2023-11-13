<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["nome"]) && isset($_REQUEST["inicio"])  && isset($_REQUEST["fim"])) {

    $periodo = $_REQUEST["nome"];
    $inicio = $_REQUEST["inicio"];
    $fim = $_REQUEST["fim"];
    $pequeno = strtolower($periodo);  
    $sql = "SELECT tb05_nome_periodo FROM tb05_periodo WHERE LOWER(REPLACE(tb05_nome_periodo, ' ', '')) LIKE ?";
    $comando = $banco->prepare($sql);
    $comando->execute(array("%" . str_replace(' ', '', $pequeno) . "%"));
    if ($comando->fetch()) {
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


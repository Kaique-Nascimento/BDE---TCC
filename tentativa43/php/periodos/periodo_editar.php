<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["nome"]) && isset($_REQUEST["inicio"]) && isset($_REQUEST["fim"]) && isset($_REQUEST["codigo"])) {

    $nome = $_REQUEST["nome"];
    $inicio = $_REQUEST["inicio"];
    $fim = $_REQUEST["fim"];
    $codigo = $_REQUEST["codigo"];
    $sql = "UPDATE tb05_periodo
	SET
		tb05_nome_periodo=?,
		tb05_inicio=?,
		tb05_fim=?
	WHERE tb05_id_periodo=?";
    
    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($nome, $inicio, $fim, $codigo));
        
        $mensagem = "Registro alterado com sucesso!";
    } catch (PDOException $e) {
        $mensagem = "Erro ao alterar o registro!";
    }
    
} else {
    $mensagem = "Os dados não foram informados!";
}


echo json_encode(array("mensagem" => $mensagem));
?>
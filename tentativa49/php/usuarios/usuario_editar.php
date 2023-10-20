<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["nome"]) && isset($_REQUEST["email"]) && isset($_REQUEST["rm"])) {

    $nome = $_REQUEST["nome"];
    $email = $_REQUEST["email"];
    $rm = $_REQUEST["rm"];

    $sql = "UPDATE tb02_administradores
	SET
		tb02_nome=?,
		tb02_email=?
	WHERE tb02_rm=?";
    
    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($nome, $email, $rm));
        
        $mensagem = "Registro alterado com sucesso!";
    } catch (PDOException $e) {
        $mensagem = "Erro ao inserir registros";
    }
    
} else {
    $mensagem = "Os dados não foram informados!";
}


echo json_encode(array("mensagem" => $mensagem));
?>
<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["rm"]) && isset($_REQUEST["nome"])
&& isset($_REQUEST["email"]) && isset($_REQUEST["senha"])) {

    $rm = $_REQUEST["rm"];
    $senha = $_REQUEST["senha"];
    $email = $_REQUEST["email"];
    $nome = $_REQUEST["nome"];
    
    $sql = "SELECT tb02_rm, tb02_nome, tb02_email, tb02_senha, tb02_cod_veri
	FROM tb02_administradores where tb02_rm = ?";
    $comando = $banco->prepare($sql);
    $comando->execute(array($rm));
    if($comando->fetch()) {
        $coisa = 1;
        $mensagem = "Usuário existente! Coloque outro!";
        echo json_encode(array("mensagem" => $mensagem, "coisa" => $coisa));
        exit();
    }

    $sql = "INSERT INTO tb02_administradores
	(tb02_rm, tb02_nome, tb02_email, tb02_senha, tb02_cod_veri)
	VALUES (?, ?, ?, ?, NULL)";
    
    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($rm, $nome, $email, $senha));
        $coisa = 0;
        $mensagem = "Cadastrado com sucesso! Faça login";
    } catch (PDOException $e) {
        $mensagem = "Erro ao inserir o registro!";
    }
    
} else {
    $mensagem = "Os dados não foram informados!";
}


echo json_encode(array("mensagem" => $mensagem, "coisa" => $coisa));
?>


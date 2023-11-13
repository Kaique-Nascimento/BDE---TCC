<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["senha"]) && isset($_REQUEST["email"])) {

    
    $senha = $_REQUEST["senha"];
    $email = $_REQUEST["email"];
    $sql = "UPDATE tb02_administradores
	SET
		tb02_email=?,
		tb02_senha=?,  
        tb02_cod_veri = NULL
        WHERE tb02_email=?
    ";
    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($email, $senha, $email));
        $mensagem = "Senha alterada com sucesso! Faça login!";
        $coisa = 0;
    } catch (PDOException $e) {
        $coisa  = 1;
        $mensagem = "Erro ao alterar o registro!";
    }
    
} else {
    $mensagem = "Os dados não foram informados!";
}


echo json_encode(array("mensagem" => $mensagem, "coisa" => $coisa));
?>
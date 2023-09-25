<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["email"]) && isset($_REQUEST["codigo"])) {

    $email = $_REQUEST["email"];
    $codigo = $_REQUEST["codigo"];

    $sql = "SELECT tb02_email 
    FROM tb02_administradores 
    WHERE tb02_email = ?";
    $comando = $banco->prepare($sql);
    $comando->execute(array($email));
    if($comando->fetch()) {
        $sqlUpdate = "UPDATE 
        tb02_administradores 
        SET 
        tb02_cod_veri = ?
        WHERE tb02_email = ?";
        
        try {
            $comandoUpdate = $banco->prepare($sqlUpdate);
            $comandoUpdate->execute(array($codigo, $email));
            $coisa = 0;
            $mensagem = "Registro alterado com sucesso!";
        } catch (PDOException $e) {
            $coisa = 1;
            $mensagem = "Erro ao alterar o registro!";
        }
    } else {
        // O usuário não existe, retorne uma mensagem apropriada
        $coisa = 2;
        $mensagem = "Usuário Inexistente! Faça um cadastro agora!";
    }
} else {
    $mensagem = "Os dados não foram informados!";
}

echo json_encode(array("mensagem" => $mensagem, "coisa" => $coisa));
?>

<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["email"]) && isset($_REQUEST["codigo"])) {

    $email = $_REQUEST["email"];
    $codigo = $_REQUEST["codigo"];

    $sql = "SELECT tb02_email, tb02_cod_veri 
    FROM tb02_administradores 
    WHERE tb02_email = ? AND tb02_cod_veri = ?";
    $comando = $banco->prepare($sql);
    $comando->execute(array($email, $codigo));
    if($comando->fetch()) {
        $mensagem = "Código certo!";
        $coisa = 0;
    } else {
        $coisa = 1;
        $mensagem = "Tente outro codigo!";
    }
} else {
    $mensagem = "Os dados não foram informados!";
}

echo json_encode(array("mensagem" => $mensagem, "coisa" => $coisa));
?>

<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["rm"]) && isset($_REQUEST["senha"])) {

    $rm = $_REQUEST["rm"];
    $senha = $_REQUEST["senha"];
    
    $sql = "SELECT tb02_senha FROM tb02_administradores WHERE tb02_rm = ?";
    $comando = $banco->prepare($sql);
    $comando->execute(array($rm));
    
    $row = $comando->fetch(PDO::FETCH_ASSOC);
    
    if($row) {
        $senha_armazenada = $row["tb02_senha"];
        // Verifique se a senha fornecida corresponde à senha armazenada
        if($senha ==  $senha_armazenada) {
            $mensagem = "Acesso liberado, Bem-Vindo!";
            $coisa = 0;
        } else {
            $mensagem = "Senha incorreta, tente novamente!";
            $coisa = 1;
        }
    } else {
        $mensagem = "Usuário inexistente!";
        $coisa = 2;
    }
} else {
    $mensagem = "Parâmetros não fornecidos!";
    $coisa = 3;
}

echo json_encode(array("mensagem" => $mensagem, "coisa" => $coisa));
?>

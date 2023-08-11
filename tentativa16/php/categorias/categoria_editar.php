<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "conexao.php";

if(isset($_REQUEST["cepefe"])) {

    $cpf = $_REQUEST["cepefe"];
    $nome = $_REQUEST["noime"];

    $sql = "update usuarios set
        usu_nome = ?
        where usu_cpf = ?";
    
    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($nome, $cpf));
        
        $mensagem = "Registro alterado com sucesso!";
    } catch (PDOException $e) {
        $mensagem = "Erro ao alterar o registro!";
    }
    
} else {
    $mensagem = "Os dados não foram informados!";
}


echo json_encode(array("mensagem" => $mensagem));
?>
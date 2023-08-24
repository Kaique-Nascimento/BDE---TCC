<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["nome"]) && isset($_REQUEST["nacionalidade"]) &&
   isset($_REQUEST["nascimento"]) && isset($_REQUEST["falecimento"]) &&
   isset($_REQUEST["biografia"]) && isset($_REQUEST["categoria"]) &&
   isset($_REQUEST["periodo"])) {

    // Obter os dados do formulário
    $autor = $_REQUEST["nome"];
    $nacionalidade = $_REQUEST["nacionalidade"];
    $nascimento = $_REQUEST["nascimento"];
    $falecimento = $_REQUEST["falecimento"];
    $biografia = $_REQUEST["biografia"];
    $valor_categoria = $_REQUEST["categoria"];
    $valor_periodo = $_REQUEST["periodo"];

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
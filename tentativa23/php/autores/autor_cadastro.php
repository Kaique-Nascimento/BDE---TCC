<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["nome"]) && isset($_REQUEST["nacionalidade"])  && isset($_REQUEST["nascimento"])
&& isset($_REQUEST["falecimento"]) && isset($_REQUEST["biografia"])  && isset($_REQUEST["valor_categoria"])
&& isset($_REQUEST["valor_periodo"])) {

    $autor = $_REQUEST["nome"];
    $nacionalidade = $_REQUEST["nacionalidade"];
    $nascimento = $_REQUEST["nascimento"];
    $falecimento = $_REQUEST["falecimento"];
    $biografia = $_REQUEST["biografia"];
    $valor_categoria = $_REQUEST["valor_categoria"];
    $valor_periodo = $_REQUEST["valor_periodo"];

    $sql = "SELECT tb03_nome_autor FROM tb03_autor WHERE tb03_nome_autor = ?";
    $comando = $banco->prepare($sql);
    $comando->execute(array($autor));
    if($comando->fetch()) {
        $mensagem = "Autor existente!";
        echo json_encode(array("mensagem" => $mensagem));
        exit();
    }
// Tem que fazer um insert, mas tem que pegar o Id da categoria e do período para cadastrar
    $sql = "INSERT INTO tb03_autor
	(tb03_id_autor, tb03_nome_autor, tb03_biografia, tb03_nascimento, tb03_obito, tb03_nacionalidade, tb03_foto_autor, tb03_id_categoria, tb03_id_periodo)
	VALUES (NULL, ?, ?, ?, ?, ?, NULL, ?, ?)";
    
    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($autor, $nacionalidade, $nascimento, $falecimento, $biografia,$valor_categoria, $valor_periodo));
        
        $mensagem = "Registro inserido com sucesso!";
    } catch (PDOException $e) {
        $mensagem = "Erro ao inserir o registro!";
    }
    
} else {
    $mensagem = "Os dados não foram informados!";
}


echo json_encode(array("mensagem" => $mensagem));
?>


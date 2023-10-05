<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";
if (
    isset($_POST["nome"]) && isset($_POST["nacionalidade"]) &&
    isset($_POST["nascimento"]) && isset($_POST["falecimento"]) &&
    isset($_POST["biografia"]) && isset($_POST["categoria"]) &&
    isset($_POST["periodo"])) {
        
    $autor = $_POST["nome"];
    $nacionalidade = $_POST["nacionalidade"];
    $nascimento = $_POST["nascimento"];
    $falecimento = $_POST["falecimento"];
    $biografia = $_POST["biografia"];
    $categoria = $_POST["categoria"];
    $periodo = $_POST["periodo"];

    $sql = "SELECT tb03_nome_autor FROM tb03_autor WHERE tb03_nome_autor = ?";
    $comando = $banco->prepare($sql);
    $comando->execute(array($autor));
    if ($comando->fetch()) {
        $mensagem = "Autor existente!";
        echo json_encode(array("mensagem" => $mensagem));
        exit();
    }

    // Execute a inserção do autor
    $sql = "INSERT INTO tb03_autor
            (tb03_id_autor, tb03_nome_autor, tb03_biografia,
            tb03_nascimento, tb03_obito, tb03_nacionalidade, 
            tb03_foto, tb03_id_categoria, tb03_id_periodo)
            VALUES (NULL, ?, ?, ?, ?, ?, ?, 
            (SELECT tb04_id_categoria FROM tb04_categoria WHERE tb04_nome_categoria = ?), 
            (SELECT tb05_id_periodo FROM tb05_periodo WHERE tb05_nome_periodo = ?))";

    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($autor, $biografia, $nascimento, $falecimento,
            $nacionalidade, "sem.png", $categoria, $periodo));

        $mensagem = "Autor cadastrado com sucesso!";
    } catch (PDOException $e) {
        $mensagem = "Erro ao inserir o registro: " . $e->getMessage();
    }
}else{
    $mensagem = "Os dados nao foram enviados";
}

echo json_encode(array("mensagem" => $mensagem));
?>

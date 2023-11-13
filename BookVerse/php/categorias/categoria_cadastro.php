<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["nome"])) {

    $categoria = $_REQUEST["nome"];
    $pequeno = strtolower($categoria);  
$mensagem = "";
    $sql = "SELECT tb04_nome_categoria FROM tb04_categoria WHERE LOWER(REPLACE(tb04_nome_categoria, ' ', '')) LIKE ?";
    $comando = $banco->prepare($sql);
    $comando->execute(array("%" . str_replace(' ', '', $pequeno) . "%"));
    if ($comando->fetch()) {
        $mensagem = "Categoria existente!";
        $coisa = 1;
        echo json_encode(array("mensagem" => $mensagem, "coisa" => $coisa));
        exit();
    }

    $sql = "INSERT INTO tb04_categoria
	(tb04_id_categoria, tb04_nome_categoria)
	VALUES (NULL, ?)";
    
    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($categoria));
        
        $mensagem = "Categoria cadastrada com sucesso!";
    } catch (PDOException $e) {
        $mensagem = "Erro ao inserir o registro!";
    }
    
} else {
    $mensagem = "Os dados não foram informados!";
}


echo json_encode(array("mensagem" => $mensagem));
?>


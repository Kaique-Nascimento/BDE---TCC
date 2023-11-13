<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["codigo"])) {
    $mensagem = "";
    $codigo = $_REQUEST["codigo"];
    

    $sql = "DELETE FROM tb04_categoria WHERE 
    tb04_id_categoria=?";
    
    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($codigo));
        
        $coisa = 0;
    } catch (PDOException $e) {
        $mensagem = "Categoria não pôde ser excluída. Apague ou Altere todos os livros e/ou autores relacionados a categoria!";
        $coisa = 1;
    }
    
} else {
    $mensagem = "Os dados não foram informados!";
}


echo json_encode(array("mensagem" => $mensagem, "coisa" => $coisa));
?>


<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";
$mensagem = "";
if(isset($_REQUEST["codigo"])) {

    $codigo = $_REQUEST["codigo"];
    

    $sql = "DELETE FROM tb03_autor WHERE tb03_id_autor=?";
    
    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($codigo));
        $coisa = 0;

    } catch (PDOException $e) {
        $mensagem = "Autor não pôde ser excluído. Exclua todos os livros cadastrados em seu nome!";
        $coisa = 1;
    }
    
} else {
    $mensagem = "Os dados não foram informados!";
}


echo json_encode(array("mensagem" => $mensagem, "coisa" => $coisa));
?>


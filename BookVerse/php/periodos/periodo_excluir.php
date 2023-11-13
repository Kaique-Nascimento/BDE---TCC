<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["codigo"])) {
$mensagem="";
    $codigo = $_REQUEST["codigo"];
    

    $sql = "DELETE FROM tb05_periodo WHERE 
    tb05_id_periodo=?";
    
    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($codigo));
        
$coisa = 0;
    } catch (PDOException $e) {
        $mensagem = "Período não pôde ser excluído. Apague ou Altere todos os livros e autores relacionados ao período!";
    $coisa = 1;
    }
    
} else {
    $mensagem = "Os dados não foram informados!";
}


echo json_encode(array("mensagem" => $mensagem, "coisa" => $coisa));
?>


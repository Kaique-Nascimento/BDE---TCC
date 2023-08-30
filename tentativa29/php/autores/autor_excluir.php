<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["codigo"])) {

    $codigo = $_REQUEST["codigo"];
    

    $sql = "DELETE FROM tb03_autor WHERE tb03_id_autor=NULL";
    
    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($codigo));
        
        $mensagem = "Registro excluido com sucesso!";
    } catch (PDOException $e) {
        $mensagem = "Erro ao excluir o registro!";
    }
    
} else {
    $mensagem = "Os dados não foram informados!";
}


echo json_encode(array("mensagem" => $mensagem));
?>


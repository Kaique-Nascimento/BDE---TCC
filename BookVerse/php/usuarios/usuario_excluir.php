<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["codigo"])) {

    $codigo = $_REQUEST["codigo"];
    

    $sql = "DELETE FROM tb02_administradores WHERE tb02_rm=?";
    
    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($codigo));
        
        $mensagem = "Usuário excluido com sucesso!";
    } catch (PDOException $e) {
        $mensagem = "Erro ao excluir o Usuário!";
    }
    
} else {
    $mensagem = "Os dados não foram informados!";
}


echo json_encode(array("mensagem" => $mensagem));
?>


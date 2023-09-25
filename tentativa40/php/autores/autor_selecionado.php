<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

$sql = "SELECT tb03_id_autor, tb03_nome_autor, tb03_biografia, 
tb03_nascimento, tb03_obito, tb03_nacionalidade, 
tb03_foto, tb03_id_categoria, tb03_id_periodo
FROM tb03_autor
WHERE tb03_id_autor = ".$_GET['codigo'];

$comando = $banco->prepare($sql);
$comando->execute();

$registros = $comando->fetchAll();

echo json_encode($registros);

<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

$sql = "SELECT tb03_id_autor, tb01_id_autor, tb01_id_livro,
tb03_nome_autor, tb01_nome_livro, tb01_ftcapa
FROM tb03_autor
INNER JOIN tb01_livro ON tb03_id_autor = tb01_id_autor
WHERE tb03_id_autor = ".$_GET['codigo'];



$comando = $banco->prepare($sql);
$comando->execute();

$registros = $comando->fetchAll();

echo json_encode($registros);

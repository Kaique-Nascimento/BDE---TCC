<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

$sql = "SELECT tb01_id_livro, tb01_nome_livro,
tb01_ftcapa, tb01_id_autor, 
(SELECT tb03_nome_autor FROM tb03_autor WHERE tb03_id_autor = tb01_id_autor) AS nome_autor
FROM tb01_livro";

$comando = $banco->prepare($sql);
$comando->execute();

$registros = $comando->fetchAll();

echo json_encode($registros);

<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

$sql = "SELECT tb01_id_livro, tb01_nome_livro, tb01_id_autor, 
tb03_nome_autor, tb01_ftcapa, tb01_id_sala, tb06_nome, tb06_id, tb06_ano
FROM tb06_salas
INNER JOIN tb01_livro on tb01_id_sala = tb06_id
INNER JOIN tb03_autor on tb01_id_autor = tb03_id_autor
WHERE tb06_id = " . $_GET['codigo'];



$comando = $banco->prepare($sql);
$comando->execute();

$registros = $comando->fetchAll();

echo json_encode($registros);

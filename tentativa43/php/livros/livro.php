<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

$sql = "SELECT * FROM tb01_livro";

$comando = $banco->prepare($sql);
$comando->execute();

$registros = $comando->fetchAll();

echo json_encode($registros);

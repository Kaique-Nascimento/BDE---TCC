<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

$sql = "SELECT *
FROM tb02_administradores";

$comando = $banco->prepare($sql);
$comando->execute();

$registros = $comando->fetchAll();

echo json_encode($registros);



<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

$sql = "SELECT tb05_id_periodo, tb05_nome_periodo, tb05_inicio, tb05_fim
FROM tb05_periodo";

$comando = $banco->prepare($sql);
$comando->execute();

$registros = $comando->fetchAll();

echo json_encode($registros);



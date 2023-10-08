<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

$sql = "SELECT tb01_id_livro, tb01_nome_livro, tb01_editora, tb01_sinopse, tb01_id_autor, tb01_id_categoria, tb01_data, tb01_ftcapa, tb01_pdf, tb01_id_periodo, tb01_classificacao_indicativa, tb01_id_sala,
(SELECT tb03_nome_autor FROM tb03_autor WHERE tb03_id_autor = tb01_id_autor) AS nome_autor
FROM tb01_livro";

$comando = $banco->prepare($sql);
$comando->execute();

$registros = $comando->fetchAll();

echo json_encode($registros);

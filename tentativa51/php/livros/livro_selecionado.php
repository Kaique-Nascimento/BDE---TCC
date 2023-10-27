<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

$sql = "SELECT
tb01_id_livro,
tb01_nome_livro,
tb01_editora,
tb01_sinopse,
tb01_id_autor,
tb01_id_categoria,
DATE_FORMAT(tb01_data, '%d/%m/%Y') AS tb01_data_formatada,
tb01_data,
tb01_ftcapa,
tb01_pdf,
tb01_id_periodo,
tb01_classificacao_indicativa,
tb01_id_sala,
tb03_nome_autor,
tb04_nome_categoria,
tb05_nome_periodo,
tb06_nome,
tb06_ano,
tb06_id
FROM tb01_livro
INNER JOIN tb06_salas ON tb01_id_sala = tb06_id
INNER JOIN tb04_categoria ON tb01_id_categoria = tb04_id_categoria
INNER JOIN tb05_periodo ON tb01_id_periodo = tb05_id_periodo
INNER JOIN tb03_autor ON tb01_id_autor = tb03_id_autor
WHERE tb01_id_livro = " . $_GET['codigo'];



$comando = $banco->prepare($sql);
$comando->execute();

$registros = $comando->fetchAll();

echo json_encode($registros);

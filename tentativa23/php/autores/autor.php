<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

$sql = "SELECT tb03_id_autor, tb03_nome_autor, tb03_biografia, date_format(tb03_nascimento, '%d/%m/%Y') tb03_nascimento, date_format(tb03_falecimento, '%d/%m/%Y') tb03_falecimento, tb03_nacionalidade, tb03_foto_autor, tb03_id_categoria, tb03_id_periodo
FROM tb03_autor";

$comando = $banco->prepare($sql);
$comando->execute();

$registros = $comando->fetchAll();

echo json_encode($registros);


//  SELECT tb03_id_autor, tb03_nome_autor, tb03_biografia, tb03_nascimento, tb03_obito,
//  tb03_nacionalidade, tb03_foto_autor, tb03_id_categoria, tb03_id_periodo, tb04_nome_categoria, 
//  tb05_nome_periodo FROM tb03_autor
// JOIN tb04_categoria ON tb03_id_categoria = tb04_id_categoria
// JOIN tb05_periodo ON tb03_id_periodo = tb05_id_periodo";
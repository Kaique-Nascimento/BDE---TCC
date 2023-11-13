<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

$sql = "SELECT tb03_autor.*, COUNT(tb01_id_livro) as contagem
FROM tb03_autor
LEFT JOIN tb01_livro ON tb01_livro.tb01_id_autor = tb03_autor.tb03_id_autor
GROUP BY tb03_id_autor
ORDER BY tb03_nome_autor ASC";

$comando = $banco->prepare($sql);
$comando->execute();

$registros = $comando->fetchAll();

echo json_encode($registros);

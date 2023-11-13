<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if (
    isset($_POST["livro"]) && isset($_POST["editora"]) &&
    isset($_POST["publicacao"]) && isset($_POST["sinopse"]) &&
    isset($_POST["autor"]) && isset($_POST["categoria"]) &&
    isset($_POST["periodo"]) && isset($_POST["classificacao"])  &&
    isset($_POST["sala"])) 
{
    $livro = $_POST["livro"];
    $editora = $_POST["editora"];
    $publicacao = $_POST["publicacao"];
    $sinopse = $_POST["sinopse"];
    $autor = $_POST["autor"];
    $categoria = $_POST["categoria"];
    $periodo = $_POST["periodo"];
    $classificacao = $_POST["classificacao"];
    $sala = $_POST["sala"];

       
$pequeno = strtolower($livro);  

$sql = "SELECT tb01_nome_livro FROM tb01_livro WHERE LOWER(REPLACE(tb01_nome_livro, ' ', '')) LIKE ?";
$comando = $banco->prepare($sql);
$comando->execute(array("%" . str_replace(' ', '', $pequeno) . "%"));
if ($comando->fetch()) {
    $mensagem = "Livro existente!";
    echo json_encode(array("mensagem" => $mensagem));
    exit();
}

            $sql = "INSERT INTO tb01_livro
            (tb01_id_livro, tb01_nome_livro, tb01_editora, 
            tb01_sinopse, tb01_id_autor, tb01_id_categoria, 
            tb01_data, tb01_ftcapa, tb01_pdf, 
            tb01_id_periodo, tb01_classificacao_indicativa, tb01_id_sala)
            VALUES 
            (NULL, ?, ?,
             ?, (SELECT tb03_id_autor FROM tb03_autor WHERE tb03_nome_autor = ?), 
             (SELECT tb04_id_categoria FROM tb04_categoria WHERE tb04_nome_categoria = ?),
              ?, ?, ?,
              (SELECT tb05_id_periodo FROM tb05_periodo WHERE tb05_nome_periodo = ?), ?, 
              ?)";

            try {
                $comando = $banco->prepare($sql);
                $comando->execute(array($livro, $editora, $sinopse, 
                $autor, $categoria, $publicacao, 
                "sem.png", "sem.pdf", $periodo,
                $classificacao, $sala));
                $mensagem = "Registro inserido";

            } catch (PDOException $e) {
                $mensagem = "Erro ao inserir o registro: " . $e->getMessage();
            }
        } else {
            $mensagem = "Dados incompletos.";
        }



echo json_encode(array("mensagem" => $mensagem));
?>

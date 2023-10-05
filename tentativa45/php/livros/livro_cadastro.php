<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if (
    isset($_POST["livro"]) && isset($_POST["editora"]) &&
    isset($_POST["publicacao"]) && isset($_POST["sinopse"]) &&
    isset($_POST["autor"]) && isset($_POST["categoria"]) &&
    isset($_POST["periodo"]) && isset($_POST["classificacao"])
) 
{
    $livro = $_POST["livro"];
    $editora = $_POST["editora"];
    $publicacao = $_POST["publicacao"];
    $sinopse = $_POST["sinopse"];
    $autor = $_POST["autor"];
    $categoria = $_POST["categoria"];
    $periodo = $_POST["periodo"];
    $classificacao = $_POST["classificacao"];


    /*$dir = "../../img/livros"; 
    $foto = $_FILES["foto"];
    if ($foto["error"] == 0) {
        $nomeImagem = pathinfo($foto["name"], PATHINFO_FILENAME);
        $nomeImagem = $nomeImagem . '.png';
        
*/
       
    $sql = "SELECT tb01_nome_livro
	FROM tb01_livro where tb01_nome_livro = ?";
    $comando = $banco->prepare($sql);
    $comando->execute(array($autor));
    if($comando->fetch()) {
        $mensagem = "Livro existente!";
        echo json_encode(array("mensagem" => $mensagem));
        exit();
    } 
    /*
    $arquivo = $_FILES["pdf"];
    $arquivoTemporario = $arquivo["tmp_name"];
    $nomeArquivo = $arquivo["name"];
        $diretorioDestino = '../../pdf/';
        $pdf = $diretorioDestino . $nomeArquivo;
        $nomePdf = pathinfo($arquivo["name"], PATHINFO_FILENAME);
        $nomePdf = $nomePdf.'.pdf';
       */

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
              (SELECT tb06_id FROM tb06_salas WHERE tb06_nome_sala = ?))";

            try {
                $comando = $banco->prepare($sql);
                $comando->execute(array($livro, $editora, $sinopse, 
                $autor, $categoria, $publicacao, 
                "sem.png", "sem.pdf", $periodo,
                $classificacao, "Sem sala"));

                $mensagem = "Registro Inserido";
            } catch (PDOException $e) {
                $mensagem = "Erro ao inserir o registro: " . $e->getMessage();
            }
        } else {
            $mensagem = "Dados incompletos.";
        }



echo json_encode(array("mensagem" => $mensagem));
?>

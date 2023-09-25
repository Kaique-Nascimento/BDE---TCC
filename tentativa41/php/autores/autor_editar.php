<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if (
    isset($_POST["nome"]) && isset($_POST["nacionalidade"]) &&
    isset($_POST["nascimento"]) && isset($_POST["falecimento"]) &&
    isset($_POST["biografia"]) && isset($_POST["categoria"]) &&
    isset($_POST["periodo"]) && isset($_FILES["arquivo"])
) 
{
    $autor = $_POST["nome"];
    $nacionalidade = $_POST["nacionalidade"];
    $nascimento = $_POST["nascimento"];
    $falecimento = $_POST["falecimento"];
    $biografia = $_POST["biografia"];
    $categoria = $_POST["categoria"];
    $periodo = $_POST["periodo"];

    $dir = "../../img/autores"; 
    $foto = $_FILES["arquivo"];
    if ($foto["error"] == 0) {
        $nomeImagem = pathinfo($foto["name"], PATHINFO_FILENAME);
        $nomeImagem = $nomeImagem . '.png';
        
        if (move_uploaded_file($foto["tmp_name"], "$dir/" . $nomeImagem)) {
            $sql = "INSERT INTO tb03_autor
                    (tb03_id_autor, tb03_nome_autor, tb03_biografia,
                    tb03_nascimento, tb03_obito, tb03_nacionalidade, 
                    tb03_foto, tb03_id_categoria, tb03_id_periodo)
                    VALUES (NULL, ?, ?, ?, ?, ?, ?, 
                    (SELECT tb04_id_categoria FROM tb04_categoria WHERE tb04_nome_categoria = ?), 
                    (SELECT tb05_id_periodo FROM tb05_periodo WHERE tb05_nome_periodo = ?))";

            try {
                $comando = $banco->prepare($sql);
                $comando->execute(array($autor, $biografia, $nascimento, $falecimento,
                    $nacionalidade, $nomeImagem, $categoria, $periodo));

                $mensagem = "Registro inserido com sucesso!";
            } catch (PDOException $e) {
                $mensagem = "Erro ao inserir o registro: " . $e->getMessage();
            }
        } else {
            $mensagem = "Erro ao mover o arquivo para o diretório de destino.";
        }
    } else {
        $mensagem = "Erro no envio do arquivo. Código de erro: " . $foto["error"];
    }
} else {
    $mensagem = "Dados incompletos.";
}

echo json_encode(array("mensagem" => $mensagem));
?>

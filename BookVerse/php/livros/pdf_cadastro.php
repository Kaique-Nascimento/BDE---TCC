<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if (isset($_POST["codigo"]) && isset($_FILES["arquivo"])) {
    $codigo = $_POST["codigo"];
    $arquivo = $_FILES["arquivo"];

    if ($arquivo["error"] === UPLOAD_ERR_OK) {
        $nomeArquivo = $arquivo["name"];
        $diretorioDestino = '../../pdf/';
        $caminhoArquivo = $diretorioDestino . $nomeArquivo;

        if (move_uploaded_file($arquivo["tmp_name"], $caminhoArquivo)) {
            $sql = "UPDATE tb01_livro
                    SET tb01_pdf = ?
                    WHERE tb01_id_livro = ?";

            try {
                $comando = $banco->prepare($sql);
                $comando->execute(array($nomeArquivo, $codigo));

                $mensagem = "Registro atualizado com sucesso!";
            } catch (PDOException $e) {
                $mensagem = "Erro ao atualizar o registro: " . $e->getMessage();
            }
        } else {
            $mensagem = "Erro ao mover o arquivo para o diretório de destino.";
        }
    } else {
        $mensagem = "Erro ao carregar o arquivo.";
    }
} else {
    $mensagem = "Dados incompletos.";
}

echo json_encode(array("mensagem" => $mensagem));
?>

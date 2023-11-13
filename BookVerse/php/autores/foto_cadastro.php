<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if (isset($_POST["codigo"]) && isset($_FILES["arquivo"])) {
    $codigo = $_POST["codigo"];
    $dir = "../../img/autores"; 
    $foto = $_FILES["arquivo"];
    
    $nomeImagem = pathinfo($foto["name"], PATHINFO_FILENAME);
    $nomeImagem = $nomeImagem . '.png';
    $caminhoCompleto = "$dir/$nomeImagem";
    
    if (file_exists($caminhoCompleto)) {
        $mensagem = "Uma foto com o mesmo nome já existe. Escolha outro nome para a imagem.";
    } else {
        if ($foto["error"] == 0) {
            if (move_uploaded_file($foto["tmp_name"], $caminhoCompleto)) {
                $sql = "UPDATE tb03_autor
                SET
                    tb03_foto=?
                WHERE tb03_id_autor=?";

                try {
                    $comando = $banco->prepare($sql);
                    $comando->execute(array($nomeImagem, $codigo));
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
    }
} else {
    $mensagem = "Dados incompletos.";
}

echo json_encode(array("mensagem" => $mensagem));
?>

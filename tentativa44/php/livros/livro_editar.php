<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if (
    isset($_POST["nome"]) && isset($_POST["nacionalidade"]) &&
    isset($_POST["nascimento"]) && isset($_POST["falecimento"]) &&
    isset($_POST["biografia"]) && isset($_POST["categoria"]) &&
    isset($_POST["periodo"]) && isset($_POST["foto"])
) {
    $autor = $_POST["nome"];
    $nacionalidade = $_POST["nacionalidade"];
    $nascimento = $_POST["nascimento"];
    $falecimento = $_POST["falecimento"];
    $biografia = $_POST["biografia"];
    $categoria = $_POST["categoria"];
    $periodo = $_POST["periodo"];
    $codigo = $_POST["codigo"];
    if(isset($_FILES["arquivo"])){
        if ($_FILES["arquivo"]["error"] == 0) {
            $dir = "../../img/autores";
            $foto = $_FILES["arquivo"];
            $nomeImagem = pathinfo($foto["name"], PATHINFO_FILENAME);
            $nomeImagem = $nomeImagem . '.png';
    
            if (move_uploaded_file($foto["tmp_name"], "$dir/" . $nomeImagem)) {
                $foto_nome = $nomeImagem;
            } else {
                $mensagem = "Erro ao mover o arquivo para o diretório de destino.";
                echo json_encode(array("mensagem" => $mensagem));
                exit();
            }
        } 
    }
    else {
        $foto_nome = $_POST["foto"];
    }

    $sql = "UPDATE tb03_autor
            SET
                tb03_nome_autor=?,
                tb03_biografia=?,
                tb03_nascimento=?,
                tb03_obito=?,
                tb03_nacionalidade=?,
                tb03_foto=?,
                tb03_id_categoria=(SELECT tb04_id_categoria FROM tb04_categoria WHERE tb04_nome_categoria = ?),
                tb03_id_periodo=(SELECT tb05_id_periodo FROM tb05_periodo WHERE tb05_nome_periodo = ?)
            WHERE tb03_id_autor=?";

    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($autor, $biografia, $nascimento, $falecimento,
            $nacionalidade, $foto_nome, $categoria, $periodo, $codigo));

        $mensagem = "Registro atualizado com sucesso!";
    } catch (PDOException $e) {
        $mensagem = "Erro ao atualizar o registro: " . $e->getMessage();
    }
} else {
    $mensagem = "Dados incompletos.";
}

echo json_encode(array("mensagem" => $mensagem));
?>

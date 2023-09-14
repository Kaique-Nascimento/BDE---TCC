<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["nome"]) && isset($_REQUEST["nacionalidade"]) &&
   isset($_REQUEST["nascimento"]) && isset($_REQUEST["falecimento"]) &&
   isset($_REQUEST["biografia"]) && isset($_REQUEST["categoria"]) &&
   isset($_REQUEST["periodo"]) && (isset($_FILES["arquivo"]))){
        $dir = "img"; 
        $arquivo = $_FILES["arquivo"];
        if ($arquivo["error"] == 0) {
            $nomeimagem = pathinfo($arquivo["name"], PATHINFO_FILENAME);
            $nomeimagem = $nomeimagem .'.png';
      
            // Move o arquivo da pasta temporária de upload para a pasta de destino 
            if (move_uploaded_file($arquivo["tmp_name"], "$dir/" . $nomeimagem)) {
                echo "<script>alert('Arquivo $nomeimagem enviado com sucesso!');</script>";
                
            } else {
                echo "Erro, o arquivo não pode ser enviado.";
            }    
        } else {
            echo "Erro no envio do arquivo. Código de erro: " . $arquivo["error"];
        }
    $autor = $_REQUEST["nome"];
    $nacionalidade = $_REQUEST["nacionalidade"];
    $nascimento = $_REQUEST["nascimento"];
    $falecimento = $_REQUEST["falecimento"];
    $biografia = $_REQUEST["biografia"];
    $valor_categoria = $_REQUEST["categoria"];
    $valor_periodo = $_REQUEST["periodo"];

    $sql = "SELECT tb03_nome_autor FROM tb03_autor WHERE tb03_nome_autor = ?";
    $comando = $banco->prepare($sql);
    $comando->execute(array($autor));
    
    if($comando->fetch()) {
        $mensagem = "Autor existente!";
        echo json_encode(array("mensagem" => $mensagem));
        exit();
    }

    // Inserir os dados na tabela tb03_autor
    $sql = "INSERT INTO tb03_autor
            (tb03_id_autor, tb03_nome_autor, tb03_biografia,
             tb03_nascimento, tb03_obito, tb03_nacionalidade, 
             tb03_foto_autor, tb03_id_categoria, tb03_id_periodo)
            VALUES (NULL, ?, ?, 
            ?, ?, ?, 
            null,(SELECT tb04_id_categoria from tb04_categoria where tb04_nome_categoria = ?), 
            (SELECT tb05_id_periodo from tb05_periodo where tb05_nome_periodo = ?))";
    
    try {
        $comando = $banco->prepare($sql);
        $comando->execute(array($autor, $biografia, $nascimento, $falecimento,
                                $nacionalidade, /*$nomeimagem,*/ $valor_categoria, 
                                $valor_periodo));

        $mensagem = "Registro inserido com sucesso!";
    } catch (PDOException $e) {
        $mensagem = "Erro ao inserir o registro.";
    }
} else {
    $mensagem = "Dados incompletos.";
}

echo json_encode(array("mensagem" => $mensagem));
?>

<?php
header("Content-Type: application/json; charset=UTF-8");
include_once "../conexao.php";

if(isset($_REQUEST["nome"]) && isset($_REQUEST["nacionalidade"]) &&
   isset($_REQUEST["nascimento"]) && isset($_REQUEST["falecimento"]) &&
   isset($_REQUEST["biografia"]) && isset($_REQUEST["categoria"]) &&
   isset($_REQUEST["periodo"])) {
    /* if (is_uploaded_file($_FILES['userImage']['tmp_name'])) {
         $imgData = file_get_contents($_FILES['userImage']['tmp_name']);
         $imgType = $_FILES['userImage']['type'];
         $sql = "INSERT INTO tbl_image(imageType ,imageData) VALUES(?, ?)";
         $statement = $conn->prepare($sql);
         $statement->bind_param('ss', $imgType, $imgData);
         $current_id = $statement->execute() or die("<b>Error:</b> Problem on Image Insert<br/>" . mysqli_connect_error());
     }
     https://phppot.com/php/mysql-blob-using-php/
     https://www.freecodecamp.org/portuguese/news/tutorial-de-fetch-api-em-javascript-exemplos-de-post-e-cabecalho/
     https://gabrieleromanato.name/javascript-how-to-upload-files-with-the-fetch-api#:~:text=files%20as%20well.-,In%20JavaScript%2C%20the%20Fetch%20API%20allows%20us%20to%20upload%20files,data%20%3D%20new%20FormData()%3B%20data.
     */
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
                                $nacionalidade, $valor_categoria, $valor_periodo));

        $mensagem = "Registro inserido com sucesso!";
    } catch (PDOException $e) {
        $mensagem = "Erro ao inserir o registro.";
    }
} else {
    $mensagem = "Dados incompletos.";
}

echo json_encode(array("mensagem" => $mensagem));
?>

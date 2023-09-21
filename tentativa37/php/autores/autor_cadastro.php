<?php
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Origin: *');

include_once "../conexao.php";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recebe os dados do formulário
    $autor = $_POST["nome_autor"];
    $nacionalidade = $_POST["nacionalidade"];
    $nascimento = $_POST["data_nascimento"];
    $falecimento = $_POST["data_falecimento"];
    $biografia = $_POST["biografia"];
    $categoria = $_POST["categoria"];
    $periodo = $_POST["periodo"];
    /*
                if(isset($_POST["nome_autor"]) && isset($_POST["nacionalidade"]) &&
                   isset($_POST["data_nascimento"]) && isset($_POST["data_falecimento"]) &&
                   isset($_POST["biografia"]) && (isset($_FILES["arquivo"]))){
                        $dir = "img/autores"; 
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
                        
                    $autor = $_POST["nome_autor"];
                    $nacionalidade = $_POST["nacionalidade"];
                    $nascimento = $_POST["data_nascimento"];
                    $falecimento = $_POST["data_falecimento"];
                    $biografia = $_POST["biografia"];
                    $codAutor = $_POST["id_autor"];

                    $categoria = $_POST['select_categoria'];

                   $periodo = $_POST['select_periodo'];
                    $valor_categoria = $categoria;
                    $valor_periodo = $periodo;
                */
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
                            NULL,(SELECT tb04_id_categoria from tb04_categoria where tb04_nome_categoria = ?), 
                            (SELECT tb05_id_periodo from tb05_periodo where tb05_nome_periodo = ?))";
                    
                    try {
                        $comando = $banco->prepare($sql);
                        $comando->execute(array($autor, $biografia, $nascimento, $falecimento,
                                                $nacionalidade, /*$nomeimagem*/, $valor_categoria, 
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
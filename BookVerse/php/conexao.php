<?php

// Configurado com localhost XAMPP
try {
    $banco = new PDO(
        'mysql:host=localhost;dbname=3dsb_tcc_bookverse',
        'root',
        '',
        array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));    
} catch(PDOException $e) {
    echo "banco de dados não disponível";
}

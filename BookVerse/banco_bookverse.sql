-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.28-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para 3dsb_tcc_bookverse
CREATE DATABASE IF NOT EXISTS `3dsb_tcc_bookverse` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `3dsb_tcc_bookverse`;

-- Copiando estrutura para tabela 3dsb_tcc_bookverse.tb01_livro
CREATE TABLE IF NOT EXISTS `tb01_livro` (
  `tb01_id_livro` int(11) NOT NULL AUTO_INCREMENT,
  `tb01_nome_livro` varchar(300) NOT NULL,
  `tb01_editora` varchar(300) NOT NULL,
  `tb01_sinopse` varchar(800) NOT NULL,
  `tb01_id_autor` int(11) NOT NULL,
  `tb01_id_categoria` int(11) NOT NULL,
  `tb01_data` date NOT NULL,
  `tb01_ftcapa` varchar(300) NOT NULL,
  `tb01_pdf` varchar(300) NOT NULL,
  `tb01_id_periodo` int(11) NOT NULL,
  `tb01_classificacao_indicativa` varchar(50) NOT NULL,
  `tb01_id_sala` int(11) DEFAULT NULL,
  PRIMARY KEY (`tb01_id_livro`),
  KEY `FK_tb01_livro_tb04_genero` (`tb01_id_categoria`) USING BTREE,
  KEY `FK_tb01_livro_tb05_periodo` (`tb01_id_periodo`),
  KEY `FK_tb01_livro_tb03_autor` (`tb01_id_autor`),
  KEY `FK_tb01_livro_tb06_salas` (`tb01_id_sala`),
  CONSTRAINT `FK_tb01_livro_tb03_autor` FOREIGN KEY (`tb01_id_autor`) REFERENCES `tb03_autor` (`tb03_id_autor`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_tb01_livro_tb04_categoria` FOREIGN KEY (`tb01_id_categoria`) REFERENCES `tb04_categoria` (`tb04_id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_tb01_livro_tb05_periodo` FOREIGN KEY (`tb01_id_periodo`) REFERENCES `tb05_periodo` (`tb05_id_periodo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_tb01_livro_tb06_salas` FOREIGN KEY (`tb01_id_sala`) REFERENCES `tb06_salas` (`tb06_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb01_livro: ~0 rows (aproximadamente)
DELETE FROM `tb01_livro`;

-- Copiando estrutura para tabela 3dsb_tcc_bookverse.tb02_administradores
CREATE TABLE IF NOT EXISTS `tb02_administradores` (
  `tb02_rm` int(11) NOT NULL,
  `tb02_nome` varchar(300) NOT NULL,
  `tb02_email` varchar(300) NOT NULL,
  `tb02_senha` varchar(300) NOT NULL,
  `tb02_cod_veri` int(11) DEFAULT NULL,
  PRIMARY KEY (`tb02_rm`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb02_administradores: ~0 rows (aproximadamente)
DELETE FROM `tb02_administradores`;

-- Copiando estrutura para tabela 3dsb_tcc_bookverse.tb03_autor
CREATE TABLE IF NOT EXISTS `tb03_autor` (
  `tb03_id_autor` int(11) NOT NULL AUTO_INCREMENT,
  `tb03_nome_autor` varchar(100) NOT NULL,
  `tb03_biografia` varchar(800) NOT NULL,
  `tb03_nascimento` varchar(4) NOT NULL,
  `tb03_obito` varchar(4) NOT NULL,
  `tb03_nacionalidade` varchar(100) NOT NULL,
  `tb03_foto` varchar(300) NOT NULL,
  `tb03_id_categoria` int(11) NOT NULL,
  `tb03_id_periodo` int(11) NOT NULL,
  PRIMARY KEY (`tb03_id_autor`),
  KEY `FK_tb03_autor_tb05_periodo` (`tb03_id_periodo`),
  KEY `FK_tb03_autor_tb04_categoria` (`tb03_id_categoria`),
  CONSTRAINT `FK_tb03_autor_tb04_categoria` FOREIGN KEY (`tb03_id_categoria`) REFERENCES `tb04_categoria` (`tb04_id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_tb03_autor_tb05_periodo` FOREIGN KEY (`tb03_id_periodo`) REFERENCES `tb05_periodo` (`tb05_id_periodo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb03_autor: ~0 rows (aproximadamente)
DELETE FROM `tb03_autor`;

-- Copiando estrutura para tabela 3dsb_tcc_bookverse.tb04_categoria
CREATE TABLE IF NOT EXISTS `tb04_categoria` (
  `tb04_id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `tb04_nome_categoria` varchar(50) NOT NULL,
  PRIMARY KEY (`tb04_id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb04_categoria: ~0 rows (aproximadamente)
DELETE FROM `tb04_categoria`;

-- Copiando estrutura para tabela 3dsb_tcc_bookverse.tb05_periodo
CREATE TABLE IF NOT EXISTS `tb05_periodo` (
  `tb05_id_periodo` int(11) NOT NULL AUTO_INCREMENT,
  `tb05_nome_periodo` varchar(50) NOT NULL,
  `tb05_inicio` int(11) NOT NULL,
  `tb05_fim` int(11) NOT NULL,
  PRIMARY KEY (`tb05_id_periodo`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb05_periodo: ~0 rows (aproximadamente)
DELETE FROM `tb05_periodo`;

-- Copiando estrutura para tabela 3dsb_tcc_bookverse.tb06_salas
CREATE TABLE IF NOT EXISTS `tb06_salas` (
  `tb06_id` int(11) NOT NULL AUTO_INCREMENT,
  `tb06_nome` varchar(300) NOT NULL,
  `tb06_ano` varchar(50) NOT NULL,
  PRIMARY KEY (`tb06_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb06_salas: ~13 rows (aproximadamente)
DELETE FROM `tb06_salas`;
INSERT INTO `tb06_salas` (`tb06_id`, `tb06_nome`, `tb06_ano`) VALUES
	(1, 'Ensino Fundamental 1', '1º ano'),
	(2, 'Ensino Fundamental 1', '2º ano'),
	(3, 'Ensino Fundamental 1', '3º ano'),
	(4, 'Ensino Fundamental 1', '4º ano'),
	(5, 'Ensino Fundamental 1', '5º ano'),
	(6, 'Ensino Fundamental 2', '6º ano'),
	(7, 'Ensino Fundamental 2', '7º ano'),
	(8, 'Ensino Fundamental 2', '8º ano'),
	(9, 'Ensino Fundamental 2', '9º ano'),
	(10, 'Ensino Médio', '1º ano'),
	(11, 'Ensino Médio', '2º ano'),
	(12, 'Ensino Médio', '3º ano'),
	(13, 'Sem sala', 'Sem sala');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

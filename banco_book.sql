-- --------------------------------------------------------
-- Servidor:                     carmine
-- Versão do servidor:           5.7.33 - MySQL Community Server (GPL)
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
CREATE DATABASE IF NOT EXISTS `3dsb_tcc_bookverse` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `3dsb_tcc_bookverse`;

-- Copiando estrutura para tabela 3dsb_tcc_bookverse.tb01_livro
CREATE TABLE IF NOT EXISTS `tb01_livro` (
  `tb01_id_livro` int(11) NOT NULL,
  `tb01_nome_livro` varchar(50) NOT NULL,
  `tb01_editora` varchar(50) NOT NULL,
  `tb01_sinopse` varchar(50) NOT NULL,
  `tb01_id_autor` int(11) NOT NULL,
  `tb01_id_genero` int(11) NOT NULL,
  `tb01_data` date NOT NULL,
  `tb01_ftcapa` blob NOT NULL,
  `tb01_pdf` blob NOT NULL,
  `tb01_id_periodo` int(11) NOT NULL,
  `tb01_classificacao_indicativa` int(11) NOT NULL,
  PRIMARY KEY (`tb01_id_livro`),
  KEY `FK_tb01_livro_tb03_autor` (`tb01_id_autor`),
  KEY `FK_tb01_livro_tb04_genero` (`tb01_id_genero`),
  KEY `FK_tb01_livro_tb05_periodo` (`tb01_id_periodo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb01_livro: ~0 rows (aproximadamente)

-- Copiando estrutura para tabela 3dsb_tcc_bookverse.tb02_administradores
CREATE TABLE IF NOT EXISTS `tb02_administradores` (
  `tb02_rm` int(11) NOT NULL,
  `tb02_nome` varchar(300) NOT NULL,
  `tb02_email` varchar(300) NOT NULL,
  `tb02_senha` varchar(300) NOT NULL,
  `tb02_cod_veri` int(11) NOT NULL,
  PRIMARY KEY (`tb02_rm`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb02_administradores: ~0 rows (aproximadamente)

-- Copiando estrutura para tabela 3dsb_tcc_bookverse.tb03_autor
CREATE TABLE IF NOT EXISTS `tb03_autor` (
  `tb03_id_autor` int(11) NOT NULL,
  `tb03_biografia` varchar(50) NOT NULL,
  `tb03_nome_autor` varchar(50) NOT NULL,
  `tb03_nascimento` date NOT NULL,
  `tb03_obito` date NOT NULL,
  `tb03_nacionalidade` varchar(50) NOT NULL,
  `tb03_id_genero` int(11) NOT NULL,
  `tb03_id_periodo` int(11) NOT NULL,
  PRIMARY KEY (`tb03_id_autor`),
  KEY `FK_tb03_autor_tb04_genero` (`tb03_id_genero`),
  KEY `FK_tb03_autor_tb05_periodo` (`tb03_id_periodo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb03_autor: ~0 rows (aproximadamente)

-- Copiando estrutura para tabela 3dsb_tcc_bookverse.tb04_categoria
CREATE TABLE IF NOT EXISTS `tb04_categoria` (
  `tb04_id_genero` int(11) NOT NULL AUTO_INCREMENT,
  `tb04_nome_genero` varchar(300) NOT NULL,
  PRIMARY KEY (`tb04_id_genero`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb04_categoria: ~0 rows (aproximadamente)

-- Copiando estrutura para tabela 3dsb_tcc_bookverse.tb05_periodo
CREATE TABLE IF NOT EXISTS `tb05_periodo` (
  `tb05_id_periodo` int(11) NOT NULL,
  `tb05_nome_periodo` varchar(50) NOT NULL DEFAULT '',
  `tb05_inicio` date NOT NULL,
  `tb05_fim` date NOT NULL,
  PRIMARY KEY (`tb05_id_periodo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb05_periodo: ~0 rows (aproximadamente)

-- Copiando estrutura para tabela 3dsb_tcc_bookverse.tb06_salas
CREATE TABLE IF NOT EXISTS `tb06_salas` (
  `tb06_id` int(11) NOT NULL,
  `tb06_nome` varchar(50) NOT NULL,
  `tb06_id_livro` int(11) NOT NULL,
  KEY `FK_tb06_salas_tb01_livro` (`tb06_id_livro`),
  CONSTRAINT `FK_tb06_salas_tb01_livro` FOREIGN KEY (`tb06_id_livro`) REFERENCES `tb01_livro` (`tb01_id_livro`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb06_salas: ~0 rows (aproximadamente)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

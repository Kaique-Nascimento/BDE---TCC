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
  `tb01_id_livro` int(11) NOT NULL AUTO_INCREMENT,
  `tb01_nome_livro` varchar(300) NOT NULL,
  `tb01_editora` varchar(300) NOT NULL,
  `tb01_sinopse` varchar(300) NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb01_livro: ~22 rows (aproximadamente)
INSERT INTO `tb01_livro` (`tb01_id_livro`, `tb01_nome_livro`, `tb01_editora`, `tb01_sinopse`, `tb01_id_autor`, `tb01_id_categoria`, `tb01_data`, `tb01_ftcapa`, `tb01_pdf`, `tb01_id_periodo`, `tb01_classificacao_indicativa`, `tb01_id_sala`) VALUES
	(26, 'Guerra e Paz', 'Nenhum', 'Nenhum', 59, 39, '1867-01-01', 'guerra e paz.png', 'Guerra e Paz - Edicao Completa - Leon Tolstoi.pdf', 18, '+18 anos', 13),
	(31, 'Um conto de Natal', 'Nenhum', 'A Christmas Carol é um livro da autoria de Charles Dickens. Com várias traduções em Português, sendo uma delas Um Conto de Natal, o livro foi escrito em menos de um mês originalmente para pagar dívidas.', 61, 39, '1843-12-19', 'um conto de natal.png', 'Um Conto De Natal - Charles Dickens.pdf', 18, 'Livre', 13),
	(32, 'A Revolução dos Bichos', 'Nenhum', 'Animal Farm é um romance satírico do escritor inglês George Orwell.', 63, 39, '1945-08-17', 'porco stalin.png', 'revolucao-dos-bichos.pdf', 18, 'Livre', 13),
	(33, '1984', 'Nenhum', 'É um romance distópico da autoria do escritor britânico George Orwell e publicado em 1949.', 63, 39, '1949-06-08', '1984.png', 'e-book-1984.pdf', 18, '+18 anos', 13),
	(34, 'O Corvo', 'Nenhum', 'Publicado pela primeira vez em janeiro de 1845, é conhecido principalmente por sua musicalidade, linguagem estilizada e atmosfera sobrenatural.', 64, 28, '1845-01-29', 'o corvo.png', 'O Corvo - Edgar Allan Poe.pdf', 18, '+18 anos', 13),
	(35, 'O Estranho Misterioso', 'Nenhum', 'O Estranho Misterioso trata-se de um livro escrito pelo estadunidense Mark Twain.', 51, 31, '1916-01-01', 'o estranho.png', 'O_Estranho_Misterioso.pdf', 18, '+18 anos', 10),
	(36, 'As aventuras de Tom Sawyer', 'Nenhum', '"As Aventuras de Tom Sawyer" é um clássico norte-americano.', 51, 29, '1876-01-01', 'tom sawyer.png', 'Tom Sawyer - Mark Twain.pdf', 18, '+12 anos', 13),
	(37, 'Sherlock Holmes', 'Nenhum', 'Sherlock Holmes é um personagem de ficção da literatura britânica criado pelo médico e escritor Sir Arthur Conan Doyle.', 65, 29, '1887-01-01', 'sherlok.png', 'Sherlock-Holmes-0bra-Completa.pdf', 18, 'Livre', 13),
	(38, 'Um estudo em vermelho', 'Nenhum', 'Um Estudo em Vermelho é um romance policial escrito por Sir Arthur Conan Doyle.', 65, 29, '1887-01-01', 'faz o l.png', 'Um-Estudo-em-Vermelho.pdf', 18, '+14 anos', 13),
	(39, 'Romeu e Julieta', 'Nenhum', 'Romeu e Julieta é uma tragédia escrita entre 1591 e 1595, nos primórdios da carreira literária de William Shakespeare, sobre dois adolescentes cuja morte acaba unindo suas famílias, outrora em pé de guerra.', 66, 39, '1597-01-01', 'romeu e julieta.png', 'Romeu e Julieta - William Shakespeare.pdf', 18, 'Livre', 13),
	(40, 'Tudo está bem quando termina bem', 'Nenhum', 'Tudo está bem quando termina bem é uma peça de teatro de William Shakespeare.', 66, 31, '1111-01-01', 'ewa.png', 'Tudo Bem Quando Termina Bem - William Shakespeare.pdf', 18, 'Livre', 13),
	(41, 'Sonho de uma Noite de Verão', 'Nenhum', 'Sonho de uma Noite de Verão é uma peça teatral da autoria de William Shakespeare, uma comédia escrita em meados da década de 1590.', 66, 39, '1600-11-11', 'sdundv.png', 'Sonho de uma Noite de Verao - William Shakespeare.pdf', 18, 'Livre', 13),
	(42, 'Ricardo III', 'Nenhum', 'Ricardo III é um drama histórico em cinco atos escrito pelo dramaturgo inglês William Shakespeare entre 1592 e 1593', 66, 31, '1593-01-01', 'r3.png', 'Ricardo III - William Shakespeare.pdf', 18, 'Livre', 13),
	(43, 'O Mercador de Veneza', 'Nenhum', 'The Merchant of Venice é uma peça teatral do autor inglês William Shakespeare, uma comédia trágica que teria sido escrita entre 1596 e 1598.', 66, 31, '1598-01-01', 'mercador de venexza.png', 'O Mercador de Veneza - William Shakespeare.pdf', 18, 'Livre', 13),
	(44, 'Henrique VIII', 'Nenhum', 'Henrique VIII é uma peça histórica colaborativa escrita por William Shakespeare e John Fletcher baseada na vida do Rei Henrique VIII da Inglaterra.', 66, 31, '1111-11-11', 'h8.png', 'Henrique VIII - William Shakespeare.pdf', 18, 'Livre', 13),
	(45, 'Hamlet', 'Nenhum', 'A tragédia de Hamlet, príncipe da Dinamarca, geralmente abreviada apenas como Hamlet, é uma tragédia de William Shakespeare, escrita entre 1599 e 1601.', 66, 39, '1601-01-01', 'hamlet.png', 'Hamlet - William Shakespeare.pdf', 18, 'Livre', 13),
	(46, 'A Comédia dos Erros', 'Nenhum', 'Essa é uma peça de teatral do gênero farsa e comédia criada por Shakespeare.', 66, 44, '1594-01-01', 'hahahaha.png', 'A Comedia dos Erros - William Shakespeare.pdf', 18, 'Livre', 13),
	(52, 'Vinte mil léguas submarinas', '', 'muito fundo', 67, 42, '1870-06-20', '20000.png', '20 000 Leguas Submarinas - Julio Verne.pdf', 18, '+12 anos', 13),
	(54, 'A Confissão de Lúcio', '', '"A Confissão de Lúcio" é um conto escrito por Mário de Sá-Carneiro. É uma das obras mais importantes deste autor porque contém três das suas obsessões dominantes: o suicídio, o amor e o anormal avançando até à loucura.', 68, 43, '1914-01-01', 'lucio con.png', 'A Confissao de Lucio - Mario de Sa-Carneiro.pdf', 18, '+14 anos', 13),
	(55, 'A megera Domada', '', '                  The Taming of the Shrew é uma peça teatral do dramaturgo inglês William Shakespeare, uma das primeiras comédias escritas pelo autor', 66, 44, '1594-01-01', 'mae do saulo.png', 'A Megera Domada - William Shakespeare.pdf', 18, '+14 anos', 13),
	(57, 'A Volta ao Mundo em 80 Dias', '', '                  A Volta ao Mundo em 80 Dias é um romance de aventura escrito pelo francês Júlio Verne e lançado em 1873. A obra retrata a tentativa do cavalheiro inglês Phileas Fogg e seu empregado, Passepartout, de dar a volta no mundo em 80 dias.', 67, 45, '1872-10-22', '80 dias.png', 'A Volta ao Mundo em 80 Dias - Julio Verne.pdf', 18, 'Livre', 13),
	(58, 'Dom Quixote', '', '                  Dom Quixote de la Mancha é um livro escrito pelo espanhol Miguel de Cervantes. O título e ortografia originais eram El ingenioso hidalgo Don Quixote de La Mancha, com sua primeira edição publicada em Madrid no ano de 1605.', 69, 39, '1605-01-01', 'dom quixote.png', 'Dom-Quixote-Miguel-de-Cervantes.pdf', 18, 'Livre', 13);

-- Copiando estrutura para tabela 3dsb_tcc_bookverse.tb02_administradores
CREATE TABLE IF NOT EXISTS `tb02_administradores` (
  `tb02_rm` int(11) NOT NULL,
  `tb02_nome` varchar(300) NOT NULL,
  `tb02_email` varchar(300) NOT NULL,
  `tb02_senha` varchar(300) NOT NULL,
  `tb02_cod_veri` int(11) DEFAULT NULL,
  PRIMARY KEY (`tb02_rm`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb02_administradores: ~11 rows (aproximadamente)
INSERT INTO `tb02_administradores` (`tb02_rm`, `tb02_nome`, `tb02_email`, `tb02_senha`, `tb02_cod_veri`) VALUES
	(4719, '12345678', 'anonimos@gmail.com', '123456', NULL),
	(5214, 'raissa', 'raissaoliveira08014@gmail.com', 'Rockeozzy', 4015),
	(11111, 'a', 'a@a.com', 'aaa', NULL),
	(12121, 'AAAAAAAAAA', 'nolab57551@ksyhtc.com', '123', 6377),
	(12312, 'Renato', 'lekec95604@bookspre.com', 'senha', 3705),
	(12345, 'Leandro', 'sambalele', '123', NULL),
	(22222, 'joao', 'jonatasmo22reria333@gmail.com', '12345678', NULL),
	(23232, 'joanasasadsad', 'joasdsadsa.gmail.com', '232323', NULL),
	(26969, 'sexo', 'muitosexo@sexymail.cum', 'sexo', NULL),
	(32323, 'aa', 'a@a.com', 'aaa', NULL),
	(34243, 'Saulo', 'tomazpinto@outlook.com', 'senha', 0),
	(66666, 'jonatas', 'sadsadsd@gmail.com', '12345', NULL),
	(69696, 'Jonatas', 'maryonacross@yahoo.com', 'merda', NULL),
	(87878, 'jonatas', 'sssss246@gmail.com', '12345', NULL),
	(96969, 'meu pinto duro', 'mupintoduro@sexomail.cum', 'meupau', NULL),
	(99999, 'Ronalda', 'lekec95604@bookspre.com', 'senha', 0);

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
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb03_autor: ~11 rows (aproximadamente)
INSERT INTO `tb03_autor` (`tb03_id_autor`, `tb03_nome_autor`, `tb03_biografia`, `tb03_nascimento`, `tb03_obito`, `tb03_nacionalidade`, `tb03_foto`, `tb03_id_categoria`, `tb03_id_periodo`) VALUES
	(51, 'Mark Twain', 'yughj', '1835', '1910', 'EUAcho', 'marcola.png', 28, 16),
	(56, 'Machado de Assis ', 'pipippbsjdwhdoijhuodddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', '1954', '1999', 'Brasileiro ', 'machado_de_assis_real.png', 28, 16),
	(59, 'Liev Tolstói', 'Lev Nikolaevitch Tolstoi', '1828', '1910', 'russia', 'liev.png', 28, 16),
	(61, 'Charles Dickens', 'Charles John Huffam Dickens foi o mais popular dos romancistas ingleses da era vitoriana.', '1812', '1870', 'Inglaterra', 'dick.png', 28, 16),
	(63, 'George Orwell', 'Eric Arthur Blair, mais conhecido pelo pseudónimo George Orwell, foi um escritor, jornalista e ensaísta político inglês, nascido na Índia Britânica.', '1903', '1950', 'Inglês', 'DOISPONTOS_pra-hoje_orwell_1.png', 41, 18),
	(64, 'Edgar Allan Poe', 'Edgar Allan Poe foi um autor, poeta, editor e crítico literário estadunidense, integrante do movimento romântico em seu país.', '1809', '1849', 'EUA', 'Edgar-Allan-Poe.png', 28, 18),
	(65, 'Árthur Conan Doyle', 'Arthur Ignatius Conan Doyle foi um escritor e médico escocês.', '1859', '1930', 'Escocês', 'ba89c2_ab7e6e97fe3e4c7caff20a5027734d2d~mv2.png', 39, 18),
	(66, 'William Shakespeare', 'William Shakespeare foi um poeta, dramaturgo e ator inglês, tido como o maior escritor do idioma inglês e o mais influente dramaturgo do mundo.', '1564', '1616', 'Inglês', 'Shakespeare.png', 39, 18),
	(67, 'Júlio Verne', 'Jules Gabriel Verne, conhecido nos países de língua portuguesa como Júlio Verne (Nantes, 8 de fevereiro de 1828 – Amiens, 24 de março de 1905), foi um escritor francês considerado por críticos literários o inventor do gênero de ficção científica, tendo feito predições em seus livros sobre o aparecimento de novos avanços científicos, como os submarinos, as máquinas voadoras e a viagem à Lua.\r\n\r\nEle foi o primogênito dos cinco filhos de Pierre Verne, advogado, e Sophie Allote de la Fuÿe, esta de uma família burguesa de Nantes.\r\n\r\nAté hoje, Júlio Verne é um dos escritores cuja obra foi mais traduzida em toda a história, com traduções em 148 línguas, segundo estatísticas da UNESCO, tendo escrito mais de 100 livros.', '1828', '1905', 'Francesa', 'julio-verne.png', 42, 18),
	(68, 'Mário de Sá-Carneiro', 'Mário de Sá-Carneiro foi um poeta, contista e ficcionista português, um dos grandes expoentes do modernismo em Portugal e um dos mais reputados membros da Geração d\'Orpheu', '1890', '1916', 'Português', 'mario carneiro.png', 43, 18),
	(69, 'Miguel de Cervantes', 'Miguel de Cervantes Saavedra foi um romancista, dramaturgo e poeta castelhano. A sua obra-prima, Dom Quixote, muitas vezes considerada o primeiro romance moderno, é um clássico da literatura ocidental e é regularmente considerada um dos melhores romances já escritos.', '1547', '1616', 'Espanhol', 'Miguel cervantes.png', 39, 18);

-- Copiando estrutura para tabela 3dsb_tcc_bookverse.tb04_categoria
CREATE TABLE IF NOT EXISTS `tb04_categoria` (
  `tb04_id_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `tb04_nome_categoria` varchar(50) NOT NULL,
  PRIMARY KEY (`tb04_id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb04_categoria: ~10 rows (aproximadamente)
INSERT INTO `tb04_categoria` (`tb04_id_categoria`, `tb04_nome_categoria`) VALUES
	(28, 'Poesias'),
	(29, 'Aventura'),
	(30, 'Terror'),
	(31, 'Drama'),
	(39, 'Romance'),
	(41, 'Indefinido'),
	(42, 'Ficção Científica'),
	(43, 'Ficção'),
	(44, 'Comédia'),
	(45, 'Ficção de Aventura');

-- Copiando estrutura para tabela 3dsb_tcc_bookverse.tb05_periodo
CREATE TABLE IF NOT EXISTS `tb05_periodo` (
  `tb05_id_periodo` int(11) NOT NULL AUTO_INCREMENT,
  `tb05_nome_periodo` varchar(50) NOT NULL,
  `tb05_inicio` int(11) NOT NULL,
  `tb05_fim` int(11) NOT NULL,
  PRIMARY KEY (`tb05_id_periodo`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb05_periodo: ~4 rows (aproximadamente)
INSERT INTO `tb05_periodo` (`tb05_id_periodo`, `tb05_nome_periodo`, `tb05_inicio`, `tb05_fim`) VALUES
	(16, 'trovadorismo', 1600, 1800),
	(18, 'Nenhum', 0, 0),
	(20, 'contemporaneo', 2001, 2030),
	(22, 'Modernismo', 1900, 1970);

-- Copiando estrutura para tabela 3dsb_tcc_bookverse.tb06_salas
CREATE TABLE IF NOT EXISTS `tb06_salas` (
  `tb06_id` int(11) NOT NULL AUTO_INCREMENT,
  `tb06_nome` varchar(300) NOT NULL,
  `tb06_ano` varchar(50) NOT NULL,
  PRIMARY KEY (`tb06_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela 3dsb_tcc_bookverse.tb06_salas: ~13 rows (aproximadamente)
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

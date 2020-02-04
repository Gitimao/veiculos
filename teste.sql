-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 04-Fev-2020 às 18:00
-- Versão do servidor: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `teste`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cars`
--

CREATE TABLE `cars` (
  `id` int(10) NOT NULL,
  `veiculo` varchar(50) NOT NULL,
  `marca` varchar(50) NOT NULL,
  `ano` int(4) NOT NULL,
  `descricao` varchar(200) NOT NULL,
  `vendido` tinyint(1) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cars`
--

INSERT INTO `cars` (`id`, `veiculo`, `marca`, `ano`, `descricao`, `vendido`, `created_at`, `updated_at`) VALUES
(1, 'Gol', 'Volskwagen', 2009, 'Carro velho', 0, '2020-02-03 00:00:00', '2020-02-04 12:21:50'),
(3, 'Picanto', 'Kia', 2015, 'Carro da Kia', 1, '2020-02-03 18:03:16', '2020-02-04 13:02:21'),
(6, 'Fox', 'Volkswagen', 2008, 'Fox', 1, '2020-02-04 12:49:41', '2020-02-04 12:49:41'),
(25, 'Uno', 'Fiat', 2004, 'Uno', 0, '2020-02-04 14:55:30', '2020-02-04 14:55:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

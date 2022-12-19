-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2022 a las 18:24:29
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `formulario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas1`
--

CREATE TABLE `respuestas1` (
  `nombre` varchar(255) NOT NULL,
  `td` varchar(255) NOT NULL,
  `documento` varchar(255) NOT NULL,
  `programa` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `celular` varchar(255) NOT NULL,
  `edad` varchar(255) NOT NULL,
  `estado_civil` varchar(255) NOT NULL,
  `contacto_emergencia` varchar(255) NOT NULL,
  `nombre_emergencia` varchar(255) NOT NULL,
  `celular_emergencia` varchar(255) NOT NULL,
  `pregunta1_1` varchar(255) NOT NULL,
  `pregunta1_2` varchar(255) NOT NULL,
  `pregunta1_3` varchar(255) NOT NULL,
  `pregunta1_4` varchar(255) NOT NULL,
  `pregunta1_5` varchar(255) NOT NULL,
  `pregunta1_6` varchar(255) NOT NULL,
  `pregunta1_7` varchar(255) NOT NULL,
  `pregunta1_8` varchar(255) NOT NULL,
  `pregunta1_9` varchar(255) NOT NULL,
  `pregunta1_10` varchar(255) NOT NULL,
  `pregunta1_11` varchar(255) NOT NULL,
  `pregunta1_12` varchar(255) NOT NULL,
  `pregunta1_13` varchar(255) NOT NULL,
  `pregunta1_14` varchar(255) NOT NULL,
  `pregunta2_1` varchar(255) NOT NULL,
  `pregunta2_2` varchar(255) NOT NULL,
  `pregunta2_3` varchar(255) NOT NULL,
  `pregunta2_4` varchar(255) NOT NULL,
  `pregunta2_5` varchar(255) NOT NULL,
  `pregunta2_6` varchar(255) NOT NULL,
  `pregunta2_7` varchar(255) NOT NULL,
  `pregunta2_8` varchar(255) NOT NULL,
  `pregunta2_9` varchar(255) NOT NULL,
  `pregunta2_10` varchar(255) NOT NULL,
  `pregunta2_11` varchar(255) NOT NULL,
  `pregunta2_12` varchar(255) NOT NULL,
  `pregunta2_13` varchar(255) NOT NULL,
  `pregunta2_14` varchar(255) NOT NULL,
  `pregunta2_15` varchar(255) NOT NULL,
  `pregunta3_1` varchar(255) NOT NULL,
  `pregunta3_2` varchar(255) NOT NULL,
  `pregunta3_3` varchar(255) NOT NULL,
  `pregunta4_1` varchar(255) NOT NULL,
  `pregunta4_2` varchar(255) NOT NULL,
  `pregunta4_3` varchar(255) NOT NULL,
  `pregunta4_4` varchar(255) NOT NULL,
  `pregunta4_5` varchar(255) NOT NULL,
  `pregunta4_6` varchar(255) NOT NULL,
  `pregunta4_7` varchar(255) NOT NULL,
  `pregunta4_8` varchar(255) NOT NULL,
  `pregunta4_9` varchar(255) NOT NULL,
  `pregunta4_10` varchar(255) NOT NULL,
  `pregunta4_11` varchar(255) NOT NULL,
  `pregunta4_12` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestas2`
--

CREATE TABLE `respuestas2` (
  `pregunta5_1` varchar(255) NOT NULL,
  `pregunta5_2` varchar(255) NOT NULL,
  `pregunta5_3` varchar(255) NOT NULL,
  `pregunta5_4` varchar(255) NOT NULL,
  `pregunta6_1` varchar(255) NOT NULL,
  `pregunta6_2` varchar(255) NOT NULL,
  `pregunta6_3` varchar(255) NOT NULL,
  `pregunta6_4` varchar(255) NOT NULL,
  `pregunta6_5` varchar(255) NOT NULL,
  `pregunta6_6` varchar(255) NOT NULL,
  `pregunta6_7` varchar(255) NOT NULL,
  `pregunta6_8` varchar(255) NOT NULL,
  `pregunta6_9` varchar(255) NOT NULL,
  `pregunta6_10` varchar(255) NOT NULL,
  `pregunta6_11` varchar(255) NOT NULL,
  `pregunta6_12` varchar(255) NOT NULL,
  `pregunta6_13` varchar(255) NOT NULL,
  `pregunta6_14` varchar(255) NOT NULL,
  `pregunta6_15` varchar(255) NOT NULL,
  `pregunta6_16` varchar(255) NOT NULL,
  `pregunta6_17` varchar(255) NOT NULL,
  `pregunta6_18` varchar(255) NOT NULL,
  `pregunta6_19` varchar(255) NOT NULL,
  `pregunta6_20` varchar(255) NOT NULL,
  `pregunta6_21` varchar(255) NOT NULL,
  `pregunta6_22` varchar(255) NOT NULL,
  `pregunta6_23` varchar(255) NOT NULL,
  `pregunta6_24` varchar(255) NOT NULL,
  `pregunta6_25` varchar(255) NOT NULL,
  `pregunta6_26` varchar(255) NOT NULL,
  `pregunta6_27` varchar(255) NOT NULL,
  `pregunta6_28` varchar(255) NOT NULL,
  `pregunta6_29` varchar(255) NOT NULL,
  `pregunta6_30` varchar(255) NOT NULL,
  `pregunta6_31` varchar(255) NOT NULL,
  `pregunta6_32` varchar(255) NOT NULL,
  `pregunta6_33` varchar(255) NOT NULL,
  `pregunta6_34` varchar(255) NOT NULL,
  `pregunta6_35` varchar(255) NOT NULL,
  `pregunta6_36` varchar(255) NOT NULL,
  `pregunta6_37` varchar(255) NOT NULL,
  `pregunta6_38` varchar(255) NOT NULL,
  `pregunta6_39` varchar(255) NOT NULL,
  `pregunta7_1` varchar(255) NOT NULL,
  `pregunta7_2` varchar(255) NOT NULL,
  `pregunta7_3` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

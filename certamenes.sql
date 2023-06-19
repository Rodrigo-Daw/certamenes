-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-06-2023 a las 13:01:17
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `certamenes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bandasdemusica`
--

CREATE TABLE `bandasdemusica` (
  `id` int(11) NOT NULL,
  `nombre_banda` varchar(255) NOT NULL,
  `nombre_director` varchar(255) NOT NULL,
  `numero_musicos` varchar(255) NOT NULL,
  `localidad` varchar(255) NOT NULL,
  `provincia` varchar(255) NOT NULL,
  `codigo_postal` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `correo_electronico` varchar(255) NOT NULL,
  `clave` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `bandasdemusica`
--

INSERT INTO `bandasdemusica` (`id`, `nombre_banda`, `nombre_director`, `numero_musicos`, `localidad`, `provincia`, `codigo_postal`, `telefono`, `correo_electronico`, `clave`) VALUES
(20, 'Banda del monte', 'Carmen Hernández Moreno', '113', 'Montepinar', 'Murcia', '54621', '968542132', 'carmen@gmail.com', '$2y$10$4UjSs8FZEVn70puyo1PjkuK1XLcpVQOolTtMC1BKbMdoQOpO/9KBy'),
(23, 'Banda de Bullas', 'Francisco Almeida Sánchez', '54', 'Bullas', 'Murcia', '54216', '968542136', 'belgica@gmail.com', '$2y$10$x70RBqqIHLrCMtgAGep5Uezp5Y9ZGqhHg2IKrj7JzRMp8HcT71jXy'),
(25, 'Banda sinfónica de Alicante', 'Estela Pérez Hermosín', '86', 'Alicante', 'Alicante', '54621', '698541256', 'estela@gmail.com', '$2y$10$lQCHzYOELuFRCuFlY6a0DeKKsy2BL3zGuBX1JabQh8sp9K9JhugLC'),
(26, 'Agrupación musical de Almería', 'Sergio Ramírez Alacid', '78', 'Almería', 'Almería', '25364', '968547859', 'sergio@gmail.com', '$2y$10$P2I2jeZjWnMg5m1h8eKjiOxIMPR7fesMvOyZDkUrDu9BqzwxW3TRS'),
(27, 'Banda de Ciudad Rodrigo', 'Andrés Alcántara Pérez', '67', 'Ciudad Rodrigo', 'Salamanca', '69585', '968562314', 'andres@gmail.com', '$2y$10$sGwTO1mMDlNDdOBydNmPee260VRHSPcn.RkXfx7uuzDHNLXI1/KdW'),
(28, 'Agrupación musical de Lugo', 'Carla Martínez López', '98', 'Lugo', 'Lugo', '54625', '659874123', 'carla@gmail.com', '$2y$10$XHXTslqnm2sJwpJ.L./vMuM3vN3ZGfnPqov/8ATolHIZeoJ0S9g0a'),
(29, 'Agrupación musical de Elche', 'Cecilia Sánchez Cánovas', '123', 'Elche', 'Alicante', '78954', '632541879', 'cecilia@gmail.com', '$2y$10$71UyaWKxHHy6cBtfHuyTO.jJKol2xj5R30UMozzedTkVpn46yzb8e');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banda_certamen`
--

CREATE TABLE `banda_certamen` (
  `id` int(11) NOT NULL,
  `banda_id` int(11) NOT NULL,
  `certamen_id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `banda_certamen`
--

INSERT INTO `banda_certamen` (`id`, `banda_id`, `certamen_id`, `fecha`, `hora`) VALUES
(20, 29, 3, '2023-05-29', '11:41:37'),
(21, 20, 6, '2023-05-29', '11:43:23'),
(22, 20, 1, '2023-05-29', '11:48:05'),
(23, 23, 6, '2023-05-29', '11:49:31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banda_cert_celebrado`
--

CREATE TABLE `banda_cert_celebrado` (
  `id_ambos` int(11) NOT NULL,
  `banda_id` int(11) NOT NULL,
  `certamen_id` int(11) NOT NULL,
  `nota` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `banda_cert_celebrado`
--

INSERT INTO `banda_cert_celebrado` (`id_ambos`, `banda_id`, `certamen_id`, `nota`) VALUES
(4, 20, 1, 7),
(5, 23, 1, 8.5),
(6, 25, 1, 7.5),
(7, 26, 2, 7.5),
(8, 27, 2, 8),
(9, 28, 2, 6),
(10, 29, 1, 6.5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `certamenesmusica`
--

CREATE TABLE `certamenesmusica` (
  `id` int(11) NOT NULL,
  `nombre_certamen` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `lugar` varchar(255) NOT NULL,
  `sitio` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `certamenesmusica`
--

INSERT INTO `certamenesmusica` (`id`, `nombre_certamen`, `fecha`, `lugar`, `sitio`) VALUES
(1, 'Fortaleza del Sol', '2023-04-09', 'Lorca', 'Castillo de Lorca'),
(3, 'Moros y Cristianos', '2023-01-28', 'Caravaca de la Cruz', 'Castillo mirador'),
(6, 'Feria de Málaga', '2025-02-06', 'Málaga', 'Plaza principal'),
(7, 'Certamen Valenciano', '2023-05-25', 'Villena', 'Auditorio de Villena');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `certamenes_celebrados`
--

CREATE TABLE `certamenes_celebrados` (
  `id` int(11) NOT NULL,
  `nombre_certamen` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `lugar` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `certamenes_celebrados`
--

INSERT INTO `certamenes_celebrados` (`id`, `nombre_certamen`, `fecha`, `lugar`) VALUES
(1, 'Certamen del Cid', '2023-03-06', 'Peñíscola'),
(2, 'Feria de Sevilla', '2022-12-10', 'Sevilla');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jueces`
--

CREATE TABLE `jueces` (
  `id` int(11) NOT NULL,
  `nombre_completo` varchar(255) NOT NULL,
  `correo_electronico` varchar(255) NOT NULL,
  `clave` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `jueces`
--

INSERT INTO `jueces` (`id`, `nombre_completo`, `correo_electronico`, `clave`) VALUES
(1, 'Rodrigo García López', 'rodrigo123@gmail.com', 'rodrigo123');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bandasdemusica`
--
ALTER TABLE `bandasdemusica`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `banda_certamen`
--
ALTER TABLE `banda_certamen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `banda_id` (`banda_id`),
  ADD KEY `certamen_id` (`certamen_id`);

--
-- Indices de la tabla `banda_cert_celebrado`
--
ALTER TABLE `banda_cert_celebrado`
  ADD PRIMARY KEY (`id_ambos`),
  ADD KEY `banda_id` (`banda_id`),
  ADD KEY `certamen_id` (`certamen_id`);

--
-- Indices de la tabla `certamenesmusica`
--
ALTER TABLE `certamenesmusica`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `certamenes_celebrados`
--
ALTER TABLE `certamenes_celebrados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `jueces`
--
ALTER TABLE `jueces`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bandasdemusica`
--
ALTER TABLE `bandasdemusica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `banda_certamen`
--
ALTER TABLE `banda_certamen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `banda_cert_celebrado`
--
ALTER TABLE `banda_cert_celebrado`
  MODIFY `id_ambos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `certamenesmusica`
--
ALTER TABLE `certamenesmusica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `certamenes_celebrados`
--
ALTER TABLE `certamenes_celebrados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `jueces`
--
ALTER TABLE `jueces`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `banda_certamen`
--
ALTER TABLE `banda_certamen`
  ADD CONSTRAINT `banda_certamen_ibfk_1` FOREIGN KEY (`banda_id`) REFERENCES `bandasdemusica` (`id`),
  ADD CONSTRAINT `banda_certamen_ibfk_2` FOREIGN KEY (`certamen_id`) REFERENCES `certamenesmusica` (`id`);

--
-- Filtros para la tabla `banda_cert_celebrado`
--
ALTER TABLE `banda_cert_celebrado`
  ADD CONSTRAINT `banda_cert_celebrado_ibfk_1` FOREIGN KEY (`banda_id`) REFERENCES `bandasdemusica` (`id`),
  ADD CONSTRAINT `banda_cert_celebrado_ibfk_2` FOREIGN KEY (`certamen_id`) REFERENCES `certamenes_celebrados` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

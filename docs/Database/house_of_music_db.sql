-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2020 at 04:07 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `house_of_music_db`
--
CREATE DATABASE IF NOT EXISTS `house_of_music_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `house_of_music_db`;

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `id` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `artists_id` int(11) NOT NULL,
  `description` varchar(225) NOT NULL,
  `front_cover` varchar(225) DEFAULT NULL,
  `back_cover` varchar(225) DEFAULT NULL,
  `rating` varchar(45) DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`id`, `title`, `artists_id`, `description`, `front_cover`, `back_cover`, `rating`, `release_date`, `genre_id`) VALUES
(103, 'Norman Fucking Rockwell', 1, 'Norman Fucking Rockwell, lanzado el 30 de agosto de 2019, es el sexto álbum de estudio de la cantante estadounidense Lana Del Rey. Fue co-producido co', '/images/albums/lana.jpg', '/images/albums/lana2.jpeg', '5', '2019-08-30', 1),
(104, 'Masseduction', 2, 'Masseduction es el 5to album estudio de St. Vincent, producido por Jack Antonoff. El disco tiene los tintes característicos de Annie Clark: pop y glamrock.', '/images/albums/masseduction.jpg', '/images/albums/masseductionback.jpg', '4.5', '2017-10-02', 1),
(105, 'Hot Pink', 8, 'Hot Pink is the second studio album by American rapper and singer Doja Cat. The album was released on November 7, 2019, by Kemosabe. It features the singles \"Juicy\", featuring Tyga, \"Bottom Bitch\" and \"Rules\". The album featu', '/images/albums/front_cover-1581980148876.jpeg', '/images/albums/back_cover-1581980148877.jpeg', '4', '2019-11-07', 1),
(106, 'Yo x Ti, Tu x Mi', 4, 'Nuevo single de la cantante española junto con Ozuna. El tema mezcla el pop con el reggaetón, y el flamenco.', '/images/albums/front_cover-1581981266259.jpg', '/images/albums/back_cover-1581981266261.jpg', '4', '2019-08-15', 12),
(107, 'Thank U, Next', 10, 'Quinto álbum de estudio de la cantante y actriz estadounidense Ariana Grande, lanzado el 8 de febrero de 2019.', '/images/albums/front_cover-1581981709132.jpg', '/images/albums/back_cover-1581981709134.jpg', '5', '2019-02-08', 1),
(108, 'Oasis', 59, 'Oasis es un álbum de estudio colaborativo entre el cantante puertorriqueño Bad Bunny y el cantante colombiano J Balvin. El álbum abarca desde el Reggaeton al Latin Trap e incluye leves pinceladas de folclore latino y Jazz.', '/images/albums/front_cover-1581983495561.jpeg', '/images/albums/back_cover-1581983495565.jpg', '4', '2019-06-28', 12),
(109, 'Halcyon Days', 53, 'Halcyon Days es la reedición del segundo álbum de estudio de la cantante y artista británica Ellie Goulding: Halcyon (2012), fue lanzado el 26 de agosto de 2013 en Reino Unido y el 27 de agosto de 2013 en Estados Unidos.', '/images/albums/front_cover-1581984728973.jpg', '/images/albums/back_cover-1581984728974.jpg', '3', '2013-08-26', 1),
(110, 'When We All Fall Asleep, Where Do We Go?', 46, 'When We All Fall Asleep, Where Do We Go? es el álbum de estudio debut de la cantante estadounidense Billie Eilish. Está producido por su hermano Finneas OConnell y fue publicado el 29 de marzo de 2019. El álbum combina género', '/images/albums/front_cover-1581985863185.jpg', '/images/albums/back_cover-1581985863189.jpg', '4', '2019-03-29', 1),
(111, 'El Mal Querer', 4, 'El mal querer es el segundo trabajo álbum de estudio de la cantante española Rosalía, publicado el 2 de noviembre de 2018 a través de Sony Music.​​ Está producido conjuntamente por ella misma y El Guincho.', '/images/albums/front_cover-1582071796264.jpg', '/images/albums/back_cover-1582071796267.jpg', '5', '2018-11-02', 1),
(112, 'The Now Now', 60, 'The Now Now es el sexto álbum de estudio de la banda virtual británica Gorillaz. Fue lanzado el 29 de junio de 2018, bajo el sello discográfico de Parlophone y Warner Bros.', '/images/albums/front_cover-1582079790936.jpg', '/images/albums/back_cover-1582079790938.jpg', '3', '2018-06-29', 8),
(113, 'The Thrill Of It All', 26, 'The Thrill Of It All es el segundo álbum de estudio cantautor británico Sam Smith.1​ Se lanzó el 3 de noviembre de 2017 a través de Capitol Records.', '/images/albums/front_cover-1582081658292.jpg', '/images/albums/back_cover-1582081658296.jpg', '4', '2017-11-03', 1);

-- --------------------------------------------------------

--
-- Table structure for table `album_song`
--

CREATE TABLE `album_song` (
  `album_id` int(11) NOT NULL,
  `song_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

CREATE TABLE `artists` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`id`, `name`) VALUES
(1, 'Lana del Rey'),
(2, 'St. Vincent'),
(3, 'J Balvin'),
(4, 'Rosalía'),
(5, 'Taylor Swift'),
(6, 'Keane'),
(7, 'Coldplay'),
(8, 'Doja Cat'),
(9, 'Bad Bunny'),
(10, 'Ariana Grande'),
(11, 'Queen'),
(12, 'Katy Perry'),
(13, 'Maroon 5'),
(14, 'Post Malone'),
(15, 'Lady Gaga'),
(16, 'Imagine Dragons'),
(17, 'The Weeknd'),
(18, 'Nicki Minaj'),
(19, 'Eminem'),
(20, 'P!nk'),
(21, 'One Direction'),
(22, 'Justin Timberlake'),
(23, 'Kendrick Lamar'),
(24, 'Lady Antebellum'),
(25, 'Beyonce'),
(26, 'Sam Smith'),
(27, 'Kesha'),
(28, 'twenty one pilots'),
(29, 'Shawn Mendes'),
(30, 'Cardi B'),
(31, 'Selena Gomez'),
(32, 'JAY-Z'),
(33, 'Meghan Trainor'),
(34, 'The Black Eyed Peas'),
(35, 'Michael Buble'),
(36, 'Jason Derulo'),
(37, 'Halsey'),
(38, 'Lorde'),
(39, 'Kanye West'),
(40, 'Miley Cyrus'),
(41, 'Carrie Underwood'),
(42, 'Wiz Khalifa'),
(43, 'Migos'),
(44, 'Kelly Clarkson'),
(45, 'OneRepublic'),
(46, 'Billie Eilish'),
(47, 'DJ Khaled'),
(48, 'Calvin Harris'),
(49, 'Britney Spears'),
(50, 'Fetty Wap'),
(51, 'Sia'),
(52, 'Pentatonix'),
(53, 'Ellie Goulding'),
(54, 'Alt-J'),
(55, 'Foster The People'),
(56, 'The Strokes'),
(59, 'J Balvin + Bad Bunny'),
(60, 'Gorillaz'),
(61, 'Phoenix');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(1, 'Pop'),
(2, 'Rock'),
(3, 'Latino'),
(4, 'EDM'),
(5, 'Música Clásica'),
(6, 'Floklore'),
(7, 'Hip Hop'),
(8, 'Alternativo'),
(9, 'Jazz'),
(10, 'Metal'),
(11, 'Reggae'),
(12, 'Reggaeton'),
(13, 'R&B'),
(14, 'Rap');

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

CREATE TABLE `songs` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`id`, `name`) VALUES
(1, 'Hang on Me'),
(2, 'Pills'),
(3, 'Masseduction'),
(4, 'Sugarboy'),
(5, 'Los Ageless'),
(6, 'Happy Birthday, Johnny'),
(7, 'Savior'),
(8, 'New York'),
(9, 'Fear the Future'),
(10, 'Young Lover'),
(11, 'Dancing with a Ghost'),
(12, 'Slow Disco'),
(13, 'Smoking Section'),
(14, 'Norman Fucking Rockwell'),
(15, 'Mariners Apartment Complex'),
(16, 'Venice Bitch'),
(17, 'Fuck It, I Love You'),
(18, 'Doin\' Time'),
(19, 'Love Song'),
(20, 'Cinnamon Girl'),
(21, 'How To Disappear'),
(22, 'California'),
(23, 'The Next Best American Record'),
(24, 'The Greatest'),
(25, 'Bartender'),
(26, 'Happiness Is a Butterfly'),
(27, 'Hope Is a Dangerous Thing for a Woman...');

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `album_id` int(11) NOT NULL,
  `format` varchar(45) NOT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `stock` int(10) UNSIGNED NOT NULL,
  `sold` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `lastName` varchar(225) NOT NULL,
  `birthdate` varchar(45) NOT NULL,
  `adress` varchar(225) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `lastName`, `birthdate`, `adress`, `email`, `password`) VALUES
(1, 'Santiago Ezequiel', 'Fernández Colareda', '1991-10-23', 'Francisco Acuña 1511, CABA', 'san.efc@gmail.com', '$2b$10$tY7PJlLFBw1j0O51.PkvAuAk3Q3Z4A7su4f/yf9C9MWsHKWuoaBM.'),
(2, 'Javi', 'Herrera', '2021-02-02', 'Lima 1111', 'javi@dh.com', '$2b$10$rKHZBVae2.US9HPD/HcDpukemkihcVZGs.6o2nO4C.4r7AZhA6yKO'),
(3, 'Javier', 'Gutierrez', '1994-01-28', 'Un Domicilio 1234', 'javi@javi.com', '$2b$10$fQwf.6ToB3FmaFd7hQIlOuSro.VwqS8ovPAi2Zqcz2xuX9dfvhExy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genres_id_idx` (`genre_id`),
  ADD KEY `artist_id_idx` (`artists_id`);

--
-- Indexes for table `album_song`
--
ALTER TABLE `album_song`
  ADD KEY `song_id_idx` (`song_id`),
  ADD KEY `album_id` (`album_id`);

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD KEY `album_id_idx` (`album_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- AUTO_INCREMENT for table `artists`
--
ALTER TABLE `artists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `songs`
--
ALTER TABLE `songs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `artist_id` FOREIGN KEY (`artists_id`) REFERENCES `artists` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `genre_id` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`);

--
-- Constraints for table `album_song`
--
ALTER TABLE `album_song`
  ADD CONSTRAINT `album_id` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`),
  ADD CONSTRAINT `song_id` FOREIGN KEY (`song_id`) REFERENCES `songs` (`id`);

--
-- Constraints for table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `album_stock_id` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

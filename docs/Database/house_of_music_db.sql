-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2020 at 02:56 AM
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

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `id` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `artists_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `description` varchar(500) NOT NULL,
  `format` varchar(45) NOT NULL,
  `price` double NOT NULL,
  `rating` varchar(45) NOT NULL,
  `front_cover` varchar(225) NOT NULL,
  `back_cover` varchar(225) NOT NULL,
  `release_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`id`, `title`, `artists_id`, `genre_id`, `description`, `format`, `price`, `rating`, `front_cover`, `back_cover`, `release_date`) VALUES
(103, 'Norman Fucking Rockwell', 1, 1, 'Norman Fucking Rockwell, lanzado el 30 de agosto de 2019, es el sexto álbum de estudio de la cantante estadounidense Lana Del Rey. Fue co-producido co', 'cd', 1425, '5', '/images/albums/lana.jpg', '/images/albums/lana2.jpeg', '2019-08-30'),
(104, 'Masseduction', 2, 1, 'Masseduction es el 5to album estudio de St. Vincent, producido por Jack Antonoff. El disco tiene los tintes característicos de Annie Clark: pop y glamrock.', 'vinilo', 3199, '5', '/images/albums/masseduction.jpg', '/images/albums/masseductionback.jpg', '2017-10-13'),
(105, 'Hot Pink', 8, 1, 'Hot Pink is the second studio album by American rapper and singer Doja Cat. The album was released on November 7, 2019, by Kemosabe. It features the singles \"Juicy\", featuring Tyga, \"Bottom Bitch\" and \"Rules\". The album featu', 'cd', 1425, '4', '/images/albums/front_cover-1581980148876.jpeg', '/images/albums/back_cover-1581980148877.jpeg', '2019-11-07'),
(107, 'Thank U, Next', 10, 1, 'Quinto álbum de estudio de la cantante y actriz estadounidense Ariana Grande, lanzado el 8 de febrero de 2019.', 'cd', 1425, '5', '/images/albums/front_cover-1581981709132.jpg', '/images/albums/back_cover-1581981709134.jpg', '2019-02-08'),
(108, 'Oasis', 59, 12, 'Oasis es un álbum de estudio colaborativo entre el cantante puertorriqueño Bad Bunny y el cantante colombiano J Balvin. El álbum abarca desde el Reggaeton al Latin Trap e incluye leves pinceladas de folclore latino y Jazz.', 'cd', 1425, '4', '/images/albums/front_cover-1581983495561.jpeg', '/images/albums/back_cover-1581983495565.jpg', '2019-06-28'),
(110, 'When We All Fall Asleep, Where Do We Go?', 46, 1, 'When We All Fall Asleep, Where Do We Go? es el álbum de estudio debut de la cantante estadounidense Billie Eilish. Está producido por su hermano Finneas OConnell y fue publicado el 29 de marzo de 2019. El álbum combina género', 'cd', 1425, '4', '/images/albums/front_cover-1581985863185.jpg', '/images/albums/back_cover-1581985863189.jpg', '2019-03-29'),
(111, 'El Mal Querer', 4, 1, 'El mal querer es el segundo trabajo álbum de estudio de la cantante española Rosalía, publicado el 2 de noviembre de 2018 a través de Sony Music.​​ Está producido conjuntamente por ella misma y El Guincho.', 'cd', 1425, '5', '/images/albums/front_cover-1582071796264.jpg', '/images/albums/back_cover-1582071796267.jpg', '2018-11-02'),
(114, 'Future Nostalgia', 62, 1, '\'Future Nostalgia es el segundo álbum de estudio de la cantante británica Dua Lipa. El álbum encontra inspiración en la música de artistas que escuchó  artistas que escuchó durante su adolescencia, como Gwen Stefani, Moloko, Blondie y Outkast. ', 'cd', 1799, '5', '/images/albums/front_cover-1586562763641.jpg', '/images/albums/back_cover-1586562763641.jpg', '2020-03-27');

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
(61, 'Phoenix'),
(62, 'Dua Lipa');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `ticket` int(11) NOT NULL,
  `album_id` int(11) NOT NULL,
  `units` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `name` varchar(200) NOT NULL,
  `album_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`id`, `name`, `album_id`) VALUES
(42, 'Norman Fucking Rockwell', 103),
(43, 'Mariners Apartment Complex', 103),
(44, 'Venice Bitch', 103),
(45, 'Fuck It, I Love You', 103),
(46, 'Doin Time', 103),
(47, 'Love Song', 103),
(48, 'Cinnamon Girl', 103),
(49, 'How to Disappear', 103),
(50, 'California', 103),
(51, 'The Next Best American Record', 103),
(52, 'The Greatest', 103),
(53, 'Bartender', 103),
(54, 'Happiness Is a Butterfly', 103),
(55, 'Hope Is a Dangerous Thing for a Woman Like Me to Have – but I Have It', 103),
(56, 'Hang on Me', 104),
(57, 'Pills', 104),
(58, 'Masseduction', 104),
(59, 'Sugarboy', 104),
(60, 'Los Ageless', 104),
(61, 'Happy Birthday, Johnny', 104),
(62, 'Savior', 104),
(63, 'New York', 104),
(64, 'Fear the Future', 104),
(65, 'Young Lover', 104),
(66, 'Dancing with a Ghost', 104),
(67, 'Slow Disco', 104),
(68, 'Smoking Section', 104),
(69, 'Cyber Sex', 105),
(70, 'Won\'t Bite (Ft. Smino)', 105),
(71, 'Rules', 105),
(72, 'Bottom Bitch', 105),
(73, 'Say So', 105),
(74, 'Like That (Ft. Gucci Mane)', 105),
(75, 'Talk Dirty', 105),
(76, 'Addiction', 105),
(77, 'Streets', 105),
(78, 'Shine', 105),
(79, 'Better Than Me', 105),
(80, 'Juicy by Doja Cat & Tyga', 105),
(92, 'Future Nostalgia', 114),
(93, 'Don\'t Start Now', 114),
(94, 'Cool', 114),
(95, 'Physical', 114),
(96, 'Levitating', 114),
(97, 'Pretty Please', 114),
(98, 'Hallucinate', 114),
(99, 'Love Again', 114),
(100, 'Break My Heart', 114),
(101, 'Good in Bed', 114),
(102, 'Boys Will Be Boys', 114);

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
  `password` varchar(225) NOT NULL,
  `isAdmin` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `lastName`, `birthdate`, `adress`, `email`, `password`, `isAdmin`) VALUES
(1, 'Santiago Ezequiel', 'Fernández Colareda', '1991-10-23', 'Francisco Acuña 1511, CABA', 'san.efc@gmail.com', '$2b$10$tY7PJlLFBw1j0O51.PkvAuAk3Q3Z4A7su4f/yf9C9MWsHKWuoaBM.', 1),
(2, 'Javi', 'Herrera', '2021-02-02', 'Lima 1111', 'javi@dh.com', '$2b$10$rKHZBVae2.US9HPD/HcDpukemkihcVZGs.6o2nO4C.4r7AZhA6yKO', 0),
(14, 'Luis Maria', 'Colareda Fewkes', '1992-03-03', 'Acuña de Figueroa 1511', 'luismacf@gmail.com', '$2b$10$Mq32i8FFGCVsv3fI5oiPAup20rjTOvb67AHJSUzWMS.7E0apT/25e', 0),
(16, 'Maximo', 'Carizza', '2005-11-21', '12B 6952, City Bell', 'maximocarizza@gmail.com', '$2b$10$0kI8UuOcu7Ts3T3a59uKaeOgHZonytVDLMmXW1g4gxtlbFjtNA9Fq', 0);

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
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`ticket`),
  ADD KEY `album_id_idx` (`album_id`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`),
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT for table `artists`
--
ALTER TABLE `artists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `ticket` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `songs`
--
ALTER TABLE `songs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

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
-- Constraints for table `songs`
--
ALTER TABLE `songs`
  ADD CONSTRAINT `album_id` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

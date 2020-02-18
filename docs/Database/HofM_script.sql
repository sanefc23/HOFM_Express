CREATE SCHEMA IF NOT EXISTS `house_of_music_db` DEFAULT CHARACTER SET utf8mb4 ;
USE `house_of_music_db` ;

-- / TABLES WITH NO FOREIGN KEY

CREATE TABLE IF NOT EXISTS `house_of_music_db`.`artists` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 60
DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE IF NOT EXISTS `house_of_music_db`.`genres` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE IF NOT EXISTS `house_of_music_db`.`songs` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 28
DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE IF NOT EXISTS `house_of_music_db`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `birthdate` VARCHAR(45) NOT NULL,
  `adress` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

-- / TABLES WITH FOREIGN KEY

CREATE TABLE IF NOT EXISTS `house_of_music_db`.`albums` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `artists_id` INT(11) NOT NULL,
  `description` VARCHAR(225) NOT NULL,
  `front_cover` VARCHAR(225) NULL DEFAULT NULL,
  `back_cover` VARCHAR(225) NULL DEFAULT NULL,
  `rating` VARCHAR(45) NULL DEFAULT NULL,
  `release_date` DATE NULL DEFAULT NULL,
  `genre_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `genres_id_idx` (`genre_id` ASC),
  INDEX `artist_id_idx` (`artists_id` ASC),
  CONSTRAINT `artist_id`
    FOREIGN KEY (`artists_id`)
    REFERENCES `house_of_music_db`.`artists` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `genre_id`
    FOREIGN KEY (`genre_id`)
    REFERENCES `house_of_music_db`.`genres` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE IF NOT EXISTS `house_of_music_db`.`album_song` (
  `album_id` INT(11) NOT NULL,
  `song_id` INT(11) NOT NULL,
  INDEX `song_id_idx` (`song_id` ASC),
  INDEX `album_id` (`album_id` ASC),
  CONSTRAINT `album_id`
    FOREIGN KEY (`album_id`)
    REFERENCES `house_of_music_db`.`albums` (`id`),
  CONSTRAINT `song_id`
    FOREIGN KEY (`song_id`)
    REFERENCES `house_of_music_db`.`songs` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

CREATE TABLE IF NOT EXISTS `house_of_music_db`.`stock` (
  `album_id` INT(11) NOT NULL,
  `format` VARCHAR(45) NOT NULL,
  `price` INT(10) UNSIGNED NOT NULL,
  `stock` INT(10) UNSIGNED NOT NULL,
  `sold` INT(10) UNSIGNED NOT NULL,
  INDEX `album_id_idx` (`album_id` ASC),
  CONSTRAINT `album_stock_id`
    FOREIGN KEY (`album_id`)
    REFERENCES `house_of_music_db`.`albums` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;

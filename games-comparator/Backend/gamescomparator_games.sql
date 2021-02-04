-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: gamescomparator
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
  `id` int NOT NULL AUTO_INCREMENT,
  `price` varchar(45) NOT NULL,
  `title` varchar(45) NOT NULL,
  `rating` varchar(45) NOT NULL,
  `image` varchar(1024) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'49.99€','Warhammer 40000 : Dawn of war','4.8','https://www.mobygames.com/images/covers/l/261940-warhammer-40-000-dawn-of-war-windows-front-cover.jpg'),(2,'39.99€','Crusader Kings III','4.6','https://image.jeuxvideo.com/medias-md/157148/1571477903-8834-card.jpg'),(3,'39.99','Escape from tarkov','4.7','https://cdn-products.eneba.com/resized-products/ZCAbdpbW65hZWPJWNWAIYzn2Kyia2OXv3E5Oy9SPPc8_350x200_1x-0.jpeg'),(4,'5.99€','Warcraft III','5','https://cdn-cf.gamivo.com/image_cover.jpg?f=11965&n=22278329175478273.jpg&h=512afdfe39a85661fd3fe8de1a5cbbe9'),(5,'27.65€','Endless space 2','4.2','https://game-guide.fr/wp-content/uploads/2018/02/Endless_space2_exiles-1.jpg'),(6,'31.23€','Wasteland 3','3.8','https://www.gamereactor.fr/media/19/inxileentertainmentpresentes_3101923_1200x675.jpg'),(7,'18.57€','Total war : Warhammer II','4.4','https://www.spiritgamer.fr/wp-content/uploads/2017/06/TotalWarII-logo.jpg'),(8,'2.99','Dota 2','3.9','https://upload.wikimedia.org/wikipedia/fr/f/f7/Dota_2_Logo.jpg'),(9,'15.76€','Hunt Showdown','4.5','https://global-img.gamergen.com/hunt-showdown-key-art-full-size-crop-with-textured-logo-rgb-1920-x-1080_0000864370.jpg');
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-04 15:41:36

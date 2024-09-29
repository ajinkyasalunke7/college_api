-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 29, 2024 at 02:54 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `college_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `college`
--

CREATE TABLE `college` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `course_name` varchar(255) DEFAULT NULL,
  `duration` varchar(100) DEFAULT NULL,
  `accommodation_type` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `college`
--

INSERT INTO `college` (`id`, `name`, `course_name`, `duration`, `accommodation_type`) VALUES
(6, 'MIT World Peace University', 'Bachelor of Technology', '4 years', 'AC'),
(7, 'Pune Institute of Computer Technology', 'Master of Computer Applications', '2 years', 'Non-AC'),
(8, 'Bharati Vidyapeeth Deemed University', 'Bachelor of Business Administration', '3 years', 'AC'),
(9, 'Vishwakarma Institute of Technology', 'Master of Engineering', '2 years', 'AC'),
(10, 'Indira Gandhi Institute of Aeronautics', 'Diploma in Aviation', '1 year', 'Non-AC'),
(11, 'Symbiosis International University', 'Bachelor of Business Administration', '3 years', 'AC');

-- --------------------------------------------------------

--
-- Table structure for table `coursefee`
--

CREATE TABLE `coursefee` (
  `id` int(11) NOT NULL,
  `college_id` int(11) DEFAULT NULL,
  `course_fee` decimal(10,2) DEFAULT NULL,
  `accommodation_fee` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coursefee`
--

INSERT INTO `coursefee` (`id`, `college_id`, `course_fee`, `accommodation_fee`) VALUES
(30, 6, 120000.00, 30000.00),
(31, 7, 80000.00, 15000.00),
(32, 8, 60000.00, 25000.00),
(33, 9, 100000.00, 35000.00),
(34, 10, 50000.00, 12000.00),
(35, 11, 90000.00, 40000.00);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `college`
--
ALTER TABLE `college`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coursefee`
--
ALTER TABLE `coursefee`
  ADD PRIMARY KEY (`id`),
  ADD KEY `college_id` (`college_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `college`
--
ALTER TABLE `college`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `coursefee`
--
ALTER TABLE `coursefee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `coursefee`
--
ALTER TABLE `coursefee`
  ADD CONSTRAINT `coursefee_ibfk_1` FOREIGN KEY (`college_id`) REFERENCES `college` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

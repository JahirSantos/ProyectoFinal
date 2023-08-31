<?php
$hostname = "localhost";
$user = "root";
$password = "12345";
$base = "db_academico";
//cadena de conexion
$conexion = new PDO("mysql:host=$hostname; dbname=$base" , $user, $password);
?>

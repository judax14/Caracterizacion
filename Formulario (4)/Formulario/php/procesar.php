<?php

include 'conexion.php';

$res1 = $_POST['res1'];
$res2 = $_POST['res2'];
$res3 = $_POST['res3'];
$res4 = $_POST['res4'];
$res5 = $_POST['res5'];

$sql = "INSERT INTO prueba(respuesta1, respuesta2, respuesta3, respuesta4, respuesta5) VALUES('$res1', '$res2', '$res3', '$res4', '$res5')";

$result = mysqli_query($con, $sql);

if($result){
    echo "ok";
}else{
    die("no funciono");
}
?>



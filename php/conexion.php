<?php

$con = mysqli_connect('localhost', 'root', '', 'formulario');

if ($con) {
    echo "ok";
}else{
    die("No se conecto");
}

?>
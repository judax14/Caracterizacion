<?php

$con = mysqli_connect('localhost', 'root', '', 'asdaa');

if ($con) {
    echo "ok";
}else{
    die("No se conecto");
}

?>
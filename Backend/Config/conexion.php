<?php
    function conectar() {
        $host = "localhost:8889";
        $user = "root";
        $pass = "root";
        $db = "x";

        $conn = mysqli_connect($host, $user, $pass, $db);

        if (!$conn) {
            die("Conexión fallida: " . mysqli_connect_error());
        }
        mysqli_select_db($conn, $db);
        return $conn;
    }
?>
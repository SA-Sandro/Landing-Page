<?php
$nombre = isset($_POST["nombre"]) ? $_POST["nombre"] : "";
$apellidos = isset($_POST["apellidos"]) ? $_POST["apellidos"] : "";
$localidad = isset($_POST["localidad"]) ? $_POST["localidad"] : "";
$correo = isset($_POST["correo"]) ? $_POST["correo"] : "";
$contraseña = isset($_POST["contraseña"]) ? $_POST["contraseña"] : "";
$numero = isset($_POST["numero"]) ? $_POST["numero"] : "";


try {
    $conexion = new PDO('mysql:host=localhost;port=3306;dbname=users_db', 'root', '');
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $pdo = $conexion->prepare('INSERT INTO usuarios(nombre,apellidos,localidad,correo,contraseña,telefono)
     VALUES (?,?,?,?,?,?)');
    $pdo->bindParam(1, $nombre);
    $pdo->bindParam(2, $apellidos);
    $pdo->bindParam(3, $localidad);
    $pdo->bindParam(4, $correo);
    $pdo->bindParam(5, $contraseña);
    $pdo->bindParam(6, $numero);
    $pdo->execute() or die(print($pdo->errorInfo()));

    echo json_encode(true);

} catch (PDOException $error) {
    echo $error->getMessage();
    die();
}


?>
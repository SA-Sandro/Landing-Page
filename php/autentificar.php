<?php
$mail = isset($_POST["mail"]) ? $_POST["mail"] : "";
$pass = isset($_POST["pass"]) ? $_POST["pass"] : "";

try {
    $conexion = new PDO('mysql:host=localhost;port=3306;dbname=users_db', 'root', '');
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $consulta = $conexion->prepare("SELECT * FROM usuarios WHERE correo = :mail AND contraseña = :pass");
    $consulta->bindParam(':mail', $mail);
    $consulta->bindParam(':pass', $pass);
    $consulta->execute() or die(print($pdo->errorInfo()));

    if ($consulta->rowCount() > 0) {
        echo json_encode(true);
    } else {
        echo json_encode(false);
    }
} catch (PDOException $error) {
    echo $error->getMessage();
    die();
}
?>
<?php
    $mensaje = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $usuario = $_POST['user'];
        $password = $_POST['pass'];

        // Validación simple de ejemplo
        if ($usuario == "admin" && $password == "1234") {
            $mensaje = "¡Bienvenido a San Jorge!";
        } else {
            $mensaje = "Usuario o contraseña incorrectos.";
        }
    }
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Login - San Jorge</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Acceso Clientes</h1>
        <nav><a href="index.php">Volver al Inicio</a></nav>
    </header>

    <main class="login-container">
        <form method="POST" action="">
            <h2>Iniciar Sesión</h2>
            <label for="user">Usuario:</label>
            <input type="text" name="user" id="user" required>

            <label for="pass">Contraseña:</label>
            <input type="password" name="pass" id="pass" required>

            <button type="submit" class="btn-login">Entrar</button>
            
            <?php if($mensaje): ?>
                <p class="alerta"><?php echo $mensaje; ?></p>
            <?php endif; ?>
        </form>
    </main>
</body>
</html>
<?php

echo "HOLA MUNDO";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once('/phpMailer/Exception.php');
require_once('/phpMailer/PHPMailer.php');
require_once('/phpMailer/SMTP.php');

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->SMTPDebug = 2;
$mail->Host = 'smtp.hostinger.com';
$mail->Port = 587;
$mail->SMTPAuth = true;

$mail->Username = 'pruebamail@bernabeufishing.com';
$mail->Password = 'Bernabeu1';

date_default_timezone_set("America/Argentina/Buenos_Aires");

$name = $_POST["name"];
$company = $_POST["company"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$city = $_POST["city"];
$country = $_POST["country"];
$message = $_POST["message"];
$fecha = date("Y-m-d (H:i:s)");

$respuesta = array();
$listaerrores = array();


if(count($listaerrores) > 0)
{
    $respuesta["tipo"] = 2;
    $respuesta["errores"] = $listaerrores;
}else{

    $agregado = "";

    try {
        //Recipients
        $mail->setFrom('alantapia@alantapia.com', 'Alan');
        $mail->addAddress('tapia.alan.g@gmail.com', 'Alan Tapia');

        $mail->isHTML(true);
        $mail->Subject = 'Prueba mail desde hosting BERNABEU';
        
        $body = "Nombre: ".$name."<br>";
        $body.= "Company: ".$company."<br>";
        $body.= "Email: ".$email."<br>";
        $body.= "Teléfono: ".$phone."<br>";
        $body.= "País: ".$country."<br>";
        $body.= "Ciudad: ".$city."<br>";
        $body.= "Mensaje: ".$message."<br>";
        $mail->Body = $body;
        if($mail->send())
        {
            $agregado = "Pronto nos comunicaremos contigo.";
        }

    } catch (Exception $e) {
        echo "El mail no ha podido ser enviado. Error: {$mail->ErrorInfo}";
    }

    $respuesta["tipo"] = 1;
    $respuesta["mensaje"] = "Se registró satisfactoriamente. ".$agregado;
    
};

    echo json_encode($respuesta);
?> 
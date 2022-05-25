<?php
session_start();


if(isset($_POST['ghg'])){
$ghg = $_POST['ghg'];
if($ghg == "win"){

$_SESSION["flag2"] = "{WINNER BATTLEFINAL}";
}
}
 $_SESSION["flag2"] = "{WINNER BATTLEFINAL}";
header( "Location: game.php") ;
exit;


?>
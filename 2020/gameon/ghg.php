<?php
session_start();


if(isset($_POST['ghg'])){
$ghg = $_POST['ghg'];
if($ghg == "win"){
$cnt = $_SESSION["cnt"];
$cnt++;
$fp = fopen("test.txt", "a");
fwrite($fp, $cnt."\n");
fclose($fp);
$_SESSION["cnt"] = $cnt;
if($cnt >= 50){
	$_SESSION["flag1"] = "{LV OVER10}";
}
}
}

?>
<?php
	//require_once("User.csv");
	ini_set('display_errors',"On");

	//セッション開始
	session_start();

	//入力された値を取得
	$id = $_POST['id'];
	$passwrd = $_POST['password'];

	// 読み込み用にtest.csvを開きます。
	$f = fopen("User.csv", "r");
	
	//User.csvの行を1行ずつ読み込みます。
	while($line = fgetcsv($f)){
		if(isset($line[2])){
	if($line[2]==$id&&$line[1]==$passwrd){
	//パスワードが正しければメニューに飛ばす
		$_SESSION['id'] = $id;
		$_SESSION['password'] = $passwrd;
		header("Location: hitokoto.php");
		break ;
		}else{
		//見つからなかったまたはパスワードが違ったらログインページに戻す
		header("Location: login.php");
		}
	}
	}
	//User.csvを閉じます。
	fclose($f);
?>
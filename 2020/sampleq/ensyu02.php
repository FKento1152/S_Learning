<?php
 

 
$question = $_POST['question']; //ラジオボタンの内容を受け取る
$answer = $_POST['answer'];   //hiddenで送られた正解を受け取る
 
//結果の判定
if($question == $answer){
	$result = "FLAG=congratulation!!";
	
}else{
	$result = "スマホで確認してね！";
}
 
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>簡易クイズプログラム - 結果</title>
</head>
<body>
 <font size="4">
クイズの結果
</font>

<br />

<font size="7">
<?php echo $result ?>
</font>

<br />




</body>
</html>

<?php
 
$title = '今日の日付は？';
 
$question = array(); 
$question = array('10/3','10/4','10/5'); 
 
$answer = '10/6'; 
 
shuffle($question); 
 
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>簡易クイズプログラム</title>
</head>
<body>
 
 <font size="7">
 
<h2><?php echo $title ?></h2>
<form method="POST" action="ensyu02.php">

   <?php foreach($question as $value){ ?>
   <input type="radio" name="question" value="<?php echo $value; ?>" /> <?php echo $value; ?><br>
   <?php } ?>
   <input type="hidden" name="answer" value="<?php echo $answer ?>">
   <input type="submit" value="回答する">
</form>
 </font>
</body>
</html>
<?php
    session_start();
    $cnt =  $_SESSION['cnt'];
    $lv = $cnt / 5;
	$str = $lv * 3 + 2;
	$gb = $lv * 4 + 1;
	$age = $lv * 5 + 3;
	$flag1 = $_SESSION['flag1'];
	$flag2 = $_SESSION['flag2'];
?>
<html>
<head>
<style type="text/css">
<!--
body {background-image: url("images.jpg"); 
      background-size: 940px 640px;      }
.square_btn{
	width: 100px;
	height: 30px;
    display: inline-block;
    padding: 2em 9em;
    text-decoration: none;
    background: #668ad8;/*ボタン色*/
    color: #FFF;
    border-bottom: solid 4px #627295;
    border-radius: 3px;
}
.square_btn:hover{
    background-image: -webkit-linear-gradient(45deg, #709dff 50%, #b0c9ff 100%);
    background-image: linear-gradient(45deg, #709dff 50%, #b0c9ff 100%);
}
.square_btn2{
	width: 100px;
	height: 30px;
    display: inline-block;
    padding: 2em 9em;
    text-decoration: none;
    background: #696969;/*ボタン色*/
    color: #FFF;
    border-bottom: solid 4px #a9a9a9;
    border-radius: 3px;
}
.square_btn2:hover{
    background-image: -webkit-linear-gradient(45deg, #a9a9a9 50%, #b0c9ff 100%);
    background-image: linear-gradient(45deg, #a9a9a9 50%, #b0c9ff 100%);
}
.btn{
  display: inline-block;
  text-decoration: none;
  background: #87befd;
  color: #FFF;
  width: 120px;
  height: 120px;
  line-height: 120px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  transition: .4s;
}

.btn:hover{
    background: #668ad8;
}
ul li {
    list-style: none;
	margin-top: 15px;
	white-space: nowrap;
}
div.box{
    background-color:rgba(255,255,255,0.5);
    width:200px;
    height:160px;
	position: relative;
    top: -400px;
    left: 640px;
}
.soutai {
  position: relative;
  top: -350px;
  left: 500px;
}



-->
</style>
<script type="text/javascript">
     window.onload = function () {
	  var lv = <?php echo $lv?>;
      var target = document.getElementById("lv3");
	  var target1 = document.getElementById("lv4");
      if (lv > 5) {
        target.href = "game3.php";
		target.textContent = "バトル2";
		if (lv > 9) {
        target1.href = "game4.php";
		target1.textContent = "バトル3";
		}
      }
     };
  </script>
</head>
 <title>game TEST</title>
 
 <body  oncontextmenu='return false' bgcolor = "black">
 
  <ul>
  <li><a href="game1.php" class="square_btn">チュートリアル</a></li>
  <li><a href="game2.php" class="square_btn"> バトル1</a></li>
  <li><a id ="lv3" href="#" class="square_btn"> LV6以上</a></li>
  <li><a id ="lv4" href="#" class="square_btn"> LV10以上</a></li>
  <div class="box" >
  <form action="game4.php"method="POST"name="from">
           <div>LV:<?php echo floor($lv)?><input type="hidden"  style="position: absolute; left: 50%; 50%" value="<?php echo $lv?>" name="ghg" ><br></div>
		   <div>攻撃力:<?php echo floor($str)?><input type="hidden"  style="position: absolute; left: 50%; 50%" value="<?php echo $str?>" name="STR" ><br></div>
		   <div>防御力:<?php echo floor($gb)?><input type="hidden"  style="position: absolute; left: 50%; 50%" value="<?php echo $gb?>" name="DEF" ><br></div>
		   <div>素早さ:<?php echo floor($age)?><input type="hidden"  style="position: absolute; left: 50%; 50%" value="<?php echo $age?>" name="AGE" ><br></div>
		   <div>FLAG1:<?php echo $flag1?><input type="hidden"  style="position: absolute; left: 50%; 50%" value="<?php echo $flag1?>" name="FLAG1" ><br></div>
		    <div>FLAG2:<?php echo $flag2?><input type="hidden"  style="position: absolute; left: 50%; 50%" value="<?php echo $flag2?>" name="FLAG2" ><br></div>
		   </form></div>
  
  <img class = "soutai" src="play2.png" alt="写真" width="200" height="400">
  
  </ul>
	</body>
	        
</html>

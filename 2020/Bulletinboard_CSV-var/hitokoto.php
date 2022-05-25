<?php
	
	date_default_timezone_set('Asia/Tokyo');
	session_start();
	//ログインユーザ情報を取得
	$id = $_SESSION['id'];
	$passwrd = $_SESSION['password'];
	$date=date('Y-m-d H:i:s');

	//ログインしていない場合はログインページに飛ばす
	if($id == ''){
		header("HTTP/1.1 301 Moved Permanently");
		header("Location: login.php");
		exit(0);
	}elseif($passwrd==1123&&$id==="admin"){
		echo("<script>alert('FLAG={You are an administrator}')</script>"
	);
	}

?>
<html style="height:100%">
<head>
	<meta charset="utf8">
	<link rel="stylesheet" href="css/default.css" type="text/css">
	<link rel="stylesheet" href="../css/bootstrap.css" type="text/css">
	<script src="script/jquery-3.1.0.min.js"></script>
        <title>掲示板</title>
 <script>
        function check() {
            var getText = document.form.message.value;
            if (getText.length == 0) {
                alert("コメント欄に内容を入力してください");
            } else if(getText.length >=30){
                alert("コメント欄の内容が上限(30文字)を超えています");
            }
        }
    </script>
</head>
<!--ナビゲーションバーの重なりを回避するため上部にpaddingを設定-->
<body style="padding-top: 56px; height:100%">
    <!--コンテンツ-->
    <div class="container-fluid"style="background-color:silver">
        <!--ナビゲーションバー-->
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-secondary">
            <!--縮小時ハンバーガーメニューにする-->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!--cllapse:ハンバーガーメニューに含む内容-->
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mr-auto">
                    <a class="navbar-brand" href="../index.html">
                        <img src="../favicon.ico" width="30" height="30" class="d-inline-block align-top" alt="">
                        S-learning
                      </a>
                      
                      <li class="nav-item active">
                        <a class="nav-link" href="../index.html">トップページ <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            演習資料
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            
                            <a class="dropdown-item" href="../doc/slot.pdf"target="_blank">スロット資料</a>
				<a class="dropdown-item" href="../doc/gacha.pdf"target="_blank">ガチャ資料</a>	
                            <a class="dropdown-item" href="../doc/hitokoto.pdf"target="_blank">掲示板資料</a>
                            <a class="dropdown-item" href="../doc/tapi.pdf"target="_blank">タピオカ資料</a>
                            <a class="dropdown-item" href="../doc/RPG.pdf"target="_blank">RPG資料</a>
                        </div>
                    </li>
<li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            演習コンテンツ
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="../sampleq/sample-slot.php">スロット</a>
				<a class="dropdown-item" href="../gacha/Gacha.html">ガチャ</a>
                            <a class="dropdown-item" href="../Bulletinboard_CSV-var/index.html">掲示板</a>
                            <a class="dropdown-item" href="../tapi/index.html">タピオカ</a>
                            <a class="dropdown-item" href="../gameon/gamemenu.php">RPG</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../picture.html">ふわりん写真集</a>
                    </li>
                </ul>
                <span class="navbar-text"style="color:red">
                    <strong>こちらのサイトは学習サイトです</strong>
                  </span>
            </div>
        </nav>
        <!--row:コンテンツの一列-->
        <div class="row">
            <!--col:画面を縦に12分割して、どの程度範囲を使用するか-->
            <div class="col-12">

			<div id="content">
<div id="input">
<h1>一言掲示板</h1>
<p class="comment"><?php print($id);?>さん、こんにちは！
<a href="mypage.php?id=<?php echo $id ?>">マイページ</a>　
<a href="logout.php">ログアウト</a></p>
<form name="form" action="" method="post">
<dl>
<dt class="comment">コメント</dt>
<input type ="text" name="message" maxlength="140" cols="50" rows="1" id="message" >
</dl>
<input type="submit" value="投稿する" onClick='check()'/>
</form>
<dl>
    ※演習問題のため、投稿は反映されません。
</dl>
</div>
<div id="view">
<h1>投稿一覧</h1>
<div id="detail">
 <?php
 //読み込み用にtest.csvを開く
$f=fopen("./hitokoto.csv","r");
//hitokoto.csvを1行ずつ読み込み
while($line=fgetcsv($f)){
if(isset($line[1])){
 ?>
 <dt>
 <p><a href="mypage.php?id=<?php echo $line['id'] ?>">
 <img src="./image/icon<?php echo $line[0] ?>.png" 
  width="75" height="75" id='img' align="left" ></a><strong>
  <?php echo htmlspecialchars($line[1],ENT_QUOTES,'UTF-8');?>さん 
  <?php echo htmlspecialchars($line[3],ENT_QUOTES,'UTF-8');?> </strong>
 <br><br><?php echo htmlspecialchars($line[2],ENT_QUOTES,'UTF-8');?></p>
 </dt>
 <?php 
 if($_SESSION['id']==$line[1]){
 ?>

 <?php 
 }
	}
 }
 //hitokoto.csvを閉じる
fclose($f);?>
</div>
</div>
</div>
</div>
</div>
<script type="text/javascript" src="../js/jquery-3.5.1.js"></script>
    <script type="text/javascript" src="../js/bootstrap.bundle.js"></script>
</body>
</html>
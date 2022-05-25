<?php

	date_default_timezone_set('Asia/Tokyo');
	session_start();

	//ログインユーザ情報を取得
	$id = $_GET['id'];

	//ログインしていない場合はログインページに飛ばす
	if($id == ''){
		header("HTTP/1.1 301 Moved Permanently");
		header("Location: login.php");
		exit(0);
	}else{
	//csv読み込み
	//そのユーザのパスワードと電話番号の行を抽出
		$f = fopen("User.csv", "r");
		while($line = fgetcsv($f)){
			if(isset($line[2])){
			if($line[2]===$id){
			$tel = $line[4];
			$birth = $line[3];
			$comment = $line[5];
			$num = $line[0];
			}
		}
		}
}
fclose($f);?>
<?php
header('Content-Type: text/html; charset=UTF-8');
?>

<html>
<head>
	<meta charset="utf8">
	<link rel="stylesheet" href="css/default.css" type="text/css">
	<link rel="stylesheet" href="../css/bootstrap.css" type="text/css">
	<script src="script/jquery-3.1.0.min.js"></script>
	<title>掲示板</title>
</head>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="css/bootstrap.css">
<!--ナビゲーションバーの重なりを回避するため上部にpaddingを設定-->
<body style="padding-top: 56px;">
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
                    <a class="navbar-brand" href="#">
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
                            <a class="dropdown-item" href="../sampleq/sample_slot.php">スロット</a>
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

			<div id="content"style="height:1024px">
<div id="mypage">
<h2 style="color:white">マイページ</h2>
<p class="comment"><a href="hitokoto.php">←戻る</a>
　　　　　   　　　　　　　　　　　　　　　　　　<a href="logout.php">ログアウト</a></p>
<div id="mypage2">
<p><img src="./image/icon<?php echo ($num)?>.png" width="100" height="100"><br>
<strong><?php print($id);?>さん</strong>
電話番号:<?php print($tel);?><br />
誕生日:<?php print($birth);?><br />
自己紹介:<?php print($comment)?>



</p>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
<script type="text/javascript" src="../js/jquery-3.5.1.js"></script>
    <script type="text/javascript" src="../js/bootstrap.bundle.js"></script>
</body>
</html>
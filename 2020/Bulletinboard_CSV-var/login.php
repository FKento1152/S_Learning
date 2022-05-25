<?php
$errorMessage = "";
if (@$_GET['err'] == '1') {
    $errorMessage = "ＩＤまたはパスワードが違います<br>";
}
?>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="css/default.css" type="text/css">
<link rel="stylesheet" href="../css/bootstrap.css" type="text/css">
<title>ログイン</title>
</head>
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="css/bootstrap.css">
<!--ナビゲーションバーの重なりを回避するため上部にpaddingを設定-->
<body style="padding-top: 56px;">
	<!--コンテンツ-->
	<div class="container-fluid" style="background-color: silver">
		<!--ナビゲーションバー-->
		<nav
			class="navbar fixed-top navbar-expand-lg navbar-dark bg-secondary">
			<!--縮小時ハンバーガーメニューにする-->
			<button class="navbar-toggler" type="button" data-toggle="collapse"
				data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
				aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<!--cllapse:ハンバーガーメニューに含む内容-->
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav mr-auto">
					<a class="navbar-brand" href="../index.html"> <img src="../favicon.ico"
						width="30" height="30" class="d-inline-block align-top" alt="">
						S-learning
					</a>

					<li class="nav-item active"><a class="nav-link"
						href="../index.html">トップページ <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item dropdown"><a class="nav-link dropdown-toggle"
						href="#" id="navbarDropdownMenuLink" role="button"
						data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							演習資料 </a>
						<div class="dropdown-menu"
							aria-labelledby="navbarDropdownMenuLink">
							<a class="dropdown-item" href="../doc/slot.pdf" target="_blank">スロット資料</a>
							<a class="dropdown-item" href="../doc/gacha.pdf" target="_blank">ガチャ資料</a>
							<a class="dropdown-item" href="../doc/hitokoto.pdf"
								target="_blank">掲示板資料</a> <a class="dropdown-item"
								href="../doc/tapi.pdf" target="_blank">タピオカ資料</a> <a
								class="dropdown-item" href="../doc/RPG.pdf" target="_blank">RPG資料</a>
						</div></li>
					<li class="nav-item dropdown"><a class="nav-link dropdown-toggle"
						href="#" id="navbarDropdownMenuLink" role="button"
						data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							演習コンテンツ </a>
						<div class="dropdown-menu"
							aria-labelledby="navbarDropdownMenuLink">
							<a class="dropdown-item" href="../sampleq/sample-slot.php">スロット</a>
							<a class="dropdown-item" href="../gacha/Gacha.html">ガチャ</a> <a
								class="dropdown-item" href="../Bulletinboard_CSV-var/index.html">掲示板</a>
							<a class="dropdown-item" href="../tapi/index.html">タピオカ</a> <a
								class="dropdown-item" href="../gameon/gamemenu.php">RPG</a>
						</div></li>
					<li class="nav-item"><a class="nav-link" href="../picture.html">ふわりん写真集</a>
					</li>
				</ul>
				<span class="navbar-text" style="color: red"> <strong>こちらのサイトは学習サイトです</strong>
				</span>
			</div>
		</nav>
		<!--row:コンテンツの一列-->
		<div class="row">
			<!--col:画面を縦に12分割して、どの程度範囲を使用するか-->
			<div class="col-12">

				<div id="content" style="height: 1024px">
					<div id="input">
						<h1>ログイン</h1>
						<span class="error"><?php echo $errorMessage ?></span>
						<form method="post" action="login_chk.php">
							<table>
								<tr>
									<th>ユーザID:</th>
									<td colspan="2"><input type="text" name="id" size="12"></td>
								</tr>
								<tr>
									<th>パスワード:</th>
									<td><input type="password" name="password" size="20"></td>
									<td><input id="submit_button" type="submit" value="ログイン"></td>
								</tr>
							</table>
						</form>
                    </div>
                    <div id="input">
                        <p>ユーザー名：fuwa3</br>
                        パスワード：masimasi1029</br>
                        でログインをしましょう。</br></p>
                        <p>クリアのためには様々なところを観察し</br>
                        管理者に関する情報を見つける事が鍵となります。</br>
                        クリアまでの手順は<a href="../doc/hitokoto.pdf">こちら</a>で確認することができます。</p>
                    </div>
				</div>
			</div>
		</div>
    </div>
    <script type="text/javascript" src="../js/jquery-3.5.1.js"></script>
    <script type="text/javascript" src="../js/bootstrap.bundle.js"></script>


</body>
</html>

<!DOCUMENT HTML>
<?php
include("loadJson.php");
$current_key = isset($_GET['app']) ? $_GET['app'] : "";
?>
<html lang="ja">
	<head>
		<meta charset="UTF-8">
		<title>S-Learning 2021</title>
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<link  href="./_css/topStyle.css" rel="stylesheet">
		<link  href="./_css/practiceStyle.css" rel="stylesheet">
		<link rel="icon" href="_topImg/favicon.ico">
		<style>
			iframe{
				width: 100%;
				height: 80%;
				border:0;
				margin: 0;
				padding:0;
			}
			main{
				padding: 0
			}
		</style>
	</head>
	<body>
		<header>
			<h1>
				<img src="_topImg/favicon.ico" alt="icon" height="36px">S-Learning 2021
			</h1>
		</header>
		<main>
			<?php
				$iframe = "<iframe src='" . $current_key . "'></iframe>\n";
				echo $iframe;
			?>
			<p>
				<a href="./index.php">2021トップに戻る</a>
			</p>
			<h2>他の演習問題</h2>
			<div class="practiceWorks">
			<?php
				foreach (formatJsonIntoHash() as $key => $data) {
					if ($key == $current_key) { continue; }
					drawJsonData($key, $data);
				};
			?>
			</div>
		</main>
		<footer>
			<a href="/index.html">S-Learning 2020へ</a>
			<a>アンケートはこちら</a>
		</footer>
	</body>
</html>
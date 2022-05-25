<!DOCUMENT HTML>
<?php include("loadJson.php"); ?>
<html lang="ja">
	<head>
		<meta charset="UTF-8">
		<title>S-Learning 2021</title>
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<link  href="./_css/topStyle.css" rel="stylesheet">
		<link  href="./_css/practiceStyle.css" rel="stylesheet">
		<link rel="icon" href="_topImg/favicon.ico">
		<script src="index.js" type="text/javascript"></script>
	</head>
	<body>
		<header>
			<h1>
				<a href="/2021/index.php" style="color: white !important">
					<img src="_topImg/favicon.ico" alt="icon" height="36px"
					> S-Learning 2021
				</a>
			</h1>
		</header>
		<main>
			<img src="./_topImg/topPop.png" alt="top" id="topImage">
			<p id="fuwaPop"></p>
			<h2>演習問題</h2>
			<div class="practiceWorks">
			<?php
				foreach (formatJsonIntoHash() as $key => $data) {
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
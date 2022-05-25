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
			.pdf{
				width: 80%;
				height: 500px;
				margin:auto;
				display: block;
			}
		</style>
	</head>
	<body>
		<header>
			<h1>
				<img src="_topImg/favicon.ico" alt="icon" height="36px">
				S-Learning 2021 for CTF神奈川
			</h1>
		</header>
		<main>
			<?php
				$iframe = "<iframe src='" . $current_key . "'></iframe>\n";
				echo $iframe;
			?>
			<?php
				$pdf_link = "./" . $current_key . "/walkthrough.pdf";
				if (file_exists($pdf_link)){
			?>
			<h2>解説PDF</h2>
			<iframe src="<?= $pdf_link?>" class="pdf">
			<?php
				}
			?>
		</iframe>
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
			<a href="./index.php">トップに戻る</a>
			<a href="https://docs.google.com/forms/d/e/1FAIpQLSeqeAsNCx2iETBFRKZXJlDKD33Oo-ba7LkZxpHiQzO8TC6hPA/viewform?usp=sf_link"
			>アンケートはこちら</a>
		</footer>
	</body>
</html>
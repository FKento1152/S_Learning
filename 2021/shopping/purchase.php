<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>ご注文ありがとうございました！</title>
		<?php include('product.php'); ?>
	</head>
	<body>
		<article>
			<h1>ご注文ありがとうございました！</h1>
			<table id="goods">
				<tr>
					<th>商品名</th>
					<th>値段</th>
					<th>個数</th>
				</tr>
				<?php
				$total = 0;
				foreach($data as $key => $value){
					if (!isset($_POST[$key])) { continue; }
					$price = (int) $_POST[$key];
					if ($price == 0) { continue; }
				?>
				<tr>
					<td>
						<img src="img/<?= $value[1] ?>" alt="<?= $key ?>">
						<?= $value[0] ?>
					</td>
					<td><?= $value[2] ?> 円</td>
					<td><?= $price ?> 個</td>
				</tr>
				<?php 
					$total += $price * $value[2];
					}
				?>
			</table>
			<table style="width:100%">
				<tr>
					<td colspan="2"><h2 style="margin:0">お会計(税別)</h2></td>
					<td><p id="total" style="margin:0"><?= $total ?> 円</p></td>
				</tr>
			</table>
			<p class="credit">
				©2021 S-Learning<br>
				<a href="index.php">トップに戻る</a>
			</p>
		</article>
	</body>
</html>
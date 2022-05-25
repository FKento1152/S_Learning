<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8">
		<title>フリーWi-Fiでも注文できるどこでもお花屋さん！</title>
		<?php include('product.php'); ?>
		<script>
		function doPost(){
			if (
				Object.keys(data).some(function(id){
					const el = document.getElementById(id);
					return el && el.value != 0;
				})
			){
				return true;
			}else{
				alert("一つ以上の商品を注文してください！");
				return false;
			};
		}
		function onChange(){
			const total = document.getElementById('total');
			total.innerText = Object.keys(data).reduce(function(r, id){
				const el = document.getElementById(id);
				return r += el ? (el.value * data[id][2]) : 0;
			}, 0) + " 円";
		}
		</script>
	</head>
	<body>
		<article>
			<h1>フリーWi-Fiでも注文できるどこでもお花屋さん！</h1>
			<form action="purchase.php" method="POST">
				<table id="goods">
					<tr>
						<th>商品名</th>
						<th>値段</th>
						<th>個数</th>
					</tr>
					<?php foreach($data as $key => $value){ ?>
					<tr>
						<td>
							<img src="img/<?= $value[1] ?>" alt="<?= $key ?>">
							<?= $value[0] ?>
						</td>
						<td><?= $value[2] ?> 円</td>
						<td>
							<input type="number" id='<?= $key ?>' name="<?= $key ?>"
							onchange='onChange()' value='0' min='0' max='99'> 個
						</td>
					</tr>
					<?php } ?>
				</table>
				<table style="width:100%">
					<tr>
						<td><h2 style="margin:0">お会計(税別)</h2></td>
						<td rowspan="2">
							<input type="submit" onclick="return doPost()"
							value="注文" style="width:100%;height:2.5em">
						</td>
					</tr>
					<tr>
						<td><p id="total" style="margin:0">0 円</p></td>
					</tr>
				</table>
			</form>
			<p class="credit">©2021 S-Learning</p>
		</article>
	</body>
</html>

<?php
# JSONファイルを取得
function formatJsonIntoHash(){
	$json = file_get_contents("./gameList.json");
	$json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
	return json_decode($json, true);
}

# JSONのデータの一部を描画
function drawJsonData($key, $data){
	$a_tag =	'<a href="practice.php?app=' . $key . '">';
	$star_num = isset($data['rate']) ? $data['rate'] : 0;
	echo "
<table class='practice'>
	<tr>
		<td rowspan='2'>
			<div class='thumbImg'>
				" . $a_tag . 
				"<img src='" . $key . "/thumb.png' alt='thumb'></a>
			</div>
		</td>
		<td>
			<h3>" . $a_tag . $data['name'] . "</a></h3>
			<p class='practiceDesc'>" . $data['desc'] . "</p>
			<p>
				<span>難易度：</span>
				<span class='starNum'>" .
				str_repeat('★', $star_num) . str_repeat('☆', 5 - $star_num) . 
				"</span>
			</p>
		</td>
	</tr>
</table>
";
}
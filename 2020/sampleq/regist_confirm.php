<html>
	<head>
		<title>ユーザ登録確認</title>
		<script type="text/javascript">
		function check(){
			var flg=0;
			if(document.form.id.value == ""){flg=1;}
			else if(document.form.password.value == ""){flg=1;}
			else if(document.form.nickname.value == ""){flg=1;}
			if(flg==1){
				var myParent=document.form.parentNode;
				var textNode = document.createTextNode('入力内容に不備があります。戻って修正してください。');
				document.body.insertBefore(textNode,document.form);
				myParent.removeChild(document.form);
			}else{
			}
		}
		</script>
	</head>
	<body onload="check();">
		<h1>ユーザ確認</h1>
		<form action="regist_complete.php" method="POST" name="form">
			ユーザID:<?php echo $_POST['id']?><input type="hidden" name="id" value=<?php echo $_POST['id']?>><br>
			<input type="hidden" name="password" value=<?php echo $_POST['password']?>>
			ニックネーム:<?php echo $_POST['nickname']?><input type="hidden" name="nickname" value=<?php echo $_POST['nickname']?>><br>
			<input type="submit" value="確認">
		</form><button name="myback" type="button" onclick="history.back()">修正</button>
	</body>
</html>
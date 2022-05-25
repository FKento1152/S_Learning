<html>
	<head>
		<title>ユーザ登録完了</title>
	</head>
	<body>
		<h1>ユーザ完了</h1>
		<form action="regist_complete.php" method="POST" name="form">
			ユーザID:<?php echo $_POST['id']?><input type="hidden" name="id" value=<?php echo $_POST['id']?>><br>
            <input type="hidden" name="password" value=<?php echo $_POST['password']?>>
			ニックネーム:<?php echo $_POST['nickname']?><input type="hidden" name="nickname" value=<?php echo $_POST['nickname']?>><br>
			<input type="submit" value="完了">
		</form>
	</body>
</html>
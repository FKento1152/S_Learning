<html>
	<head>
		<title>ユーザ登録</title>
		<script type="text/javascript">
		function check(){
			var flg=0;
			if(document.form.id.value == ""){flg=1;}
			else if(document.form.password.value == ""){flg=1;}
			else if(document.form.nickname.value == ""){flg=1;}
			
			
			if(flg==1){
				window.alert('入力内容に不備があります');
				return false;
			}else{
				return true;
			}
		}
		</script>
	</head>
	<body>
		<h1>ユーザ登録</h1>
		<form action="regist_confirm.php" method="POST" name="form" onSUbmit="return check();">
			ユーザID:<input type="text" name="id"><br>
			パスワード:<input type="password" name="password"><br>
			ニックネーム:<input type="text" name="nickname"><br>
			<input type="submit" value="確認"><br>
		</form>
	</body>
</html>
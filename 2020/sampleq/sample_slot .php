<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">  
<html style="height: 100%;">  
  <head>  
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">  
    <title>スロット問題</title> 
  </head>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="css/bootstrap.css">
  <body style="padding-top: 56px;height: 100%;">
    <!--コンテンツ-->
    <div class="container-fluid" style="height: 100%; background-color:#333333">
        <!--ナビゲーションバー-->
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-secondary">
            <!--縮小時ハンバーガーメニューにする-->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!--cllapse:ハンバーガーメニューに含む内容-->
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav mr-auto">
                    <a class="navbar-brand" href="#">
                        <img src="../favicon.ico" width="30" height="30" class="d-inline-block align-top" alt="">
                        S-learning
                      </a>
                      
                      <li class="nav-item active">
                        <a class="nav-link" href="../index.html">トップページ <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            演習資料
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="../doc/slot.pdf"target="_blank">スロット資料</a>
<a class="dropdown-item" href="../doc/gacha.pdf"target="_blank">ガチャ資料</a>
                            <a class="dropdown-item" href="../doc/hitokoto.pdf"target="_blank">掲示板資料</a>
                            <a class="dropdown-item" href="../doc/tapi.pdf"target="_blank">タピオカ資料</a>
                            <a class="dropdown-item" href="../doc/RPG.pdf"target="_blank">RPG資料</a>
                        </div>
                    </li>
			<li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            演習コンテンツ
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="../sampleq/sample_slot.php">スロット</a>
				<a class="dropdown-item" href="../gacha/Gacha.html">ガチャ</a>
                            <a class="dropdown-item" href="../Bulletinboard_CSV-var/index.html">掲示板</a>
                            <a class="dropdown-item" href="../tapi/index.html">タピオカ</a>
                            <a class="dropdown-item" href="../gameon/gamemenu.php">RPG</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../picture.html">ふわりん写真集</a>
                    </li>
                </ul>
                <span class="navbar-text"style="color:red">
                    <strong>こちらのサイトは学習サイトです</strong>
                  </span>
            </div>
        </nav> 
  
  <div class ="row">
    <div class="col-12">
    <table align="center">  
    <tr>  
        <td><img src="./slot_images/title.png"></td>  
      </tr>  
    </table>  
    <hr/>     
<?php  
    $buttonName = "スロットをまわす！";  
    for($i=0;$i<9;$i++){  
      $numberArray[$i] = rand(1,9);  
    }  
    ?>  
	

	
	
  <table align="center">  
  
    <tr>  
      <td><?php echo "<img src=./slot_images/" . $numberArray[0] .".png>"?></td>  
      <td><?php echo "<img src=./slot_images/" . $numberArray[1] .".png>"?></td>  
      <td><?php echo "<img src=./slot_images/" . $numberArray[2] .".png>"?></td>
	  <td><?php echo "<img src=./slot_images/" . $numberArray[3] .".png>"?></td> 
	  <td><?php echo "<img src=./slot_images/" . $numberArray[4] .".png>"?></td>
	  <td><?php echo "<img src=./slot_images/" . $numberArray[5] .".png>"?></td>  
      <td><?php echo "<img src=./slot_images/" . $numberArray[6] .".png>"?></td>
	  <td><?php echo "<img src=./slot_images/" . $numberArray[7] .".png>"?></td> 
	  <td><?php echo "<img src=./slot_images/" . $numberArray[8] .".png>"?></td> 
    </tr>
	
	
    <tr>  
      <td colspan="9">  
        <form name="sample" action="sample_slot.php" method="post">  
        <input type="submit" name="submit_btn" value=<?php echo $buttonName;?>>  
        </form>  
      </td>  
    </tr>  
	
    <tr>  
      <td colspan="9">
	<br></br>	  
        <?php  
          if($numberArray[0]==$numberArray[1]
		  && $numberArray[0]==$numberArray[2]
		  && $numberArray[0]==$numberArray[3]
		  && $numberArray[0]==$numberArray[4]
		  && $numberArray[0]==$numberArray[5]
		  && $numberArray[0]==$numberArray[6]
		  && $numberArray[0]==$numberArray[7]
		  && $numberArray[0]==$numberArray[8]){  
            echo '<FONT COLOR="WHITE">FLAG=congratulation!!</FONT>';
          }else{  
            echo "<img src= noclear.png>";  
          }  
        ?>  
      </td>  
    </tr>  
  </table>  
        </div>
        </div>
        </div>
        <script type="text/javascript" src="../js/jquery-3.5.1.js"></script>
    <script type="text/javascript" src="../js/bootstrap.bundle.js"></script>
  </body>  
</html>  
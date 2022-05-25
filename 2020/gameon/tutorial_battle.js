enchant();
 
 var cnt=0;
 var xmlHttpRequest = new XMLHttpRequest();
window.onload = function() {
	var game = new Game(940,640);
	game.preload('play2.png','game1.png','egg.png','i_acg1_1.png',
	             'damege.png','bar4.png','bar5.png','heeru.png','dmg.png','ex.png','exbtn.png',
				 'win.png','lose.png','lose2.png');
	game.fps = 15;
	game.rootScene.backgroundColor = "white";

	game.onload = function() {
	
	var overScene = function() {
            var scene = new Scene();			// 新しいシーンを作る
			scene.backgroundColor = 'rgba(0, 0, 0, 1)';      // シーンの背景色を設定
			var overImage = new Sprite(600, 400);                   // スプライトを作る
            overImage.image = game.assets['lose.png'];     // スタート画像を設定
            overImage.x = 150;                                      // 横位置調整
            overImage.y = 30;
			scene.addChild(overImage); 
            var label = new Label('');   // 新しいラベル(文字)を作る
            scene.addChild(label);                  // シーンにラベルに追加
             scene.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                 $.post( 'ghg.php', 'ghg=lose' )
 
                 //サーバーからの返信を受け取る
                 .done( function(data) { 
				       
                       window.location.href = 'game.php';
					   })
				 
                   
				 
                 //通信エラーの場合
                 .fail( function() {  } )
 
                 //通信が終了した場合
                 
            });
            // この関数内で作ったシーンを呼び出し元に返します(return)
            return scene;
        };
		
	var createTitleScene = function() {
            var scene = new Scene();			// 新しいシーンを作る
			scene.backgroundColor = 'rgb(0, 0, 0)';      // シーンの背景色を設定
			var startImage = new Sprite(700, 400);                   // スプライトを作る
            startImage.image = game.assets['win.png'];     // スタート画像を設定
            startImage.x = 180;                                      // 横位置調整
            startImage.y = 30;
			scene.addChild(startImage); 
            var label = new Label('');   // 新しいラベル(文字)を作る
            scene.addChild(label);                  // シーンにラベルに追加
            scene.addEventListener(Event.TOUCH_START, function(e) { // シーンにタッチイベントを設定
                 $.post( 'ghg.php', 'ghg=win' )
 
                 //サーバーからの返信を受け取る
                 .done( function(data) { 
				       
                       window.location.href = 'game.php';
					   })
				 
                   
				 
                 //通信エラーの場合
                 .fail( function() {  } )
 
                 //通信が終了した場合
                 
            });
            // この関数内で作ったシーンを呼び出し元に返します(return)
            return scene;
        };
	
	
		
	var sky = new Sprite(940,640);
        sky.image = game.assets['game1.png'];
        sky.x = 0;
        sky.y = 0;
        game.rootScene.addChild(sky);
	
		
	var btnSprite = new Sprite(140,130);
        btnSprite.x = 600;
        btnSprite.y = 150;
		btnSprite.image = game.assets['i_acg1_1.png'];
        game.rootScene.addChild(btnSprite);	
		
	var btn2Sprite = new Sprite(140,120);
        btn2Sprite.x = 780;
        btn2Sprite.y = 150;
		btn2Sprite.image = game.assets['heeru.png'];
        game.rootScene.addChild(btn2Sprite);

    var btn3Sprite = new Sprite(130,130);
        btn3Sprite.x = 690;
        btn3Sprite.y = 30;
		btn3Sprite.image = game.assets['exbtn.png'];
        game.rootScene.addChild(btn3Sprite);			

		
    var playerSprite = new Sprite(400,650);
		playerSprite.x = 430;
		playerSprite.y = 200;
		playerSprite.image = game.assets['play2.png'];
		playerSprite.scale(0.3,0.3)
		game.rootScene.addChild(playerSprite);
		
	var tekiSprite = new Sprite(300,270);
		tekiSprite.x = 100;
		tekiSprite.y = 200;
		tekiSprite.image = game.assets['egg.png'];
		tekiSprite.scale(2, 2)
		game.rootScene.addChild(tekiSprite);
	
	var damegeSprite = new Sprite(1,1);
	    damegeSprite.x = 905;
		damegeSprite.y = 500;
		damegeSprite.image = game.assets['dmg.png'];
		game.rootScene.addChild(damegeSprite);
		
	var exSprite = new Sprite(1,1);
	    exSprite.x = 100;
		exSprite.y = 200;
		exSprite.image = game.assets['dmg.png'];
		game.rootScene.addChild(exSprite);
		
	var ex2Sprite = new Sprite(1,1);
	    ex2Sprite.x = 520;
		ex2Sprite.y = 190;
		ex2Sprite.image = game.assets['dmg.png'];
		game.rootScene.addChild(ex2Sprite);
		
	var winSprite = new Sprite(1,1);
	    winSprite.x = 500;
		winSprite.y = 400;
		winSprite.image = game.assets['dmg.png'];
		game.rootScene.addChild(winSprite);
		
    var EXSprite = new Sprite(300,300);
	    EXSprite.x = 520;
		EXSprite.y = 200;
		EXSprite.image = game.assets['ex.png'];
		EXSprite.visible = false;
		EXSprite.scale(0.5, 0.5);
		game.rootScene.addChild(EXSprite);
		
	var loseSprite = new Sprite(1,1);
	    loseSprite.x = 530;
		loseSprite.y = 200;
		loseSprite.image = game.assets['lose2.png'];
		game.rootScene.addChild(winSprite);
		
	
	var bar = new Bar(600, 400);
        bar.image = game.assets['bar5.png'];
        game.rootScene.addChild(bar);
        bar.maxvalue = 100;
        bar.value = bar.maxvalue;
		
	var bar2 = new Bar(60, 10);
        bar2.image = game.assets['bar4.png'];
        game.rootScene.addChild(bar2);
        bar2.maxvalue = 100;
        bar2.value = bar2.maxvalue;
		
	function damege(){if(playerSprite.x == 650){bar.value -= 10;}}
	
	btn3Sprite.addEventListener('touchstart', function() {
		if(playerSprite.x == 430){
		if(cnt >= 3){
		EXSprite.visible = true;
		EXSprite.tl.delay(10).moveTo( 520, 190, 10);
		EXSprite.tl.moveTo( 100, 200, 10);
		EXSprite.tl.moveTo( 520, 200, 10);
		cnt = 0;
		}
		}
    });
        
	btn2Sprite.addEventListener('touchstart', function() {
		if(bar.value < 100){
		if(playerSprite.x == 430){
		bar.value += 10;
		playerSprite.tl.moveTo( 431, 200, 1 );
		tekiSprite.tl.delay(10).moveTo( 140, 200, 1 );
		tekiSprite.tl.moveTo( 100, 200, 1 );
		playerSprite.tl.delay(10).moveTo( 530, 200, 2 );
		playerSprite.tl.delay(10).moveTo( 430, 200, 2 );
		cnt = cnt + 1;
		}}
    });
   
	
	
	btnSprite.addEventListener("touchstart", function(){
		if(playerSprite.x == 430){
            
			playerSprite.tl.moveTo( 330, 200, 1 );
            tekiSprite.tl.moveTo( 50, 200, 1 );
			tekiSprite.tl.moveTo( 100, 200, 1 );
			tekiSprite.tl.moveTo( 50, 200, 1 );
			tekiSprite.tl.moveTo( 100, 200, 1 );
			tekiSprite.tl.moveTo( 50, 200, 1 );
			tekiSprite.tl.moveTo( 100, 200, 1 );
			tekiSprite.tl.delay(15).moveTo( 140, 200, 1 );
			tekiSprite.tl.moveTo( 100, 200, 1 );
			playerSprite.tl.delay(10).moveTo( 431, 200, 2 );
			playerSprite.tl.delay(10).moveTo( 530, 200, 2 );
			playerSprite.tl.delay(10).moveTo( 430, 200, 2 );
			bar2.value -= 20;
			cnt = cnt + 1;
			
			
		}
		 });
		
    
			
       
		playerSprite.addEventListener("enterframe",function(){
		if(bar.value <= 0){
				
				game.pushScene(overScene());
			}else
                
         if(playerSprite.intersect(damegeSprite)) {
         bar.value -= 0.7;
                                                       }
		
		
		 });
		 exSprite.addEventListener("enterframe",function(){
		
         if(exSprite.intersect(EXSprite)) {
            EXSprite.visible = false;
			tekiSprite.tl.moveTo( 50, 200, 1 );
			tekiSprite.tl.delay(10).moveTo( 100, 200, 1 );
			bar2.value -= 50;
            EXSprite.scale(0.5, 0.5);
             if(bar2.value <= 0){
				
				game.pushScene(createTitleScene());
			}			}
		
		 });
		 
		 winSprite.addEventListener("enterframe",function(){
		
         if(winSprite.intersect(playerSprite)) {
         
		    if(bar2.value <= 0){
				
				game.pushScene(createTitleScene());
			}
                                                       }
		
		 });
		 
		 loseSprite.addEventListener("enterframe",function(){
		
         if(loseSprite.intersect(playerSprite)) {
         
		    if(bar.value <= 0){
				
				game.pushScene(createGameoverScene());
			}
                                                       }
		
		 });
		 
	
		 
		 ex2Sprite.addEventListener("enterframe",function(){
		
         if(ex2Sprite.intersect(EXSprite)) {
           EXSprite.scale(2, 2);
                                                       }
		 });
		
        
        
			
		
	
			
	
	}
	game.start();
	window.scrollTo(0, 0);
}
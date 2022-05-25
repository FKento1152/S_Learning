window.onload=function(){

	//変数の定義
	var tapi_cnt=document.getElementById('tapimg');
	var tpcnt=document.getElementById('tpcnt');
	
	var ow=(window.screen.width/2-275)/4,oh=window.screen.height-240,fl_oh=Math.ceil((oh+ow)/ow);
	/*ow:小タピオカ1つの大きさを求める,oh:小タピオカを出現させる行数を求める*/
	
	var cnt_value=0,fl_num=100,fl_cnt=0,fl_end=0,fl_y=0,cnt=4;
	var item1=0,item2=0,item3=0,item4=0,a=0,shnum=0;
	var imuch1=15,imuch2=100,imuch3=1100,imuch4=12000;
	var icps1=1,icps2=8,icps3=20,icps4=47,i_cps=0;
	var gg=5,wp=fl_oh-1;

	//タピオカをクリックしたときに１つタピオカを足す
	tapi_cnt.onclick=function(){
		cnt_value += 1;
		tpcnt.innerHTML=cnt_value;
	};

	//タピオカをクリックしたときに小さくする
	tapi_cnt.onmousedown=function(){
		tapi_cnt.style.width="280px";
		tapi_cnt.style.height="280px";
	};
	//タピオカをクリックしたときに大きくする
	tapi_cnt.onmouseup=function(){
		tapi_cnt.style.width="300px";
		tapi_cnt.style.height="300px";
	};

	//アイテムをクリックしたときの処理
	document.getElementById("item1").onclick = function(){
		if (cnt_value>=imuch1) {
			item1+=1;
			cnt_value-=Math.floor(imuch1);
			i_cps+=icps1;
			imuch1*=1.15;
			document.getElementById('tpcnt').innerHTML=cnt_value;
			document.getElementById("i_num1").innerHTML=item1;
			document.getElementById("i_much1").innerHTML=Math.floor(imuch1);
		};	
	};

	//アイテムをクリックしたときの処理
	document.getElementById("item2").onclick = function(){
		if (cnt_value>=imuch2) {
			item2+=1;
			cnt_value-=Math.floor(imuch2);
			i_cps+=icps2;
			imuch2*=1.15;
			document.getElementById('tpcnt').innerHTML=cnt_value;
			document.getElementById("i_num2").innerHTML=item2;
			document.getElementById("i_much2").innerHTML=Math.floor(imuch2);
		};	
	};

	//アイテムをクリックしたときの処理
	document.getElementById("item3").onclick = function(){
		if (cnt_value>=imuch3) {
			item3+=1;
			cnt_value-=Math.floor(imuch3);
			i_cps+=icps3;
			imuch3*=1.15;
			document.getElementById('tpcnt').innerHTML=cnt_value;
			document.getElementById("i_num3").innerHTML=item3;
			document.getElementById("i_much3").innerHTML=Math.floor(imuch3);
		};	
	};

	//アイテムをクリックしたときの処理
	document.getElementById("item4").onclick = function(){
		if (cnt_value>=imuch4) {
			item4+=1;
			cnt_value-=Math.floor(imuch4);
			i_cps+=icps4;
			imuch4*=1.15;
			document.getElementById('tpcnt').innerHTML=cnt_value;
			document.getElementById("i_num4").innerHTML=item4;
			document.getElementById("i_much4").innerHTML=Math.floor(imuch4);
		};	
	};

	//タピオカループ処理
	var parsecond=function(){
		document.getElementById('i_cps').innerHTML=i_cps;
		if (shnum==0 && i_cps>=50) {
			shower();
		}
	};
	var addPcnt=function(){
		cnt_value+=i_cps;
		document.getElementById('tpcnt').innerHTML=cnt_value;
		if (cnt_value>=fl_num && fl_end==0) {
			fl_cnt+=1;
			fl_num*=3;
			tpflag();
		}
	};
	setInterval(addPcnt,1000);
	setInterval(parsecond,50);
	var ale = function(){
		alert('flag=you are tapioka master');
	};

	//タピオカシャワーの処理 
	function shower(){
		$(document).ready(function () {
			shnum+=1;
	    	//アニメーションスピード
	    	var scrollSpeed = 0.1;
	    	//画像サイズ
	    	var imgWidth = 512;
	    	//画像の初期位置
	    	var posY = 0;
	    	$('.tapioca').css("height","100%");
	    	//ループ処理
	    	setInterval(function(){
	        	//画像のサイズまで移動したら0に戻る。
	        	if (posY >= imgWidth) posY= 0;
	        	//scrollSpeed分移動
	        	posY += scrollSpeed;
	  			$('.tapioca').css("background-position","50% "+posY+"px");
	    	}, 1);
		});
	};

	//タピオカを出現させる処理
	function tpflag(){
		var img = document.createElement('img');
		img.src = './image/maru4.png';
		img.id=fl_cnt;
		document.getElementById('fl_tp').appendChild(img);
		$('#'+fl_cnt).css("width",ow+"px");
		$('#'+fl_cnt).css("height",ow+"px");
		$('#'+fl_cnt).css("position","absolute");
		$('#'+fl_cnt).css("right",gg+"px");
		$('#'+fl_cnt).css("bottom",fl_y+"px");
	    gg+=ow;
	    if (fl_cnt==cnt) {
	    	fl_y+=ow;
	    	gg=5;
	    	cnt+=4;
	    }
	    	if (fl_cnt==wp*4) {fl_end=1;
	    }
		if (fl_end==1) {
			setTimeout(ale,2000);
		}
	};

	//モーダルウィンドウの表示
	function firstscript() {
   		$('.js-modal').fadeIn();
        return false;
	}
	firstscript();

	$(function(){
    $('.js-modal-open').on('click',function(){
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
	});

};

(function(){
	// 初期状態
	window.onload = function(){
		// ポップの設定
		setPop(strFuwaPop[0]);
		setInterval(updatePop, 60);
	}

	let fuwaPopCnt = 0;
	let fuwaPopText = "";
	function setPop(text){
		if (text != fuwaPopText){
			fuwaPopCnt = 0;
			fuwaPopText = text
			const popText = document.getElementById("popText");
			popText.innerText = "";
		}
	}

	function updatePop(){
		if (fuwaPopCnt < fuwaPopText.length){
			const char = fuwaPopText[fuwaPopCnt++];
			const popText = document.getElementById("popText");
			let element
			if (char == "\n"){
				element = document.createElement("br");
			}else{
				element = document.createElement("div");
				element.innerText = char;
				element.className = "popChar";
			}
			popText.append(element);
		}
	}

	const ans = [12477, 12524, 12452, 12518, 12398, 19992];
	function judgeAnswer(text){
		const ansStr = ans.map(num=>String.fromCharCode(num)).join("");
		const user = String(text).split("").map(chr=>chr.charCodeAt);
		return user.equals(ans);
	}

const strFuwaPop = [
	"わぁ、素敵な場所ですね！　\nここがどこだかわかる？",
	"残念....ちなみに通常プレイでは絶対に７７７７はでない仕様になっています\n裏口を探してみましょう",
	"You got the flag!\nゲームクリアです！",
];
})();

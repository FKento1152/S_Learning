(function(){
const popQue = [
`今日は私のサイトに来てくれてどうもありがとう！@
大人気アイドル兼サイバーセキュリティマイスターの
ふわふわふわりんです！`,
`皆さんにセキュリティの大切さを知ってもらうために
このサイトを設立しました！`,
`このサイトを通じてたくさんの学生さんが
セキュリティに興味を持ってくれたらうれしいです！`,
`注意！　@ここで学習した悪いことは他のサイトには
やらないでくださいね！@　ふわりんとの約束だよ！`,
`それじゃあさっそく演習問題を
下から選んで遊んでみてね！`
];
	const reWaitChar = /\@/g;
	let popLineId = 0;
	let popCnt = 0;
	let waitCnt = 0;
	let timer;
	window.onload = function(){
		const fuwaPop = document.getElementById('fuwaPop');
		if (fuwaPop) {
			timer = setTimeout(updatePop.bind(this, fuwaPop), 120)
		}
	}

	function updatePop(ele){
		if (timer) clearTimeout(timer);
		if (waitCnt > 0){
			waitCnt--;
		}else{
			const line = popQue[popLineId];
			if(popCnt > line.length+10){ // セリフキューを次に送る
				if (++popLineId == popQue.length){
					return; // セリフキューがなければ終わり
				}else{
					popCnt = 0;
					ele.innerText = "";
				}
			}else{
				const char = line[popCnt++];
				if (char) {
					if (char == "@") {
						waitCnt = 3;
					}else{
						let text = line.slice(0, popCnt);
						if (text.length != line.length) text += "_";
						ele.innerText = text.replace(reWaitChar, "");
					}
				}
			}
		}
		timer = setTimeout(updatePop.bind(this, ele), 90);
	}
})();
(function(){
const SLOT_SIZE = 4;
const SLOT_ANSWER = 7777;
function preloadImages(){
	for (let i = 1; i <= 9; i++){ new Image("img/"+i+".png"); }
	new Image("img/5-1.jpg");
}

function createSlotImage(){
	const parent = document.getElementById("slotImg");
	for (let i = 0; i < SLOT_SIZE; i++){
		let td = document.createElement("td");
		let img = new Image();
		img.src = "img/10.png";
		td.appendChild(img);
		parent.append(td);
	}
}

function getSlotNumber(){
	num = 0;
	const parent = document.getElementById("slotImg").children;
	const re = /img\/(\d+)\.png$/;
	for (let i = 0; i < SLOT_SIZE; i++){
		re.test(parent[i].children[0].src);
		num += (10 ** (SLOT_SIZE - i - 1)) * Math.floor(RegExp.$1 || 0);
	}
	return num;
}

function setSlotImage(number){
	if (typeof number != 'number') {
		number = Math.floor(Math.random() * 7200);
	}
	const parent = document.getElementById("slotImg").children;
	let j = 10 ** SLOT_SIZE;
	for (let i = 0; i < SLOT_SIZE; i++){
		j = Math.floor(j / 10);
		let ans = Math.floor(number / j) % 10;
		parent[i].children[0].src = "img/" + ans + ".png";
	};
}

function rollSlot(button){
	if (button.innerText == strButton[1]){
		button.disabled = true;
	}else{
		button.innerText = strButton[1];
		updateRoll();
	}
}

function updateRoll(){
	const num = getSlotNumber();
	const button = document.getElementById("launchSlot");
	if (button.disabled == true){
		button.innerText = strButton[0];
		button.disabled = false;
		if (num == SLOT_ANSWER){
			gameClear(button);
		}else{
			setPop(strFuwaPop[1]);
		}
		return;
	}
	if (num == SLOT_ANSWER){
		gameClear(button);
	}else{
		setSlotImage();
		setTimeout(updateRoll, 50);
	}
}

function gameClear(button){
	const hints = document.querySelectorAll(".HINT button");
	for (let i = 0; i < hints.length; i++){
		hints[i].disabled = true;
	}

	button.innerText = strButton[2];
	button.disabled = true;
	const body = document.body;
	body.style.transitionDuration = "1s";
	body.style.backgroundImage = "url(img/5-1.jpg)";
	setPop(strFuwaPop[2]);
}

// εζηΆζ
window.onload = function(){
	preloadImages();
	createSlotImage();

	// γγΏγ³θ¨­ε?
	const button = document.getElementById("launchSlot");
	button.innerText = strButton[0];
	button.onclick = rollSlot.bind(this, button);

	// γγ³γγγΏγ³
	const hints = document.querySelectorAll(".HINT button");
	for (let i = 0; i < hints.length; i++){
		hints[i].onclick = showHint.bind(this, i);
	}

	// γγγγ?θ¨­ε?
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

function showHint(i){
	setPop(strFuwaHint[i]);
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

const strButton = [
	"γΉγ­γγγεγ",
	"εζ­’",
	"γ²γΌγ γ―γͺγ’οΌ",
];

const strFuwaPop = [
"γ¬γγ«οΌγ―γΉγ­γγγγγΉγΏγΌγγ§γοΌ\nοΌοΌοΌοΌγη?ζγγ¦γγγ°γγΎγγγοΌ",
"ζ?εΏ΅....γ‘γͺγΏγ«ιεΈΈγγ¬γ€γ§γ―η΅Άε―Ύγ«οΌοΌοΌοΌγ―γ§γͺγδ»ζ§γ«γͺγ£γ¦γγΎγ\nθ£ε£γζ’γγ¦γΏγΎγγγ",
"$FLAG={force_attack}γ―γͺγ’γ§γοΌ",
];

const strFuwaHint = [
"γΉγ­γγγ?η»εγε³γ―γͺγγ―γγ¦γζ€θ¨Ό(Chrome)γγΎγγ―γθͺΏζ»(FireFox)γγζΌγγ¨γγ½γΌγΉγ³γΌγδΈγ?γ©γγ§γγ?η»εγθ‘¨η€Ίγγ¦γγη’Ίθͺγ§γγγοΌ",
"<img src=\"img/ζ°ε­.png\">γ?ζ°ε­γ?ι¨εγγγγ«γ―γͺγγ―γγ¦δ»γ?ζ°ε­γ«ε€γγ¦γΏγγοΌ",
"οΌγ€γ?γͺγΌγ«γ?η»εγγγΉγ¦img\/7.pngγ«γγγ¨....οΌ",
]
})();
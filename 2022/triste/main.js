(function(){
// create
window.onload = function(){
	InputManager.init();
	InputManager.KEY_LIST.forEach(function(key){
		InputManager.setButton(document.getElementById(key + "-button"), key);
	});
	AudioManager.createStaticAudio();
	if (BasePazzle.pazzleImage.width > 1){
		start();
	}else{
		BasePazzle.pazzleImage.onload = start.bind(this);
	}
}

function start(){
	GraphicManager.generatePixiScreen();
	StageManager.whenClear = whenClear.bind(StageManager);
}

// clear
function whenClear(){
	PointManager.requestClearFlag(9);
}

})();

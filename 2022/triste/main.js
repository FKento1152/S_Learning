(function(){
// create
window.onload = function(){
	AudioManager.createStaticAudio();
	GraphicManager.generatePixiScreen();
	StageManager.whenClear = whenClear.bind(StageManager);
}
// clear
function whenClear(){}

})();

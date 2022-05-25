//======================================================
// - Manager
//======================================================
class AudioManager{
	static createStaticAudio(){
		AudioManager.BGMS.concat(AudioManager.SES).map(src => {
			const audio = new Audio(this.formatAudio(src));
			audio.load();
		})
		this._bgm = new Audio();
		this._bgm.loop = true;
		this._bgm.volume = 0.3;
		this._se = new Audio();
		this._se.loop = false;
		this._se.volume = 0.3;
	}
	static formatAudio(src){
		return "./audio/" + src + ".mp3"
	}
	static playBgm(num){
		this._bgm.src = this.formatAudio(AudioManager.BGMS[num]);
		this._bgm.play();
	}
	static playSe(){
		this._se.src = this.formatAudio(AudioManager.SES[num]);
		this._se.play();
	}
};
AudioManager.BGMS = ["1071", "1419"];
AudioManager.SES = ["maodama_sys3", "maodama_sys4", "maodama_sys13"];

class GraphicManager{
	static generatePixiScreen(){
		this.app = new PIXI.Application({
			width: GraphicManager.width,
			height: GraphicManager.height,
			backgroundColor: 0x000000,
		});
		const ele = document.getElementById('app');
		ele.appendChild(this.app.view);
		this.sceneGoto(Scene_Title);
	}
	static sceneGoto(scene){
		if (this.scene && this.scene.terminate){
			this.scene.terminate();
		}
		this.scene = new scene();
		if (this.timer) clearInterval(this.timer);
		this.timer = setInterval(this.update.bind(this), 60);
	}
	static update(){
		if (this.scene && this.scene.update){
			this.scene.update();
		}
		InputManager.update();
	}
}
GraphicManager.width = 800;
GraphicManager.height = 680;

class InputManager{
	static createEvent(){
		this.keyCode = {
			"down":		[98,  40],
			"left":		[100, 37],
			"right":	[102, 39],
			"up":		[104, 38],
			"a":		[9, 13, 32]
		};
		this.keyTriggeredState = [];
		this.keyPressedState = [];
		document.addEventListener('keypress', this.whenPressed.bind(this));
		document.addEventListener('keydown', this.whenDown.bind(this));
		document.addEventListener('keyup', this.whenUp.bind(this));
	}
	static update(){}
	static whenPressed(e){}
	static whenDown(e){}
	static whenUp(e){}
	static isTriggered(){}
	static isPressed(){}
}

//======================================================
// - Scene
//======================================================
class Scene_Base{
	constructor(){
		this.create();
	}
	create(){
		this._sprites = [];
	}
	createSprite(imgPath){
		const sprite = new PIXI.Sprite(
			imgPath ? new PIXI.Texture.from("./img/"+imgPath) : null
		);
		sprite._knsCnt = 0;
		this._sprites.push(sprite);
		GraphicManager.app.stage.addChild(sprite);
		return sprite;
	}
	update(){
	}
	terminate(){
		this._sprites.forEach(sprite => {
			GraphicManager.app.stage.removeChild(sprite);
			sprite.destroy();
		});
		this._sprites.length = 0;
	}
}

class Scene_Title extends Scene_Base{
	create(){
		super.create();
		this.createBackSprite();
		this.createLogoSprite();
		this.createButtons();
	}
	createBackSprite(){
		this.back = this.createSprite("2-2.png");
	}
	createLogoSprite(){
		this.logo = this.createSprite("Title.png");
		this.logo.x = -360;
		this.logo.y = 60;
	}
	createButtons(){
		this.com = new Array(3);
		const comHeight = 48;
		for (let i = 0; i < this.com.length; i++){
			const sp = this.createSprite("command.png");
			sp.x = 40;
			sp.y = 220 + comHeight * i;
			sp.texture.frame = new PIXI.Rectangle(0, comHeight * i, 184, comHeight);
			this.com[i] = sp;
		}
	}
	update(){
		super.update();
		const max = this.knsMaxCnt;
		if (this.logo._knsCnt < max){
			const rate = ++this.logo._knsCnt / max;
			this.logo.x = Math.floor(this.logo.x - this.logo.x * rate);
		}
	}
	get knsMaxCnt(){ return 100; }
}

class Scene_Stage extends Scene_Base{
	create(){
		super.create();
	}
}

//======================================================
// - StageManager
//======================================================
class StageManager{
	// minos
	static setMinos(arr){
		this.minos = arr.map(mino => new StaticPazzle(mino));
	}
	static whenClear(){}
};

//======================================================
// - Object
//======================================================
class StaticPazzle{
	// width, color
	constructor(arr){
		arr
	}
};
class ControlPazzles extends StaticPazzle{
	update(){}
	inputTrigger(){}
	inputRotate(){}
};

StageManager.setMinos([
	[3,
		1,1,0,
		0,1,1,
		0,0,0
	],
	[3,
		0,0,1,
		1,1,1,
		0,0,0
	],
	[2,
		1,1,
		1,1
	],
	[3,
		0,1,1,
		1,1,0,
		0,0,0
	],
	[4,
		1,0,0,0,
		1,0,0,0,
		1,0,0,0,
		1,0,0,0
	],
	[3,
		1,0,0,
		1,1,1,
		0,0,0
	],
	[3,
		0,1,0,
		1,1,1,
		0,0,0
	]
]);

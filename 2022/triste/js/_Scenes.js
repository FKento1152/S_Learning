//======================================================
// - Scene
//======================================================
class Scene_Base{
	constructor(){
		this.create();
	}
	create(){ this._sprites = []; }
	createSprite(imgPath){
		const sprite = new PIXI.Sprite(
			imgPath ? new PIXI.Texture.from("./img/"+imgPath) : null
		);
		sprite._knsCnt = 0;
		this._sprites.push(sprite);
		GraphicManager.app.stage.addChild(sprite);
		return sprite;
	}
	update(){}
	terminate(){
		this._sprites.forEach(sprite => {
			GraphicManager.app.stage.removeChild(sprite);
			if (sprite.texture && sprite.texture.baseTexture){
				sprite.texture.baseTexture.destroy();
			}
			sprite.destroy();
		});
		this._sprites.length = 0;
	}
}

class Scene_Title extends Scene_Base{
	create(){
		super.create();
		this.comIndex = 0;
		this.createBackSprite();
		this.createLogoSprite();
		this.createButtons();
	}
	createBackSprite(){
		this.back = this.createSprite("2-2.png");
		this.back.alpha = 0;
	}
	createLogoSprite(){
		this.logo = this.createSprite("Title.png");
		this.logo.x = -360;
		this.logo.y = 60;
	}
	createButtons(){
		this.commands = new Array(3);
		const comHeight = 48;
		for (let i = 0; i < this.commands.length; i++){
			const sp = this.createSprite("command" + i + ".png");
			sp.x = -320;
			sp.y = 220 + comHeight * i;
			sp._knsCnt = i * -4;
			this.commands[i] = sp;
		}
	}
	update(){
		super.update();
		this.updateBack();
		this.updateLogo();
		this.updateCommands();
		this.updateInput();
	}
	updateBack(){
		this.back.alpha = Math.min(1, this.back.alpha + 0.05);
	}
	updateLogo(){
		let max = this.knsMaxCnt;
		if (this.logo._knsCnt < max){
			const rate = ++this.logo._knsCnt / max;
			this.logo.x = Math.floor(this.logo.x - this.logo.x * rate);
		}
	}
	updateCommands(){
		let max = 50;
		this.commands.forEach((sp, i) => {
			if (sp._knsCnt < 0){
				++sp._knsCnt;
			}else if (sp._knsCnt < max){
				const rate = ++sp._knsCnt / max;
				sp.x = (20 - sp.x * rate) + sp.x;
			}
			if (i == this.comIndex){
				sp.alpha = Math.min(sp.alpha + 0.1, 1);
			}else{
				sp.alpha = Math.max(sp.alpha - 0.1, 0.6);
			}
		});
	}
	updateInput(){
		if (InputManager.isTriggered('ok')){
			AudioManager.playSe(0);
			GraphicManager.sceneGoto(Scene_Stage);
			return;
		}
		let result = false;
		if (InputManager.isTriggered('down')){
			result = true;
			this.comIndex = (this.comIndex + 1) % this.commands.length;
		}else if(InputManager.isTriggered('up')){
			result = true;
			const max = this.commands.length;
			this.comIndex = (this.comIndex - 1 + max) % max;
		}
		if (result === true){
			AudioManager.playSe(1);
			switch (this.comIndex){
				case 0: AudioManager.stopBgm();break;
				case 1: AudioManager.playBgm(0);break;
				case 2: AudioManager.playBgm(1);break;
			}
		}
	}
	get knsMaxCnt(){ return 100; }
}

class Scene_Stage extends Scene_Base{
	create(){
		super.create();
		StageManager.initStage();
		this.createBackSprite();
		this.createPazzleBack();
		this.createHoldItem();
		this.createNextItem();
		this.createCurrentMino();
		this.refresh();
	}
	createBackSprite(){
		this.backSprite = this.createSprite("2-2.png");
	}
	createPazzleBack(){
		this.pazzleBack = this.createSprite('background.png');
		this.pazzleBack.position.set(200, 10);
		this.pazzleBack.alpha = 0;
	}
	createHoldItem(){
		this.holdItemBack = this.createSprite('hold.png');
		this.holdItemBack.position.set(20, 40);
		this.holdItemBack.alpha = 0;
		// a hold mino
		const sp = new PIXI.Sprite();
		sp.position.set(75, 48);
		this.holdItemBack.appendChild(sp);
	}
	createNextItem(){
		this.nextItemBack = this.createSprite('next.png');
		this.nextItemBack.position.set(600, 40);
		this.nextItemBack.alpha = 0;
		// next minos
		for (let i = 0; i < StageManager.nextArray.length; i++){
			const sp = new PIXI.Sprite();
			sp.position.set(75, 48 + 100 * i);
			this.nextItemBack.appendChild(sp);
		}
	}
	createCurrentMino(){
		this.currentMino = this.createSprite();
		this.pazzleBack.addChild(this.currentMino);
	}
	update(){
		if (this.updateFadeIn() == false) StageManager.update();
		this.updateSprites();
	}
	updateFadeIn(){
		const opa = this.pazzleBack._knsCnt, max = 30;
		if (opa < max){
			const rate = ++this.pazzleBack._knsCnt / max;
			this.nextItemBack.alpha = this.holdItemBack.alpha =
			this.pazzleBack.alpha = rate;
			return true;
		}else{
			return false;
		}
	}
	updateSprites(){
		const sMino = StageManager.currentMino;
		if (sMino){
			if (this.currentMino.texture.width == 1){
				sMino.mino.parseMino(this.currentMino);
			}
			const size = sMino.mino.minoWH();
			this.currentMino.x = sMino.x * size +
			this.pazzleBack.x + 20;
			this.currentMino.y = sMino.y * size +
			this.pazzleBack.y;
		}else{
			this.currentMino.texture = null;
		}
	}
	refresh(){
		return;
		this.refreshHold();
		this.refreshNextItems();
	}
	refreshHold(){
		if (this.holdItemMino){
			this.holdItemMino.destroy();
			GraphicManager.app.stage.removeChild(
				this.holdItemMino
			);
		}
		if (StageManager.holdMino){
			let anchor = 0.5;
			this.holdItemMino  = StageManager.holdMino.getSprite();
			this.holdItemMino.anchor.set(anchor, anchor);
			this.holdItemMino.position.set(
				this.holdItemBack.x + 24, this.holdItemBack.y + 24
			);
			GraphicManager.app.stage.addChild(
				this.holdItemMino
			);
		}else{
			this.holdItemMino  = null;
		}
	}
	refreshNextItems(){
		if (this.nextItemMinos){
			this.nextItemMinos.forEach(mino => {
				GraphicManager.app.stage.removeChild(mino);
				mino.destroy();
			});
		}
		let x = this.nextItemBack.x + this.nextItemBack.width / 2;
		let y = this.nextItemBack.y + 48;
		let scale = 0.75;
		let anchor = 0.5;
		this.nextItemMinos = StageManager.nextArray.map(mino=>{
			const sp = mino.getSprite();
			sp.position.set(x, y);
			sp.scale.set(scale, scale);
			sp.anchor.set(anchor);
			y += 96;
			GraphicManager.app.stage.addChild(sp);
			return sp;
		});
	}
}

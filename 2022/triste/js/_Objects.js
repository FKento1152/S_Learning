//======================================================
// - Object
//======================================================
class BasePazzle{
    constructor(){
        this.sx = 0;
        this.size = 0;
    }
    minoWH(){ return 32; }
    getTexture(){ return this.parseMino(); }
    parseMino(){
        const wh = this.minoWH();
        const cvs = document.createElement('canvas');
        cvs.width = cvs.height = this.size * wh;
        const ctx = cvs.getContext('2d');
        for (let y = 0; y < this.size; y++){
            for (let x = 0; x < this.size; x++){
                if (this.area[x][y] == 1){
                    ctx.drawImage(
                        BasePazzle.pazzleImage,
                        this.sx, 0, wh, wh,
                        wh * x, wh * y, wh, wh
                    );
                }
            }
        }
    }
}
BasePazzle.pazzleImage = new Image();
BasePazzle.pazzleImage.src = "./img/pazzle.png";

class StaticPazzle extends BasePazzle{
	// width, color
	constructor(arr, sx){
        super();
        this.sx = sx * this.minoWH();
		this.size = arr[0];
        this.area = new Array(this.size).fill(0).map(
            ()=>new Uint8Array(this.size)
        );
        let i = 0;
        for (let y = 0; y < this.size; y++){
            for (let x = 0; x < this.size; x++){
                this.area[x][y] = arr[++i];
            }
        }
	}
};

class ControlPazzles extends BasePazzle{
    initPos(){
        if (this.mino && this.mino.size % 2 == 1){
            this.x = 5;
        }else{
            this.x = 4;
        }
        this.y = -3;
        this.direction = 0;
    }
    setMino(staMino){
        this.mino = staMino;
        this.initPos();
        this.movable = true;
    }
	update(){
        if (this.movable === false){
            return;
        }
        if (!this.inputRotate()){
            this.inputTrigger();
        }
    }
	inputRotate(){
		if (InputManager.isTriggered('ok')){
            this.setDirection((this.direction + 1) % 4);
			AudioManager.playSe(1);
            return;
			let str = "";
			StageManager.stageTable.forEach(xline=>
				str += (xline).join("").replace(
					/0/g, "□"
				).replace(/1/g, "■") + "\n"
			);
			console.log(str);
        }
    }
    setDirection(){}
	inputTrigger(){
        if (InputManager.isPressed('left')){
            this.x -= 1;
        }else if (InputManager.isPressed('right')){
            this.x += 1;
        }else if (InputManager.isPressed('up')){
			AudioManager.playSe(2);
            this.y -= 1;
        }else if (InputManager.isPressed('down')){
            this.y += 1;
        }
    }
};


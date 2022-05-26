//======================================================
// - InputManager
//======================================================
class InputManager{
    static KEY_LIST = ["ok", "down", "left", "right", "up"];
    static init(){
        this.codeLogger = {};
        this.KEY_LIST.forEach(function(code) {
            this.codeLogger[code] = 0;
        }, this);
        window.onkeydown = function(ev){
            const code = this.parseCode(ev.code);
            if (code){
                this.codeLogger[code] = this.codeLogger[code] == 0 ? 1 : 2;
                ev.preventDefault();
                return false;
            }
        }.bind(this);
        window.onkeyup = function(ev){
            const code = this.parseCode(ev.code);
            if (code){
                this.codeLogger[code] = 0;
                ev.preventDefault();
                return false;
            }
        }.bind(this);
    }
    static setButton(tdr, code){
        tdr.onmousedown = tdr.ontouchstart = function(ev){
            this.codeLogger[code] = this.codeLogger[code] == 0 ? 1 : 2;
        }.bind(this);
        tdr.onmouseup = tdr.onmouseleave = tdr.ontouchend = function(ev){
            this.codeLogger[code] = 0;
        }.bind(this);
    }
    static parseCode(code){
        switch (code){
            case "Enter":
            case "Space":
            case "KeyZ":
                return this.KEY_LIST[0];
            case "ArrowDown":
            case "Numpad2":
                return this.KEY_LIST[1];
            case "ArrowLeft":
            case "Numpad4":
                return this.KEY_LIST[2];
            case "ArrowRight":
            case "Numpad6":
                return this.KEY_LIST[3];
            case "ArrowUp":
            case "Numpad8":
                return this.KEY_LIST[4];
            /*
            case "Backspace":
            case "Escape":
            case "KeyX":
                return this.KEY_LIST[5];
            */
            default:
                return null;
        }
    }
    static isTriggered(code) {
        if (this.codeLogger[code] == 1){
            this.codeLogger[code] = 2;
            return true;
        }
        return false;
    }
    static isPressed(code) {
        return this.codeLogger[code] >= 1;
    }
    static update(){
    }
}

//======================================================
// - AudioManager
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
	static stopBgm(){
		this._bgm.pause();
		this._bgm.currentTime = 0;
	}
	static playSe(num){
		this._se.src = this.formatAudio(AudioManager.SES[num]);
		this._se.play();
	}
};
AudioManager.BGMS = ["1071", "1419"];
AudioManager.SES = ["maodama_sys3", "maodama_sys4", "maodama_sys13"];

//======================================================
// - GraphicManager
//======================================================
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
		this.timer = setInterval(this.update.bind(this), 30);
	}
	static sceneGoto(scene){
		if (this.scene && this.scene.terminate){
			this.scene.terminate();
		}
		this.scene = new scene();
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

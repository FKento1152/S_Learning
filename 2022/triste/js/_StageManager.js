//======================================================
// - StageManager
//======================================================
class StageManager{
	// minos
	static setMinos(arr){
		this.minos = arr.map((mino, i) => new StaticPazzle(mino, i));
	}
	static getRandomMino(){
		return this.minos[Math.floor(this.minos.length * Math.random())];
	}
	static initStage(){
		this.stageTable = new Array(20).fill(0).
		map(()=> new Uint8Array(10));
		this.holdMino = null;
		this.nextArray = new Array(3).fill(0).map(
			()=>this.getRandomMino()
		);
		this.currentMino = new ControlPazzles();
		this.nextBlock();
	}
	static nextBlock(){
		this.currentMino.setMino(this.nextArray.pop());
		this.nextArray.push(this.getRandomMino());
	}
	static update(){
		this.currentMino.update();
	}
	static whenClear(){}
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

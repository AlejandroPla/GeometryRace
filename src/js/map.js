Map = function(game) { 
	this.map = function (game) {
		this.obstacles = [];
		this.obstacles.push(new Obstacles(game, 'box', {x: 180, y: 90}, 360, 20));
		this.obstacles.push(new Obstacles(game, 'box', {x: 220, y: 120}, 360, 20));

		return this;
	};	
};

Obstacles = function obstacles(game, sprite, position, w, h) {
	Phaser.Sprite.call(this, game, position.x, position.y, sprite);

	this.graphic = sprite;
	this.pos = position;
	this.width = w;
	this.height = h;
	
	this.anchor.setTo(0.5,0.5);
	
	this.game.physics.arcade.enable(this, Phaser.Physics.ARCADE);
	this.body.immovable = true;
};


Obstacles.prototype = Object.create(Phaser.Sprite.prototype);
Obstacles.prototype.constructor = Obstacles;
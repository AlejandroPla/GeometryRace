
// Player
Player = function Player(game, position) {	
	this.keyboard = game.input.keyboard;
    this.health = 100;
    this.currentHealth = 100;
    this.scale.setTo(0.075);
    this.speed = 10;
    this.alive = true;
	
	this.anchor.setTo(0.5, 0.72);
	this.game.physics.arcade.enable(this, Phaser.Physics.ARCADE);
	this.body.collideWorldBounds = true;
	this.body.setSize(290, 290, 0, 280);
}

Player.prototype = Object.create(Character.prototype);
Player.prototype.constructor = Character;

Player.prototype.update = function() {
	this.move();
	
	if (this.currentHealth <= 0) {
        this.alive = false;
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
	}
}

Player.prototype.move = function () {
    if (this.keyboard.isDown(phaser.keyboard.S) || this.keyboard.isDown(phaser.keyboard.DOWN))
    {
        this.body.velocity.y -= this.speed;
        //this.body.velocity.x = 0;        
    }
    if (this.keyboard.isDown(phaser.keyboard.W) || this.keyboard.isDown(phaser.keyboard.UP))
    {
        this.body.velocity.y += this.speed;
        
    }
    if (this.keyboard.isDown(phaser.keyboard.A) || this.keyboard.isDown(phaser.keyboard.LEFT))
    {
        this.body.velocity.x -= this.speed;
    }
    if (this.keyboard.isDown(phaser.keyboard.D) || this.keyboard.isDown(phaser.keyboard.RIGHT))
    {
        this.body.velocity.x += this.speed;
    }
    else {
        //default
    }

};

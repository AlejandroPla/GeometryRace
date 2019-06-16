
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

Player.prototype.update = function() {
	this.move();
	
	if (this.currentHealth <= 0) {
        this.alive = false;
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
	}
}

Player.prototype.move = function () {
    if (this.keyboard.isDown(Phaser.Keyboard.S) || this.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        this.body.velocity.y -= this.speed;
        //this.body.velocity.x = 0;        
    }
    if (this.keyboard.isDown(Phaser.Keyboard.W) || this.keyboard.isDown(Phaser.Keyboard.UP))
    {
        this.body.velocity.y += this.speed;
        
    }
    if (this.keyboard.isDown(Phaser.Keyboard.A) || this.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        this.body.velocity.x -= this.speed;
    }
    if (this.keyboard.isDown(Phaser.Keyboard.D) || this.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        this.body.velocity.x += this.speed;
    }

};

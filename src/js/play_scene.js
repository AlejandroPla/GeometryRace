'use strict';

//var Player = require('./player.js');
//var Maps = require('./map.js');

  var PlayScene = {
  create: function () {
    var logo = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);

    // Jugador
    this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
    this.player.anchor.setTo(0.5, 0.5);
    this.game.add.existing(this.player);
    this.game.physics.arcade.enable([this.player], Phaser.Physics.ARCADE);
    this.player.body.collideWorldBounds = true;
    this.player.body.immovable = true;   
  },
  update: function() {
    //player.update();
  }
};

module.exports = PlayScene;

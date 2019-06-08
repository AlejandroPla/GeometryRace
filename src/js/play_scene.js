'use strict';

//var Player = require('./player.js');
//var Maps = require('./map.js');

  var PlayScene = {
  create: function () {
    var logo = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);

    // Jugador
    /*this.player = new Player(this.game, {x: 120, y: 120});
    this.game.add.existing(this.player);

    // Sonido
    //this.music = this.game.add.audio('GameMusic');
    /*this.music.volume = 1;
    this.music.loop = true;
    this.music.halt();
    this.music.play();*/

    // Para el juego
    /*this.nivel = 0;
    this.score = 0;
    this.map = New Map(this.game);*/
  }
};

module.exports = PlayScene;

'use strict';

var PlayScene = require('./play_scene.js');

var BootScene = {
  preload: function () {
    // load here assets required for the loading screen
    this.game.load.image('preloader_bar', 'images/preloader_bar.png');

    // key events
    this.game.input.keyboard.addKeyCapture(phaser.keyboard.SPACEBAR);
    this.game.input.keyboard.addKeyCapture(phaser.keyboard.UP);
    this.game.input.keyboard.addKeyCapture(phaser.keyboard.DOWN);
    this.game.input.keyboard.addKeyCapture(phaser.keyboard.LEFT);
    this.game.input.keyboard.addKeyCapture(phaser.keyboard.RIGHT);
  },

  create: function () {
    this.game.state.start('preloader');
  }
};


var PreloaderScene = {
  preload: function () {
    this.loadingBar = this.game.add.sprite(0, 240, 'preloader_bar');
    this.loadingBar.anchor.setTo(0, 0.5);
    this.load.setPreloadSprite(this.loadingBar);

    // TODO: load here the assets for the game
    this.game.load.image('logo', 'images/phaser.png');    
  },

  create: function () {
    this.game.add.button(530, 520, 'playButton', this.start, this, 2, 0, 1);
    this.game.add.button(610, 610, 'controlsButton', this.controls, this, 2, 0, 1);
  },
  start: function() {
		this.game.state.start('menu', true, false, 0);
  }
};

var MenuScene = {
  preload: function(){
    // Load assets here
    this.game.load.spritesheet('playButton', 'resources/menus/playButton.png', 260, 80);
		this.game.load.spritesheet('controlsButton', 'resources/menus/controlsButton.png', 181, 60);
  },
  start: function(){
    this.game.state.start('menu');
  }
};


window.onload = function () {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

  game.state.add('boot', BootScene);
  game.state.add('preloader', PreloaderScene);
  game.state.add('menu', MenuScene);
  //game.state.add('controls', ControlsScene);
  game.state.add('play', PlayScene);

  game.state.start('boot');
};

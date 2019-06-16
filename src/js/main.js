'use strict';

window.onload = function () {
	var PlayScene = require('./play_scene.js');
	var config = {
		width: 800,
		height: 680,
		renderer: Phaser.AUTO,
		backgroundColor: '#ffffff',
		parent: 'game',
		transparent: false,
		antialias: false,
		state: this,
    scaleMode: Phaser.ScaleManager.EXACT_FIT
	};
  var game = new Phaser.Game(config);
  
  game.state.add('boot', BootScene);
  game.state.add('preloader', PreloaderScene);
  //game.state.add('controls', ControlsScene);
  game.state.add('play', PlayScene);

  game.state.start('play');
};

var BootScene = {
  preload: function () {
    // load here assets required for the loading screen
    this.game.load.image('preloader_bar', 'images/preloader_bar.png');

    // key events
    this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.SPACEBAR);
    this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.UP);
    this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.DOWN);
    this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.LEFT);
    this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.RIGHT);
  },

  create: function () {
    this.game.state.start('play');
  }
};


var PreloaderScene = {
  preload: function () {
    this.loadingBar = this.game.add.sprite(0, 240, 'preloader_bar');
    this.loadingBar.anchor.setTo(0, 0.5);
    this.load.setPreloadSprite(this.loadingBar);

    // TODO: load here the assets for the game
    this.game.load.image('logo', 'images/phaser.png');  
    this.game.load.image('player', 'resources/characters/player.png');  
  },

  create: function () {
    this.game.add.button(530, 520, 'playButton', this.start, this, 2, 0, 1);
    this.game.add.button(610, 610, 'controlsButton', this.controls, this, 2, 0, 1);
  },
  start: function() {
		this.game.state.start('play', true, false, 0);
  }
};

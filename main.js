var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameDiv');

var spacefield;

var backgroundv;

var mainState = {
  preload:function(){
    game.load.image('starfield' , "assets/starfield.png");
  },

  create:function(){
    spacefield = game.add.tileSprite(0, 0, 800, 600, 'starfield');
    backgroundv = 1;
  },

  update:function(){
    spacefield.tilePosition.y += backgroundv;
  }

}

game.state.add('mainState', mainState);

game.state.start('mainState');

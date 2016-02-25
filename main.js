var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameDiv');

var spacefield;
var backgroundv;
var player;
var cursors;
var shots;
var shotTime = 0;
var shootButton;

var mainState = {
  preload:function(){
    game.load.image('starfield' , "assets/starfield.png");
    game.load.image('player' , "assets/player.png");
  },

  create:function(){
    spacefield = game.add.tileSprite(0, 0, 800, 600, 'starfield');
    backgroundv = 1;

      player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
      player.frame = 0;
      game.physics.enable(player, Phaser.Physics.ARCADE);

      cursors = game.input.keyboard.createCursorKeys();

  },

  update:function(){
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
    spacefield.tilePosition.y += backgroundv;

    if(cursors.left.isDown)
    {
      player.body.velocity.x = -350;
    }
    if(cursors.right.isDown)
    {
      player.body.velocity.x = 350;
    }
    if(cursors.up.isDown)
    {
      player.body.velocity.y = -350;
    }
    if(cursors.down.isDown)
    {
      player.body.velocity.y = 350;
    }

  }

}

game.state.add('mainState', mainState);

game.state.start('mainState');

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameDiv');

var spacefield;
var backgroundv;
var player;
var cursors;
var bullet;
var bulletTime = 0;
var fireButton;

var mainState = {
  preload:function(){
    game.load.image('starfield' , "assets/starfield.png");
    game.load.image('player' , "assets/player.png");
    game.load.image('bullet' , "assets/bullet.png");
  },

  create:function(){
    spacefield = game.add.tileSprite(0, 0, 800, 600, 'starfield');
    backgroundv = 1;

      player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
      player.frame = 0;
      game.physics.enable(player, Phaser.Physics.ARCADE);

      cursors = game.input.keyboard.createCursorKeys();

      bullets = game.add.group();
      bullets.enableBody = true;
      bullets.physicsBodyType = Phaser.Physics.ARCADE;
      bullets.createMultiple(30, 'bullet');
      bullets.setAll('anchor.x', 0);
      bullets.setAll('anchor.y', 1);
      bullets.setAll('outOfBOundsKill', true);
      bullets.setAll('checkWorldBounds', true);

      fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

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


    if(fireButton.isDown)
    {
      fireBullet();
    }

  }

}

function fireBullet(){
  if(game.time.now > bulletTime){
    bullet = bullets.getFirstExists(false);

    if(bullet){
      bullet.reset(player.x,player.y);
      bullet.body.velocity.y = -350;
      bulletTime = game.time.now + 200;
    }
  }
}

game.state.add('mainState', mainState);

game.state.start('mainState');

// Constant values
var BLOCK_WIDTH = 101;
var BLOCK_HEIGHT = 83;
var ROW_COUNT = 8;
var COLUMN_COUNT = 8;
var PLAYER_WIDTH = 101;
var PLAYER_HEIGHT = 101;

var allEnemies = [];
var enemyCount = 1;
var player = null;

/*
    Create enemy entities.
*/
for (var count = enemyCount; count > 0; count--) {
    allEnemies.push(new Enemy(0, 0));
}

/*
    Create player entity
*/
player = new Player("images/char-boy.png");


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

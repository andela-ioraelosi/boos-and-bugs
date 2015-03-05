// Constant values
var BLOCK_WIDTH = 101;
var BLOCK_HEIGHT = 83;
var ROW_COUNT = 8;
var COLUMN_COUNT = 8;
var PLAYER_WIDTH = 101;
var PLAYER_HEIGHT = 101;
var PADDING = BLOCK_HEIGHT / 2;

// Enemies our player must avoid
var Enemy = function(xcoord, ycoord) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    this.x = xcoord;
    this.y = ycoord;

    this.moveCounter = 0;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    var direction = this.chooseDirection()[Math.floor(Math.random() * 2)];

    this.moveCounter += 1;

    if (this.moveCounter % 60 === 0) {
      switch (direction) {
        case 'left':
          this.x -= BLOCK_WIDTH;
          break;
        case 'right':
          this.x += BLOCK_WIDTH;
          break;
        case 'up':
          this.y -= BLOCK_HEIGHT;
          break;
        case 'down':
          this.y += BLOCK_HEIGHT;
          break;
        default:
          break;
      }
    }

    this.moveCounter = this.moveCounter % 60 === 0 ? 0 : this.moveCounter;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(ImageLoader.get(this.sprite), this.x, this.y);
};

Enemy.prototype.chooseDirection = function () {
  // Determine the enemy's position
  var directionPriority = ['left', 'up'];

  var leftWeight = this.x / BLOCK_WIDTH;
  var upWeight = this.y / BLOCK_HEIGHT;

  var xChoice = Math.floor(Math.random() * COLUMN_COUNT);
  directionPriority[0] = xChoice < leftWeight ? 'left' : 'right';

  var yChoice = Math.floor(Math.random() * ROW_COUNT);
  directionPriority[1] = yChoice < upWeight ? 'up' : 'down';

  return directionPriority;
}


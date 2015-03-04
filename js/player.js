// Constant values
var BLOCK_WIDTH = 101;
var BLOCK_HEIGHT = 83;
var ROW_COUNT = 8;
var COLUMN_COUNT = 8;
var PLAYER_WIDTH = 101;
var PLAYER_HEIGHT = 101;
var PADDING = BLOCK_HEIGHT / 2;

var Player = function (playerSprite) {
    this.sprite = playerSprite;
    this.x = (COLUMN_COUNT - 1) * BLOCK_WIDTH;
    this.y = ((ROW_COUNT - 1) * BLOCK_HEIGHT) - BLOCK_HEIGHT / 2;
};

Player.prototype.update = function (dt) {

};

Player.prototype.render = function () {
    ctx.drawImage(ImageLoader.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (direction) {
    console.log(direction);
    var player = this;
    function checkX () {
        return player.x >= 0 && player.x <= (COLUMN_COUNT * BLOCK_WIDTH) - PLAYER_HEIGHT;
    }

    function checkY () {
        return player.y >= -PADDING && player.y <= (ROW_COUNT * BLOCK_HEIGHT) - BLOCK_HEIGHT;
    }

    switch (direction) {
        case 'left':
            this.x = checkX() && this.x !== 0 ? this.x - PLAYER_WIDTH : this.x;
            break;
        case 'right':
            this.x = checkX() && this.x !== (COLUMN_COUNT * BLOCK_WIDTH) - PLAYER_WIDTH ? this.x + PLAYER_WIDTH : this.x;
            break;
        case 'up':
            this.y = checkY() && this.y !== -PADDING ? this.y - BLOCK_HEIGHT : this.y;
            console.log(this.y);
            break;
        case 'down':
            this.y = checkY() && this.y !== (ROW_COUNT * BLOCK_HEIGHT) - BLOCK_HEIGHT - PADDING? this.y + BLOCK_HEIGHT : this.y;
            break;
        default:
            break;
    }
};
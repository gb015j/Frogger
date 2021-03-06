// Enemies our player must avoid
var Enemy = function(row, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    this.y = 60 + (row - 1) * 80;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x > 500) this.x = -100;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 380;
    this.score = 0;

}

// Updates the player and alerts the user if they have scored 10
Player.prototype.update = function() {
    this.x = 200;
    this.y = 380;
    this.score = this.score + 1;
    if (this.score == 10) {
        alert("You have won!!");
        this.score = 0;
    }
}

// Draws the player
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Method that moves the player baced on what arrow key is pressed
Player.prototype.handleInput = function(keyPress) {
    if ( keyPress === 'left' ) {
        if ( this.x > 0 ) {
            this.x = this.x - 100;
        }
    } else if ( keyPress === 'right' ) {
        if ( this.x < 400 ) {
            this.x = this.x + 100;
        }
    } else if ( keyPress === 'up' ) {
        if ( this.y > 0 ) {
            this.y = this.y - 80;
        }
    } else if ( keyPress === 'down') {
        if ( this.y < 380 ) {
            this.y = this.y + 80;
        } 
    }
};
// Resets the player and score
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 380;
    this.score = 0;    
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

for (var i = 0; i < 7; i++) {
    var speed = random(10, 31) * 10;
    var row = random(1, 4);
    allEnemies[i] = new Enemy(row, speed);
}

var player = new Player();

// Returns a random number
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


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

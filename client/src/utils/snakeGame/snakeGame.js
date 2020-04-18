let app;
let player;
let item;
// let canvas = document.querySelector('body')
// let score;
// let scoreDiv;
let keysDiv;
let keys = {};

//When the page loads create teh pixi stage and append it to the page
window.onload = () => {
    app = new PIXI.Application(
        {
            width: 800,
            height: 600,
            background: 0x000000,
        }
    );
    //Appends the PIXI Stage element to the stage
    document.body.appendChild(app.view);   

    //Player Object
    player = new PIXI.Sprite.from("./player.png");
    player.anchor.set(0.5);
    player.x = app.view.width /2;
    player.y = app.view.width /2;

    app.stage.addChild(player);

    //Item Object
    item = new PIXI.Sprite.from("./item.png");
    item.anchor.set(0);
    item.x = Math.floor(Math.random() * app.view.width);
    item.y = Math.floor(Math.random() * app.view.width);

    app.stage.addChild(item);

    //Keyboard Event Handlers
    window.addEventListener("keydown", keysDown);
    window.addEventListener("keyup", keysUp);

    //PIXI ticker for game loop - Start the game 
    app.ticker.add(gameLoop);
    keysDiv = document.querySelector('#keys');
    // scoreDiv = document.querySelector('#scoreBoard');
    score = 0;
}

const gameLoop = () => {
    //Directions on Click
    //Left Arrow
    if (keys["37"]) {
        player.x -= 1;
    }
    //Up Arrow
    if (keys["38"]) {
        player.y -= 1;
    }
    //Right Arrow
    if (keys["39"]) {
        player.x += 1;
    }
    // Down Arrow
    if (keys["40"]) {
        player.y += 1;
    }

    if(rectsIntersect(player, item)) {
        //Add one point to the scoreDiv
        score++;
        //Code that triggers a new item appearing somewhere on the screen
        drawScore(score);
        //Move the Item to a new random position
        setPosition(item);
    }
}

//Collision Event 
const rectsIntersect = (a,b) => {
    let aBox = a.getBounds();
    let bBox = b.getBounds();

    return aBox.x + aBox.width > bBox.x &&
        aBox.x < bBox.width + bBox.x &&
        aBox.y + aBox.height > bBox.y &&
        aBox.y < bBox.y + bBox.height;

}

//Push the score to the scoreDiv
const drawScore = (a) => {
    // scoreDiv.innerHTML(`Score: ${a}`);
    console.log(score);
}

//Set new position of the item
const setPosition = (a) => {
    a.x = Math.floor(Math.random() * app.view.width);
    a.y = Math.floor(Math.random() * app.view.width);
}

//Key Functions
const keysDown = (i) => {
    console.log(i.keyCode);
    keys[i.keyCode] = true;

        app.ticker.add(gameLoop);
};
//Don't know if I will need this - could just have it go the direction that you set it go with the down Key
const keysUp = (i) => {
    //console.log(i.keyCode);
    keys[i.keyCode] = false;
};

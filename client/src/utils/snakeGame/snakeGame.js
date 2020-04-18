let app;
let player;
let item;
let canvas =  document.getElementById('mycanvas');
let scoreDiv = document.querySelector('#currentBoard');
let score = 0;


//When the page loads create teh pixi stage and append it to the page
window.onload = () => {
        app = new PIXI.Application(
            {
                width: 800,
                height: 600,
                background: 0xAAAAAA,
            }
        );
        //Appends the PIXI Stage element to the stage
        document.body.appendChild(app.view);   


        //Create the player & the items the player is after

        //Player Object
        player = new PIXI.Sprite.from("../../public/player.png");
        player.anchor.set(0.5);
        player.x = 0;
        player.y = app.view.width /2;
        app.stage.addChild(player);

        //Item Object
        item = new PIXI.Sprite.from("../../public/item.png");
        item.anchor.set(0.5);
        item.x = Math.floor(Math.random() * app.view.width);
        item.y = Math.floor(Math.random() * app.view.width);
        app.stage.addChild(item);

        //PIXI ticker for game loop - Start the game 
        app.ticker.add(gameLoop);
    }

    const gameLoop = (delta) => {
        //Code to control the character with the arrow keys
            canvas.innerHTML = JSON.stringify(keys);

            //space bar
            if (keys['32']) {
                if(!player.playing) {
                    player.textures = playerSheet.walkRight;
                    player.play();
                }
                player.x += speed;
            } 
            // up arrow
            if (keys['38']) {
                player.y -= 2.5;
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
        scoreDiv.innerHTML(`Score: ${a}`);
    }

    //Set new position of the item
    const setPosition = (a) => {
        a.x = Math.floor(Math.random() * app.view.width);
        a.y = Math.floor(Math.random() * app.view.width);
    }


    //Keyboard Method(event handlers):
    window.addEventListener('keydown', keysDown);
    window.addEventListener('keyup', keysUp);
    window.addEventListener("keyup", swithchContainer);

    function keysDown(i) {
        console.log(i.keyCode);
        keys[i.keyCode] = true;
    
            app.ticker.add(gameLoop);
    };
    //Don't know if I will need this - could just have it go the direction that you set it go with the down Key
    function keysUp(i) {
        //console.log(i.keyCode);
        keys[i.keyCode] = false;
    
    };


//     //Create the screens
//         titleScreen = new PIXI.Container();
//         mainScreen = new PIXI.Container();
//         endScreen = new PIXI.Container();

//         mainScreen.visible = false;
//         endScreen.visible = false;

//         app.state.addChild(titleScreen);
//         app.state.addChild(mainScreen);
//         app.state.addChild(endScreen);

//         // setup title screen
//         let redRect = new PIXI.Graphics();
//         redRect.beginFill(0xFF0000);
//         redRect.drawRect(0,0,app.view.width, app.view.height);
//         titleScreen.addChild(redRect);

//         let titleText = new PIXI.Text("Title Screen");
//         titleText.anchor.set(.5);
//         titleText.x = app.view.width /2;
//         titleText.y = app.view.height /2;
//         titleText.style = new PIXI.TextStyle({
//             fill: 0x00000,
//             fontSize: 40,
//             fontFamily: "Arial",
//             fontStyle: "bold",
//             stroke: 0xFFFFFF,
//             strokeThickness: 3
//         });
//         titleText.addChild(titleText);

//         // setup main screen
//         let greenRect = new PIXI.Graphics();
//         greenRect.beginFill(0xFF0000);
//         greenRect.drawRect(0,0,app.view.width, app.view.height);
//         titleScreen.addChild(greenRect);

//         // setup end screen
//         let blueRect = new PIXI.Graphics();
//         blueRect.beginFill(0xFF0000);
//         blueRect.drawRect(0,0,app.view.width, app.view.height);
//         titleScreen.addChild(blueRect);

//         let endText = new PIXI.Text("Ouch, that looked like it hurt... Score:   Highscore: ");
//         endText.anchor.set(.5);
//         endText.x = app.view.width /2;
//         endText.y = app.view.height /2;
//         endText.style = new PIXI.TextStyle({
//             fill: 0x00000,
//             fontSize: 40,
//             fontFamily: "Arial",
//             fontStyle: "bold",
//             stroke: 0xFFFFFF,
//             strokeThickness: 3
//         });
//         endScreen.addChild(endText);


    function createPlayerSheet() {
        let sheet = new PIXI.BaseTexture.from(app.loader.resources["character"].url);
        w = 26;
        h = 36;

        playerSheet["standRight"] = [
            new PIXI.Texture(sheet, new PIXI.Rectangle(1 * w, 0, w, h))
        ];

        playerSheet["walkRight"] = [
            new PIXI.Texture(sheet, new PIXI.Rectangle(0 *w, 0, w, h)),
            new PIXI.Texture(sheet, new PIXI.Rectangle(1 *w, 0, w, h)),
            new PIXI.Texture(sheet, new PIXI.Rectangle(2 *w, 0, w, h))
        ];
    }


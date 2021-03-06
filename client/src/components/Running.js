import * as PIXI from "pixi.js";
// import * as Spine from "../libs/pixi-spine-master/bin/pixi-spine";
import { CustomPIXIComponent } from "react-pixi-fiber";
import * as Spine from "pixi-spine";

// let app = new Application();

const Running = CustomPIXIComponent(
    {
        customDisplayObject: () => new PIXI.Container(),
        customApplyProps: (
            instance,
            oldProps,
            {
                stopGame,
                setCurrentPlayerY,
                app,
                spineData,
                animation,
                status,
                options: { x = 0, y = 0, scale = 1 } = {}
            }
        ) => {
            if (spineData) {
                let player = null;
                if (spineData !== oldProps.spineData) {
                    instance.removeChildren(0, instance.children.length);
                    player = new Spine(spineData);
                    player.state.setAnimation(0, animation, true);
                    instance.addChild(player);
                } else {
                    player = instance.getChildAt(0);
                }
                player.setData.setMix("running", "jump", 0.2 );
                player.setData.setMix("jump", "running", 0.4);
                player.state.setAnimation(0, "running", true);

                const onTouchStart = () => {
                    player.state.setAnimation(0, "jump", false);
                    player.state.addAnimation(0, "running", true, 0);
                    player.position.y = y - 100;
                    setCurrentPlayerY(player.position.y);
                    setTimeout(() => {
                        player.position.y = y;
                        setCurrentPlayerY(player.position.y);
                    }, 500);
                }

                app.stage.on("pointerdown", onTouchStart);

                if (animation !== oldProps.animation) {
                    player.state.setAnimation(0, animation, true);
                }
          
                if (status=== "before_stop") {
                    app.stage.removeAllListeners();
                    player.state.clearTracks();
                    player.state.addAnimation(0, "running", false, 0);
                    player.state.setAnimation(0, "die", true, 0);
                    setTimeout(() => stopGame(), 800);
                }
        
                player.position.set(x, y);
                player.scale.set(scale);


            }
        }
    },
    "theSpine"
);

export default Running;
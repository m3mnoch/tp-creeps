import Player from "modules/org.decentraland.gamekit/Player";
import Creep from "src/gobs/Creep";
import { GameConfig } from "./GameConfig";

export const gameMount = () => {
    // start up the player tracking so we can synchronously get the player position.
    // i really, really dislike this.  multiplayer, man.  multiplayer.
    const player: Player = new Player("m3mnoch");
    GameConfig.theGame.addPlayerToScene(player);

    // adding our drone to the scene.
    const drone = new Creep("creep-001");
    GameConfig.theGame.addGobToScene(drone);

    // NOTE:  if lots of the objects we've got in the scene are
    // dynamic npc/ai/gob things rather than just scenery and a
    // dynamic thing or two, it'll be more beneficial to drop in
    // a main loop than have a bajillion little loop callbacks.
    //
    const aiLoop = setInterval(() => {
        // ideally, we'd do this according to the
        // game state in the state machine.
        GameConfig.theGame.updateGobs();

        // we can update all the players too.
        // if we need it, that is.

        // push the state changes
        GameConfig.theGame.setState({
            drawFrame: performance.now()
        });
    }, GameConfig.drawFrameMs);
};

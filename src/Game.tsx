import { createElement, ScriptableScene } from "metaverse-api";
import Gob from "modules/org.decentraland.gamekit/Gob";
import Player from "modules/org.decentraland.gamekit/Player";
import { gameMount } from "./GameStartup";
import Ground from "./static/Ground";

export default class Game extends ScriptableScene<any, { tickFrame: number; drawFrame: number }> {
    public state = { tickFrame: 0, drawFrame: 0 };
    private sceneGobs: Gob[] = []; // TODO:  stick these in state and add pool support.
    private scenePlayers: Player[] = [];

    public addGobToScene = (gob: Gob): void => {
        this.sceneGobs.push(gob);
    };

    public addPlayerToScene = (player: Player): void => {
        this.scenePlayers.push(player);
    };

    public deleteGobFromScene = (gob: Gob): void => {
        const index = this.sceneGobs.indexOf(gob);
        if (index !== -1) {
            this.sceneGobs.splice(index, 1);
        }
    };

    public getPlayerFromSceneByName = (playerId: string): Player | null => {
        let returnPlayer: any;
        this.scenePlayers.forEach(function(entity: Player) {
            if (entity.username == playerId) {
                returnPlayer = entity;
            }
        });
        return returnPlayer;
    };

    public getGobFromSceneByName = (gobId: string): Gob | null => {
        let returnGob: any;
        this.sceneGobs.forEach(function(entity: Gob) {
            if (entity.getGobId() == gobId) {
                returnGob = entity;
            }
        });
        return returnGob;
    };

    public deleteGobs() {
        this.sceneGobs.map($ => $.expire());
    }

    public updateGobs() {
        var frameTime: number = performance.now();
        this.sceneGobs.map($ => $.onFrameUpdate(frameTime));
    }

    public renderGobs() {
        return this.sceneGobs.map($ => $.onRender()); // not to be confused with `render()`
    }

    public async sceneDidMount() {
        // handle any startup functions.
        if (gameMount) gameMount();

        this.setState({
            drawFrame: performance.now()
        });

        this.subscribeTo("rotationChanged", e => {
            console.log("player rotation changed", e.rotation);
        });

        this.subscribeTo("positionChanged", e => {
            console.log("player position changed", e.position);
        });
    }

    // TODO:  abstract out the static objects since we don't have a scene.xml yet.
    // TODO:  then, dump this thing into the gamekit module.
    public async render() {
        return (
            <scene>
                {this.renderGobs()}
                <Ground />
            </scene>
        );
    }
}

import { createElement, ISimplifiedNode } from "metaverse-api";
import { log } from "modules/org.decentraland.gamekit/GameLogger";
import Gob from "modules/org.decentraland.gamekit/Gob";
import { GameConfig } from "src/GameConfig";
import TilePath from "src/gobs/TilePath";

// +Z == North
// -Z == South
// +X == East
// -X == West

export default class ResourceSpawn extends Gob {
    private color: string = "#222222";

    constructor(name: string, tX: number, tY: number, dir: string) {
        super(name, "TileSpawn", tX, 1, tY);

        log("spawner", name + " created", this.getGobId(), this.getTemplate());
    }

    public spawnTiles() {
        let tile = new TilePath("path-001", 10.5, 29.499, true, true, false, false);
        GameConfig.theGame.addGobToScene(tile);
    }

    public onGobUpdate(frameTime: number) {
        // just in case there's anything we need to handle
        // when/if we turn on the global update loop.
    }

    onRender(): ISimplifiedNode {
        return (
            <entity>
                <box
                    id={this.getGobId()}
                    position={this.getTranslation()}
                    scale={{ x: 1, y: 2, z: 0.2 }}
                    color={this.color}
                />
            </entity>
        );
    }
}

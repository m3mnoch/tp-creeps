import { createElement, ISimplifiedNode } from "metaverse-api";
import { log } from "modules/org.decentraland.gamekit/GameLogger";
import Gob from "modules/org.decentraland.gamekit/Gob";

export default class TilePath extends Gob {
    private mat: string;

    constructor(name: string, tX: number, tY: number, north: boolean, south: boolean, east: boolean, west: boolean) {
        super(name, "TilePath", tX, 0, tY);

        this.mat = "#path-ns";

        log("tiles", name + " created", this.getGobId(), this.getTemplate());
    }

    public onGobUpdate(frameTime: number) {
        // just in case there's anything we need to
        // handle if we turn on the global update loop.
    }

    onRender(): ISimplifiedNode {
        return (
            <plane
                id={this.getGobId()}
                position={this.getTranslation()}
                scale={{ x: 1, y: 1, z: 1 }}
                rotation={{ x: 90, y: 0, z: 0 }}
                material="#path-ns"
                ignoreCollisions={true}
            />
        );
    }
}

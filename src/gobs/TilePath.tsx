import { createElement, ISimplifiedNode } from "metaverse-api";
import { log } from "modules/org.decentraland.gamekit/GameLogger";
import Gob from "modules/org.decentraland.gamekit/Gob";

const xOffset: number = 0.5;
const zOffset: number = 0.5;

export default class TilePath extends Gob {
    private mat: string;

    constructor(name: string, tX: number, tZ: number, north: boolean, south: boolean, east: boolean, west: boolean) {
        // we need to handle the fact that 0 is out of bounds and needs to be 0.001.
        if (tX == 0) tX = 0.001;
        if (tZ == 29) tZ = 28.999; // WARNING!!  HARD CODED!

        super(name, "TilePath", tX + xOffset, 0.001, tZ + zOffset);

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

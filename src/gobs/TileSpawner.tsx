import { createElement, Vector3Component } from "metaverse-api";
import { log } from "modules/org.decentraland.gamekit/GameLogger";
import Gob from "modules/org.decentraland.gamekit/Gob";
import { vectorSum } from "modules/org.decentraland.gamekit/HelperFunctions";
import { GameConfig } from "src/GameConfig";
import TilePath from "src/gobs/TilePath";

// +Z == North
// -Z == South
// +X == East
// -X == West

const startGatePos: Vector3Component = { x: 10, y: 0, z: 29 };
const startGateOffset: Vector3Component = { x: 0.5, y: 1, z: 0.8 };
const endGatePos: Vector3Component = { x: 20, y: 0, z: 0 };

export default class ResourceSpawn extends Gob {
    private color: string = "#222222";
    private waypoints: Vector3Component[] = [];

    constructor() {
        super(
            "gate",
            "TileSpawn",
            startGatePos.x + startGateOffset.x,
            startGatePos.y + startGateOffset.y,
            startGatePos.z + startGateOffset.z
        );

        log("spawner", "name created", this.getGobId(), this.getTemplate());
    }

    public spawnTiles() {
        // starter tile.
        let tile = new TilePath("path-0", startGatePos.x, startGatePos.z, true, true, false, false);
        GameConfig.theGame.addGobToScene(tile);

        let turnedAway: boolean = false;
        let sidesAreClear: boolean = false;
        let isAnEdge: boolean = false;
        let foundExit: boolean = false;
        let isWayPoint: boolean = false;

        let cardinals: any = { north: false, south: false, east: false, west: false };
        let lastSpot: Vector3Component = startGatePos;
        let nextDirection: Vector3Component = { x: 0, y: 0, z: 0 };
        let potentialSpot: Vector3Component = { x: 0, y: 0, z: 0 }; //vectorSum(startGatePos, { x: 0, y: 0, z: -1 });
        let pathCounter: number = 0;

        while (!foundExit) {
            if (!turnedAway) {
                // either continue, turn towards, or turn away
            } else {
                // we can only turn towards.
                isWayPoint = true;
            }

            // now we have the next direction.
            potentialSpot = vectorSum(lastSpot, nextDirection);

            // the two non-exit sides are both clear
            // next spot exit is not an edge piece

            if (sidesAreClear && !isAnEdge) {
                // found the next tile
                lastSpot = vectorSum(potentialSpot, { x: 0, y: 0, z: 0 }); // not a reference.
                if (isWayPoint) {
                    this.waypoints.push(lastSpot);
                }

                pathCounter++;
                tile = new TilePath(
                    "path-" + pathCounter,
                    startGatePos.x,
                    startGatePos.z,
                    cardinals.north,
                    cardinals.south,
                    cardinals.east,
                    cardinals.west
                );
                GameConfig.theGame.addGobToScene(tile);
            }

            foundExit = true;
        }
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

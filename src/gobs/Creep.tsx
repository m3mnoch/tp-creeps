import { createElement, ISimplifiedNode } from "metaverse-api";
import AnimationHelper from "modules/org.decentraland.gamekit/AnimationHelper";
import { log } from "modules/org.decentraland.gamekit/GameLogger";
import GameStateMachine from "modules/org.decentraland.gamekit/GameStateMachine";
import Gob from "modules/org.decentraland.gamekit/Gob";
import { randomInclusiveInteger } from "modules/org.decentraland.gamekit/HelperFunctions";
import Signal from "modules/org.decentraland.gamekit/Signal";
import { SignalManager } from "modules/org.decentraland.gamekit/SignalManager";
import { GameConfig } from "src/GameConfig";

export enum states {
    IDLE = "creeep-idle",
    RUN = "creep-run"
}

export enum signals {
    ARRIVED = "arrived-destination"
}

export default class Creep extends Gob {
    private gsm: GameStateMachine;
    public anim: AnimationHelper;

    private isLoaded: boolean;

    public creepSpeed: number; // meters per second.

    constructor(name: string) {
        const tX = randomInclusiveInteger(15, 25);
        const tZ = randomInclusiveInteger(15, 25);
        super(name, "creep-one", tX, 0, tZ);

        // ------------------------------------
        // we don't really have a callback
        // so we're faking this.
        this.isLoaded = false;
        const self = this;
        setTimeout(function() {
            self.isLoaded = true;
        }, 1000);
        // ------------------------------------

        this.creepSpeed = 5;

        this.anim = new AnimationHelper(this);
        this.anim.setupClip("hurt-human", true);
        this.anim.setupClip("idle-human", true);
        this.anim.setupClip("death-human", true);
        this.anim.setupClip("run-human", true);
        this.anim.setupClip("jump-human", true);
        this.anim.setupClip("attack-human", true);

        setTimeout(function() {
            self.anim.transitionToClip("run-human", 300);
            self.anim.moveTo({ x: 10.5, y: 0, z: 29 }, self.creepSpeed, new Signal(states.IDLE, signals.ARRIVED));
        }, 3000);
        this.anim.transitionToClip("idle-human", 300);

        // listening for my triggers
        SignalManager.subscribe(signals.ARRIVED, this);

        log("anim", "setting up states");
        this.gsm = new GameStateMachine();

        // this.gsm.add(states.IDLE, new IdlecreepState(this));
        // this.gsm.change(states.IDLE);
    }

    public onSignal(signal: Signal) {
        if (signal.channel == signals.ARRIVED) {
            this.anim.transitionToClip("idle-human", 300);
        }
    }

    public onGobUpdate(frameTime: number) {
        if (!this.isLoaded) return;

        // code is abstracted to the gamestate level
        this.gsm.update(frameTime);

        this.anim.onAnimationUpdate(frameTime);
    }

    // TODO:  pull the animation blending piece out into a behavior thing.
    onRender(): ISimplifiedNode {
        return (
            <entity
                position={this.getTranslation()}
                rotation={this.getRotation()}
                transition={{
                    position: { duration: GameConfig.drawFrameMs },
                    rotation: { duration: GameConfig.drawFrameMs }
                }}
            >
                <gltf-model
                    id={this.getGobId()}
                    src="assets/models/warrior-girl/scene.gltf"
                    skeletalAnimation={this.anim.getAnimationClips()}
                    scale={{ x: 0.8, y: 0.5, z: 0.8 }}
                    rotation={{ x: 0, y: -90, z: 0 }}
                />
                <plane
                    position={{ x: 0, y: 0.002, z: 0 }}
                    rotation={{ x: 90, y: 0, z: 0 }}
                    scale={{ x: 1, y: 1, z: 1 }}
                    material="#shadow"
                    ignoreCollisions={true}
                />
            </entity>
        );
    }
}

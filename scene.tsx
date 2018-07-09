import { WebWorkerTransport } from "metaverse-api";
import Game from "modules/org.decentraland.gamekit/Game";
import { GameConfig } from "src/GameConfig";

GameConfig.theGame = new Game(WebWorkerTransport(self as any));

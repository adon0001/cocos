import { Player } from "./Player";
import { BulletManager } from "./BulletManager";
import { EffectsManager } from "./EffectsManager";

const {ccclass, property} = cc._decorator;
cc.view.enableAntiAlias(false);//关闭抗锯齿
cc.director.getCollisionManager().enabled = true;
// cc.director.getCollisionManager().enabledDebugDraw = true;

/* 游戏主类 */
@ccclass
export class Game extends cc.Component {
    /* 玩家对象 */
    public player:Player = null;
    /* 子弹集合 */
    public bulletManager: BulletManager = null;
    /* 子弹集合 */
    public effectsManager: EffectsManager = null;

    // // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // start () {

    // }

    // update (dt) {}
}

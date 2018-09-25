import { Game } from "./Game";

const {ccclass, property} = cc._decorator;

/* 子弹类 */
@ccclass
export class Bullet extends cc.Component {

    /* 子弹速度 */
    @property(cc.Vec2)
    speed: cc.Vec2 = cc.Vec2.ZERO;
    /* 特效预制体 */
    @property(cc.Prefab)
    effects: cc.Prefab = null;

    /* 游戏主类 */
    private game:Game;
    onLoad () {
        this.game = cc.find('Canvas/GameCanvas').getComponent(Game);
    }
    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // start () {

    // }

    // update (dt) {}
    onCollisionEnter(other:cc.Collider){
        console.log(111);
        if(other.node.group == 'Enemy'){
            // this.node.destroy();
            this.game.bulletManager.remove(this);//回收子弹
            this.game.effectsManager.add(this.effects,this.node.position);
        }
    }
}

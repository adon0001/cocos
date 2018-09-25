import { Game } from "./Game";
import { Bullet } from "./Bullet";
import { Effects } from "./Effects";

const {ccclass, property} = cc._decorator;

/* 特效集合 */
@ccclass
export class EffectsManager extends cc.Component {

    /* 子弹数组 */
    private _effectss: Array<Effects> = [];
    /* 子弹池 */
    private _pool:cc.NodePool = new cc.NodePool('Effets');
    /* 游戏主类 */
    private game:Game;

    onLoad () {
        this.game = cc.find('Canvas/GameCanvas').getComponent(Game);//查找游戏主类
        this.game.effectsManager = this;//将自己赋值给主类
    }
    /* 移除特效 */
    public remove(effects:Effects){
        cc.js.array.remove(this._effectss,effects);//从特效数组移除
        this._pool.put(effects.node);//回收到对象池

    }
    /* 增加特效 */
    public add(prefab:cc.Prefab,position:cc.Vec2){
        var effectsNode = this._pool.get();//从对象池获取
        if(!effectsNode){
            effectsNode = cc.instantiate(prefab);//池内没有则新建
        }
        effectsNode.active = true;//激活
        var effects:Effects = effectsNode.getComponent(Effects);//获取脚本
        this._effectss.push(effects);//添加进数组

        effects.node.position = position;//设置位置

        effects.node.parent = this.node;//设置子弹父
    }
    // start () {

    // }

    // update (dt) {

    // }
}

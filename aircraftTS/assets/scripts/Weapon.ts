import { Game } from "./Game";

const {ccclass, property} = cc._decorator;

/* 武器 */
@ccclass
export class Weapon extends cc.Component {
    /* 子弹预制体 */
    @property(cc.Prefab)
    bullet: cc.Prefab = null;
    /* 发射间隔 */
    @property(cc.Float)
    interval: number = 0.1;

    /* 游戏主类 */
    private game:Game;
    onLoad () {
        this.game = cc.find('Canvas/GameCanvas').getComponent(Game);
    }

    // start () {

    // }

    // update (dt) {}
    /* 当启用 */
    onEnable(){
        this.fire();
        this.schedule(this.fire,this.interval);//循环调度函数
    }
    /* 当禁用 */
    onDisable(){
        this.unschedule(this.fire);//卸载循环调度
    }
    /* 发射 */
    fire(){
        var posi = this.node.position.addSelf(this.node.parent.position);//发射位置
        this.game.bulletManager.add(this.bullet,posi);//增加子弹
        
    }
}

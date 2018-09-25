import { Bullet } from "./Bullet";
import { Game } from "./Game";

const { ccclass, property } = cc._decorator;

/* 子弹集合 */
@ccclass
export class BulletManager extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    /* 子弹数组 */
    private _bullets: Array<Bullet> = [];
    /* 子弹池 */
    private _pool:cc.NodePool = new cc.NodePool('Bullet');
    /* 游戏主类 */
    private game:Game;

    onLoad () {
        this.game = cc.find('Canvas/GameCanvas').getComponent(Game);//查找游戏主类
        this.game.bulletManager = this;//将自己赋值给主类
    }
    /* 移除子弹 */
    public remove(bullet:Bullet){
        cc.js.array.remove(this._bullets,bullet);//从子弹数组移除
        this._pool.put(bullet.node);//回收到对象池

    }
    /* 增加子弹 */
    public add(prefab:cc.Prefab,position:cc.Vec2){
        var bulletNode = this._pool.get();//从对象池获取子弹节点
        if(!bulletNode){
            bulletNode = cc.instantiate(prefab);//池内没有则新建子弹节点
        }
        bulletNode.active = true;//激活子弹节点
        var bullet:Bullet = bulletNode.getComponent(Bullet);//获取子弹脚本
        this._bullets.push(bullet);//添加进子弹数组

        bullet.node.position = position;//设置子弹位置

        bullet.node.parent = this.node;//设置子弹父
    }
    // start () {

    // }

    update (dt) {
        
        for(var i = 0;i<this._bullets.length;i++){
            var bullet:Bullet = this._bullets[i];
            var pos:cc.Vec2 = bullet.node.position;
            pos.addSelf(bullet.speed.mul(dt));

            var outScreen:boolean = pos.x < 0 || pos.x > this.node.width || pos.y < 0 || pos.y > this.node.height;
            if(outScreen){
                bullet.node.active = false;
                this.remove(bullet);
                continue;
            }
            bullet.node.position = pos;
            // console.log(bullet.node.position);
        }
    }
}

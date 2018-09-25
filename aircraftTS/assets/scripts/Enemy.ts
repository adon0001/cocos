import { Game } from "./Game";
import { Bullet } from "./Bullet";

const {ccclass, property} = cc._decorator;

@ccclass
export class Enemy extends cc.Component {
    /* 速率 */
    @property(Number)
    velocity: number = 5;
    /* 移动角度 */
    @property(Number)
    angle: number = 90;

    /* 游戏主类 */
    private game:Game;
    onLoad () {
        this.game = cc.find('Canvas/GameCanvas').getComponent(Game);
    }
    // onEnable(){
    //     var tracer:Tracer = this.getComponent(Tracer);
    //     if(tracer){
    //         tracer.target = this.game.player.node;
    //     }
    // }

    // start () {

    // }

    update (dt) {
        var speed = this.getDir(this.angle).mul(this.velocity * dt);//速度
        this.node.position = this.node.position.add(speed);//方向加速
    }

    /* 获取方向 */
    getDir(_angle:number){
        var degree_cw = -_angle+90;
        var down = new cc.Vec2(0,-1);
        return down.rotateSelf(degree_cw * Math.PI / 180);
    }
    // onCollisionEnter(other:cc.Collider){
    //     if(other.node.group == 'PlayerBullet'){
    //         this.node.destroy();
    //         this.game.bulletManager.remove(other.node.getComponent(Bullet));//回收子弹
            
    //     }
    // }
}

import { Game } from "./Game";
const { ccclass, property } = cc._decorator;

/* 玩家 */
@ccclass
export class Player extends cc.Component {

    /* 最大速度 */
    @property(Number)
    maxSpeed: number = 0;

    // @property
    // text: string = 'hello';

    /* 游戏画布 */
    private GameCanvas: cc.Node = null;
    /* 位置差 */
    private m_dalte: cc.Vec2 = new cc.Vec2(0, 0);

    /* 游戏主类 */
    private game:Game;
    onLoad() {
        this.game = cc.find('Canvas/GameCanvas').getComponent(Game);
        this.game.player = this;
        this.GameCanvas = this.node.parent;

        this.GameCanvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStar, this);
        this.GameCanvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.GameCanvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
    }
    /* 触摸开始 */
    private onTouchStar(event: cc.Event.EventTouch) {
        // this.node.position = event.getLocation();
    }
    /* 触摸移动 */
    private onTouchMove(event: cc.Event.EventTouch) {
        this.m_dalte = event.getDelta();//获取位置差
        // this.node.position = this.node.position.addSelf(this.m_dalte);//位置向量相加

    }
    /* 触摸结束 */
    private onTouchEnd(event: cc.Event.EventTouch) {
        this.node.position = this.node.position;
    }
    update(dt:number){
        // console.log(this.m_dalte);
        var distanceSpr = this.m_dalte.magSqr();
        var maxSpeedPerFrame = this.maxSpeed * dt;

        if(distanceSpr > maxSpeedPerFrame * maxSpeedPerFrame)
        {
            this.m_dalte.normalizeSelf();
            this.m_dalte.mulSelf(maxSpeedPerFrame);
        }
        this.node.position = this.node.position.add(this.m_dalte);//向量相加
        this.m_dalte = cc.Vec2.ZERO;
    }


    // update (dt) {}
}

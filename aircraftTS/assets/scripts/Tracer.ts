const {ccclass, property} = cc._decorator;

/* 追踪 */
@ccclass
export class Tracer extends cc.Component {

    /* 目标 */
    @property(cc.Node)
    target: cc.Node = null;
    /* 速率 */
    @property(Number)
    velocity: number = 5;
    /* 角度速率 */
    @property(Number)
    angleVelocity: number = 5;

    // onLoad () {}

    // start () {

    // }

    update (dt) {
        //如果目标存在并启用
        if(this.target && this.target.isValid && this.target.active){
            var targetPos = this.target.convertToNodeSpaceAR(cc.Vec2.ZERO);//目标位置
            var targetPosInLocal = this.node.parent.convertToNodeSpaceAR(targetPos);//目标局部位置
            var selfPos = this.node.position;//自我位置
            var expectedDir = targetPosInLocal.sub(selfPos).normalizeSelf();//预期方向
            var selfDir = this.getDir(this.node);//自我方向
            var isLeft = selfDir.cross(expectedDir) > 0;//是不是左
            if(isLeft){
                this.node.rotation += this.angleVelocity * dt;//左旋转角度
            }
            else{
                this.node.rotation -= this.angleVelocity * dt;
            }

            var speed = this.getDir(this.node).mul(this.velocity * dt);//速度
            this.node.position = selfPos.add(speed);//方向加速
        }
    }
    /* 获取方向 */
    getDir(_node:cc.Node){
        var degree_cw = _node.rotation;
        var degree_ccw = -degree_cw;
        var down = new cc.Vec2(0,-1);
        return down.rotateSelf(degree_ccw * Math.PI / 180);
    }
}

const { ccclass, property } = cc._decorator;

@ccclass
export class GamePlay extends cc.Component {

    @property(cc.Node)
    public hero: cc.Node = null;
    @property(cc.Prefab)
    public buellet: cc.Prefab = null;
    @property(cc.Float)
    private shootTime: number = 0.1;//秒

    private movePoin: cc.Vec2 = new cc.Vec2();
    private isMouseDown: boolean = false;
    private _time: number = 0;

    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
            cc.PhysicsManager.DrawBits.e_pairBit |
            cc.PhysicsManager.DrawBits.e_centerOfMassBit |
            cc.PhysicsManager.DrawBits.e_jointBit |
            cc.PhysicsManager.DrawBits.e_shapeBit
            ;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStartHero, this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoveHero, this)
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEndHero, this)
    }
    private onTouchStartHero(event: cc.Event.EventTouch) {
        this.isMouseDown = true;
    }
    private onTouchMoveHero(event: cc.Event.EventTouch) {
        var previousLocation = event.getPreviousLocation();
        var location = event.getLocation();
        this.movePoin.x = location.x - previousLocation.x;
        this.movePoin.y = location.y - previousLocation.y;
        this.hero.x += this.movePoin.x;
        this.hero.y += this.movePoin.y;
    }
    private onTouchEndHero(event: cc.Event.EventTouch) {
        this.isMouseDown = false;
    }
    update(dt: number) {
        //判断是否左右超出
        if (this.hero.x < 0) {
            this.hero.x = 0;
        }
        else if (this.hero.x > 720) {
            this.hero.x = 720;
        }
        //判断是否上下超出
        if (this.hero.y < 0) {
            this.hero.y = 0;
        }
        else if (this.hero.y > 1280) {
            this.hero.y = 1280;
        }

        if (this.isMouseDown == true) {
            this.shoot(dt);
        }
    }
    private shoot(dt: number) {
        this._time += dt;
        if (this._time >= this.shootTime) {
            //更新下次子弹射击的时间
            this._time = 0;
            // var bulletID: string = '3001';
            // var bulletName: String = "bullet" + ObjectManager.GetBulletUid();
            //从对象池里面创建一颗子弹
            let newBullet = cc.instantiate(this.buellet);
            this.node.addChild(newBullet);
            newBullet.position = this.hero.position;
            // //初始化子弹信息
            // bullet.init(bulletID, bulletName);


            // //对象池中对象死亡时会被隐藏，重新显示
            // bullet.visible = true;
            // //设置子弹发射初始化位置
            // bullet.pos(this.x, this.y - 80);
            // bullet.Shot(bullteMpveSpeed + planeData.GetAtkSpeet() / 100, 0, 0);

            // //添加到子弹层中
            // LayaUISample.BulletLayer.addChild(bullet);
        }
    }
}

const {ccclass, property} = cc._decorator;

@ccclass
export class BaseBullet extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    m_speed:number;
    m_angle:number;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        this.m_speed +=
    }


    public shot(speed:number,angle:number){
        this.m_speed = speed;
        this.m_speed = angle;
        this.node.rotation = angle;
    }
}

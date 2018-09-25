import { Player } from "./role/Player";

const { ccclass, property } = cc._decorator;

@ccclass
export class Game extends cc.Component {

    // 这个属性引用了星星的预制资源
    @property(cc.Prefab)
    private starPrefab: cc.Prefab = null;
    // 星星产生后消失时间的随机范围
    @property(cc.Integer)
    private maxStarDuration = 0;
    @property(cc.Integer)
    private minStarDuration = 0
    // 地面节点，用于确定星星生成的高度
    @property(cc.Node)
    private groundNode: cc.Node = null;
    // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
    @property(cc.Node)
    public playerNode: cc.Node = null;
    // score label 的引用
    @property(cc.Label)
    private scoreLabel: cc.Label = null;
    // 得分音效资源
    @property(cc.AudioClip)
    private scoreAudio: cc.AudioClip = null;

    // 地面节点的Y轴坐标
    private groundY: number;
    // 定时器
    public timer: number;
    // 星星存在的持续时间
    public starDuration: number;
    // 当前分数
    private score: number;


    onLoad() {
        // 获取地平面的 y 轴坐标
        this.groundY = this.groundNode.y + this.groundNode.height / 2;
        // 初始化计时器
        this.timer = 0;
        this.starDuration = 0;
        // 生成一个新的星星
        this.spawnNewStar();
        // 初始化计分
        this.score = 0;
    }
    // 生成一个新的星星
    public spawnNewStar() {
        // // 使用给定的模板在场景中生成一个新节点
        // let newStar = cc.instantiate(this.starPrefab);
        // // 将新增的节点添加到 Canvas 节点下面
        // this.node.addChild(newStar);
        // // 为星星设置一个随机位置
        // newStar.setPosition(this.getNewStarPosition());
        // // 将 Game 组件的实例传入星星组件
        // newStar.getComponent('Star').init(this);
        // // 重置计时器
        // this.starDuration = this.minStarDuration + cc.random0To1() * (this.maxStarDuration - this.minStarDuration);
        // this.timer = 0;
    }
}

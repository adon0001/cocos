// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        clickNote:{
            default: null,
            type:cc.Node,
        },

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        
        this.node.on(cc.Node.EventType.TOUCH_START,this.gamePlay,this);
    },
    square: function (a) {
        // var aa = a+a;
        console.log(a);
    },
    gamePlay: function(){
        var logon = this.isFirstLogin();
        if(logon == true)//判断玩家是否第一次进入游戏
        {
            console.log('新手引导');
        }
        else
        {
            console.log('进入主菜单');
        }
    },
    /** 是否第一次登录 */
    isFirstLogin: function()
    {
        return true;
    },
    // update (dt) {},
});

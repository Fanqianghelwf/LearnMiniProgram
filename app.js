
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //console.log("小程序的初始化")
    //wx.getUserInfo({   微信已经废弃了这个方法
      //success:function(res){
       // console.log(res)
      //}
    //})
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //console.log("界面显示出来")
    console.log(options)
    switch(options.scene){
        case 1001:
        break;
       case 1011:
        break;

    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("小程序关闭的时候执行")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {   
  },
  globalData:{
    age:18,
    nane:'魏敏'
  }
})

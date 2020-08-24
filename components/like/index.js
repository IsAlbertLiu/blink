Component({
  properties: {
    count:{
      type:Number
    },
    like:{
      type:Boolean
    }
  },
  data: {
    yesSrc:'images/like.png',
    noSrc:'images/like@dis.png'
  },
  methods: {
      onLike(){
        let count = this.properties.count // 获取属性 count
        let like = this.properties.like

        like = !like// 先改变 like 的状态
        count = like?count+1:count-1  // 根据 like 的状态改变 count 数
        this.setData({  // 更新数据 使用 this.setData
          count,
          like,
        })

        // behavior 用来标识用户是点赞了还是取消了点赞。在小程序中激活一个事件 triggerEvent,接受三个参数，triggerEvent('',{},{})
        // 字符串中填写的是自定义事件的名称，第二个参数是 JS 对象，通常用来传递我们定义的属性。第三个参数一般情况下是不需要使用的，第三个参数不能自己设置属性
        let behavior = this.data.like?'like':'cancel'
        // 激活自定义事件
        this.triggerEvent('like',{
          behavior:behavior
        },{})
      }
  }
})

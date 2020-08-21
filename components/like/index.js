// pages/components/like/classic.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count:{
      type:Number
    },
    like:{
      type:Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc:'images/like.png',
    noSrc:'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
      onLike(){
        // 获取属性 count
        let count = this.properties.count
        let like = this.properties.like

        // 先改变 like 的状态
        like = !like
        // 根据 like 的状态改变 count 数
        count = like?count+1:count-1
        // 更新数据 使用 this.setData
        this.setData({
          count,
          like,
        })
      }
  }
})

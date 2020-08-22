// pages/components/like/classic.js
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

Component({

  properties: {
    title:String,
    first:Boolean,
    latest:Boolean
  },

  data: {
    leftSrc:'images/triangle@left.png',
    disLeftSrc:'images/triangle.dis@left.png',
    rightSrc:'images/triangle@right.png',
    disRightSrc:'images/triangle.dis@right.png'
  },

  methods: {
    left(event){
      // 如果最新一期没有值的话，事件就被禁用
      if (!this.properties.latest){
        this.triggerEvent('left',{},{})
      }
    },
    right(event){
      if (!this.properties.first){
        this.triggerEvent('right',{},{})
      }
    }
  }
})

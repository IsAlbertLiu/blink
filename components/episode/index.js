// components/episode/index.js
Component({

  properties: {
      index:{
        type:String,
        // observer 函数的意义是，当我们改变了属性的值的时候，微信会主动调用 observer 函数
        // 参数说明：
        observer(newVal, oldVal, changedPath) {
          let val = newVal < 10 ? '0'+newVal : newVal
          this.setData({
            _index:val
          })
        }
      }
  },

  // 如果要对 data 里面的属性进行数据初始化的时候，我们不能直接设置 month: Number。因为在这里的 Numebr 是函数。我们如果需要让 month 的初始值是数值类型 0 的话，直接设置 data: 0 就好了
  // properties 和data 里面定义变量是不能一样的。会进行覆盖代码
  data: {
    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月',
      '十二月'
    ],
    year: 0,
    month: '',
    _index:''
  },

  attached() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()

    this.setData({
      month:this.data.months[month],
      year:year
    })
  },

  methods: {

  }
})

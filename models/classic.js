import {Http} from "../util/http";

class ClassicModel{
  // 获取最新一期的期刊
  static getLatest(sCallBack){
    Http.request({
      url: 'classic/latest',
      // 回调函数
      success:(res)=>{
        sCallBack(res)
        // 存入最新一期期刊的 index
        this._setLatestIndex(res.index)
        // this.
      }
    })
  }

  static getClassic(index,nextOrPrevious,sCallBack){
    // 缓存中寻找 or API 写入到缓存中
    // key 确定 key
    let key = nextOrPrevious=='next'? this._getKey(index+1):this._getKey(index-1)
    let classic = wx.getStorageSync(key)

    // 如果当前数据没有被缓存的话，就先请求数据，然后添加进入缓存系统
    if (!classic){
      Http.request({
        url:'classic/'+index+'/'+nextOrPrevious,
        success:(res)=>{
          // 将当前期刊的 index 设置为 Key 添加进缓存里
          wx.setStorageSync(this._getKey(res.index),res)
          sCallBack(res)
        }
      })
    }else {
      // 如果有缓存的话，就不发送请求，直接调用回调函数
      sCallBack(classic)
    }

  }

  // 判断当前期刊是否是第一期
  static isFirst(index){
    return index==1 ? true:false
  }

//  判断当前期刊是否是最新一期
  static isLatest(index){
    let latestIndex = this._getLatestIndex()
    // 将当前一期的期刊与最新一期的期刊进行对比，判断
    return latestIndex == index?true:false
  }

//  将最新一期的 index 存入缓存
  static _setLatestIndex(index){
    wx.setStorageSync('latestIndex',index)
  }

//  获取最新一期的期刊
  static _getLatestIndex(){
    return wx.getStorageSync('latestIndex')
  }

  // 设置 key
  static _getKey(index){
    const key = 'classic-'+index
    return key
  }

}

export {ClassicModel}

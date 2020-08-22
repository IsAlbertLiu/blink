import {Http} from "../util/http";

class ClassicModel{
  // 获取最新一期的期刊
  static getLatest(sCallBack){
    Http.request({
      url: 'classic/latest',
      // 回调函数
      success:(res)=>{
        sCallBack(res)
        // this.
      }
    })
  }

}

export {ClassicModel}

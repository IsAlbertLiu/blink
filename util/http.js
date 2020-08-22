import {config} from '../config'

const tips = {
  1: '抱歉，出现了一个错误',
  1005:'appkey无效，请前往www.7yue.pro申请',
  3000:'期刊不存在'
}

class Http{

    // static 是设置静态方法，这样就可以通过 Http.request 去使用这个方法
   static request(params){
     // url, data, method
     if(!params.method){
        params.method = 'GET'
     }
    wx.request({
      url:`${config.api_base_url}${params.url}`,
      method:params.method,
      data:params.data,
      // 在这里定义响应头
      header:{
        'content-type':'application/json',
        'appkey':config.appkey
      },
      //
      success(res){
        // 接受响应状态码
        const code = res.statusCode.toString()
        //  判断状态码是否是 2 开头（成功的状态码）
        if (code.startsWith('2')){
          params.success && params.success(res.data)
        } else {
          let error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail(err){
        this._show_error(1)
      }
    })
  }
  _show_error(error_code){
     if (!error_code){
       error_code = 1
     }
     const tip = tips[error_code]
    wx.showToast({
      title:tip?tip:tips[1],
      icon:'none',
      duration:2000
    })
  }

}

export {
  Http
}

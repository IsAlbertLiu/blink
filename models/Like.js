import {Http} from "../util/http";

class LikeModel {
  // 传入参数的意思：1.behavior：是否喜欢 2.artID，点赞对象,例如你想对电影进行点赞，那这个参数就是电影的id号。3.category 点赞类型分为四种：100 电影 200 音乐 300 句子 400 书籍
  static like(behavior,artID,category){
    let url = behavior === 'like'?'like':'like/cancel'
    Http.request({
      url:url,
      // 请求方式为 POST 需要写
      method:'POST',
      // 传递到服务器的数据，定义到data 里面。
      // 这里不需要使用 success 回调函数，因为这里不需要接受数据
      data:{
        art_id:artID,
        type:category
      }
    })
  }
}

export {
  LikeModel
}
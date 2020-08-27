import {ClassicModel} from "../../models/classic";
import {LikeModel} from "../../models/Like";

Page({
  data: {
      classicData:null,
      first:false,
      latest:true,
      likeCount: 0,
      likeStatus: false
  },

  onLoad: function (options) {
      ClassicModel.getLatest(res=>{
        console.log(res)
        this.setData({
          classicData:res
        })
      })
  },

  onLike: function (event) {
    // 参数说明：1.behavior 是否喜欢 2. this.data.classic.id 对应的 ID 编号 3.this.data.classic.type 电影类型
    const behavior = event.detail.behavior
    LikeModel.like(behavior, this.data.classicData.id, this.data.classicData.type)
  },

  next(event){
    this._updateClassic('next')
  },


  previous(event){
    this._updateClassic('previous')
  },

  _updateClassic(nextOrPrevious){
    let index = this.data.classicData.index
    ClassicModel.getClassic(index,nextOrPrevious,(res)=>{
      this._getLikeStatus(res.id, res.type)
      this.setData({
        classicData:res,
        // 更新数据
        first:ClassicModel.isFirst(res.index),
        latest:ClassicModel.isLatest(res.index)
      })
      console.log(res.type)
    })
  },
  _getLikeStatus: function (artID, category) {
    LikeModel.getClassicLikeStatus(artID, category,
        (res) => {
          this.setData({
            likeCount: res.fav_nums,
            likeStatus: res.like_status
          })
        })
  },
  onReady: function () {

  },


  onShow: function () {

  },


  onHide: function () {

  },

  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
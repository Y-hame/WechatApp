// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // 导航处理函数
  navigateTo: function (e) {
    const page = e.currentTarget.dataset.page;
    const routes = {
      'poetry': '/pages/poetry/poetry',
      'game': '/pages/game/game',
      'wordGame': '/pages/wordGame/wordGame'
    };

    if (routes[page]) {
      wx.switchTab({
        url: routes[page],
        success: function () {
          console.log('跳转成功');
        },
        fail: function (error) {
          console.log('跳转失败', error);
          // 如果 switchTab 失败，尝试使用 navigateTo
          wx.navigateTo({
            url: routes[page]
          });
        }
      });
    }
  }
})
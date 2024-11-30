const saveUserProgress = (progress) => {
    wx.setStorageSync('userProgress', progress);
}

const getUserProgress = () => {
    return wx.getStorageSync('userProgress') || { score: 0, level: 1 };
} 
const { poetryDB, poetryUtils } = require('../../data/poetry-db.js');

Page({
    data: {
        poetryList: [],
        currentIndex: 0,
        currentPoetry: {},
        searchKey: '',
        filteredPoetryList: [],
        isFavorite: false,
        audioContext: null
    },

    onLoad: function () {
        // 初始化音频上下文
        this.audioContext = wx.createInnerAudioContext();

        // 加载所有诗词
        const allPoetry = [
            ...poetryDB.tang,
            ...poetryDB.song,
            ...poetryDB.shijing
        ];

        this.setData({
            poetryList: allPoetry,
            filteredPoetryList: allPoetry,
            currentPoetry: allPoetry[0]
        });

        this.checkFavoriteStatus();
    },

    onUnload: function () {
        // 页面卸载时销毁音频上下文
        if (this.audioContext) {
            this.audioContext.destroy();
        }
    },

    // 搜索功能
    onSearchInput: function (e) {
        const searchKey = e.detail.value.trim();
        this.setData({ searchKey });
        this.filterPoetry(searchKey);
    },

    filterPoetry: function (searchKey) {
        if (!searchKey) {
            this.setData({
                filteredPoetryList: this.data.poetryList,
                currentIndex: 0,
                currentPoetry: this.data.poetryList[0]
            });
            return;
        }

        const filteredList = this.data.poetryList.filter(poetry =>
            poetry.title.includes(searchKey) ||
            poetry.author.includes(searchKey) ||
            poetry.content.includes(searchKey)
        );

        this.setData({
            filteredPoetryList: filteredList,
            currentIndex: 0,
            currentPoetry: filteredList.length > 0 ? filteredList[0] : null
        });

        // 更新收藏状态
        this.checkFavoriteStatus();
    },

    // 朗读功能
    playAudio: function () {
        const { currentPoetry } = this.data;
        if (currentPoetry && currentPoetry.audio) {
            this.audioContext.src = currentPoetry.audio;
            this.audioContext.play();
        } else {
            wx.showToast({
                title: '暂无音频',
                icon: 'none'
            });
        }
    },

    // 收藏功能
    toggleFavorite: function () {
        const { currentPoetry, isFavorite } = this.data;
        const favoriteList = wx.getStorageSync('favoritePoetry') || [];

        if (isFavorite) {
            // 取消收藏
            const newList = favoriteList.filter(item => item.title !== currentPoetry.title);
            wx.setStorageSync('favoritePoetry', newList);
        } else {
            // 添加收藏
            favoriteList.push(currentPoetry);
            wx.setStorageSync('favoritePoetry', favoriteList);
        }

        this.setData({ isFavorite: !isFavorite });

        wx.showToast({
            title: isFavorite ? '已取消收藏' : '收藏成功',
            icon: 'success'
        });
    },

    // 检查收藏状态
    checkFavoriteStatus: function () {
        const { currentPoetry } = this.data;
        const favoriteList = wx.getStorageSync('favoritePoetry') || [];
        const isFavorite = favoriteList.some(item => item.title === currentPoetry.title);
        this.setData({ isFavorite });
    },

    // 翻页功能
    prevPoetry: function () {
        let index = this.data.currentIndex;
        if (index > 0) {
            index--;
            this.setData({
                currentIndex: index,
                currentPoetry: this.data.filteredPoetryList[index]
            });
            this.checkFavoriteStatus();
        }
    },

    nextPoetry: function () {
        let index = this.data.currentIndex;
        if (index < this.data.filteredPoetryList.length - 1) {
            index++;
            this.setData({
                currentIndex: index,
                currentPoetry: this.data.filteredPoetryList[index]
            });
            this.checkFavoriteStatus();
        }
    }
}); 
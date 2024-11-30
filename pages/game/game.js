Page({
    data: {
        questions: [
            {
                type: 'fill', // 填空题
                poetry: '床前明月光，疑是地上___。',
                answer: '霜',
                options: ['霜', '光', '香', '凉']
            },
            {
                type: 'choice', // 选择题
                question: '《静夜思》的作者是谁？',
                options: ['李白', '杜甫', '白居易', '王维'],
                answer: 0
            }
        ],
        currentQuestion: 0,
        score: 0
    }
    // 添加游戏逻辑...
}); 
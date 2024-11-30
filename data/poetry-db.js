const poetryDB = {
    // 唐诗
    tang: [
        {
            id: "t001",
            title: "静夜思",
            author: "李白",
            dynasty: "唐",
            content: "床前明月光，疑是地上霜。\n举头望明月，低头思故乡。",
            explanation: "这首诗描写了诗人在月夜思念故乡的情景。诗人运用比喻的手法，将月光比作地上的霜，展现了月光的清冷明亮。",
            tags: ["思乡", "月亮", "夜晚"],
            difficulty: 1,
            notes: [
                { word: "疑是", explanation: "好像是" },
                { word: "霜", explanation: "冷凝在地面上的白色冰晶" }
            ]
        },
        {
            id: "t002",
            title: "春晓",
            author: "孟浩然",
            dynasty: "唐",
            content: "春眠不觉晓，处处闻啼鸟。\n夜来风雨声，花落知多少。",
            explanation: "这首诗描写了一个春天清晨的景象。诗人通过听觉感受描绘了春天特有的生机与韵味。",
            tags: ["春天", "自然", "清晨"],
            difficulty: 1,
            notes: [
                { word: "晓", explanation: "黎明，拂晓" },
                { word: "啼鸟", explanation: "鸣叫的鸟" }
            ]
        },
        {
            id: "t003",
            title: "望庐山瀑布",
            author: "李白",
            dynasty: "唐",
            content: "日照香炉生紫烟，遥看瀑布挂前川。\n飞流直下三千尺，疑是银河落九天。",
            explanation: "这首诗形象地描绘了庐山瀑布的磅礴气势。诗人运用夸张的手法，将瀑布比作银河，展现出瀑布的宏伟壮观。",
            tags: ["山水", "自然", "壮观"],
            difficulty: 2,
            notes: [
                { word: "香炉", explanation: "山名，庐山的一个山峰" },
                { word: "紫烟", explanation: "紫色的烟雾" }
            ]
        },
        {
            id: "t004",
            title: "登高",
            author: "杜甫",
            dynasty: "唐",
            content: "风急天高猿啸哀，渚清沙白鸟飞回。\n无边落木萧萧下，不尽长江滚滚来。",
            explanation: "这首诗描写了诗人登高远望时所见的秋景，表达了对时局的忧虑和对人生的感慨。",
            tags: ["秋天", "登高", "感慨"],
            difficulty: 3,
            notes: [
                { word: "渚", explanation: "水中的小洲" },
                { word: "萧萧", explanation: "形容落叶纷纷下落的样子" }
            ]
        },
        {
            id: "t005",
            title: "峨眉山月歌",
            author: "李白",
            dynasty: "唐",
            content: "峨眉山月半轮秋，影入平羌江水流。\n夜发清溪向三峡，思君不见下渝州。",
            explanation: "这首诗描写了峨眉山的月色和江水，以及诗人在旅途中的思乡之情。",
            tags: ["山水", "思乡", "月亮"],
            difficulty: 2,
            notes: [
                { word: "平羌", explanation: "江名，在四川" },
                { word: "渝州", explanation: "今重庆市" }
            ]
        },
        {
            id: "t006",
            title: "黄鹤楼",
            author: "崔颢",
            dynasty: "唐",
            content: "昔人已乘黄鹤去，此地空余黄鹤楼。\n黄鹤一去不复返，白云千载空悠悠。\n晴川历历汉阳树，芳草萋萋鹦鹉洲。\n日暮乡关何处是，烟波江上使人愁。",
            explanation: "这首诗借景抒情，描写了登临黄鹤楼时的所见所感，表达了对往事的追忆和对人生的感慨。",
            tags: ["山水", "怀古", "感慨"],
            difficulty: 3,
            notes: [
                { word: "历历", explanation: "清晰可见" },
                { word: "萋萋", explanation: "草木茂盛的样子" }
            ]
        },
        {
            id: "t007",
            title: "从军行",
            author: "王昌龄",
            dynasty: "唐",
            content: "青海长云暗雪山，孤城遥望玉门关。\n黄沙百战穿金甲，不破楼兰终不还。",
            explanation: "这首诗描写了边塞将士保家卫国的豪迈气概和坚定决心。",
            tags: ["边塞", "战争", "壮志"],
            difficulty: 2,
            notes: [
                { word: "玉门关", explanation: "古代西北重要关隘" },
                { word: "楼兰", explanation: "古代西域国家名" }
            ]
        },
        {
            id: "t008",
            title: "山居秋暝",
            author: "王维",
            dynasty: "唐",
            content: "空山新雨后，天气晚来秋。\n明月松间照，清泉石上流。\n竹喧归浣女，莲动下渔舟。\n随意春芳歇，王孙自可留。",
            explanation: "这首诗描绘了一幅山村秋日傍晚的清新淡雅的图画，展现了诗人悠然自得的隐居生活。",
            tags: ["田园", "秋天", "隐居"],
            difficulty: 3,
            notes: [
                { word: "浣女", explanation: "在溪边洗衣服的妇女" },
                { word: "王孙", explanation: "指自己，含有自谦之意" }
            ]
        },
        {
            id: "t009",
            title: "咏柳",
            author: "贺知章",
            dynasty: "唐",
            content: "碧玉妆成一树高，万条垂下绿丝绦。\n不知细叶谁裁出，二月春风似剪刀。",
            explanation: "这首诗生动形象地描写了柳树的特点，把柳树比作碧玉装扮的美人，把春风比作剪刀。",
            tags: ["咏物", "春天", "柳树"],
            difficulty: 1,
            notes: [
                { word: "绿丝绦", explanation: "像绿色丝带一样的柳条" },
                { word: "裁出", explanation: "剪裁制成" }
            ]
        },
        {
            id: "t010",
            title: "登幽州台歌",
            author: "陈子昂",
            dynasty: "唐",
            content: "前不见古人，后不见来者。\n念天地之悠悠，独怆然而涕下。",
            explanation: "这首诗抒发了诗人登临古迹时，感叹人生短暂、历史永恒的深沉感慨。",
            tags: ["怀古", "感慨", "人生"],
            difficulty: 2,
            notes: [
                { word: "幽州", explanation: "今北京地区的古称" },
                { word: "怆然", explanation: "悲伤的样子" }
            ]
        }
        // ... 可以继续添加更多唐诗
    ],

    // 宋词
    song: [
        {
            id: "s001",
            title: "江城子·密州出猎",
            author: "苏轼",
            dynasty: "宋",
            content: "老夫聊发少年狂，左牵黄，右擎苍。\n锦帽貂裘，千骑卷平冈。\n为报倾城随太守，亲射虎，看孙郎。\n" +
                "酒酣胸胆尚开张，鬓微霜，又何妨。\n持节云中，何日遣冯唐。\n会挽雕弓如满月，西北望，射天狼。",
            explanation: "这首词抒发了作者壮志未酬的感慨，表现了作者即使年老仍壮心不已的豪迈情怀。",
            tags: ["行猎", "抒怀", "豪放"],
            difficulty: 3,
            notes: [
                { word: "聊发", explanation: "暂且显露" },
                { word: "左牵黄", explanation: "左手牵着黄色的猎狗" },
                { word: "右擎苍", explanation: "右手握着苍鹰" }
            ]
        }
        // ... 可以继续添加更多宋词
    ],

    // 诗经
    shijing: [
        {
            id: "sj001",
            title: "关雎",
            author: "佚名",
            dynasty: "先秦",
            content: "关关雎鸠，在河之洲。\n窈窕淑女，君子好逑。\n" +
                "参差荇菜，左右流之。\n窈窕淑女，寤寐求之。\n" +
                "求之不得，寤寐思服。\n悠哉悠哉，辗转反侧。",
            explanation: "这首诗描写了青年男女的爱情，表达了对理想伴侣的追求。",
            tags: ["爱情", "婚恋", "赞美"],
            difficulty: 4,
            notes: [
                { word: "关关", explanation: "象声词，形容雎鸠的叫声" },
                { word: "雎鸠", explanation: "鱼鹰，一种水鸟" },
                { word: "窈窕", explanation: "形容女子体态美好" }
            ]
        }
        // ... 可以继续添加更多诗经
    ]
};

// 辅助函数
const poetryUtils = {
    // 根据ID获取诗词
    getPoetryById: function (id) {
        const collections = [poetryDB.tang, poetryDB.song, poetryDB.shijing];
        for (let collection of collections) {
            const found = collection.find(p => p.id === id);
            if (found) return found;
        }
        return null;
    },

    // 按主题获取诗词列表
    getPoetryByTheme: function (theme) {
        const ids = poetryDB.themes[theme] || [];
        return ids.map(id => this.getPoetryById(id)).filter(p => p);
    },

    // 按难度获取诗词列表
    getPoetryByDifficulty: function (level) {
        const ids = poetryDB.difficulty[`level${level}`] || [];
        return ids.map(id => this.getPoetryById(id)).filter(p => p);
    },

    // 搜索诗词
    searchPoetry: function (keyword) {
        const collections = [poetryDB.tang, poetryDB.song, poetryDB.shijing];
        const results = [];

        for (let collection of collections) {
            const found = collection.filter(p =>
                p.title.includes(keyword) ||
                p.author.includes(keyword) ||
                p.content.includes(keyword)
            );
            results.push(...found);
        }

        return results;
    }
};

module.exports = {
    poetryDB,
    poetryUtils
}; 
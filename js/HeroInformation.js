//该页面的数据不可轻易修改！！！
//裴孝明模拟原神抽卡网页，不可抄袭，仅可用于学习！邮箱：2017649157@qq.com
var heroInformation = [
    { num: 0, name: "琴", sex: "女", city: "蒙德", starts: 5, element: "风", em: 'wind', arms: "单手剑", e_name: 'q' },
    { num: 1, name: "安柏", sex: "女", city: "蒙德", starts: 4, element: "火", em: 'fire', arms: "弓", e_name: 'ab' },
    { num: 2, name: "丽莎", sex: "女", city: "蒙德", starts: 4, element: "雷", em: 'thunder', arms: "法器", e_name: 'ls' },
    { num: 3, name: "凯亚", sex: "男", city: "蒙德", starts: 4, element: "冰", em: 'ice', arms: "单手剑", e_name: 'ky' },
    { num: 4, name: "芭芭拉", sex: "女", city: "蒙德", starts: 4, element: "水", em: 'water', arms: "法器", e_name: 'bbl' },
    { num: 5, name: "dlk", sex: "男", city: "蒙德", starts: 5, element: "火", em: 'fire', arms: "双手剑", e_name: 'dlk' },
    { num: 6, name: "雷泽", sex: "男", city: "蒙德", starts: 4, element: "雷", em: 'thunder', arms: "双手剑", e_name: 'lz' },
    { num: 7, name: "温迪", sex: "男", city: "蒙德", starts: 5, element: "风", em: 'wind', arms: "弓", e_name: 'wd' },
    { num: 8, name: "可莉", sex: "女", city: "蒙德", starts: 5, element: "火", em: 'fire', arms: "法器", e_name: 'kl' },
    { num: 9, name: "班尼特", sex: "男", city: "蒙德", starts: 4, element: "火", em: 'fire', arms: "单手剑", e_name: 'bnt' },
    { num: 10, name: "诺艾尔", sex: "女", city: "蒙德", starts: 4, element: "岩", em: 'rock', arms: "双手剑", e_name: 'nae' },
    { num: 11, name: "菲谢尔", sex: "女", city: "蒙德", starts: 4, element: "雷", em: 'thunder', arms: "弓", e_name: 'fxe' },
    { num: 12, name: "砂糖", sex: "女", city: "蒙德", starts: 4, element: "风", em: 'wind', arms: "法器", e_name: 'st' },
    { num: 13, name: "莫娜", sex: "女", city: "蒙德", starts: 5, element: "水", em: 'water', arms: "法器", e_name: 'mn' },
    { num: 14, name: "迪奥娜", sex: "女", city: "蒙德", starts: 4, element: "冰", em: 'ice', arms: "弓", e_name: 'dan' },
    { num: 15, name: "阿贝多", sex: "男", city: "蒙德", starts: 5, element: "岩", em: 'rock', arms: "单手剑", e_name: 'abd' },
    { num: 16, name: "罗莎莉亚", sex: "女", city: "蒙德", starts: 4, element: "冰", em: 'ice', arms: "枪", e_name: 'lsly' },
    { num: 17, name: "优菈", sex: "女", city: "蒙德", starts: 5, element: "冰", em: 'ice', arms: "双手剑", e_name: 'yl' },
    { num: 18, name: "埃洛伊", sex: "女", city: "蒙德", starts: 5, element: "冰", em: 'ice', arms: "弓", e_name: 'aly' },
    { num: 19, name: "魈", sex: "男", city: "璃月", starts: 5, element: "风", em: 'wind', arms: "枪", e_name: 'x' },
    { num: 20, name: "北斗", sex: "女", city: "璃月", starts: 4, element: "雷", em: 'thunder', arms: "双手剑", e_name: 'bd' },
    { num: 21, name: "凝光", sex: "女", city: "璃月", starts: 4, element: "岩", em: 'rock', arms: "法器", e_name: 'ng' },
    { num: 22, name: "香菱", sex: "女", city: "璃月", starts: 4, element: "火", em: 'fire', arms: "枪", e_name: 'xl' },
    { num: 23, name: "行秋", sex: "男", city: "璃月", starts: 4, element: "水", em: 'water', arms: "单手剑", e_name: 'xq' },
    { num: 24, name: "重云", sex: "男", city: "璃月", starts: 4, element: "冰", em: 'ice', arms: "双手剑", e_name: 'cy' },
    { num: 25, name: "刻晴", sex: "女", city: "璃月", starts: 5, element: "雷", em: 'thunder', arms: "单手剑", e_name: 'kq' },
    { num: 26, name: "七七", sex: "女", city: "璃月", starts: 5, element: "冰", em: 'ice', arms: "单手剑", e_name: 'qq' },
    { num: 27, name: "达达利亚", sex: "男", city: "璃月", starts: 5, element: "水", em: 'water', arms: "弓", e_name: 'ddly' },
    { num: 28, name: "钟离", sex: "男", city: "璃月", starts: 5, element: "岩", em: 'rock', arms: "枪", e_name: 'zl' },
    { num: 29, name: "辛焱", sex: "女", city: "璃月", starts: 4, element: "火", em: 'fire', arms: "双手剑", e_name: 'xy' },
    { num: 30, name: "甘雨", sex: "女", city: "璃月", starts: 5, element: "冰", em: 'ice', arms: "弓", e_name: 'gy' },
    { num: 31, name: "胡桃", sex: "女", city: "璃月", starts: 5, element: "火", em: 'fire', arms: "枪", e_name: 'ht' },
    { num: 32, name: "烟绯", sex: "女", city: "璃月", starts: 4, element: "火", em: 'fire', arms: "法器", e_name: 'yf' },
    { num: 33, name: "申鹤", sex: "女", city: "璃月", starts: 5, element: "冰", em: 'ice', arms: "枪", e_name: 'sh' },
    { num: 34, name: "云堇", sex: "女", city: "璃月", starts: 4, element: "岩", em: 'rock', arms: "枪", e_name: 'yj' },
    { num: 35, name: "神里绫华", sex: "女", city: "稻妻", starts: 5, element: "冰", em: 'ice', arms: "单手剑", e_name: 'sllh' },
    { num: 36, name: "枫原万叶", sex: "男", city: "稻妻", starts: 5, element: "风", em: 'wind', arms: "单手剑", e_name: 'fywy' },
    { num: 37, name: "宵宫", sex: "女", city: "稻妻", starts: 5, element: "火", em: 'fire', arms: "弓", e_name: 'xg' },
    { num: 38, name: "早柚", sex: "女", city: "稻妻", starts: 4, element: "风", em: 'wind', arms: "双手剑", e_name: 'zy' },
    { num: 39, name: "雷电将军", sex: "女", city: "稻妻", starts: 5, element: "雷", em: 'thunder', arms: "枪", e_name: 'ldjj' },
    { num: 40, name: "九条裟罗", sex: "女", city: "稻妻", starts: 4, element: "雷", em: 'thunder', arms: "弓", e_name: 'jtsl' },
    { num: 41, name: "珊瑚宫心海", sex: "女", city: "稻妻", starts: 5, element: "水", em: 'water', arms: "法器", e_name: 'shgxh' },
    { num: 42, name: "托马", sex: "男", city: "稻妻", starts: 4, element: "火", em: 'fire', arms: "枪", e_name: 'tm' },
    { num: 43, name: "荒泷一斗", sex: "男", city: "稻妻", starts: 5, element: "岩", em: 'rock', arms: "双手剑", e_name: 'hlyd' },
    { num: 44, name: "五郎", sex: "男", city: "稻妻", starts: 4, element: "岩", em: 'rock', arms: "弓", e_name: 'wl' },
    { num: 45, name: "八重神子", sex: "女", city: "稻妻", starts: 5, element: "雷", em: 'thunder', arms: "法器", e_name: 'bcsz' },
];
var kapool = [
    { num: 0, mainup: 0, otherup: [0, 5, 13, 18, 25, 26, ] }, //空池
    { num: 1, mainup: 7, otherup: [4, 22, 11] },
    { num: 2, mainup: 8, otherup: [23, 12, 10] },
    { num: 3, mainup: 27, otherup: [21, 20, 14] },
    { num: 4, mainup: 28, otherup: [29, 6, 24] },
    { num: 5, mainup: 15, otherup: [11, 12, 9] },
    { num: 6, mainup: 30, otherup: [22, 23, 10] },
    { num: 7, mainup: 19, otherup: [20, 14, 29] },
    { num: 8, mainup: 25, otherup: [4, 21, 9] },
    { num: 9, mainup: 31, otherup: [22, 23, 24] },
    { num: 10, mainup: 7, otherup: [12, 10, 6] },
    { num: 11, mainup: 27, otherup: [4, 11, 16] },
    { num: 12, mainup: 28, otherup: [10, 14, 32] },
    { num: 13, mainup: 17, otherup: [23, 20, 29] },
    { num: 14, mainup: 8, otherup: [4, 11, 12] },
    { num: 15, mainup: 36, otherup: [6, 9, 16] },
    { num: 16, mainup: 35, otherup: [21, 24, 32] },
    { num: 17, mainup: 37, otherup: [14, 29, 38] },
    { num: 18, mainup: 39, otherup: [22, 12, 40] },
    { num: 19, mainup: 41, otherup: [23, 20, 16] },
    { num: 20, mainup: 27, otherup: [21, 24, 32] },
    { num: 21, mainup: 31, otherup: [14, 38, 42] },
    { num: 22, mainup: 15, otherup: [10, 9, 16] },
    { num: 23, mainup: 17, otherup: [10, 9, 16] },
    { num: 24, mainup: 43, otherup: [4, 22, 44] },
    { num: 25, mainup: 33, otherup: [21, 24, 34] },
    { num: 26, mainup: 19, otherup: [21, 24, 34] },
    { num: 27, mainup: 28, otherup: [23, 20, 32] },
    { num: 28, mainup: 30, otherup: [23, 20, 32] },
    { num: 29, mainup: 45, otherup: [11, 14, 42] },
    { num: 30, mainup: 39, otherup: [29, 9, 40] },
    { num: 31, mainup: 41, otherup: [29, 9, 40] },
];
//想要添加卡池，需要手动在HTML添加一个li（虽然确实可以自动添加，懒得写了，嘻嘻），这里增加角色和卡池信息，素材里添加卡池图片即可！~~~
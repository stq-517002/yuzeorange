// 音频数据配置
const audioData = [
    // ========== 名言 ==========
{
        id: 1,
        name: "自我介绍1",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%AE%A2%E6%9C%8D.mp3",
        category: "名言"
    },    
{
        id: 53,
        name: "自我介绍2",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%AE%88%E6%8A%A4%E5%9C%B0%E7%90%83.mp3",
        category: "名言"
    },    
{
        id: 83,
        name: "自我介绍3",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D3.mp3",
        category: "名言"
    },  
{
        id: 27,
        name: "全体目光向我看齐!",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E3%80%8A%E5%85%A8%E4%BD%93%E7%9B%AE%E5%85%89%E5%90%91%E6%88%91%E7%9C%8B%E9%BD%90%E3%80%8B.mp3",
        category: "名言"
    },
    {
        id: 2,
        name: "你冲一会儿吧，别对着我充就行",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E4%BD%A0%E5%86%B2%E4%B8%80%E4%BC%9A%E5%84%BF%E5%90%A7%EF%BC%8C%E5%88%AB%E5%AF%B9%E7%9D%80%E6%88%91%E5%85%85%E5%B0%B1%E8%A1%8C.MP3",
        category: "名言"
    },
    {
        id: 3,
        name: "我就是弱智",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%88%91%E5%B0%B1%E6%98%AF%E5%BC%B1%E6%99%BA.mp3",
        category: "名言"
    },
    {
        id: 4,
        name: "我是大傻沢",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%88%91%E6%98%AF%E5%A4%A7%E5%82%BB%E5%AD%90.mp3",
        category: "名言"
    },
    {
        id: 5,
        name: "谁说大鱼若智",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E8%B0%81%E8%AF%B4%E5%A4%A7%E6%84%9A%E8%8B%A5%E6%99%BA.mp3",
        category: "名言"
    },
{
        id: 15,
        name: "自愿放弃工资声明",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%B7%A5%E8%B5%84.mp3",
        category: "名言"
    },
{
        id: 16,
        name: "我是同性恋",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/VID_20260110_184027.mp3",
        category: "名言"
    },
{
        id: 79,
        name: "我是女同",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%88%91%E6%98%AF%E5%A5%B3%E5%90%8C.mp3",
        category: "名言"
    },
{
        id: 80,
        name: "我没招了",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%88%91%E6%B2%A1%E6%8B%9B%E4%BA%86.mp3",
        category: "名言"
    },
{
        id: 17,
        name: "同的游戏",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/VID_20260110_184012.mp3",
        category: "名言"
    },
{
        id: 28,
        name: "我喜欢赤石",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%96%9C%E6%AC%A2.mp3",
        category: "名言"
    },
{
        id: 38,
        name: "rap",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP06%5D%286%29rap-%E5%B0%8F%E7%8C%AB%E5%8F%AA%E6%83%B3%E7%BB%99%E4%BD%A0%E5%AE%A0%E7%88%B1.mp3",
        category: "名言"
    },
{
        id: 41,
        name: "欧尼酱 钓钓我的",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP09%5D%289%29%E6%AC%A7%E5%B0%BC%E9%85%B1%20%E9%92%93%E9%92%93%E6%88%91%E7%9A%84.mp3",
        category: "名言"
    },
{
        id: 42,
        name: "我把你鲨掉",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP10%5D%2810%29%E6%88%91%E6%8A%8A%E4%BD%A0%E9%B2%A8%E6%8E%89.mp3",
        category: "名言"
    },
{
        id: 43,
        name: "真香",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP11%5D%2811%29%E7%9C%9F%E9%A6%99%E5%AE%A3%E8%A8%80.mp3",
        category: "名言"
    },
{
        id: 47,
        name: "天天鹿鹿鹿有什么好鹿的",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%A4%A9%E5%A4%A9%E9%B9%BF%E9%B9%BF%E9%B9%BF%E6%9C%89%E4%BB%80%E4%B9%88%E5%A5%BD%E9%B9%BF%E7%9A%84-1.mp3",
        category: "名言"
    },
{
        id: 48,
        name: "我戳你个蛋啊",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%88%91%E6%88%B3%E4%BD%A0%E4%B8%AA%E8%9B%8B%E5%95%8A.mp3",
        category: "名言"
    },
{
        id: 49,
        name: "我杀了你",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%88%91%E6%9D%80%E4%BA%86%E4%BD%A0.mp3",
        category: "名言"
    },
{
        id: 50,
        name: "我铜丝你啊",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%88%91%E9%93%9C%E4%B8%9D%E4%BD%A0%E5%95%8A.mp3",
        category: "名言"
    },
{
        id: 52,
        name: "妈妈你坏死了",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%A6%88%E5%A6%88%E4%BD%A0%E5%9D%8F%E6%AD%BB%E4%BA%86.mp3",
        category: "名言"
    },
{
        id: 54,
        name: "真有病吧",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E7%9C%9F%E6%9C%89%E7%97%85%E5%90%A7.mp3",
        category: "名言"
    },
{
        id: 55,
        name: "主人主人汪汪汪",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E4%B8%BB%E4%BA%BA%E4%B8%BB%E4%BA%BA%E6%B1%AA%E6%B1%AA%E6%B1%AA.mp3",
        category: "名言"
    },
{
        id: 57,
        name: "我超1",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/WC.mp3",
        category: "名言"
    },
{
        id: 58,
        name: "我超2",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/WC2.mp3",
        category: "名言"
    },
{
        id: 81,
        name: "我靠",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%88%91%E9%9D%A0%20%281%29.mp3",
        category: "名言"
    },
{
        id: 59,
        name: "告白",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%91%8A%E7%99%BD.mp3",
        category: "名言"
    },
{
        id: 82,
        name: "无能的丈夫",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%97%A0%E8%83%BD%E7%9A%84%E4%B8%88%E5%A4%AB.mp3",
        category: "名言"
    },
{
        id: 84,
        name: "我要去做狗",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%88%91%E8%A6%81%E5%8E%BB%E5%81%9A%E7%8B%97.MP3",
        category: "名言"
    },
{
        id: 87,
        name: "不行，你必须最喜欢小鱼",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E4%B8%8D%E8%A1%8C%EF%BC%8C%E4%BD%A0%E5%BF%85%E9%A1%BB%E6%9C%80%E5%96%9C%E6%AC%A2%E5%B0%8F%E9%B1%BC.MP3",
        category: "名言"
    },
{
        id: 90,
        name: "鱼布拜父",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E9%B1%BC%E5%B8%83%E6%8B%9C%E7%88%B6.mp3",
        category: "名言"
    },
{
        id: 97,
        name: "我鱼沢今天求求亲我一口",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%88%91%E9%B1%BC%E6%B2%A2%E4%BB%8A%E5%A4%A9%E6%B1%82%E6%B1%82%E4%BA%B2%E6%88%91%E4%B8%80%E5%8F%A3.MP3",
        category: "名言"
    },
{
        id: 99,
        name: "那我糖怎么了",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E9%82%A3%E6%88%91%E7%B3%96%E6%80%8E%E4%B9%88%E4%BA%86.mp3",
        category: "名言"
    },
{
        id: 101,
        name: "下海",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E4%B8%8B%E6%B5%B7.mp3",
        category: "名言"
    },
    {
        id: 106,
        name: "变大啦，唉，好色情啊",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%8F%98%E5%A4%A7%E5%95%A6%EF%BC%8C%E5%94%89%EF%BC%8C%E5%A5%BD%E8%89%B2%E6%83%85%E5%95%8A.mp3",
        category: "名言"
    },
    {
        id: 107,
        name: "吃我的大雷",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%90%83%E6%88%91%E7%9A%84%E5%A4%A7%E9%9B%B7.mp3",
        category: "名言"
    },
    {
        id: 108,
        name: "哇她叫我魂淡好爽啊",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%93%87%E5%A5%B9%E5%8F%AB%E6%88%91%E9%AD%82%E6%B7%A1%E5%A5%BD%E7%88%BD%E5%95%8A.MP3",
        category: "名言"
    },
    {
        id: 114,
        name: "我拉你手上",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%88%91%E6%8B%89%E4%BD%A0%E6%89%8B%E4%B8%8A.mp3",
        category: "名言"
    },
    {
        id: 115,
        name: "我靠我不会露出吧",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%88%91%E9%9D%A0%E6%88%91%E4%B8%8D%E4%BC%9A%E9%9C%B2%E5%87%BA%E5%90%A7.mp3",
        category: "名言"
    },
    {
        id: 116,
        name: "有点养胃了",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%9C%89%E7%82%B9%E5%85%BB%E8%83%83%E4%BA%86.mp3",
        category: "名言"
    },
    {
        id: 117,
        name: "来来来打我一拳",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%9D%A5%E6%9D%A5%E6%9D%A5%E6%89%93%E6%88%91%E4%B8%80%E6%8B%B3.mp3",
        category: "名言"
    },
    {
        id: 119,
        name: "社死你*3",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E7%A4%BE%E6%AD%BB%E4%BD%A0x3.mp3",
        category: "名言"
    },
    {
        id: 120,
        name: "能不能快点社",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E8%83%BD%E4%B8%8D%E8%83%BD%E5%BF%AB%E7%82%B9%E7%A4%BE.mp3",
        category: "名言"
    },
 // ========== 十八连 ==========
    {
        id: 6,
        name: "训狗十八连",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E8%AE%AD%E7%8B%97%E5%8D%81%E5%85%AB%E8%BF%9E%EF%BC%881%EF%BC%89.MP3",
        category: "十八连"
    },
    {
        id: 7,
        name: "高速神言18连",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E9%AB%98%E9%80%9F%E7%A5%9E%E8%A8%8018%E8%BF%9E.MP3",
        category: "十八连"
    },
 // ========== 怪声 ==========
       {
        id: 8,
        name: "哼唧1",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%97%AF%E5%93%BC%E5%93%BC.mp3",
        category: "怪声"
    },
{
        id: 37,
        name: "哼唧2",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP05%5D%285%29%E5%93%BC%E5%94%A7.mp3",
        category: "怪声"
    },
{
        id: 46,
        name: "哼唧3",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP14%5D%2814%29%E7%A6%81%E8%A8%80%E5%9B%9E%E5%85%88%E8%A1%8C%E4%BD%93%E9%AA%8C%E7%89%88%2825.11.30%29.mp3",
        category: "怪声"
    },

      {
        id: 10,
        name: "疑似吸猫薄荷后片段流出",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E7%96%91%E4%BC%BC%E5%90%B8%E7%8C%AB%E8%96%84%E8%8D%B7%E5%90%8E%E7%89%87%E6%AE%B5%E6%B5%81%E5%87%BA.mp3",
        category: "怪声"
    },
    {
        id: 12,
        name: "喝蛇草水",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E8%9B%87%E8%8D%89.mp3",
        category: "怪声"
    },
 {
        id: 30,
        name: "喝水",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP02%5D%282%29%E5%96%9D%E6%B0%B4.mp3",
        category: "怪声"
    },
{
        id: 31,
        name: "略略略",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP01%5D%281%29%E7%95%A5%E7%95%A5%E7%95%A5.mp3",
        category: "怪声"
    },
{
        id: 40,
        name: "伸懒腰",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP08%5D%288%29%E4%BC%B8%E6%87%92%E8%85%B0.mp3",
        category: "怪声"
    },
{
        id: 71,
        name: "吐口水？",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%90%90%E5%8F%A3%E6%B0%B4%EF%BC%9F.mp3",
        category: "怪声"
    },
{
        id: 89,
        name: "额啊",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E9%A2%9D%E5%95%8A1.MP3",
        category: "怪声"
    },
{
        id: 100,
        name: "额咦啊",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E9%A2%9D%E5%92%A6%E5%95%8A.MP3",
        category: "怪声"
    },
  {
        id: 104,
        name: "两岸猿声啼不住",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E4%B8%A4%E5%B2%B8%E7%8C%BF%E5%A3%B0%E5%95%BC%E4%B8%8D%E4%BD%8F.mp3",
        category: "怪声"
    },
 // ========== 称呼 ==========
  {
        id: 9,
        name: "死鬼",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%AD%BB%E9%AC%BC.mp3",
        category: "称呼"
    },
    {
        id: 11,
        name: "老公",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E8%80%81%E5%85%AC.mp3",
        category: "称呼"
    },
{
        id: 18,
        name: "哥哥1",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%93%A5%E5%93%A5.mp3",
        category: "称呼"
    },
{
        id: 19,
        name: "哥哥2",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%93%A5%E5%93%A52.mp3",
        category: "称呼"
    },
{
        id: 20,
        name: "爹爹",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E7%88%B9%E7%88%B9.mp3",
        category: "称呼"
    },
{
        id: 23,
        name: "欧尼酱",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%AC%A7%E5%B0%BC%E9%85%B1.mp3",
        category: "称呼"
    },
{
        id: 24,
        name: "爸爸",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E7%88%B8%E7%88%B8.mp3",
        category: "称呼"
    },
{
        id: 88,
        name: "爸比",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E7%88%B8%E6%AF%94.MP3",
        category: "称呼"
    },

{
        id: 51,
        name: "老婆",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E8%80%81%E5%A9%86.mp3",
        category: "称呼"
    },
{
        id: 56,
        name: "主人",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E4%B8%BB%E4%BA%BA.mp3",
        category: "称呼"
    },
    {
        id: 113,
        name: "宝贝啊",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%AE%9D%E8%B4%9D%E5%95%8A.mp3",
        category: "称呼"
    },
 // ========== 代表作 ==========
    {
        id: 13,
        name: "快乐糖猫",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E3%80%90%E9%B1%BC%E6%B2%A2Orange%E3%80%91%E3%80%8A%E5%BF%AB%E4%B9%90%E7%B3%96%E7%8C%AB%E3%80%8B%E2%80%94%E2%80%94%E7%B3%96%E4%B8%B8%E4%BA%86%E5%B0%B1%E5%A5%BD.mp3",
        category: "代表作"
    },
 {
        id: 14,
        name: "爱情买卖",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP01%5D%E7%AC%AC%E4%B8%80%E9%81%8D.mp3",
        category: "代表作"
    },
// ========== 对同事发癫系列 ==========
 {
        id: 61,
        name: "霜露",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%A4%B4%E5%B0%96%E5%B0%96.mp3",
        category: "对同事发癫系列"
    },
{
        id: 62,
        name: "老E",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E8%80%81E.mp3",
        category: "对同事发癫系列"
    },
{
        id: 63,
        name: "云路翼",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E4%BA%91%E9%9C%B2%E7%BF%BC.mp3",
        category: "对同事发癫系列"
    },
{
        id: 64,
        name: "兔幼",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%85%94%E5%B9%BC.mp3",
        category: "对同事发癫系列"
    },
{
        id: 65,
        name: "箱滨",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E7%AE%B1%E6%BB%A8.mp3",
        category: "对同事发癫系列"
    },
{
        id: 66,
        name: "魈格",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%A4%B0%E5%AD%90%E7%9A%AE.mp3",
        category: "对同事发癫系列"
    },
{
        id: 67,
        name: "猫丸子",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E7%8B%97%E4%B8%B8%E5%AD%90%E5%A6%88%E5%A6%88%E6%88%91%E6%98%AF%E4%BD%A0%E7%9A%84%E7%8B%97.MP3",
        category: "对同事发癫系列"
    },
// ========== 土味情话 ==========
{
        id: 68,
        name: "1",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%9C%9F%E5%91%B31.mp3",
        category: "土味情话"
    },
{
        id: 69,
        name: "2",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%9C%9F%E5%91%B32.mp3",
        category: "土味情话"
    },
{
        id: 70,
        name: "3",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%9C%9F%E5%91%B33.mp3",
        category: "土味情话"
    },
{
        id: 72,
        name: "4",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%9C%9F%E5%91%B34.mp3",
        category: "土味情话"
    },
{
        id: 73,
        name: "5",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%9C%9F%E5%91%B35.mp3",
        category: "土味情话"
    },
{
        id: 74,
        name: "6",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%9C%9F%E5%91%B36.mp3",
        category: "土味情话"
    },
{
        id: 75,
        name: "7",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%9C%9F%E5%91%B37.mp3",
        category: "土味情话"
    },
{
        id: 76,
        name: "8",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%9C%9F%E5%91%B38.mp3",
        category: "土味情话"
    },
{
        id: 77,
        name: "9",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%9C%9F%E5%91%B39.mp3",
        category: "土味情话"
    },
{
        id: 78,
        name: "10",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%9C%9F%E5%91%B310.mp3",
        category: "土味情话"
    },
// ========== 糖笑 ==========
    {
        id: 26,
        name: "糖笑1",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%94%90%E7%AC%91.mp3",
        category: "糖笑"
    },
{
        id: 60,
        name: "糖笑2",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%94%90%E7%AC%912.mp3",
        category: "糖笑"
    },
{
        id: 93,
        name: "糖笑3",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%94%90%E7%AC%913.mp3",
        category: "糖笑"
    },
{
        id: 109,
        name: "糖笑4",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%94%90%E7%AC%914.mp3",
        category: "糖笑"
    },
    {
        id: 110,
        name: "糖笑5",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%94%90%E7%AC%915.mp3",
        category: "糖笑"
    },
        {
        id: 111,
        name: "糖笑6",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%94%90%E7%AC%916.mp3",
        category: "糖笑"
    },
// ========== 猫叫 ==========
    {
        id: 32,
        name: "喵喵喵1",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP1%5D%E5%96%B5%E5%96%B5%E5%96%B5.mp3",
        category: "其他"
    },
{
        id: 33,
        name: "喵喵喵2",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP2%5D%E3%80%8A%E4%B8%8B%E7%AD%89%E7%8C%AB%E3%80%8B.mp3",
        category: "其他"
    },
{
        id: 94,
        name: "喵↑喵↑",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%96%B5%E2%86%91%E5%96%B5%E2%86%91.mp3",
        category: "其他"
    },
{
        id: 95,
        name: "喵嗯喵",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%96%B5%E5%97%AF%E5%96%B5.mp3",
        category: "其他"
    },
// ========== yue ==========
    
// ========== 其他 ==========
{
        id: 21,
        name: "mua",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/mua.mp3",
        category: "其他"
    },
{
        id: 22,
        name: "阿里嘎多",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E9%98%BF%E9%87%8C%E5%98%8E%E5%A4%9A.mp3",
        category: "其他"
    },
{
        id: 25,
        name: "汪*7",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E7%8B%97%E5%8F%AB.mp3",
        category: "其他"
    },

{
        id: 29,
        name: "煮面？",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E7%85%AE%E9%9D%A2%EF%BC%9F.mp3",
        category: "其他"
    },
{
        id: 35,
        name: "哼小曲1",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP03%5D%283%29%E5%93%BC%E5%B0%8F%E6%9B%B2.mp3",
        category: "其他"
    },
{
        id: 36,
        name: "哼小曲2",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP04%5D%284%29%E5%93%BC%E5%B0%8F%E6%9B%B2.mp3",
        category: "其他"
    },
{
        id: 34,
        name: "I love you",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP3%5D%E6%84%8F%E4%B9%89%E4%B8%8D%E6%98%8E%E7%9A%84%E5%B0%8F%E5%8A%A8%E9%9D%99%E4%BD%86%E5%B0%8F%E7%8C%AB%E7%88%B1%E4%BD%A0.mp3",
        category: "其他"
    },
{
        id: 39,
        name: "sukidayo",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP07%5D%287%29sukidayo.mp3",
        category: "其他"
    },
{
        id: 44,
        name: "别骗我啦",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP12%5D%2812%29%E7%BB%99%E6%88%91%E4%B8%80%E4%B8%AA%E7%81%AD%E6%8E%89%E4%B8%96%E7%95%8C%E7%9A%84%E9%AB%98%E9%9F%B3-%E5%88%AB%E9%AA%97%E6%88%91%E5%95%A6.mp3",
        category: "其他"
    },
{
        id: 45,
        name: "达咩呦",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%5BP13%5D%2813%29%E6%89%93%E5%92%A9%E5%93%9F.mp3",
        category: "其他"
    },
{
        id: 85,
        name: "saki酱*n",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/saki%E9%85%B1%C3%97n.MP3",
        category: "其他"
    },
{
        id: 86,
        name: "不行不行",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E4%B8%8D%E8%A1%8C%E4%B8%8D%E8%A1%8C.mp3",
        category: "其他"
    },
    {
        id: 102,
        name: "不要不要，不要不要",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E4%B8%8D%E8%A6%81%E4%B8%8D%E8%A6%81%EF%BC%8C%E4%B8%8D%E8%A6%81%E4%B8%8D%E8%A6%81.mp3",
        category: "其他"
    },
    {
        id: 103,
        name: "不要，不要，不要这样",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E4%B8%8D%E8%A6%81%EF%BC%8C%E4%B8%8D%E8%A6%81%EF%BC%8C%E4%B8%8D%E8%A6%81%E8%BF%99%E6%A0%B7.MP3",
        category: "其他"
    },
{
        id: 91,
        name: "什么意思*n",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D%E5%95%8A%C3%97n.MP3",
        category: "其他"
    },
{
        id: 92,
        name: "啊咧咧*n",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%93%A6%E5%98%9E%E5%98%9E%EF%BC%9F%C3%97n.MP3",
        category: "其他"
    },
{
        id: 96,
        name: "嗯嗯嗯*n",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%97%AF%E5%97%AF%E5%97%AF%C3%97n.MP3",
        category: "其他"
    },
{
        id: 98,
        name: "那咋了",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E9%82%A3%E5%92%8B%E4%BA%86.mp3",
        category: "其他"
    },
    {
        id: 105,
        name: "去死喵",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%8E%BB%E6%AD%BB%E5%96%B5.mp3",
        category: "其他"
    },
    {
        id: 112,
        name: "完了！！！",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E5%AE%8C%E4%BA%86%EF%BC%81%EF%BC%81%EF%BC%81.mp3",
        category: "其他"
    },
    {
        id: 118,
        name: "滚啊滚啊",
        url: "https://yuzeorange.oss-cn-hangzhou.aliyuncs.com/%E6%BB%9A%E5%95%8A%E6%BB%9A%E5%95%8A.mp3",
        category: "其他"
    },
     // ========== 继续添加你的音频 ==========

];



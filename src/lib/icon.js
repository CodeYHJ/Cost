export const setIcon = () => {
  if (!window) return;
  const icons = window.localStorage.getItem("icons");
  if (icons) {
    return JSON.parse(icons);
  }
  const iconLeftKeys = Object.keys(iconExpenditureConfig);
  const expenditureList = filterIcon(iconLeftKeys);
  const iconRightKeys = Object.keys(iconIncomeConfig);
  const incomeList = filterIcon(iconRightKeys);
  window.localStorage.setItem(
    "icons",
    JSON.stringify({ expenditureList, incomeList })
  );
  return { expenditureList, incomeList };
};
const filterIcon = nodeList => {
  return nodeList.map(el => {
    return { icon: el, name: iconExpenditureConfig[el] };
  });
};
export const iconIncomeConfig = {
  "icon-licai": "理财",
  "icon-gongzi": "工资",
  "icon-zhuanqian": "赚钱",
  "icon-jianzhi": "兼职",
  "icon-caipiao": "彩票",
  "icon-vip-book": "书籍",
  "icon-fushi": "服饰",
  "icon-yanjiuyan": "烟酒",
  "icon-chongwu": "宠物",
  "icon-canyin": "餐饮",
  "icon-shuma": "数码"
};

export const iconExpenditureConfig = {
  "icon-licai": "理财",
  "icon-gongzi": "工资",
  "icon-zhuanqian": "赚钱",
  "icon-jianzhi": "兼职",
  "icon-zhufang": "住房",
  "icon-lingshi": "零食",
  "icon-caipiao": "彩票",
  "icon-lijin": "礼金",
  "icon-shucai-copy": "蔬菜",
  "icon-vip-book": "书籍",
  "icon-changbei": "长辈",
  "icon-shuiguo": "水果",
  "icon-juanzeng": "捐赠",
  "icon-yiliao": "医疗",
  "icon-liwu": "礼物",
  "icon-fushi": "服饰",
  "icon-jiaotong": "交通",
  "icon-shejiao": "社交",
  "icon-yanjiuyan": "烟酒",
  "icon-chongwu": "宠物",
  "icon-recreation": "娱乐",
  "icon-bangong": "办公",
  "icon-gouwu": "公务",
  "icon-yundong": "运动",
  "icon-canyin": "餐饮",
  "icon-jujia-copy": "居家",
  "icon-riyong": "日用",
  "icon-children": "儿童",
  "icon-kuaidi": "快递",
  "icon-qinyoujiankang": "健康",
  "icon-meirong": "美容",
  "icon-cheqiche": "汽车",
  "icon-shuma": "数码",
  "icon-tongxun": "通讯",
  "icon-xuexi": "学习",
  "icon-weixiu": "维修",
  "icon-lvxing": "旅行"
};

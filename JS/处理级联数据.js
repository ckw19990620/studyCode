/**
 * parent: '0', 为 根节点，  parent === code, 则表示 parent 为 该 code 项的子节点
 * @params code: 节点自身code， parent： 父级节点code
 */
let arr = [
  {
    "parent": "0",
    "fullCode": "zkkf",
    "code": "zkkf",
    "name": "极氪客服中心"
  },
  {
    "parent": "zkkf",
    "fullCode": "zkkf:hotline",
    "code": "hotline",
    "name": "热线组"
  },
  {
    "parent": "zkkf",
    "fullCode": "zkkf:online",
    "code": "online",
    "name": "在线组"
  },
  {
    "parent": "zkkf",
    "fullCode": "zkkf:OBteam",
    "code": "OBteam",
    "name": "外呼组"
  },
  {
    "parent": "zkkf",
    "fullCode": "zkkf:KSteam",
    "code": "KSteam",
    "name": "客诉组"
  },
  {
    "parent": "zkkf",
    "fullCode": "zkkf:ZXTeam",
    "code": "ZXTeam",
    "name": "业务咨询"
  },
  {
    "parent": "hotline",
    "fullCode": "zkkf:hotline:hotline1",
    "code": "hotline1",
    "name": "整车队列"
  },
  {
    "parent": "hotline",
    "fullCode": "zkkf:hotline:hotline2",
    "code": "hotline2",
    "name": "能源队列"
  },
  {
    "parent": "zkkf",
    "fullCode": "zkkf:aftersales",
    "code": "aftersales",
    "name": "极氪橙组"
  },
  {
    "parent": "OBteam",
    "fullCode": "zkkf:OBteam:waihu001",
    "code": "waihu001",
    "name": "外呼1组"
  },
  {
    "parent": "OBteam",
    "fullCode": "zkkf:OBteam:waihu1",
    "code": "waihu1",
    "name": "专家组"
  },
  {
    "parent": "OBteam",
    "fullCode": "zkkf:OBteam:waihu002",
    "code": "waihu002",
    "name": "外呼2组"
  }
]
let pRoot = new Set()
let subRoot = new Set()
let options = []
arr.forEach(item => {
  pRoot.add(item.parent)
  subRoot.add(item.code)
})
// console.log(pRoot);
// console.log(subRoot);
// 如果有一项的parent 不在subRoot中，则说明该项为最高级节点
for (const item of arr) {
  if (pRoot.has(item.code)) {
    item.chilren = []
  }
  if (!subRoot.has(item.parent)) {
    options.push(item)
  }
  for (const supItem of options) {
    if (supItem.code === item.parent) {
      supItem.chilren.push(item)
    }
  }
}
console.dir(options);

// let str = '{accessoryName=分补电容器, model=, number=1, supplier=, contactinformation=四川省成都市金堂县淮口镇金堂大道金乐路  通合新能源(金堂)有限公司  刘智睿   15108473573, logisticsCompany=顺丰, logisticsNo=SF1505149096862}'
//
//
// function formatIrregularJsonString (str) {
//   let temp = str.split(',')
//   let length = temp.length
//   // 去除字符串首尾的花括号
//   temp[0] = temp[0].substring(temp[0].indexOf('{') + 1)
//   temp[length - 1] = temp[length - 1].substring(0, temp[length - 1].indexOf('}'))
//
//   let map = new Map()
//   // 处理数组中每一项首位的空格
//   temp.forEach((item, index) => {
//     if (item.indexOf(' ') > -1) {
//       item = item.substring(item.indexOf(' ') + 1)
//     }
//     let key = item.substring(0, item.indexOf('='))
//     let value = item.substring(item.indexOf('=') + 1)
//     map.set(key, value)
//   })
//   return Object.fromEntries(map)
// }
//
// let res = formatIrregularJsonString(str)
// console.log(res);

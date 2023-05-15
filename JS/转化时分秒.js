/**
 * 初始值 秒数
 * 如果 秒数>60,则除以60，向下取整作为 minutes。
 * 给秒数重新赋值，新值为 秒数 % 60。
 * 如果 minutes> 60，则除以 60，向下取整作为Hours。
 * @type {number}
 */
function formatSeconds(second) {
  if (!second) return '00:00:00'
  let seconds = second, minutes = 0, hours = 0
  if (seconds >= 60) {
    minutes = Math.floor(seconds / 60)
    seconds = seconds % 60
  }
  if (minutes >= 60) {
    hours = Math.floor(minutes / 60)
    minutes = minutes % 60
  }
  let arr = [hours, minutes, seconds]
  console.log(arr);
  arr.forEach((item, index) => {
    // 先将每一项都转为字符串
    // 如果length 不大于1 则要补0
    arr[index] = item.toString()
    if (arr[index].length <= 1) {
      arr[index] = '0'+ item
    }
  })
  return arr.join(':')
}
console.log(formatSeconds());

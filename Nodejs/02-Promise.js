window.count = 100
let user = {
    count: 1,
    getCount: function () {
        return this.count
    }
}
console.log(user.getCount())
let func = user.getCount
console.log(func())

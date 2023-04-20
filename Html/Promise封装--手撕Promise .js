function Promise(executor){
    // 添加状态
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    this.callbacks = []
    const _this = this;
    // 执行器函数是同步调用的
    function resolve(data) {
        // 加入判断使 Promise 对象的状态只改变一次
        if (_this.PromiseState !== 'pending') return;
        // 修改对象状态 (PromiseState)
        _this.PromiseState = 'fulfilled'
        // 设置对象结果值 (PromiseResult)
        _this.PromiseResult = data

        // 执行成功的回调函数
        _this.callbacks.forEach(item => {
            item.onResolved(data);
        })
    }
    function reject(data) {
        // 加入判断使 Promise 对象的状态只改变一次
        if (_this.PromiseState !== 'pending') return;
        // 修改对象状态 (PromiseState)
        _this.PromiseState = 'rejected'
        // 设置对象结果值 (PromiseResult)
        _this.PromiseResult = data

        // 执行失败的回调函数
        _this.callbacks.forEach(item => {
            item.onRejected(data);
        })
    }
    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e)
    }
}

// 添加 then 方法
Promise.prototype.then = function (onResolved, onRejected) {
    // 执行回调函数
    if (this.PromiseState === 'fulfilled') onResolved(this.PromiseResult);
    if (this.PromiseState === 'rejected') onRejected(this.PromiseResult);
    if (this.PromiseState === 'pending') {

        // 数组是为了解决定义多个回调函数的情况
        this.callbacks.push({
            onResolved: onResolved,
            onRejected: onRejected
        })
    }
}

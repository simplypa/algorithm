Function.prototype.myBind = function (context) {
    if (typeof this!== 'function') {
        throw new TypeError('Error')
    }
    let self = this
    let  args = Array.prototype.slice.call(arguments, 1)
    return function () {
        return self.apply(context, args.concat(Array.prototype.slice.call(arguments)))
    }
}
const $ = args => document.querySelector(args)
const $$ = args => document.querySelectorAll(args)

HTMLElement.prototype.on = function (a, b, c) {
   return this.addEventListener(a, b, c)
}


HTMLElement.prototype.off = function (a, b) {
   return this.removeEvenListener(a, b)
}

HTMLElement.prototype.$ = function (args) {
   return this.querySelector(args)
}

HTMLElement.prototype.$$ = function (args) {
   return this.querySelectorAll(args)
}

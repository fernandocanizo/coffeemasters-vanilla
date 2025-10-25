import { Store } from "./service/store"
import { api } from "./service/api"
import { loadMenu } from "./service/menu"

const qs = args => document.querySelector(args)
const qsa = args => document.querySelectorAll(args)

HTMLElement.prototype.on = function (type, listener, optionsOrUseCapture) {
   return this.addEventListener(type, listener, optionsOrUseCapture)
}


HTMLElement.prototype.off = function (type, listener) {
   return this.removeEvenListener(type, listener)
}

HTMLElement.prototype.qs = function (args) {
   return this.querySelector(args)
}

HTMLElement.prototype.qsa = function (args) {
   return this.querySelectorAll(args)
}

window.addEventListener("DOMContentLoaded", () => {
   loadMenu()
})

window.app = {}
app.store = store

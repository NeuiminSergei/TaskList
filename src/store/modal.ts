import { makeAutoObservable } from "mobx"

class Modal {

  visible = false

  constructor() {
    makeAutoObservable(this)
  }

  changeVisible() {
    this.visible = !this.visible
  }

}

export default new Modal
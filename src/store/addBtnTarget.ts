import { makeAutoObservable } from "mobx"

class Target {
  currentTarget = ''

  constructor() {
    makeAutoObservable(this)
  }

  updateCurrentTarget(value: string) {
    this.currentTarget = value
  }
}

export default new Target
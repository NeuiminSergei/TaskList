import { makeAutoObservable } from "mobx"

class NewTask {
  title = ''
  body = ''

  constructor() {
    makeAutoObservable(this)
  }

  updateTitle(title: string) {
    this.title = title
  }

  updateBody(body: string) {
    this.body = body
  }
}

export default new NewTask
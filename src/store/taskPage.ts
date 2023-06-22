import { makeAutoObservable } from "mobx"

class TaskPage {

  title = ''
  body = ''

  constructor() {
    makeAutoObservable(this)
  }

  updatePage(title:string, body:string) {
    this.title = title
    this.body = body
  }

}

export default new TaskPage()
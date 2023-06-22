import { makeAutoObservable } from "mobx"
import { ITask } from "../types/types"

class Tasks {
  tasks = <ITask[]>[
    { title: 'Сходить в магазин', body: 'Нужно сходить в магазин за покупками' },
    { title: 'Прибраться', body: 'Необходимо выполнить приборку' },
    { title: 'Посмотреть новости', body: 'Проверить последние новости' },
    { title: 'Сходить на почту', body: 'Нужно забрать посылку' },
    { title: 'Записаться ко врачу', body: 'Нужно записаться на прием ко врачу' },
  ]

  constructor() {
    makeAutoObservable(this)
  }

  addTask(task: ITask) {
    this.tasks.push(task)
  }

  removeTask(title: string) {
    this.tasks = this.tasks.filter(task => task.title !== title)
  }
}

export default new Tasks
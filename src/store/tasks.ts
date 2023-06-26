import { makeAutoObservable } from "mobx"
import { ITask } from "../types/types"
import newTask from "./newTask"

class Tasks {
  tasks = <ITask[]>[
    {
      title: 'Сходить в магазин', body: 'Нужно сходить в магазин за покупками', checked: false, subtask: [
        { title: 'Взять деньги', body: 'нужно взять наличные', checked: false, subtask: [] },
        { title: 'Взять пакет', body: 'нужно взять с собой пакет для покупок', checked: false, subtask: [] },
      ]
    },
    { title: 'Прибраться', body: 'Необходимо выполнить приборку', checked: false, subtask: [] },
    { title: 'Посмотреть новости', body: 'Проверить последние новости', checked: false, subtask: [] },
    { title: 'Сходить на почту', body: 'Нужно забрать посылку', checked: false, subtask: [] },
    { title: 'Записаться ко врачу', body: 'Нужно записаться на прием ко врачу', checked: false, subtask: [] },
  ]

  constructor() {
    makeAutoObservable(this)
  }

  addTask(task: ITask) {
    this.tasks.push(task)
  }

  removeTask() {
    this.tasks = this.tasks.filter(task => task.checked === false)
  }

  findTask(taskTitle: string) {
    return this.tasks.find(task => task.title === taskTitle)
  }

  addSubTask(taskTitle: string) {
    const task = this.findTask(taskTitle)
    if (task) {
      const subtask = {
        title: newTask.title,
        body: newTask.body,
        checked: false,
        subtask: []
      }
      task.subtask.push(subtask)
    }
  }

  updateChecked(taskTitle: string) {
    const task = this.findTask(taskTitle)
    if (task) {
      task.checked = !task.checked
      task.subtask.forEach(task => task.checked = !task.checked)
    }
  }

}

export default new Tasks
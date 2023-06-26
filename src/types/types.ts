export interface ITask {
  title: string
  body: string
  checked: boolean
  subtask: ITask[]
}
import { TaskItem } from "../TaskItem/TaskItem"
import { observer } from "mobx-react-lite"
import tasks from "../../store/tasks"

export const TaskList = observer(() => {
  return (
    tasks.tasks.map(task => <TaskItem key={task.title} title={task.title} body={task.body}></TaskItem>)
  )
})
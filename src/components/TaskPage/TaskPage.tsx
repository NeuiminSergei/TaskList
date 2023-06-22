import taskPage from "../../store/taskPage"
import { observer } from "mobx-react-lite"
import style from './taskPage.module.scss'

export const TaskPage = observer(() => {
  return (
    <div className={style.taskPage}>
      <h2>{taskPage.title}</h2>
      <p>{taskPage.body}</p>
    </div>
  )
})
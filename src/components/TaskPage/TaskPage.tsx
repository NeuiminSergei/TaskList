import taskPage from "../../store/taskPage"
import { observer } from "mobx-react-lite"
import style from './taskPage.module.scss'
import { AddButton } from "../UI/AddButton/AddButton"

export const TaskPage = observer(() => {
  return (
    <div className={style.taskPage}>
      <div className={style.wrapper}>
        <h2 className={style.title}>{taskPage.title}</h2>
        <AddButton target="subtask"></AddButton>
      </div>
      <p>{taskPage.body}</p>
    </div>
  )
})
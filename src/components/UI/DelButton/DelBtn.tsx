import { observer } from 'mobx-react-lite'
import tasks from '../../../store/tasks'
import style from './delBtn.module.scss'

export const DelBtn = observer(() => {

  const removeTask = () => {
    tasks.removeTask()
  }

  return (
    <button className={style.delBtn} onClick={removeTask}>+</button>
  )
})
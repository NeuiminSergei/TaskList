import tasks from '../../../store/tasks'
import style from './delBtn.module.scss'

interface IDelBtnProps {
  title: string
}

export const DelBtn = ({ title }: IDelBtnProps) => {

  const removeTask = (e: React.MouseEvent) => {
    e.stopPropagation()
    tasks.removeTask(title)
  }

  return (
    <button className={style.delBtn} onClick={removeTask}>+</button>
  )
}
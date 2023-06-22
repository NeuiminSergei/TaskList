import style from './taskItem.module.scss'
import taskPage from '../../store/taskPage'
import { AddButton } from '../UI/AddButton/AddButton'
import { DelBtn } from '../UI/DelButton/DelBtn'
import { ITask } from '../../types/types'

export const TaskItem = ({ title, body }: ITask) => {

  return (
    <div className={style.taskItem} onClick={() => taskPage.updatePage(title, body)}>
      <div className={style.title}>{title}</div>
      <AddButton cName='addMargin' />
      <DelBtn title= {title}/>
      <input type="checkbox" />
    </div>
  )
}
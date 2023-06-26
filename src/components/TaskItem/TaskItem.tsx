import style from './taskItem.module.scss'
import taskPage from '../../store/taskPage'
import { ITask } from '../../types/types'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import tasks from '../../store/tasks'

export const TaskItem = observer(({ title, body, subtask }: ITask) => {

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const rootClassesSubtask = [style.subtaskWrapper]
  if (dropdownOpen) { rootClassesSubtask.push(style.open) }
  const rootClassesWrapper = [style.taskItem]
  if (dropdownOpen) { rootClassesWrapper.push(style.open) }

  const updatePage = () => {
    taskPage.updatePage(title, body)
    setDropdownOpen(!dropdownOpen)
  }

  const handleChecked = (e: React.MouseEvent) => {
    e.stopPropagation()
    tasks.updateChecked(title)
  }

  return (
    <div className={style.itemWrapper}>
      <div className={rootClassesWrapper.join(' ')} onClick={updatePage}>
        {subtask &&
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0917 7.46967C11.3846 7.76256 11.3846 8.23744 11.0917 8.53033L6.31876 13.3033C6.02587 13.5962 5.551 13.5962 5.2581 13.3033C4.96521 13.0104 4.96521 12.5355 5.2581 12.2426L9.50074 8L5.2581 3.75736C4.96521 3.46447 4.96521 2.98959 5.2581 2.6967C5.551 2.40381 6.02587 2.40381 6.31876 2.6967L11.0917 7.46967ZM10 7.25H10.5614V8.75H10V7.25Z" fill="#11304E" />
          </svg>
        }
        <h4 className={style.title}>{title}</h4>
        <input type="checkbox" onClick={handleChecked} />
      </div>
      <div className={rootClassesSubtask.join(' ')}>
        {subtask && subtask.map(subtask =>
          <TaskItem key={subtask.title} title={subtask.title} body={subtask.body} subtask={subtask.subtask} checked={false} />
        )}
      </div>
    </div>
  )
})
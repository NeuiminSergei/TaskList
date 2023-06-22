import { observer } from 'mobx-react-lite'
import newTask from '../../../store/newTask'
import tasks from '../../../store/tasks'
import { CloseBtn } from '../CloseBtn/CloseBtn'
import { MainBtn } from '../MainBtn/MainBtn'
import { Textarea } from '../Textarea/Textarea'
import style from './modal.module.scss'
import modal from '../../../store/modal'

export const Modal = observer(() => {

  const AddTask = () => {
    tasks.addTask({ title: newTask.title, body: newTask.body })
    newTask.updateTitle('')
    newTask.updateBody('')
    modal.changeVisible()
  }

  const updateTaskTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    newTask.updateTitle(e.target.value)
  }

  const updateTaskBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    newTask.updateBody(e.target.value)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.modal}>
        <Textarea value={newTask.title} onChange={updateTaskTitle} placeholder='Заголовок' />
        <Textarea value={newTask.body} onChange={updateTaskBody} clName='descr' placeholder='Описание' />
        <MainBtn onClick={AddTask}>Добавить</MainBtn>
        <CloseBtn></CloseBtn>
      </div>
    </div>
  )
})
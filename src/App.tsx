import { observer } from 'mobx-react-lite'
import './app.global.scss'
import style from './app.module.scss'
import { TaskBlock } from './components/TaskBlock/TaskBlock'
import { TaskList } from './components/TaskList/TaskList'
import { TaskPage } from './components/TaskPage/TaskPage'
import { AddButton } from './components/UI/AddButton/AddButton'
import { Modal } from './components/UI/Modal/Modal'
import modal from './store/modal'
import taskPage from './store/taskPage'
import { DelBtn } from './components/UI/DelButton/DelBtn'

export const App = observer(() => {

  return (
    <>
      {
        modal.visible && <Modal />
      }
      <div className={style.wrapper}>
        <TaskBlock>
          <div className={style.buttonWrapper}>
            <AddButton cName='addMargin' target='task' />
            <DelBtn />
          </div>
          <TaskList></TaskList>
        </TaskBlock>
        {taskPage.title !== '' && <TaskPage></TaskPage>}
      </div>
    </>
  )
})

export default App

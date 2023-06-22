import { observer } from 'mobx-react-lite'
import './app.global.scss'
import style from './app.module.scss'
import { TaskBlock } from './components/TaskBlock/TaskBlock'
import { TaskList } from './components/TaskList/TaskList'
import { TaskPage } from './components/TaskPage/TaskPage'
import { AddButton } from './components/UI/AddButton/AddButton'
import { Modal } from './components/UI/Modal/Modal'
import modal from './store/modal'

export const App = observer(() => {

  return (
    <>
      {
        modal.visible && <Modal />
      }
      <div className={style.wrapper}>
        <TaskBlock>
          <div className={style.buttonWrapper}>
            <AddButton />
          </div>
          <TaskList></TaskList>
        </TaskBlock>
        <TaskPage></TaskPage>
      </div>
    </>
  )
})

export default App

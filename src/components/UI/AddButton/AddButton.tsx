import addBtnTarget from '../../../store/addBtnTarget'
import modal from '../../../store/modal'
import style from './addButton.module.scss'

interface IAddButtonProps {
  target: string
  cName?: string
}

export const AddButton = ({ target, cName }: IAddButtonProps) => {

  const rootClasses = [style.addButton]
  if (cName === 'addMargin') rootClasses.push(style.margin)

  const openModal = () => {
    modal.changeVisible()
    if (target === 'task') {
      addBtnTarget.updateCurrentTarget('task')
    } else {
      addBtnTarget.updateCurrentTarget('subtask')
    }
  }

  return (
    <button className={rootClasses.join(' ')} onClick={openModal}>+</button>
  )
}
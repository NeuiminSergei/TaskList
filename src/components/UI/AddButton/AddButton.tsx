import modal from '../../../store/modal'
import style from './addButton.module.scss'

interface IAddButtonProps {
  cName?: string
}

function openModal (e: React.MouseEvent) {
  e.stopPropagation()
  modal.changeVisible()
}

export const AddButton = ({ cName }: IAddButtonProps) => {
  const rootClasses = [style.addButton]
  if (cName === 'addMargin') rootClasses.push(style.margin)
  return (
    <button className={rootClasses.join(' ')} onClick={openModal}>+</button>
  )
}
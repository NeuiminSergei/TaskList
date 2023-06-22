import modal from '../../../store/modal'
import style from './closeBtn.module.scss'

export const CloseBtn = () => {
  return (
    <button className={style.closeBtn} onClick={() => modal.changeVisible()}>
      x
    </button>
  )
}
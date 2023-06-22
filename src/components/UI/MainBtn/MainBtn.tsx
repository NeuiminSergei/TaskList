import style from './mainBtn.module.scss'

interface IMainBtnProps {
  children: React.ReactNode
  onClick?: () => void
}

export const MainBtn = ({ children, onClick }: IMainBtnProps) => {
  return (
    <button className={style.mainBtn} onClick={onClick}>{children}</button>
  )
}
import style from './taskBlock.module.scss'

interface ITaskBlockProps {
  children: React.ReactNode
}

export const TaskBlock = ({ children }: ITaskBlockProps) => {
  return (
    <div className={style.taskBlock}>
      {children}
    </div>
  )
}
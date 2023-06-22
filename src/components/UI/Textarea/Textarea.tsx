import { observer } from 'mobx-react-lite'
import style from './textarea.module.scss'

interface ITextareaProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  clName?: string
}

export const Textarea = observer(({ value, onChange, clName, placeholder }: ITextareaProps) => {
  const rootClasses = [style.textarea]
  if (clName === 'descr') rootClasses.push(style.descr)
  return (
    <textarea className={rootClasses.join(' ')} placeholder={placeholder} value={value} onChange={onChange}></textarea>
  )
})
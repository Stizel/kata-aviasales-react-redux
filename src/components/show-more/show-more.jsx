import showMore from './show-more.module.scss'

export default function ShowMore() {
  return (
    <button type="button" className={showMore.button}>
      Показать еще 5 билетов!
    </button>
  )
}

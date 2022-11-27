import { useDispatch, useSelector } from 'react-redux'

import showMore from './show-more.module.scss'
import { showMoreTickets } from '../../store/actions/actions'

export default function ShowMore() {
  const dispatch = useDispatch()
  const showTickets = useSelector((state) => state.showTickets)

  const showMoreClick = (...payload) => dispatch(showMoreTickets(...payload))

  return (
    <button onClick={() => showMoreClick(showTickets)} type="button" className={showMore.button}>
      Показать еще 5 билетов!
    </button>
  )
}

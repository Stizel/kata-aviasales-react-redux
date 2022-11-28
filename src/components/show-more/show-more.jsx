import { useDispatch, useSelector } from 'react-redux'

import { showMoreTickets } from '../../store/actions/actions'

import showMore from './show-more.module.scss'

export default function ShowMore() {
  const dispatch = useDispatch()
  const showTickets = useSelector((state) => state.showTickets)

  const showMoreClick = (payload) => dispatch(showMoreTickets(payload + 5))

  return (
    <button onClick={() => showMoreClick(showTickets)} type="button" className={showMore.button}>
      Показать еще 5 билетов!
    </button>
  )
}

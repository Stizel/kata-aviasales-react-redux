import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import LoadingBar from 'react-top-loading-bar'

import Ticket from '../ticket/ticket'

import ticketsStyl from './tickets-list.module.scss'

export default function TicketsList() {
  const tickets = useSelector((state) => state.tickets)
  const showTickets = useSelector((state) => state.showTickets)
  const loading = useSelector((state) => !state.stop)

  const ticketItems = tickets?.slice(0, showTickets).map((item) => <Ticket key={uuidv4()} item={item} />)

  return (
    <>
      {loading ? (
        <LoadingBar
          progress={100}
          shadow={false}
          waitingTime={20000}
          loaderSpeed={6000}
          height={10}
          color="#2196f3"
          containerStyle={{ position: 'relative' }}
          className={ticketsStyl.loader}
        />
      ) : null}
      <ul className={ticketsStyl.list}>{ticketItems}</ul>
    </>
  )
}

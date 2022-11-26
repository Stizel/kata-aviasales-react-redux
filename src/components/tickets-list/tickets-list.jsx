import Ticket from '../ticket/ticket'

import tickets from './tickets-list.module.scss'

export default function TicketsList() {
  const ticketList = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
  const ticketItems = ticketList.map((item) => {
    const { id } = item
    return <Ticket key={id} />
  })

  return <ul className={tickets.list}>{ticketItems}</ul>
}

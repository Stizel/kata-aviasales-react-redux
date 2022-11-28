import { Alert } from 'antd'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import Ticket from '../ticket/ticket'
import { getFilteredTickets, getSortedTickets } from '../../logic/logic'

import ticketsStyl from './tickets-list.module.scss'

export default function TicketsList() {
  const { tickets, showTickets, filters, tabs, error } = useSelector((state) => state)

  const checkedFilters = filters.filter((item) => item.checked)
  const filteredTickets = getFilteredTickets(checkedFilters, tickets)

  const activeTab = tabs.filter((item) => item.active)[0]
  const sortedTickets = getSortedTickets(activeTab, filteredTickets)

  const ticketItems = sortedTickets ? (
    sortedTickets.slice(0, showTickets).map((item) => <Ticket key={uuidv4()} item={item} />)
  ) : (
    <Alert
      message="Рейсов, подходящих под заданные фильтры, не найдено"
      description="<-- Выберите один из фильтров справа"
      type="warning"
      showIcon
    />
  )

  const content = error ? (
    <Alert message="Фатальная ошибка!" description="Перезагрузите страницу" type="error" showIcon />
  ) : (
    ticketItems
  )

  return <ul className={ticketsStyl.list}>{content}</ul>
}

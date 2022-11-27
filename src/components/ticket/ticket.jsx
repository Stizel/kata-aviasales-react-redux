import { add, format } from 'date-fns'

import ticketStyl from './ticket.module.scss'

export default function Ticket({ item }) {
  const { price, carrier, segments } = item

  const ticketPrice = `${price.toLocaleString('ru')} ₽`

  const aviaCompany = `https://pics.avs.io/220/76/${carrier}.png`

  const getTicketInfo = (ticket) => {
    const { date, duration, origin, destination, stops } = ticket

    const start = format(new Date(date), 'HH:mm')
    const landing = format(add(new Date(date), { minutes: duration }), 'HH:mm')

    const hours = Math.floor(duration / 60)
    const minutes = duration - hours * 60

    const addZero = (num) => (num < 10 ? `0${num}` : `${num}`)

    let stopsLabel
    if (stops.length < 1) stopsLabel = 'Без пересадок'
    if (stops.length === 1) stopsLabel = '1 пересадка'
    if (stops.length > 1) stopsLabel = `${stops.length} пересадки`

    return {
      stopsLabel,
      stops: stops.join(', '),
      cities: `${origin} – ${destination}`,
      time: `${start} – ${landing}`,
      duration: `${addZero(hours)}ч ${addZero(minutes)}м`,
    }
  }

  const oneWayTicket = getTicketInfo(segments[0])
  const returnTicket = getTicketInfo(segments[1])


  return (
    <li className={ticketStyl.item}>
      <div className={ticketStyl.header}>
        <div className={ticketStyl.price}>{ticketPrice}</div>
        <img src={aviaCompany} alt="Logo" className={ticketStyl.logo} />
      </div>
      <ul className={ticketStyl.body}>
        <li className={ticketStyl.row}>
          <div className={ticketStyl.col}>
            <div className={ticketStyl.label}>{oneWayTicket.cities}</div>
            <div className={ticketStyl.text}>{oneWayTicket.time}</div>
          </div>
          <div className={ticketStyl.col}>
            <div className={ticketStyl.label}>В пути</div>
            <div className={ticketStyl.text}>{oneWayTicket.duration}</div>
          </div>
          <div className={ticketStyl.col}>
            <div className={ticketStyl.label}>{oneWayTicket.stopsLabel}</div>
            <div className={ticketStyl.text}>{oneWayTicket.stops}</div>
          </div>
        </li>
        <li className={ticketStyl.row}>
          <div className={ticketStyl.col}>
            <div className={ticketStyl.label}>{returnTicket.cities}</div>
            <div className={ticketStyl.text}>{returnTicket.time}</div>
          </div>
          <div className={ticketStyl.col}>
            <div className={ticketStyl.label}>В пути</div>
            <div className={ticketStyl.text}>{returnTicket.duration}</div>
          </div>
          <div className={ticketStyl.col}>
            <div className={ticketStyl.label}>{returnTicket.stopsLabel}</div>
            <div className={ticketStyl.text}>{returnTicket.stops}</div>
          </div>
        </li>
      </ul>
    </li>
  )
}

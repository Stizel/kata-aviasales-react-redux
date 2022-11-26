import ticket from './ticket.module.scss'

export default function Ticket() {
  const s7 = './s7-logo.png'
  return (
    <li className={ticket.item}>
      <div className={ticket.header}>
        <div className={ticket.price}>13 400 P</div>
        <img src={s7} alt="Logo" className={ticket.logo} />
      </div>
      <ul className={ticket.body}>
        <li className={ticket.row}>
          <div className={ticket.col}>
            <div className={ticket.label}>MOW – HKT</div>
            <div className={ticket.text}>10:45 – 08:00</div>
          </div>
          <div className={ticket.col}>
            <div className={ticket.label}>В пути</div>
            <div className={ticket.text}>21ч 15m</div>
          </div>
          <div className={ticket.col}>
            <div className={ticket.label}>2 пересадки</div>
            <div className={ticket.text}>HKG, JNB</div>
          </div>
        </li>
        <li className={ticket.row}>
          <div className={ticket.col}>
            <div className={ticket.label}>MOW – HKT</div>
            <div className={ticket.text}>11:20 – 00:50</div>
          </div>
          <div className={ticket.col}>
            <div className={ticket.label}>В пути</div>
            <div className={ticket.text}>13ч 30м</div>
          </div>
          <div className={ticket.col}>
            <div className={ticket.label}>1 пересадка</div>
            <div className={ticket.text}>HKG</div>
          </div>
        </li>
      </ul>
    </li>
  )
}

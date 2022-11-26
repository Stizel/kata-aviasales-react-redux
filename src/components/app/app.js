import Transfers from '../transfers/transfers'
import Filter from '../filter/filter'
import TicketsList from '../tickets-list/tickets-list'
import ShowMore from '../show-more/show-more'

import app from './app.module.scss'

export default function App() {
  const logo = './plane-logo.png'
  return (
    <div className={app.wrapper}>
      <header className={app.header}>
        <img src={logo} className={app.logo} alt="logo" />
      </header>
      <main className={app.main}>
        <Transfers />
        <section className={app.content}>
          <Filter />
          <TicketsList />
          <ShowMore />
        </section>
      </main>
    </div>
  )
}

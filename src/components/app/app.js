import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import StopsFilter from '../stops-filter/stops-filter'
import Tabs from '../tabs/tabs'
import TicketsList from '../tickets-list/tickets-list'
import ShowMore from '../show-more/show-more'
import { fetchData } from '../../store/actions/ticketsActions'

import app from './app.module.scss'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const logo = './plane-logo.png'
  return (
    <div className={app.wrapper}>
      <header className={app.header}>
        <img src={logo} className={app.logo} alt="logo" />
      </header>
      <main className={app.main}>
        <StopsFilter />
        <section className={app.content}>
          <Tabs />
          <TicketsList />
          <ShowMore />
        </section>
      </main>
    </div>
  )
}

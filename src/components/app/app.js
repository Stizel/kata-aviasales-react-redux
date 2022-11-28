import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'

import Filters from '../filters/filters'
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

  const { tickets } = useSelector((state) => state)
  const loading = useSelector((state) => !state.stop)
  const progress = tickets.length / 100

  const logo = './plane-logo.png'
  return (
    <div className={app.wrapper}>
      <header className={app.header}>
        <img src={logo} className={app.logo} alt="logo" />
      </header>
      <main className={app.main}>
        <Filters />
        <section className={app.content}>
          <Tabs />
          {loading ? (
            <LoadingBar
              progress={progress}
              shadow={false}
              height={10}
              color="#2196f3"
              containerStyle={{ position: 'relative' }}
              className={app.loader}
            />
          ) : null}
          <TicketsList />
          <ShowMore />
        </section>
      </main>
    </div>
  )
}

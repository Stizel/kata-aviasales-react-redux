import { useDispatch, useSelector } from 'react-redux'

import { toggleAllFilters, toggleFilters } from '../../store/actions/actions'

import transfersStyl from './stops-filter.module.scss'

export default function StopsFilter() {
  const dispatch = useDispatch()
  const stopsFilter = useSelector((state) => state.stopsFilter)
  const selectAll = useSelector((state) => state.selectAll)

  const onAllFiltersCheck = (payload) => dispatch(toggleAllFilters(payload))
  const onFiltersCheck = (...payload) => dispatch(toggleFilters(...payload))

  const checkAll = (
    <li>
      <label htmlFor="all" className={transfersStyl.label}>
        <input
          id="all"
          className={transfersStyl.input}
          type="checkbox"
          checked={selectAll}
          onChange={(e) => onAllFiltersCheck(e.target.checked)}
        />
        Все
      </label>
    </li>
  )

  const transfersCheck = stopsFilter.map((item) => {
    const { label, id, checked } = item
    return (
      <li key={id}>
        <label htmlFor={id} className={transfersStyl.label}>
          <input
            id={id}
            className={transfersStyl.input}
            type="checkbox"
            checked={checked}
            onChange={(e) => onFiltersCheck(id, e.target.checked)}
          />
          {label}
        </label>
      </li>
    )
  })

  return (
    <aside className={transfersStyl.wrapper}>
      <h2 className={transfersStyl.title}>количетво пересадок</h2>
      <ul className={transfersStyl.list}>
        {checkAll}
        {transfersCheck}
      </ul>
    </aside>
  )
}

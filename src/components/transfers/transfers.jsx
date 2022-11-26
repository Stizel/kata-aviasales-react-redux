import { connect } from 'react-redux'

import * as actions from '../../store/actions'

import transfersStyl from './transfers.module.scss'

function Transfers({ transfers, selectAll, toggleTransfers, toggleAllTransfers }) {
  const checkAll = (
    <li>
      <label htmlFor="all" className={transfersStyl.label}>
        <input
          id="all"
          className={transfersStyl.input}
          type="checkbox"
          checked={selectAll}
          onChange={(e) => toggleAllTransfers(e.target.checked)}
        />
        Все
      </label>
    </li>
  )

  const transfersCheck = transfers.map((item) => {
    const { label, id, checked } = item
    return (
      <li key={id}>
        <label htmlFor={id} className={transfersStyl.label}>
          <input
            id={id}
            className={transfersStyl.input}
            type="checkbox"
            checked={checked}
            onChange={(e) => toggleTransfers(id, e.target.checked)}
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

const mapStateToProps = (state) => ({
  transfers: state.transfersReducer.transfers,
  selectAll: state.transfersReducer.selectAll,
})

export default connect(mapStateToProps, actions)(Transfers)

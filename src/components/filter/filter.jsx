import { connect } from 'react-redux'
import classNames from 'classnames'

import * as actions from '../../store/actions'

import filter from './filter.module.scss'

function Filter({ filters, changeFilter }) {
  const tabz = filters.map((item) => {
    const { id, label, active } = item

    const tabClass = classNames({
      [filter.tab]: true,
      [filter['tab--active']]: active,
    })

    return (
      <button onClick={() => changeFilter(id)} key={id} className={tabClass} type="button">
        {label}
      </button>
    )
  })

  return <div className={filter.tabs}>{tabz}</div>
}

const mapStateToProps = (state) => ({
  filters: state.filtersReducer.filters,
})

export default connect(mapStateToProps, actions)(Filter)

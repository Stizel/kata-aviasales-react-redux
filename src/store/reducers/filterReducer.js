const defaultState = {
  filters: [
    { id: 'cheap', label: 'Самый дешевый', active: true },
    { id: 'fast', label: 'Самый быстрый', active: false },
    { id: 'optimal', label: 'Оптимальный', active: false },
  ],
}

const filtersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER': {
      const { filters } = state
      const newFilters = filters.map((item) => ({ ...item, active: item.id === action.payload }))
      return { ...state, filters: newFilters }
    }
    default:
      return state
  }
}

export default filtersReducer

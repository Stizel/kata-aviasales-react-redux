const defaultState = {
  tabs: [
    { id: 'cheap', label: 'Самый дешевый', active: true },
    { id: 'fast', label: 'Самый быстрый', active: false },
    { id: 'optimal', label: 'Оптимальный', active: false },
  ],
  selectAll: false,
  filters: [
    { id: 0, label: 'Без пересадок', checked: true },
    { id: 1, label: '1 пересадка', checked: false },
    { id: 2, label: '2 пересадки', checked: false },
    { id: 3, label: '3 пересадки', checked: false },
  ],
  tickets: [],
  stop: false,
  error: false,
  showTickets: 5,
}

const TOGGLE_FILTERS = 'TOGGLE_FILTERS'
const TOGGLE_ALL_FILTERS = 'TOGGLE_ALL_FILTERS'
const SET_TAB = 'SET_TAB'
const GET_TICKETS = 'GET_TICKETS'
const SET_STOP = 'SET_STOP'
const SET_ERROR = 'SET_ERROR'
const SHOW_MORE_TICKETS = 'SHOW_MORE_TICKETS'

const reducer = (state = defaultState, action) => {
  let newFilters
  let allChecked
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
      }
    case SET_STOP:
      return {
        ...state,
        stop: action.payload,
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case SHOW_MORE_TICKETS:
      return {
        ...state,
        showTickets: action.payload,
      }

    case TOGGLE_FILTERS:
      newFilters = state.filters.map((item) =>
        item.id === action.payload.id ? { ...item, checked: action.payload.isChecked } : item
      )
      allChecked = newFilters.every((item) => item.checked)
      return {
        ...state,
        filters: newFilters,
        selectAll: allChecked,
      }

    case TOGGLE_ALL_FILTERS:
      allChecked = action.payload
      newFilters = state.filters.map((item) => ({ ...item, checked: action.payload }))
      return {
        ...state,
        filters: newFilters,
        selectAll: allChecked,
      }

    case SET_TAB: {
      const newTabs = state.tabs.map((item) => ({ ...item, active: item.id === action.payload }))
      return {
        ...state,
        tabs: newTabs,
      }
    }
    default:
      return state
  }
}

export default reducer

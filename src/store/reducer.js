const defaultState = {
  tabs: [
    { id: 'cheap', label: 'Самый дешевый', active: true },
    { id: 'fast', label: 'Самый быстрый', active: false },
    { id: 'optimal', label: 'Оптимальный', active: false },
  ],
  selectAll: false,
  stopsFilter: [
    { id: 'no', label: 'Без пересадок', checked: true },
    { id: 'one', label: '1 пересадка', checked: false },
    { id: 'two', label: '2 пересадки', checked: false },
    { id: 'three', label: '3 пересадки', checked: false },
  ],
  tickets: [],
  stop: false,
  isError: false,
  showTickets: 5,
}

const TOGGLE_FILTERS = 'TOGGLE_FILTERS'
const TOGGLE_ALL_FILTERS = 'TOGGLE_ALL_FILTERS'
const SET_TAB = 'SET_TAB'
const ADD_TICKETS = 'ADD_TICKETS'
const GET_SEARCH_ID = 'GET_SEARCH_ID'
const GET_TICKETS = 'GET_TICKETS'
const SET_STOP = 'SET_STOP'
const SET_ERROR = 'SET_ERROR'
const SHOW_MORE_TICKETS = 'SHOW_MORE_TICKETS'

const reducer = (state = defaultState, action) => {
  let newTransfers
  let allChecked
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
      }
    case SET_STOP:
      console.log('stop')
      return {
        ...state,
        stop: action.payload,
      }
    case SET_ERROR:
      return {
        ...state,
        isError: action.payload,
      }
    case SHOW_MORE_TICKETS:
      return {
        ...state,
        showTickets: action.payload,
      }
    case GET_SEARCH_ID:
      console.log(action)
      return { ...state, searchId: action.payload }

    case ADD_TICKETS:
      console.log(action)
      return { ...state, tickets: [...state.tickets, ...action.payload.tickets] }

    case TOGGLE_FILTERS:
      newTransfers = state.stopsFilter.map((item) =>
        item.id === action.payload.id ? { ...item, checked: action.payload.isChecked } : item
      )
      allChecked = newTransfers.every((item) => item.checked)
      return { ...state, stopsFilter: newTransfers, selectAll: allChecked }

    case TOGGLE_ALL_FILTERS:
      allChecked = action.payload
      newTransfers = state.stopsFilter.map((item) => ({ ...item, checked: action.payload }))
      return { ...state, stopsFilter: newTransfers, selectAll: allChecked }

    case SET_TAB: {
      const newTabs = state.tabs.map((item) => ({ ...item, active: item.id === action.payload }))
      return { ...state, tabs: newTabs }
    }
    default:
      return state
  }
}

export default reducer

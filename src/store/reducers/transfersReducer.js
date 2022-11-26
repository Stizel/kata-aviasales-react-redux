const defaultState = {
  selectAll: false,
  transfers: [
    { id: 'no', label: 'Без пересадок', checked: true },
    { id: 'one', label: '1 пересадка', checked: false },
    { id: 'two', label: '2 пересадки', checked: false },
    { id: 'three', label: '3 пересадки', checked: false },
  ],
}

const transfersReducer = (state = defaultState, action) => {
  let newTransfers
  let allChecked
  switch (action.type) {
    case 'TOGGLE_TRANSFERS':
      newTransfers = state.transfers.map((item) =>
        item.id === action.payload.id ? { ...item, checked: action.payload.isChecked } : item
      )
      allChecked = newTransfers.every((item) => item.checked)
      return { ...state, transfers: newTransfers, selectAll: allChecked }
    case 'TOGGLE_ALL_TRANSFERS':
      allChecked = action.payload
      newTransfers = state.transfers.map((item) => ({ ...item, checked: action.payload }))
      return { ...state, transfers: newTransfers, selectAll: allChecked }
    default:
      return state
  }
}

export default transfersReducer

export const changeFilter = (id) => ({ type: 'CHANGE_FILTER', payload: id })
export const toggleTransfers = (id, isChecked) => ({ type: 'TOGGLE_TRANSFERS', payload: { id, isChecked } })
export const toggleAllTransfers = (isChecked) => ({ type: 'TOGGLE_ALL_TRANSFERS', payload: isChecked })

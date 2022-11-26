import { combineReducers } from 'redux'

import filtersReducer from './filterReducer'
import transfersReducer from './transfersReducer'

const rootReducer = combineReducers({
  filtersReducer,
  transfersReducer,
})
export default rootReducer

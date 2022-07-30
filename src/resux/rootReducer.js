import { combineReducers, createStore } from 'redux'
import resultReduser from './reduser'
import resultRaspisanie from './reduserRaspisanie'
const rootReduser = combineReducers({resultReduser,resultRaspisanie})
const store = createStore(rootReduser , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;
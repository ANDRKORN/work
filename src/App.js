import './App.css';
import { Provider } from 'react-redux'
import store from './resux/rootReducer'
import Raspisanie from './Raspisanie'
function App() {
  console.log(store);
  return (
    <Provider store={store} >
      <button onClick={() => {
        store.dispatch({ type: 'CHANGE_CELL', payload: {
          update: {
            cdpac: null,
            cdpriem: "0c36d887-70ba-4c4c-9e4c-ea939ffc8be3",
            cdpriempac: "71b357fd-5ab9-450d-9bd4-8f3ffc41cb50",
            cduser_zap: null,
            cdvidpriem: null,
            cnt: 1,
            color: "backgroundColor",
            fiopac: "ЛОХ",
            selectedcl: false,
            status_zap: 0,
            timep: "08:00",
            vidp_color: "0",
          }
        } })
      }}>click</button>
      <button onClick={() => {
        store.dispatch({ type: 'CHANGE_CELL', payload: {
          add: {
            cdpac: null,
            cdpriem: "0c36d887-70ba-4c4c-9e4c-ea939ffc8be3",
            cdpriempac: "71b357fd-5ab9-450d-9bd4-8f3ffc41cb50",
            cduser_zap: null,
            cdvidpriem: null,
            cnt: 1,
            color: "backgroundColor",
            fiopac: "TEST 1",
            selectedcl: false,
            status_zap: 0,
            timep: "08:00",
            vidp_color: "0",
          }
        } })
      }}>add</button>
      <div>
        <Raspisanie />
      </div>
    </Provider>
  );
}

export default App;

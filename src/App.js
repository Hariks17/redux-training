import './App.css';
import { createStore } from 'redux'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import { allreducer } from './reducers/reducers';

const store = createStore(allreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <div className="App"> 
    <Provider store={store}>
        <Counter/>    
    </Provider>     
    </div>
  );
}

export default App;

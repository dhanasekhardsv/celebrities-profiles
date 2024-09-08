import { Provider } from 'react-redux';
import './App.css';
import Dashboard from './components/Dashboard';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='px-4'>
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;

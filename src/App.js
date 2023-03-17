import logo from './logo.svg';
import './App.css';
import Navbar from './components/Home/Navbar';
import ProductWrapper from './components/Products/ProductIWrapper';
import { Provider } from 'react-redux';
import store from './redux/store';
import CartContainer from './components/Cart/CartContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Navbar />
     <ProductWrapper />
     <CartContainer />
    </div>
    </Provider>
  );
}

export default App;

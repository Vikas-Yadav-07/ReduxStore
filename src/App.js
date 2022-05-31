import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom'
// import Header from './components/Header/Header';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './context';


function App() {
  const {loading}  = useGlobalContext();
  if(loading){
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      <CartContainer />
    </div>
  );
}

export default App;

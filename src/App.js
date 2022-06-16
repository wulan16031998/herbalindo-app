import './App.css';
import Intro from './components/Intro';
import NavigasiBar from './components/NavigasiBar';
import NewProduct from './components/NewProduct';
import PowerMerchant from './components/PowerMerchants';
import './style/landingpage.css'

function App() {
  return (
    <div>
    {/* intro section */}
      <div className='myBG'>
        <NavigasiBar/ >
        <Intro/ >
      </div>
    {/* end of intro */}
    {/*power merchants */}
      <div className='power'>
        <PowerMerchant />
        <NewProduct />
      </div>
    { /*end power merchants*/ }
    </div>
  );
}

export default App;

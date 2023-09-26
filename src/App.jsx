
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'
import Weather from './components/Weather'
import Footer from './components/Footer'

function App() {



  return (
    <>
      <div className='container-fluid py-4 bg-info text-white '>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Forecasting App</h1>
          </div>
        </div>
      </div>
      <Weather />
      <Weather />
      <Footer />
    </>
  )
}

export default App

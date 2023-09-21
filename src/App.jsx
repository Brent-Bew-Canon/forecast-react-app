import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'

function App() {

  return (
    <>
      <div className='container-fluid py-4 bg-info text-white'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h1>Forecasting App</h1>
          </div>
        </div>
      </div>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-12 col-lg-4 mx-auto'>
            <form>
              <div class="mb-3">
                <p>Enter a city name below to search for the weather!</p>
                <input type="text" class="form-control" id="city" placeholder='Enter city name...' />
              </div>
              <div className='text-center'>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
          <div className='col-12 col-lg-8 mx-auto bg-light rounded'>
            <h2 className='py-2'>City Name</h2>
            <p className='py-2'>Current Temp</p>
            <p className='py-2'>Wind</p>
            <p className='py-2'>Humidity</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

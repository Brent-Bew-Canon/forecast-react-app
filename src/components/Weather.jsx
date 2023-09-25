import { useState } from 'react'

function Weather() {

    const [city, setCity] = useState('')
    const [weather, setWeather] = useState({ city: 'City Name', temp: 'Current Temp', wind: 'Wind Conditions', humidity: 'Humidity', conditions: 'https://img.freepik.com/premium-vector/sunny-day-abstract-sun-isolated-background-weather-icon-page-symbol-your-web-site-design_769200-543.jpg?w=2000' })

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=760dc2617eb1a39f1c3c50666743a368`)
            const result = await response.json()

            setWeather({ city: city, temp: `${result.list[0].main.temp} °`, wind: `${result.list[0].wind.speed} MPH`, humidity: `${result.list[0].main.humidity} %`, conditions: `https://openweathermap.org/img/wn/${result.list[0].weather[0].icon}@2x.png` })

            console.log(weather);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='container mt-4 border border-dark p-4'>
                <div className='row'>
                    <div className='col-12 col-lg-4 mx-auto my-2'>
                        <form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <p>Enter a city name below to search for the weather!</p>
                                <input type="text" className="form-control" id="city" placeholder='Enter city name...' onChange={(e) => { setCity(e.target.value) }} />
                            </div>
                            <div className='text-center'>
                                <button type="submit" className="btn btn-primary">Search</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-12 col-lg-4 mx-auto rounded my-2 text-center'>
                        <h2 className='py-2 fw-bold'>{weather.city}</h2>
                        <h4>Current Temp</h4>
                        <p className='py-2'>{weather.temp}</p>
                        <h4>Wind</h4>
                        <p className='py-2'>{weather.wind}</p>
                        <h4>Humidity</h4>
                        <p className='py-2'>{weather.humidity}</p>
                    </div>
                    <div className='col-12 col-lg-4 mx-auto  rounded my-2 text-center'>
                        <img className='w-25 my-3' src={weather.conditions} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Weather
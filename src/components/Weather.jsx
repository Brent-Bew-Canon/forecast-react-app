import { useState } from 'react'
import swal from 'sweetalert'

function Weather() {

    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [weather, setWeather] = useState({ city: 'City Name', temp: 'Current Temp', wind: 'Wind Conditions', humidity: 'Humidity', conditions: 'https://img.freepik.com/premium-vector/sunny-day-abstract-sun-isolated-background-weather-icon-page-symbol-your-web-site-design_769200-543.jpg?w=2000' })

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            // const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},Ut,US&limit=1&appid=760dc2617eb1a39f1c3c50666743a368`)
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${state},US&units=imperial&appid=760dc2617eb1a39f1c3c50666743a368`)
            const result = await response.json()

            setWeather({ city: city, temp: `${result.list[0].main.temp} °`, wind: `${result.list[0].wind.speed} MPH`, humidity: `${result.list[0].main.humidity} %`, conditions: `https://openweathermap.org/img/wn/${result.list[0].weather[0].icon}@2x.png` })

        } catch (error) {
            swal("Oops!", "City not found!", "error");
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
                            <div className='mb-3'>
                                <select onChange={(e) => { setState(e.target.value) }}>
                                    <option value="AL">Alabama (AL)</option>
                                    <option value="AK">Alaska (AK)</option>
                                    <option value="AZ">Arizona (AZ)</option>
                                    <option value="AR">Arkansas (AR)</option>
                                    <option value="CA">California (CA)</option>
                                    <option value="CO">Colorado (CO)</option>
                                    <option value="CT">Connecticut (CT)</option>
                                    <option value="DE">Delaware (DE)</option>
                                    <option value="DC">District Of Columbia (DC)</option>
                                    <option value="FL">Florida (FL)</option>
                                    <option value="GA">Georgia (GA)</option>
                                    <option value="HI">Hawaii (HI)</option>
                                    <option value="ID">Idaho (ID)</option>
                                    <option value="IL">Illinois (IL)</option>
                                    <option value="IN">Indiana (IN)</option>
                                    <option value="IA">Iowa (IA)</option>
                                    <option value="KS">Kansas (KS)</option>
                                    <option value="KY">Kentucky (KY)</option>
                                    <option value="LA">Louisiana (LA)</option>
                                    <option value="ME">Maine (ME)</option>
                                    <option value="MD">Maryland (MD)</option>
                                    <option value="MA">Massachusetts (MA)</option>
                                    <option value="MI">Michigan (MI)</option>
                                    <option value="MN">Minnesota (MN)</option>
                                    <option value="MS">Mississippi (MS)</option>
                                    <option value="MO">Missouri (MO)</option>
                                    <option value="MT">Montana (MT)</option>
                                    <option value="NE">Nebraska (NE)</option>
                                    <option value="NV">Nevada (NV)</option>
                                    <option value="NH">New Hampshire (NH)</option>
                                    <option value="NJ">New Jersey (NJ)</option>
                                    <option value="NM">New Mexico (NM)</option>
                                    <option value="NY">New York (NY)</option>
                                    <option value="NC">North Carolina (NC)</option>
                                    <option value="ND">North Dakota (ND)</option>
                                    <option value="OH">Ohio (OH)</option>
                                    <option value="OK">Oklahoma (OK)</option>
                                    <option value="OR">Oregon (OR)</option>
                                    <option value="PA">Pennsylvania (PA)</option>
                                    <option value="RI">Rhode Island (RI)</option>
                                    <option value="SC">South Carolina (SC)</option>
                                    <option value="SD">South Dakota (SD)</option>
                                    <option value="TN">Tennessee (TN)</option>
                                    <option value="TX">Texas (TX)</option>
                                    <option value="UT">Utah (UT)</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </select>
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
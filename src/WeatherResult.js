import React from 'react'
import "./weather.css"


function WeatherResult({ date, mintemp, maxtemp, condition, icon }) {
    return (
        <div className="container">
            <div className="row mt-5 ">
                <div className="col-6">
                    <h2>{date}</h2>
                </div>
                <div className="col-6">
                    <ul className='d-flex'>
                        <li><img src={icon} /></li>
                        <li>{condition}</li>
                        <li>{mintemp} C / {maxtemp} C</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WeatherResult

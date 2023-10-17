import React, { useEffect, useState } from "react";
import { FaStreetView } from 'react-icons/fa';

const Temp = () => {

    const [city, setCity] = useState('');
    const [state, setState] = useState('london');

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=db53821a6da75a89b882a5d1a9b2e7b4`;
            const data = await fetch(url);
            const jsonData = await data.json();
            // console.log(jsonData.main.temp);
            setCity(jsonData);
        }
        fetchApi();
    }, [state]);


    const inp = (e) => {
        setState(e.target.value);
        // console.log(state);
    }

    return <>
        <div className="main">
            <h1>Temprature filter</h1>
            <div className="temp-card">
                <div className="input">
                    <input type="search"
                        value={state}
                        onChange={inp}
                    />
                </div>
                {(!city?.main ? <p className="not-found">City not found</p> :
                    <>
                        <h1> <FaStreetView /> {state} </h1>
                        <h2>{city?.main?.temp} deg cel</h2>
                        <p className="min-max">min temprature : {city?.main?.temp_min} <br/> max temprature : {city?.main?.temp_max}</p>
                    </>
                )}

            </div>
        </div>
    </>
}

export default Temp
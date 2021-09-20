import { useEffect, useState } from 'react';
import './stye.temp/tem.css'
let Temapp = () => {
   
    const [data, setData] = useState([])
    const [Search, SetSearch] = useState([""])
   

    useEffect(() => {
        const fetchApi = async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=e1c32dd0eb29cd3b266f3b06ff7c70b4&units=metric`
            const response = await fetch(url)
            const resJson = await response.json();
           //  console.log(resJson)
           
            setData(resJson.main)
    
            console.log(resJson)
           
           
   
   
        };
       fetchApi();
   
    },[Search])


    console.log(data,"DATA DATA==>")
    console.log(Search,"SERACH DATA==>")

    return (
        <div className="container">
            <h1 className="h-temp">Naseema-weather-Temprature</h1>
            <div className="card">
                <div className="inputdiv">
                    <input    className="input" type="search"  onChange={(e)=>{SetSearch(e.target.value)}}  />
                    <button  className="s-btn" >seacrh</button>
                </div>

                <div className="cityname">
                    <h1> <i className="fas fa-street-view"></i>
                        
                
                    {data?Search:(<p>No city Found</p>)}
                    
                    </h1>
                    <h3 className="h3">
                    <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                    
                   {data?data.temp :(<p>0</p>)}
                    
                    </h3>
                    <h3 className="h3">
                    <i className="fas fa-temperature-low"></i>
                   {data?data.temp_min :(<p>0</p>)}
                    
                    </h3>
                    <h3 className="h3">
                    <i className="fas fa-temperature-low"></i>
                   {data?data.temp_max :(<p>0</p>)}
                    
                    </h3>
                   
                   
                  
                      
                </div>



            </div>

        </div>

    );
}

export default Temapp;
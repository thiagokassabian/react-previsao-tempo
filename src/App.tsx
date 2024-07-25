import { useRef, useState } from "react"
import "./App.css"
import axios from "axios"
import { WeatherInfo } from "./model/Weather"

// const apiKey = "e276bb6539f39bfb249971234d3729dd"

function App() {
	const inputRef = useRef<HTMLInputElement>(null)
	const [city, setCity] = useState<WeatherInfo>({} as WeatherInfo)
	const [loading, setLoading] = useState(false)

	const handleClick = async () => {
		if (inputRef.current) {
			setLoading(true)
			const key = import.meta.env.VITE_APIKEY
			const city = inputRef.current.value
			const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

			const response = await axios.get(apiCall)
			console.log(response.data)
			setCity(response.data)
			setLoading(false)
		}
	}

	return (
		<>
			<input type="text" ref={inputRef} className="border" />
			<button onClick={handleClick}>Buscar</button>

			<div>
				{loading ? (
					<p>Carregando...</p>
				) : (
					<>
						{city.main && (
							<>
								<p>Cidade: {city.name}</p>
								<p>Temperatura: {city.main.temp}°</p>
								<p>Umidade: {city.main.humidity}%</p>
								<p>Velocidade do vento: {city.wind.speed} km/h</p>
								<p>{city.weather[0].description}</p>
							</>
						)}
					</>
				)}
			</div>
		</>
	)
}

export default App

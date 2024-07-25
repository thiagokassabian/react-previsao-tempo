import { useRef } from "react"
import "./App.css"
import axios from "axios"

// const apiKey = "e276bb6539f39bfb249971234d3729dd"

function App() {
	const inputRef = useRef<HTMLInputElement>(null)

	const handleClick = async () => {
		const key = import.meta.env.VITE_APIKEY

		if (inputRef.current) {
			const city = inputRef.current.value
			const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

			const response = await axios.get(apiCall)
			console.log(response.data)
		}
	}

	return (
		<>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<input
				type="text"
				ref={inputRef}
				className="
				bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
				focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 
				dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
				dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
			<button onClick={handleClick}>Buscar</button>
		</>
	)
}

export default App

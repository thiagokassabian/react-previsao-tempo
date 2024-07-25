import { useRef } from "react";
import "./App.css"

function App() {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		if (inputRef.current) {
			console.log(inputRef.current.value);
		}
	}

	return (
		<>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<input
				type="text"
				ref={inputRef}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
			<button onClick={handleClick}>Buscar</button>
		</>
	)
}

export default App

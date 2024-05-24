import { Link } from 'react-router-dom'

const App = () => {
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			Hello if you are here for Employees Click Here
			<Link className="text-blue-700 underline pl-1" to="/Employees">
				Employees
			</Link>
		</div>
	)
}

export default App

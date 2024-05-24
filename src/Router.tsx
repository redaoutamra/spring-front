import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Link,
} from 'react-router-dom'
import EnployeesList from './pages/employees/EnployeesList'
import App from './App'
import SingleEmployee from './pages/employees/SingleEmployee'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			errorElement={
				<div className="h-screen w-screen flex items-center justify-center">
					The page you are looking for is not found 404 for Employees Click Here
					<Link className="text-blue-700 underline pl-1" to="/Employees">
						Employees
					</Link>
				</div>
			}
		>
			<Route path="/" element={<App />} />
			<Route path="/Employees" element={<EnployeesList />} />
			<Route path="/Employees/:id" element={<SingleEmployee />} />
		</Route>,
	),
)

const Router = () => {
	return <RouterProvider router={router} />
}

export default Router

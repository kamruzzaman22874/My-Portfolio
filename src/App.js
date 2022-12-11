
import { Toaster } from 'react-hot-toast';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Common from './common/Common';
// import CarSell from './components/projectDetails/carSell';

function App() {
	// const router = createBrowserRouter([
	// 	{
	// 		path: '/carSell',
	// 		element : <CarSell></CarSell>

	// 	}
	// ])
	
	return (
		<div className=''>
			<Common></Common>
			<Toaster></Toaster>
			{/* <RouterProvider router={router}></RouterProvider> */}
		</div>
	);
}

export default App;

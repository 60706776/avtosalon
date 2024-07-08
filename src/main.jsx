import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Admin from './components/Admin.jsx'

import { PostsProvider } from './components/PostProvider.jsx'
import Car from './components2/Car.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<PostsProvider>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/car/:id' element={<Car />} />
					<Route path='/admin' element={<Admin />} />
				</Routes>
			</PostsProvider>
		</BrowserRouter>
	</React.StrictMode>
)

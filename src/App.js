import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/header'
import { Employer } from './pages/employer'
import { Home } from './pages/home'
import { NotFound } from './pages/notFound'

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div>
				<div className='container'>
					<Routes>
						<Route path='/Home' element={<Home />} />
						<Route path='/Emploeyrs' element={<Employer />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App

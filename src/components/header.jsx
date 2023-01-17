import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<header className='header'>
			<div>
				<span>
					<Link to='/Home'>Home</Link>
				</span>
				<span>
					<Link to='/Emploeyrs'>Employers</Link>
				</span>
			</div>
		</header>
	)
}

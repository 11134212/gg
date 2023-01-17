import React, { useState } from 'react'

export const Home = () => {
	const [name, setName] = useState('')
	const [salary, setSalary] = useState('')

	const postData = event => {
		event.preventDefault()
		let user = {
			name,
			salary,
		}

		let response = fetch('https://635fd274ca0fe3c21aa57afd.mockapi.io/dxsca', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(user),
		})

		console.log(postData)
	}

	return (
		<header className='wrapper'>
			<form onSubmit={postData}>
				<button>Добавить сотрудника</button>
				<input
					type='text'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<input
					type='text'
					value={salary}
					onChange={e => setSalary(e.target.value)}
				/>
			</form>
		</header>
	)
}

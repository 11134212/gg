import { useEffect, useState } from 'react'

export const Employer = () => {
	const [employeeList, setEmployeeList] = useState([])
	const [refetch, setRefetch] = useState(false)
	useEffect(() => {
		fetch('https://635fd274ca0fe3c21aa57afd.mockapi.io/data2', {
			method: 'GET',
		})
			.then(employee => employee.json())
			.then(employee => {
				setEmployeeList(employee)
			})
		setRefetch(false)
	}, [refetch])
	const deleteWorker = id => {
		fetch(`https://635fd274ca0fe3c21aa57afd.mockapi.io/data2/${id}`, {
			method: 'DELETE',
		})
		setRefetch(true)
	}

	return (
		<div>
			{employeeList.map(worker => {
				return (
					<div key={worker.id}>
						{worker.name}
						{worker.salary}
						<button onClick={() => deleteWorker(worker.id)}>delete</button>
					</div>
				)
			})}
		</div>
	)
}

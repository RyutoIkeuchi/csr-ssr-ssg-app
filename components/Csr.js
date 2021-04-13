import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const URL = 'https://jsonplaceholder.typicode.com/comments';

export default function Csr() {
	const [data, setData] = useState([]);
	useEffect(async () => {
		const res = await fetch(URL);
		const data = await res.json();
		setData(data);
	}, []);

	return (
		<div className='p-4'>
			<h2 className="text-4xl font-bold text-gray-900 mb-4 text-center" >CSR</h2>
			<ul>
				{data.map(e => (
					<li className="mb-5 border-4 p-3" key={e.id}>{e.body}</li>
				))}
			</ul>
		</div>
	);
};

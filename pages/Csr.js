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
		<div className={styles.rendering}>
			<h2>CSR</h2>
			<ul>
				{data.map(e => (
					<li key={e.id}>{e.body}</li>
				))}
			</ul>
		</div>
	);
};

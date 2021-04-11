import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const URL = 'https://jsonplaceholder.typicode.com/comments';

export const Csr = () => {
	const [datas, setDatas] = useState([]);
	useEffect(async () => {
		const res = await fetch(URL);
		const data = await res.json();
		setDatas(data);
	}, []);

	return (
		<ul className={styles.rendering}>
			{datas.map((des) => (
				<li key={des.id}>{des.body}</li>
			))}
		</ul>
	);
};

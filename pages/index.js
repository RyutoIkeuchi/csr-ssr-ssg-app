import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export async function getServerSideProps() {
	const res = await fetch('https://jsonplaceholder.typicode.com/todos');
	const todos = await res.json();
	return {
		props: {
			todos,
		},
	};
}

export default function Home({ todos }) {
  const [datas, setDatas] = useState([]);
  
	useEffect(async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/todos');
		const data = await res.json();
		setDatas(data);
  }, []);
  
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Next.js!!</h1>

				<p className={styles.description}>
					Next.jsによって実装できるCSR・SSR・SSGについて
				</p>
        
				<div>
					{todos.map((todo) => (
						<p key={todo.id}>{todo.title}</p>
					))}
				</div>

				<div>
					{datas.map((des) => (
						<p key={des.id}>{des.title}</p>
					))}
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</footer>
		</div>
	);
}

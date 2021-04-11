import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Ssr } from './Ssr'
import {Csr} from './Csr'

export async function getServerSideProps() {
	const res = await fetch('https://jsonplaceholder.typicode.com/comments');
	const comments = await res.json();
	return {
		props: {
			comments,
		},
	};
}

export default function Home(props) {
  
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
        
				<section className={styles.csrSsr}>
					<Ssr comments={ props.comments}/>
					<Csr/>
				</section>
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

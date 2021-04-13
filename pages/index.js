import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { TopView } from '../components/TopView';

export default function Home() {
	return (
		<div className="max-w-screen-lg mx-auto min-h-screen">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="px-0 py-20">
				<TopView/>
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

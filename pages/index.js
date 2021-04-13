import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="container mx-auto px-4">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.mainTitle}>
					<h1 className={styles.title}>Next.jsの魅力を紹介</h1>
					<p className={styles.description}>
						Next.jsによって実装できるCSR・SSR・SSGについて
						<br />
						下のボタンを推してみて
					</p>

					<Link href="/CsrSsr">
						<a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							CSR{''}vs{''}SSR
						</a>
					</Link>
					<Link href="/CsrSsg">
						<a className={styles.selectButton}>
							CSR{''}vs{''}SSG
						</a>
					</Link>
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

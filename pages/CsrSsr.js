import Ssr from '../components/Ssr';
import Csr from '../components/Csr';
import styles from '../styles/Home.module.css';
import Link from 'next/link'

export async function getServerSideProps() {
	const res = await fetch('https://jsonplaceholder.typicode.com/comments');
	const comments = await res.json();
	return {
		props: {
			comments,
		},
	};
}

export default function CsrSsr(props) {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.mainTitle}>
					<h1 className={styles.title}>Next.jsの魅力を紹介</h1>
					<p className={styles.description}>
						Next.jsによって実装できるCSR・SSR・SSGについて
						<br />
						下のボタンを推してみて
					</p>

					<Link href="/">
						<a>ホームに戻る</a>
					</Link>
				</div>

				<section className={styles.csrSsr}>
					<Ssr comments={props.comments} />
					<Csr />
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

import Ssr from '../components/Ssr';
import Csr from '../components/Csr';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import { TopView } from '../components/TopView';

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
		<div className="max-w-screen-lg mx-auto min-h-screen">
			<main className="px-0 py-20">
				<TopView/>
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

import { Ssg } from '../components/Ssg';
import Csr from '../components/Csr';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { TopView } from '../components/TopView';

const URL = 'https://jsonplaceholder.typicode.com/comments';

export async function getStaticProps() {
	const res = await fetch(URL);
	const comments = await res.json();
	return {
		props: {
			comments,
		},
	};
}

export default function CsrSsg(props) {
	return (
		<div className="max-w-screen-lg mx-auto min-h-screen">
			<main className="px-0 py-20">
				<TopView />
				<section className="flex justify-around mt-10">
					<article className="w-2/5 min-h-screen border-4">
						<Ssg comments={props.comments} />
					</article>
					<article className="w-2/5 min-h-screen border-4">
						<Csr />
					</article>
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

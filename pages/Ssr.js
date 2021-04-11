import styles from '../styles/Home.module.css';

export const Ssr = ({ comments }) => {
	return (
		<div className={styles.rendering}>
			<h2>SSR</h2>
			<ul>
				{comments.map((comment) => (
					<li key={comment.id}>{comment.body}</li>
				))}
			</ul>
		</div>
	);
};

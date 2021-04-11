import styles from '../styles/Home.module.css'

export const Ssr=({comments})=> {
  return (
		<ul className={styles.rendering}>
			{comments.map((comment) => (
				<li key={comment.id}>{comment.body}</li>
			))}
		</ul>
	);
}

import styles from '../styles/Home.module.css';

export default function Ssr({ comments }) {
	return (
		<div className="p-4">
			<h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">SSR</h2>
			<ul>
				{comments.map((comment) => (
					<li className="mb-5 border-4 p-3" key={comment.id}>
						{comment.body}
					</li>
				))}
			</ul>
		</div>
	);
};

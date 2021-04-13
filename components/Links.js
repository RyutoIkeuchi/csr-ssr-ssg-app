import Link from 'next/link'

export const Links = () => {
  return (
		<div className="text-center pb-10 border-b-8">
			<Link href="/CsrSsr">
				<a className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-5 cursor-pointer">
					CSR vs SSR
				</a>
			</Link>
			<Link href="/">
				<a className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-5 cursor-pointer">
					HOME
				</a>
			</Link>
			<Link href="/CsrSsg">
				<a className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-5 cursor-pointer">
					CSR vs SSG
				</a>
			</Link>
		</div>
	);
}
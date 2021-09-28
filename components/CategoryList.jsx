import Link from 'next/link'

export default function CategoryList({ categories }) {
	return (
		<div className='w-full p-2 bg-white rounded-lg shadow-md mt-20 my-5'>
			<h3 className='text-xl bg-gray-800 text-white p-3 rounded'>
				Categories
			</h3>

			<ul className='divide-y divide-gray-300'>
				{categories.map((category, index) => (
					<Link
						key={index}
						passHref
						href={`/blog/category/${category.toLowerCase()}`}
					>
						<li className='p-2 cursor-pointer hover:bg-gray-500'>
							{category}
						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

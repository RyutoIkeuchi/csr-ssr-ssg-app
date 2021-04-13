export const Loading = () => {
	return (
		<article className="w-2/5 border-4">
			<div class="rounded-md p-4 max-w-sm w-full mx-auto">
				<div class="animate-pulse space-x-4">
					<div class="flex-1 space-y-4 py-1">
						<div class="h-8 bg-gray-600 mx-auto rounded w-1/3"></div>
						<ul className="border-4 p-3">
							<li class="h-3 bg-gray-400 mb-2 rounded w-3/4"></li>
							<li class="h-3 bg-gray-400 mb-2 rounded"></li>
							<li class="h-3 bg-gray-400 mb-2 rounded w-5/6"></li>
							<li class="h-3 bg-gray-400 mb-2 rounded w-3/4"></li>
						</ul>
						<ul className="border-4 p-3">
							<li class="h-3 bg-gray-400 mb-2 rounded w-3/4"></li>
							<li class="h-3 bg-gray-400 mb-2 rounded"></li>
							<li class="h-3 bg-gray-400 mb-2 rounded w-5/6"></li>
							<li class="h-3 bg-gray-400 mb-2 rounded w-3/4"></li>
						</ul>
					</div>
				</div>
			</div>
		</article>
	);
};

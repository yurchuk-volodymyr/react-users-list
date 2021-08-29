import React, {FC} from 'react';

interface PaginationProps {
	page: number,
	onChildClick: (value: number) => void
}

export const Pagination: FC<PaginationProps> = ({page, onChildClick}) => {
	const prevPage = () => onChildClick(page - 1);
	const nextPage = () => onChildClick(page + 1);

	return (
		<div className="row align-center mt-2">
			<div className="col">
				<p className='text-body-2'>Current page {page}</p>
			</div>
			<div className="col-auto">
				<div className="row">
					<div className="col-auto py-0 pr-0">
						<p className={`text-body-2 app-link ${page === 1 ? "disabled" : ""}`} onClick={prevPage}>Prev page</p>
					</div>
					<div className="col-auto py-0 pl-0">
						<p className='text-body-2 app-link' onClick={nextPage}>Next page</p>
					</div>
				</div>
			</div>
		</div>
	);
}
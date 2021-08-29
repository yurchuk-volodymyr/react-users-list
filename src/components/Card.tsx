import React, {FC} from 'react';
import { NavLink } from 'react-router-dom';

interface CardProps {
	id?: string,
	image?: string,
	name?: string,
	email?: string
}

export const Card: FC<CardProps> = ({id, image, name, email}) => {
	return (
		<div className='app-card'>
			<div className="app-card-wrapper pa-4">
				<div className="app-card-image mr-4">
					<img src={image} alt={name} />
				</div>
				<div className="app-card-content">
					<p className='subtitle-1'>{name}</p>
					<p className='text-body-2'>{email}</p>
				</div>
			</div>
			<div className="app-card-action">
				<NavLink to={`/user/${id}`} className='app-link text-body-2'>More info</NavLink>
			</div>
		</div>
	);
}
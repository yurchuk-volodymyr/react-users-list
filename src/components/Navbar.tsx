import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
	return <div className="nav-wrapper">
		<div className="container">
			<div className="row align-center">
				<div className="col">
					<NavLink to='/' className="brand-logo text-white">Logo</NavLink>
				</div>
				<div className="col-auto">
					<ul>
						<li className='text-body-2 text-white'>
							<NavLink to='/users' className='app-link'>Users</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
}
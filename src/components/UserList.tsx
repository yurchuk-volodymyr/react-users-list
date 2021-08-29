import React, {FC} from 'react';
import {IUser} from '../types/types';
import { Card } from "../components/Card";

interface UserListProps {
	users: IUser[]
}

export const UserList: FC<UserListProps> = ({users}) => {
	return (
		<div className="row user-list">
			{users.map(user =>
				<div className="col-4" key={user.login.uuid}>
					<Card
						id={user.login.uuid}
						image={user.picture.thumbnail}
						name={`${user.name.title} ${user.name.first} ${user.name.last}`}
						email={user.email}
					/>
				</div>
			)}
		</div>
	);
}
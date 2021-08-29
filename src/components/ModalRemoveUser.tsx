import React, {FC} from "react";
import {deleteUser} from '../services/request';
import { useHistory } from 'react-router-dom';

interface ModalRemoveUserProps {
	id: string,
	onCloseModal: (value: boolean) => void
}

export const ModalRemoveUser: FC<ModalRemoveUserProps> = ({id, onCloseModal}) => {
	const history = useHistory();
	
	const removeUser = () => {
		deleteUser(id).then(() => {
			history.push('/users')
		})
	}

	return <>
		<div className='app-modal'>
			<div className='app-modal__inner px-4 pt-6 pb-2'>
				<div className='app-modal__content'>
					<p className='subtitle-2 mb-4 text-center'>Are you sure you want to delete the user?</p>
					<div className="row">
						<div className="col"></div>
						<div className="col-auto pa-0">
							<div className='text-caption text-red app-link' onClick={() => onCloseModal(false)}>Close window</div>
						</div>
						<div className="col-auto pa-0">
							<div className='text-caption app-link' onClick={removeUser}>Remove user</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
}
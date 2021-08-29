import React, {useState, useEffect} from "react";
import {getUsers} from '../services/request';
import { IUser } from "../types/types";
import { useParams } from 'react-router-dom';
import { ModalRemoveUser } from "../components/ModalRemoveUser";

export const User: React.FC = () => {
	const [user, setUser] = useState<IUser>({} as IUser);
	const [modalRemove, setModalRemove] = useState<boolean>(false);

	type QuizParams = {
		id: string;
	};

	const { id } = useParams<QuizParams>();

	useEffect(() => {
		getUsers({
			seed: id
		}).then(res => setUser(res.results[0]))
			.catch(error => Promise.reject(error))
	}, [id])

	const months = [
		'January', 
		'February', 
		'March', 
		'April', 
		'May', 
		'June', 
		'July', 
		'August', 
		'September', 
		'October', 
		'November', 
		'December'
	]

	const formatDate = (date: string) => {
		const d = new Date(date);

		return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
	}

	return <>
		{user.cell
			? <>
					<p className='app-text-h1 mb-6'>{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
					
					<div className="row align-center">
						<div className="col-auto">
							<img src={user.picture.large} alt='' />
						</div>
						<div className="col">
							<p className='mb-1 text-body-2'><strong>Age</strong>: {user.dob.age} years</p>
							<p className='mb-1 text-body-2 d-flex'><strong>Gender</strong>: <span className="material-icons text-blue">{user.gender}</span></p>
							<p className='mb-1 text-body-2'><strong>Nationality</strong>: {user.nat}</p>

							<div className="row">
								<div className="col-auto py-0">
									<p className='mb-1 text-body-2'><strong>Phone</strong>: <a href={`tel:${user.phone}`} className='app-link pa-0'>{user.phone}</a></p>
								</div>
								<div className="col-auto py-0">
									<p className='mb-1 text-body-2'><strong>Cell</strong>: <a href={`tel:${user.cell}`} className='app-link pa-0'>{user.cell}</a></p>
								</div>
								<div className="col-auto py-0">
									<p className='mb-1 text-body-2'><strong>Email</strong>: <a href={`mailto:${user.email}`} className='app-link pa-0'>{user.email}</a></p>
								</div>
							</div>
						</div>
					</div>

					<div>
						<p className='app-text-h4 mt-6 mb-3'>Details:</p>

						<p className='mb-1 text-body-2'><strong>Birthday</strong>: {formatDate(user.dob.date)}</p>
						<p className='mb-1 text-body-2'><strong>Registered</strong>: {formatDate(user.registered.date)} ({user.registered.age} years ago)</p>
						<p className='mb-1 text-body-2'><strong>Id</strong>: {user.id.name} {user.id.value}</p>
					</div>

					<div>
						<p className='app-text-h4 mt-6 mb-3'>Location:</p>

						<p className='mb-1 text-body-2'><strong>Country</strong>: {user.location.country}</p>
						<p className='mb-1 text-body-2'><strong>City</strong>: {user.location.city}</p>
						<p className='mb-1 text-body-2'><strong>Street</strong>: {user.location.street.name}</p>
						<p className='mb-1 text-body-2'><strong>Postcode</strong>: {user.location.postcode}</p>
					</div>

					<div className='d-flex justify-center mt-6'>
						<button className='app-link text-red' onClick={() => setModalRemove(true)}>
							<span className='d-flex'>
								<span className="material-icons mr-1">delete</span>
								Remove user
							</span>
						</button>
					</div>
				</>
			: null
		}

		{ modalRemove ? <ModalRemoveUser id={id} onCloseModal={() => setModalRemove(false)} /> : false }
	</>
}
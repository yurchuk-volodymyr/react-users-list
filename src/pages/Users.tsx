import React, {useState, useEffect} from "react";
import { FilterGender } from "../components/FilterGender";
import { Pagination } from "../components/Pagination";
import { UserList } from "../components/UserList";
import {getUsers} from '../services/request';
import { IUser } from "../types/types";

export const Users: React.FC = () => {
	const perPage = 10;
	const [page, setPage] = useState<number>(1);
	const [users, setUsers] = useState<IUser[]>([]);

	const [activeGender, setActiveGender] = useState<string>('');

	useEffect(() => {
		getUsers({
			page,
			results: perPage,
			gender: activeGender
		}).then(res => setUsers(res.results))
			.catch(error => Promise.reject(error))
	}, [page, activeGender])

	const updatePagination = (value: number) => setPage(value);

	return <>
		<p className='app-text-h1 mb-6'>Users</p>

		<FilterGender active={activeGender} onChangeGender={(value: string) => setActiveGender(value)} />

		<UserList users={users} />

		<Pagination page={page} onChildClick={updatePagination} />
	</>
}
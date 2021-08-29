

import React, {FC} from "react";

interface FilterGenderProps {
	active: string,
	onChangeGender: (value: string) => void
}

export const FilterGender: FC<FilterGenderProps> = ({active, onChangeGender}) => {
	return <>
		<div className='group-button'>
			<div className={`group-button-item ${active === '' ? "active": ""}`} onClick={() => onChangeGender('')}>All</div>
			<div className={`group-button-item ${active === 'male' ? "active": ""}`} onClick={() => onChangeGender('male')}>Male</div>
			<div className={`group-button-item ${active === 'female' ? "active": ""}`} onClick={() => onChangeGender('female')}>Female</div>
		</div>
	</>
}
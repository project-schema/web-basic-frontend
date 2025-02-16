'use client';

import { IDevPermissionCategory } from '@/types';
import { Button } from 'antd';
import React from 'react';
import { useDeleteDevSubCategoryMutation } from '../dev-permission-api-slice';
 
export function DevSubPermissionCategoryDelete({
	data,
}: {
	data: IDevPermissionCategory;
}) {
	const [deleting, { isLoading }] = useDeleteDevSubCategoryMutation();

	const handleDelete = () => {
		deleting(data._id);
	};
	return (
		<Button loading={isLoading} onClick={handleDelete} disabled={isLoading}>
			Delete
		</Button>
	);
}

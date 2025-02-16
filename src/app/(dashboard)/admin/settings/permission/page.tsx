'use client';
import React from 'react';
import {
	AdminChapterList,
	AdminDifficultyLevelList,
	AdminGradeList,
	AdminSubjectList,
} from '@/store/features/admin';
import {
	DevPermissionCategoryList,
	DevPermissionSubCategoryList,
} from '@/store/features/dev-permission';

const Page = ({ searchParams }: { searchParams: { tab: string } }) => {
	switch (searchParams.tab) {
		case 'role_category':
			return <DevPermissionCategoryList />;

		case 'role_sub_category':
			return <DevPermissionSubCategoryList />;

		case 'chapter':
			return <AdminChapterList />;

		case 'difficulty_level':
			return <AdminDifficultyLevelList />;

		default:
			return <div>No Data Found</div>;
	}
};

export default Page;

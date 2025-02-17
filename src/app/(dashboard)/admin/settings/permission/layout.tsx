'use client';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';
const menu = [
	{
		label: 'Role Category',
		href: '/admin/settings/permission?tab=role_category',
	},
	{
		label: 'Role Sub Category',
		href: '/admin/settings/permission?tab=role_sub_category',
	},
	{
		label: 'Keys',
		href: '/admin/settings/permission?tab=keys',
	},
	{
		label: 'Difficulty Level',
		href: '/admin/settings/permission?tab=difficulty_level',
	},
];

export default function Layout({ children }: { children: React.ReactNode }) {
	const searchParam = useSearchParams(); // Get the current pathname

	return (
		<>
			<Breadcrumb className="shadow" style={{ padding: '16px' }}>
				<Breadcrumb.Item>Admin</Breadcrumb.Item>
				<Breadcrumb.Item>Settings</Breadcrumb.Item>
				<Breadcrumb.Item>Course</Breadcrumb.Item>
			</Breadcrumb>

			<div className="flex items-stretch  gap-4 mt-2 mx-4">
				<ul className="space-y-3 w-56   bg-white p-4 rounded-lg shadow">
					{searchParam.get('tab') &&
						menu.map((item) => (
							<li>
								<Link
									href={item.href}
									className={`px-3 py-2 border rounded-lg flex ${
										item.href.includes(searchParam.get('tab') || '')
											? 'bg-blue-500 text-white'
											: 'text-black'
									} text-black`}
								>
									{item.label}
								</Link>
							</li>
						))}
				</ul>
				<div className="flex-1 w-full bg-white p-4 rounded-lg shadow">
					{children}
				</div>
			</div>
		</>
	);
}

import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';

import './App.css';

import ScheduleReminderPlanner from './ScheduleReminderPlanner'
import SeniorScheduleReminder from './SeniorScheduleReminder';

export default function App() {
  const routes = [
    {
      element: <Layout />,
      children: [
        {path: '/', element: <SeniorScheduleReminder />},
        {path: '/child', element: <ScheduleReminderPlanner/>}, 
      ],
    },
  ]


  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router} />
  );
}

function Layout() {
	return (
		<div>
			<main>
				<Outlet />
			</main>
		</div>
	);
}
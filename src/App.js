import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom';
import SeniorScheduleReminder from './SeniorScheduleReminder';
import ScheduleReminderPlanner from './ScheduleReminderPlanner';
import FirstPage from './FirstPage'
import MainPage from './MainPage'

export default function App() {
  const routes = [
    {
      element: <Layout />,
      children: [
        {path: '/', element: <FirstPage />},
        {path: '/child', element: <ScheduleReminderPlanner/>},  
        {path: '/senior', element: <SeniorScheduleReminder/>},
        {path: '/main', element: <MainPage/>}, 


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
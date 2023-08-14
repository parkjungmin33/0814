<<<<<<< HEAD
import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';

import './App.css';

=======
import React, { useState } from 'react';
import AlarmItem from './AlarmItem';
import ScheduleReminderPlanner from './ScheduleReminderPlanner'
import SeniorScheduleReminder from './SeniorScheduleReminder';
import TodoApp from './TodoApp'; 
import FirstPage from './FirstPage';
import MainPage from './MainPage';

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
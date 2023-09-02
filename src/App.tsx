import React, { useEffect, useRef, useState } from 'react';
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import RightSide from './components/layout/RightSide/RightSide';
import Root from './components/layout/Root/Root';
import NotesPage from './components/layout/RightSide/NotesPage/NotesPage';
import ConsultationPage from './components/layout/RightSide/ConsultationPage/ConsultationPage';
import VideoPage from './components/layout/RightSide/VideoPage/VideoPage';
import EventPage from './components/layout/RightSide/EventPage/EventPage';

const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/:id',
				element: <RightSide />,
				children: [
					{ path: '/:id', element: <NotesPage /> },
					{ path: '/:id/consulting', element: <ConsultationPage /> },
					{ path: '/:id/videos', element: <VideoPage /> },
					{ path: '/:id/events', element: <EventPage /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

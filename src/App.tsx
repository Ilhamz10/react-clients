import React, { useEffect, useRef, useState } from 'react';
import {
	Navigate,
	RouterProvider,
	createHashRouter,
} from 'react-router-dom';
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
					{ path: '/:id/notes', element: <NotesPage /> },
					{ path: '/:id/consulting', element: <ConsultationPage /> },
					{ path: '/:id/videos', element: <VideoPage /> },
					{ path: '/:id/events', element: <EventPage /> },
				],
			},
			{ path: '/', element: <Navigate to={'/1'} /> },
		],
	},
]);

function App() {
	const [isHeld, setIsHeld] = useState(false);
	const [active, setActive] = useState(false);
	const timeoutRef = useRef<any>(null);

	useEffect(() => {
		timeoutRef.current = setTimeout(() => {
			if (isHeld) {
				setActive(true);
			}
		}, 1000);
	}, [isHeld]);

	function startHelding() {
		setIsHeld(true);
	}

	function stopHelding() {
		setIsHeld(false);
		clearTimeout(timeoutRef.current);
	}

	return <RouterProvider router={router} />;
}

export default App;

import React from 'react';

export default function Layout({ children }) {
	return (
		<>
			<main className='App container'>{children}</main>
		</>
	);
}

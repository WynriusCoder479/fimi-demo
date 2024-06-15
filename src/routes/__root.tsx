import Navbar from '@/components/nav-bar'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
	component: () => (
		<>
			<Navbar />
			<Outlet />
		</>
	)
})

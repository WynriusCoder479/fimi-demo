import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/career')({
	component: CareerPage
})

function CareerPage() {
	return <div className='p-2'>Career page</div>
}

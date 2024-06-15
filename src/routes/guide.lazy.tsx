import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/guide')({
	component: () => GuidePage
})

function GuidePage() {
	return <div className='p-2'>Guide page</div>
}

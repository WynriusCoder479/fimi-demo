import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/subscribe')({
	component: SubscribePage
})

function SubscribePage() {
	return <div className='p-2'>Subscribe</div>
}

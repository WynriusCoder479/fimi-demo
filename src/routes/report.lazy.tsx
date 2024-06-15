import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/report')({
	component: ReportPage
})

function ReportPage() {
	return <div className='p-2'>Report page</div>
}

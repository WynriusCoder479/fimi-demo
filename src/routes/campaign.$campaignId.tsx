import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/campaign/$campaignId')({
	component: CampaignIdPage
})

function CampaignIdPage() {
	const { campaignId } = Route.useParams()

	return <div className='p-2'>{campaignId}</div>
}

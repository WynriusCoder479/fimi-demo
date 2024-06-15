import InfoCard from '@/components/ui/info-card'
import { creditCampaigns } from '@/mocks/credit'

const CreditPanel = () => {
	return (
		<div className='mt-16 grid w-full grid-cols-2 place-items-center gap-16 xl:grid-cols-5'>
			{creditCampaigns.map(credit => (
				<InfoCard
					key={credit.id}
					info={credit}
				/>
			))}
		</div>
	)
}

export default CreditPanel

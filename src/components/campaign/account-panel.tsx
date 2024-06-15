import InfoCard from '@/components/ui/info-card'
import { accountCampaign } from '@/mocks/account'

const AccountPanel = () => {
	return (
		<div className='mt-16 grid w-full grid-cols-2 place-items-center gap-16 xl:grid-cols-5'>
			{accountCampaign.map(credit => (
				<InfoCard
					key={credit.id}
					info={credit}
				/>
			))}
		</div>
	)
}

export default AccountPanel

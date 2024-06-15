import AccountPanel from '@/components/campaign/account-panel'
import BannerCarousel from '@/components/campaign/banner-carousel'
import CreditPanel from '@/components/campaign/credit-panel'
import LoanPanel from '@/components/campaign/loan-panel'

import TabList from '@/components/campaign/tab-list'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { banners } from '@/mocks/banner'
import { createFileRoute } from '@tanstack/react-router'

type CampaignSearchSortOptions = 'credit' | 'loan' | 'account'

export const Route = createFileRoute('/')({
	component: IndexPage,
	validateSearch: search => ({
		tab: (search.tab as CampaignSearchSortOptions) || 'credit'
	})
})

function IndexPage() {
	const { tab } = Route.useSearch()

	console.log(tab)

	return (
		<div className='flex flex-col'>
			<BannerCarousel images={banners} />

			<Tabs
				defaultValue={tab}
				className='w-full'
			>
				<div className='sticky top-[3.9rem] z-10 p-4 backdrop-blur-sm xl:container'>
					<TabList />
				</div>
				<div className='container'>
					<TabsContent value='credit'>
						<CreditPanel />
					</TabsContent>
					<TabsContent
						value='loan'
						className='flex items-center justify-center'
					>
						<LoanPanel />
					</TabsContent>
					<TabsContent
						value='account'
						className='flex items-center justify-center'
					>
						<AccountPanel />
					</TabsContent>
				</div>
			</Tabs>
		</div>
	)
}

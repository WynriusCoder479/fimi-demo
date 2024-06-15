import SectionTitle from '@/components/campaign/section-title'
import { Route } from '@/routes'
import { TabsList, TabsTrigger } from '@radix-ui/react-tabs'

const TabList = () => {
	const navigate = Route.useNavigate()
	const { tab } = Route.useSearch()

	return (
		<TabsList className='grid w-full grid-cols-3 bg-inherit text-foreground/50'>
			<TabsTrigger
				value='credit'
				className='flex items-center justify-center rounded-none border-r-2 border-foreground/50 bg-transparent'
				onClick={() => {
					navigate({
						search: () => ({ tab: 'credit' })
					})
				}}
			>
				<SectionTitle
					title='Thẻ tín dụng'
					type='credit-card'
					isActive={tab === 'credit'}
				/>
			</TabsTrigger>
			<TabsTrigger
				value='loan'
				className='flex items-center justify-center rounded-none bg-transparent'
				onClick={() => {
					navigate({
						search: () => ({ tab: 'loan' })
					})
				}}
			>
				<SectionTitle
					title='Vay tín chấp'
					type='loan'
					isActive={tab === 'loan'}
				/>
			</TabsTrigger>
			<TabsTrigger
				value='account'
				className='flex items-center justify-center rounded-none border-l-2 border-foreground/50 bg-transparent'
				onClick={() => {
					navigate({
						search: () => ({ tab: 'account' })
					})
				}}
			>
				<SectionTitle
					title='Tài khoản'
					type='start'
					isActive={tab === 'account'}
				/>
			</TabsTrigger>
		</TabsList>
	)
}

export default TabList

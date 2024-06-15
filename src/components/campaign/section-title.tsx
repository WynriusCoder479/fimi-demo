import { cn } from '@/lib/utils'
import { FC } from 'react'

type SectionTitleProps = {
	title: string
	type: 'start' | 'credit-card' | 'loan'
	isActive?: boolean
}

const SectionTitle: FC<SectionTitleProps> = ({ title, type, isActive = false }) => {
	return (
		<div className='flex items-center gap-2'>
			<h3
				className={cn('text-primary/50 hidden text-lg font-bold md:block', {
					'text-primary underline decoration-2 underline-offset-2': isActive
				})}
			>
				{title}
			</h3>
			<img
				src={`/icon/${type}.svg`}
				alt='start'
				className={cn('h-6 w-6', {
					'animate-rotate-y animate-infinite animate-duration-[3000ms] animate-ease-in-out':
						isActive
				})}
			/>
		</div>
	)
}

export default SectionTitle

import { Info } from '@/mocks/types'
import { Link } from '@tanstack/react-router'
import { format } from 'date-fns'
import { FC } from 'react'

type InfoCardProps = {
	info: Info
}

const InfoCard: FC<InfoCardProps> = ({ info }) => {
	const type = (type: 'credit' | 'loan' | 'account') => {
		let data: string

		switch (type) {
			case 'credit':
				data = 'Thẻ tín dụng'
				break
			case 'loan':
				data = 'Vay tín chấp cá nhân'
				break
			case 'account':
				data = 'Tài khoản chứng khoán'
				break
		}

		return data
	}

	return (
		<div className='relative flex w-[15rem] flex-col rounded-md border bg-transparent bg-white pb-8 shadow-lg shadow-black/50'>
			<div className='absolute -top-0 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-foreground/20 shadow-xl shadow-black/20'>
				<img
					src={info.image}
					alt={info.image}
				/>
			</div>
			<div className='absolute -right-6 rounded-br-full bg-primary px-4 py-1 text-sm font-semibold text-white'>
				{info.productCode}
			</div>
			<div className='flex flex-col items-start gap-y-3 px-2 pt-14'>
				<div className='flex cursor-pointer items-center gap-2'>
					<img
						src='/icon/commision.svg'
						alt='commision'
						className='h-7 w-7'
					/>
					<p className='text-sm font-semibold text-foreground/70'>{info.commision} đ</p>
				</div>
				<div className='flex cursor-pointer items-center gap-2'>
					<img
						src='/icon/type.svg'
						alt='type'
						className='h-7 w-7'
					/>
					<p className='text-sm font-semibold text-foreground/70'>{type(info.category)}</p>
				</div>
				<div className='flex cursor-pointer items-center gap-2'>
					<img
						src='/icon/percent.svg'
						alt='percent'
						className='h-7 w-7'
					/>
					<p className='text-sm font-semibold text-foreground/70'>{info.cvr}</p>
				</div>
				<div className='flex cursor-pointer items-center gap-2'>
					<img
						src='/icon/clock.svg'
						alt='clock'
						className='h-7 w-7'
					/>
					<p className='text-sm font-semibold text-foreground/70'>
						Cập nhất {format(info.createdAt, 'dd/MM/yyyy')}
					</p>
				</div>
				<div className='flex cursor-pointer items-center gap-2'>
					<img
						src='/icon/calendar.svg'
						alt='calendar'
						className='h-7 w-7'
					/>
					<p className='text-sm font-semibold text-foreground/70'>Thanh toán tháng T+</p>
				</div>
			</div>

			<Link
				to={`/campaign/${info.id}`}
				className='mt-4 w-fit self-center rounded-full border border-white/50 bg-gradient-to-tr from-primary to-secondary px-4 py-2 text-sm font-semibold text-white shadow-2xl shadow-black'
			>
				Giới thiệu ngay
			</Link>
		</div>
	)
}

export default InfoCard

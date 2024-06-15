import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import { FC, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavMenuProps extends HTMLAttributes<HTMLDivElement> {}

const linkStyle = twMerge(
	'text-sm font-semibold text-white/80 decoration-2 underline-offset-2',
	'hover:text-white',
	'[&.active]:font-bold [&.active]:text-white [&.active]:underline'
)

const NavMenu: FC<NavMenuProps> = ({ className }) => {
	return (
		<div className={cn('flex items-center justify-center gap-4')}>
			<Link
				to='/'
				className={cn(linkStyle, className)}
				search={{
					tab: 'credit'
				}}
				activeOptions={{
					includeSearch: false
				}}
			>
				Chiến dịch
			</Link>
			<Link
				to='/report'
				className={cn(linkStyle, className)}
			>
				Báo cáo
			</Link>
			<Link
				to='/subscribe'
				className={cn(linkStyle, className)}
			>
				Đăng ký
			</Link>
			<Link
				to='/career'
				className={cn(linkStyle, className)}
				target='_blank'
			>
				Tuyển dụng
			</Link>
			<Link
				to='/guide'
				className={cn(linkStyle, className)}
				target='_blank'
			>
				Hướng dẫn
			</Link>
		</div>
	)
}

export default NavMenu

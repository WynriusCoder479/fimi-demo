import Logo from '@/components/nav-bar/logo'
import NavMenu from '@/components/nav-bar/nav-menu'
import SuportButton from '@/components/nav-bar/suport-button'

const Navbar = () => {
	return (
		<nav className='sticky inset-x-0 top-0 z-50 w-full bg-primary pb-1 shadow-lg sm:pb-0'>
			<div className='container flex items-center justify-between p-3'>
				<Logo />
				<NavMenu className='hidden sm:block' />
				<SuportButton />
			</div>
			<NavMenu className='sm:hidden' />
		</nav>
	)
}

export default Navbar

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { FC, useRef } from 'react'

type BannerCarouselProps = {
	images: string[]
}

const BannerCarousel: FC<BannerCarouselProps> = ({ images }) => {
	const plugin = useRef(
		Autoplay({
			delay: 15000,
			stopOnInteraction: true
		})
	)

	return (
		<Carousel
			className='relative w-full shadow-lg'
			plugins={[plugin.current]}
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
			opts={{
				loop: true,
				align: 'start'
			}}
		>
			<CarouselContent className='-ml-1'>
				{images.map((img, index) => (
					<CarouselItem
						key={index}
						className='pl-1'
					>
						<img
							src={img}
							alt={img}
							className=''
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<div className='absolute right-16 top-1/2'>
				<CarouselNext />
			</div>
			<div className='absolute left-16 top-1/2'>
				<CarouselPrevious />
			</div>
		</Carousel>
	)
}

export default BannerCarousel

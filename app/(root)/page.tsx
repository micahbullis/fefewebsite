import Divider from '@/components/Divider';
import { Button } from '@/components/ui/button';
import { LINKS } from '@/lib/links';
import { ArrowDown, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export default function Home() {
	return (
		<main className='font-normal'>
			{/* hero section */}
			<section className='w-full max-h-fit my-24 '>
				<div className=' max-lg:flex-col flex gap-y-8'>
					<div className='flex items-start w-full'>
						<Image
							className='w-full'
							src={'/drink_smoke.png'}
							alt='hero-image'
							width={250}
							height={250}
						/>
					</div>
					<div className='flex flex-col items-center justify-center w-full max-lg:-order-1 text-center gap-8'>
						<h1 className='font-genty-regular max-lg:text-5xl text-7xl'>
							$0xfefe
						</h1>
						<p className='text-2xl'>
							is on a mission to take over the meme universe. The time
							has come for Hoppy to show his greatness.
						</p>
						<div className='flex flex-wrap justify-center gap-3'>
							<Link href={LINKS.x}>
								<Image
									src={'/x.svg'}
									alt='x link'
									width={50}
									height={50}
								/>
							</Link>
							<Link href={LINKS.x}>
								<Image
									src={'/x.svg'}
									alt='x link'
									width={50}
									height={50}
								/>
							</Link>
							<Link href={LINKS.x}>
								<Image
									src={'/x.svg'}
									alt='x link'
									width={50}
									height={50}
								/>
							</Link>
							<Link href={LINKS.x}>
								<Image
									src={'/x.svg'}
									alt='x link'
									width={50}
									height={50}
								/>
							</Link>
							<Link href={LINKS.x}>
								<Image
									src={'/x.svg'}
									alt='x link'
									width={50}
									height={50}
								/>
							</Link>
							<Link href={LINKS.x}>
								<Image
									src={'/x.svg'}
									alt='x link'
									width={50}
									height={50}
								/>
							</Link>
						</div>
						<div className='flex flex-col gap-4'>
							<div className='flex flex-wrap justify-center gap-3'>
								<Button
									className='bg-transparent rounded-3xl'
									asChild
									variant={'outline'}>
									<span className='flex items-center justify-center gap-2'>
										<Link href={'/'}>Link here</Link>
										<span>
											<Star />
										</span>
									</span>
								</Button>
								<Button
									className='bg-transparent rounded-3xl'
									asChild
									variant={'outline'}>
									<span className='flex items-center justify-center gap-2'>
										<Link href={'/'}>Link here</Link>
										<span>
											<Star />
										</span>
									</span>
								</Button>
								<Button
									className='bg-transparent rounded-3xl'
									asChild
									variant={'outline'}>
									<span className='flex items-center justify-center gap-2'>
										<Link href={'/'}>Link here</Link>
										<span>
											<Star />
										</span>
									</span>
								</Button>
							</div>
							<div className='flex flex-wrap justify-center gap-3'>
								<Button
									className='bg-transparent rounded-3xl'
									asChild
									variant={'outline'}>
									<span className='flex items-center justify-center gap-2'>
										<Link href={'/'}>Link here</Link>
										<span>
											<Star />
										</span>
									</span>
								</Button>
								<Button
									className='bg-transparent rounded-3xl'
									asChild
									variant={'outline'}>
									<span className='flex items-center justify-center gap-2'>
										<Link href={'/'}>Link here</Link>
										<span>
											<Star />
										</span>
									</span>
								</Button>
								<Button
									className='bg-transparent rounded-3xl'
									asChild
									variant={'outline'}>
									<span className='flex items-center justify-center gap-2'>
										<Link href={'/'}>Link here</Link>
										<span>
											<Star />
										</span>
									</span>
								</Button>
							</div>
						</div>
					</div>
				</div>
				<span className='absolute w-full left-0'>
					<Divider />
				</span>
			</section>
			{/* about section  */}
			<section className='w-full max-h-fit my-24 '>
				<div className=' max-lg:flex-col flex gap-y-8'>
					<div className='flex items-start w-full'>
						<Image
							className='w-full'
							src={'/wizard.png'}
							alt='hero-image'
							width={350}
							height={350}
						/>
					</div>
					<div className='flex flex-col items-center justify-center w-full -order-1 text-center gap-8'>
						<h3 className='font-semibold font max-lg:text-5xl text-7xl'>
							About
						</h3>
						<p className='text-2xl'>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Ipsa, necessitatibus repellat voluptatibus iste
							architecto tempore facilis amet atque provident veniam
							cumque quas delectus hic id doloribus fugiat ipsam
							omnis. Ea. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Maiores quis ex omnis nulla est vel
							tempora deleniti quasi eum fuga eveniet harum, quaerat
							sapiente temporibus iusto! Sit deleniti rerum qui?
						</p>
					</div>
				</div>
				<span className='absolute w-full left-0'>
					<Divider />
				</span>
			</section>
			{/* tokenomics sectin */}
			<section className='w-full max-h-fit my-24 '>
				<div className=' max-lg:flex-col flex gap-y-8'>
					<div className='flex items-start w-full'>
						<Image
							className='w-full'
							src={'/drink_smoke.png'}
							alt='hero-image'
							width={350}
							height={350}
						/>
					</div>
					<div className='flex flex-col items-center justify-center w-full max-lg:-order-1 text-center gap-8'>
						<div className='flex flex-col w-full bg-secondary/70 rounded-3xl p-5 border-2 border-accent shadow-2xl'>
							<h3 className='font-semibold font max-lg:text-5xl text-7xl'>
								Tokenomics
							</h3>
							<p className='text-2xl'>
								Lorem ipsum dolor sit amet consectetur, adipisicing
								elit. Ipsa, necessitatibus repellat voluptatibus iste
								architecto tempore facilis amet atque provident veniam
								cumque quas delectus hic id doloribus fugiat ipsam
								omnis. Ea. Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Maiores quis ex omnis nulla est vel
								tempora deleniti quasi eum fuga eveniet harum, quaerat
								sapiente temporibus iusto! Sit deleniti rerum qui?
							</p>
						</div>
					</div>
				</div>
				<span className='absolute w-full left-0'>
					<Divider />
				</span>
			</section>
			{/* roadmap section */}
			<section className='w-full max-h-fit my-24 '>
				<div className=' max-lg:flex-col items-center flex gap-8'>
					<div className='flex basis-[25%] items-start w-[200px] order-2'>
						<Image
							className='w-full'
							src={'/drink_smoke.png'}
							alt='hero-image'
							width={350}
							height={350}
						/>
					</div>
					<div className='flex flex-col items-center justify-center w-full order-1 text-center gap-8'>
						<h3 className='font-semibold font max-lg:text-5xl text-7xl'>
							Roadmap
						</h3>
						<div className='flex flex-col w-full flex-grow basis-[50%] bg-secondary/70 rounded-3xl p-5 border-2 border-accent shadow-2xl'>
							<p className='text-2xl'>
								Lorem ipsum dolor sit amet consectetur, adipisicing
								elit. Ipsa, necessitatibus repellat voluptatibus iste
								architecto tempore facilis amet atque provident veniam
								cumque quas delectus hic id doloribus fugiat ipsam
								omnis. Ea. Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Maiores quis ex omnis nulla est vel
								tempora deleniti quasi eum fuga eveniet harum, quaerat
								sapiente temporibus iusto! Sit deleniti rerum qui?
							</p>
						</div>
					</div>
					<div className='flex basis-[25%] items-start w-[200px]'>
						<Image
							className='w-full order-2'
							src={'/drink_smoke.png'}
							alt='hero-image'
							width={350}
							height={350}
						/>
					</div>
				</div>
				<span className='absolute w-full left-0'>
					<Divider />
				</span>
			</section>
			{/* how to buy section */}
			<section className='w-full max-h-fit my-24 '>
				<div className='flex flex-col gap-y-8 items-center justify-center'>
					<h3 className='font-semibold font max-lg:text-5xl text-7xl'>
						How To Buy
					</h3>
					<Accordion
						className='p-2 rounded-xl bg-secondary/70 max-lg:w-full w-[75%]'
						type='single'
						collapsible>
						<AccordionItem value='item-1'>
							<AccordionTrigger className='flex items-center justify-between'>
								Is it accessible?
							</AccordionTrigger>
							<AccordionContent className='border-t'>
								Yes. It adheres to the WAI-ARIA design pattern.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
				<span className='absolute w-full left-0'>
					<Divider />
				</span>
			</section>
		</main>
	);
}

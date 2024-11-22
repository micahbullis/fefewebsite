import Divider from '@/components/Divider';
import { Button } from '@/components/ui/button';
import { LINKS } from '@/lib/links';
import Image from 'next/image';
import Link from 'next/link';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import markdownit from 'markdown-it';
import { HOW_TO_BUY } from '@/lib/faq';
import { randomUUID } from 'crypto';
import { Star } from 'lucide-react';
const md = markdownit();

export default function Home() {
	return (
		<main className='font-normal'>
			{/* hero section */}
			<section
				id='hero'
				className='w-full max-h-fit my-24 '>
				<div className=' max-lg:flex-col flex gap-y-8'>
					<div className='flex items-end justify-center w-full'>
						<Image
							className='w-[500px] max-w-full'
							src={'/drink_smoke.png'}
							alt='hero-image'
							width={250}
							height={250}
						/>
					</div>
					<div className='flex flex-col items-center justify-center w-full max-lg:-order-1 text-center gap-8'>
						{/* <h1 className='font-genty-regular max-lg:text-5xl text-7xl'>
							$0xfefe
						</h1> */}
						<Image
							className='w-[230px] max-w-full'
							src={'/logo.png'}
							alt='fefe logo'
							width={250}
							height={250}
						/>
						<p className='text-2xl'>
							is on a mission to take over the meme universe. The time
							has come for Hoppy to show his greatness.
						</p>
						<div className='flex flex-wrap justify-center gap-3'>
							<Link href={LINKS.x.href}>
								<Image
									src={'/x.svg'}
									alt='x link'
									width={50}
									height={50}
								/>
							</Link>
							<Link href={LINKS.telegram.href}>
								<Image
									src={'/telegram.svg'}
									alt='x link'
									width={50}
									height={50}
								/>
							</Link>
							<Link href={LINKS.uniswap.href}>
								<Image
									src={'/uniswap.svg'}
									alt='x link'
									width={50}
									height={50}
								/>
							</Link>
							<Link href={LINKS.cmc.href}>
								<Image
									src={'/cmc.svg'}
									alt='x link'
									width={50}
									height={50}
								/>
							</Link>
							<Link href={LINKS.cc.href}>
								<Image
									src={'/cc.svg'}
									alt='x link'
									width={50}
									height={50}
								/>
							</Link>
							<Link href={LINKS.dextools.href}>
								<Image
									src={'/dextools.svg'}
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
						<Link
							href={LINKS.etherscan.href}
							className='flex items-center flex-wrap justify-center gap-4 mb-6'>
							<Image
								className='w-7 max-w-full'
								src={'/etherscanicon.png'}
								alt='etherscan contract icon'
								width={90}
								height={90}
							/>
							<span>{LINKS.etherscan.title}</span>
						</Link>
					</div>
				</div>
				<span className='absolute w-full left-0'>
					<Divider />
				</span>
			</section>
			{/* about section  */}
			<section
				id='about'
				className='w-full max-h-fit my-24 '>
				<div className=' max-lg:flex-col flex gap-y-8'>
					<div className='flex items-start justify-center '>
						<Image
							className='w-[500px] max-w-full'
							src={'/wizard.png'}
							alt='hero-image'
							width={350}
							height={350}
						/>
					</div>
					<div className='flex flex-col items-center justify-center w-full -order-1 text-center gap-8'>
						{/* <h3 className='font-semibold font max-lg:text-5xl text-7xl'>
							About
						</h3> */}
						<Image
							className='w-[250px] max-w-full'
							alt='about title image'
							src={'/about.webp'}
							width={150}
							height={150}
						/>
						<p className='text-2xl max-w-[60ch]'>
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
			<section
				id='tokenomics'
				className='w-full max-h-fit my-24 '>
				<div className=' max-lg:flex-col flex gap-y-8'>
					<div className='flex items-start w-full'>
						<Image
							className='w-[500px] max-w-full'
							src={'/drink_smoke.png'}
							alt='hero-image'
							width={350}
							height={350}
						/>
					</div>
					<div className='flex flex-col items-center justify-center w-full max-lg:-order-1 text-center gap-8'>
						<div className='flex flex-col w-fit bg-secondary/70 rounded-3xl p-5 border-2 border-accent shadow-2xl'>
							{/* <h3 className='font-semibold font max-lg:text-5xl text-7xl'>
								Tokenomics
							</h3> */}
							<Image
								className='mx-auto w-[500px] max-w-full'
								src={'/tokenomics.webp'}
								alt='hero-image'
								width={350}
								height={350}
							/>
							<p className='text-xl max-w-[60ch]'>
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
			<section
				id='roadmap'
				className='w-full max-h-fit my-24 '>
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
						{/* <h3 className='font-semibold font max-lg:text-5xl text-7xl'>
							Roadmap
						</h3> */}
						<Image
							className='w-[500px] max-w-full'
							src={'/roadmap.webp'}
							alt='hero-image'
							width={350}
							height={350}
						/>
						<div className='flex flex-col w-fit flex-grow basis-[50%] bg-secondary/70 rounded-3xl p-5 border-2 border-accent shadow-2xl mb-6'>
							<p className='text-xl max-w-[60ch]'>
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
							className='w-[500px] max-w-full order-2'
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
			<section
				id='how-to-buy'
				className='w-full max-h-fit my-24 '>
				<div className='flex flex-col gap-y-8 items-center justify-center'>
					{/* <h3 className='font-semibold font max-lg:text-5xl text-7xl'>
						How To Buy
					</h3> */}
					<Image
						className='w-[500px] max-w-full'
						src={'/howtobuy.webp'}
						alt='hero-image'
						width={350}
						height={350}
					/>
					<Accordion
						className=' p-3 rounded-xl bg-primary/70 max-lg:w-full w-[75%] '
						type='single'
						collapsible>
						{HOW_TO_BUY.map((tip, i) => (
							<AccordionItem
								key={randomUUID()}
								className={`${i !== 0 && 'border-t'} `}
								value={`item-${i + 1}`}>
								<AccordionTrigger className='flex items-center justify-between text-xl'>
									{i + 1}. {tip.Q}
								</AccordionTrigger>
								<AccordionContent className=' shadow-lg border-t border-dotted text-lg py-2 px-4'>
									<article
										style={{ wordBreak: 'break-word' }}
										className='prose'
										dangerouslySetInnerHTML={{
											__html: md.render(tip.A),
										}}
									/>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
					<div className='flex items-start'>
						<Image
							className='w-[300px] max-w-full'
							src={'/Bull.png'}
							alt='bull-image'
							width={350}
							height={350}
						/>
					</div>
					<iframe
						autoFocus={false}
						src={LINKS.uniswap.href}
						height='660px'
						className='rounded-xl max-lg:w-full w-3/4'
					/>
					<Button
						asChild
						variant={'outline'}
						className='mb-6 text-lg py-6 px-8 rounded-xl'>
						<Link href={LINKS.uniswap.href}>Go to Uniswap</Link>
					</Button>
				</div>
				<span className='absolute w-full left-0'>
					<Divider />
				</span>
			</section>
		</main>
	);
}

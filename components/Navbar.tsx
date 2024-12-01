'use client';
import React, { useState } from 'react';

import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { LINKS } from '@/lib/links';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(true);

	return (
		<nav
			id='nav'
			className=' font-semibold'>
			<ul className='hidden lg:flex items-center justify-between gap-4 text-2xl'>
				<Image
					className='w-[155px] max-w-full'
					src={'/nav_logo.png'}
					alt='fefe brand icon'
					width={512}
					height={512}
				/>
				<div className='flex items-center justify-center gap-4'>
					<li>
						<Link href={LINKS.home.href}>{LINKS.home.title}</Link>
					</li>
					<li>
						<Link href={LINKS.about.href}>{LINKS.about.title}</Link>
					</li>
					<li>
						<Link href={LINKS.tokenomics.href}>
							{LINKS.tokenomics.title}
						</Link>
					</li>
					<li>
						<Link href={LINKS.roadmap.href}>
							{LINKS.roadmap.title}
						</Link>
					</li>
					<li>
						<Link href={LINKS.howToBuy.href}>
							{LINKS.howToBuy.title}
						</Link>
					</li>
					<li>
						<Link
							target='_blank'
							href={LINKS.chart.href}>
							{LINKS.chart.title}
						</Link>
					</li>
				</div>
				<li className='ml-auto1'>
					<Button
						className='text-2xl font-semibold py-6 px-8 rounded-xl hover:bg-accent/70'
						asChild
						variant={'outline'}>
						<Link href={LINKS.buyNow.href}>{LINKS.buyNow.title}</Link>
					</Button>
				</li>
			</ul>
			{/* <Drawer>
				<DrawerTrigger className='flex items-center justify-between lg:hidden w-full '>
					<Image
						className='w-[155px] max-w-full'
						src={'/nav_logo.png'}
						alt='fefe brand icon'
						width={512}
						height={512}
					/>
					<span className='flex justify-end'>
						<Menu size={30} />
					</span>
				</DrawerTrigger>
				<DrawerContent className='max-h-[50vh]'>
					<DrawerHeader>
						<DrawerTitle>
							<span className='flex items-center justify-center'>
								<Image
									className='w-[200px] max-w-full'
									src={'/nav_logo.png'}
									alt='fefe brand icon'
									width={512}
									height={512}
								/>
							</span>
						</DrawerTitle>
						<DrawerDescription
							asChild
							className='font-semibold text-lg text-white max-h-[50vh] overflow-y-scroll'>
							<ul className='flex flex-col gap-3 mt-4 text-lg text-center'>
								<li>
									<Link href={LINKS.home.href}>
										{LINKS.home.title}
									</Link>
								</li>
								<li>
									<Link href={LINKS.about.href}>
										{LINKS.about.title}
									</Link>
								</li>
								<li>
									<a href={'http://localhost:3000/#tokenomics'}>
										{LINKS.tokenomics.title}
									</a>
								</li>
								<li>
									<Link href={LINKS.roadmap.href}>
										{LINKS.roadmap.title}
									</Link>
								</li>
								<li>
									<Link href={LINKS.howToBuy.href}>
										{LINKS.howToBuy.title}
									</Link>
								</li>
								<li>
									<Link href={LINKS.chart.href}>
										{LINKS.chart.title}
									</Link>
								</li>
								<li>
									<Button
										className='text-lg py-6 px-8 rounded-xl hover:bg-accent/70'
										asChild
										variant={'outline'}>
										<Link href={LINKS.buyNow.href}>
											{LINKS.buyNow.title}
										</Link>
									</Button>
								</li>
							</ul>
						</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter></DrawerFooter>
				</DrawerContent>
			</Drawer> */}

			{/* mobile navBar */}
			<div className='flex items-center justify-between lg:hidden w-full'>
				<Image
					className='w-[155px] max-w-full'
					src={'/nav_logo.png'}
					alt='fefe brand icon'
					width={512}
					height={512}
				/>
				<Button
					variant={'outline'}
					className='flex justify-end'
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <X size={30} /> : <Menu size={30} />}
				</Button>
			</div>
			{isMenuOpen && (
				<ul className='lg:hidden flex flex-col gap-3 mt-4 text-lg text-center'>
					<li>
						<Link href={LINKS.home.href}>{LINKS.home.title}</Link>
					</li>
					<li>
						<Link href={LINKS.about.href}>{LINKS.about.title}</Link>
					</li>
					<li>
						<a href={'http://localhost:3000/#tokenomics'}>
							{LINKS.tokenomics.title}
						</a>
					</li>
					<li>
						<Link href={LINKS.roadmap.href}>
							{LINKS.roadmap.title}
						</Link>
					</li>
					<li>
						<Link href={LINKS.howToBuy.href}>
							{LINKS.howToBuy.title}
						</Link>
					</li>
					<li>
						<Link href={LINKS.chart.href}>{LINKS.chart.title}</Link>
					</li>
					<li>
						<Button
							className='text-lg py-6 px-8 rounded-xl hover:bg-accent/70'
							asChild
							variant={'outline'}>
							<Link href={LINKS.buyNow.href}>
								{LINKS.buyNow.title}
							</Link>
						</Button>
					</li>
				</ul>
			)}
		</nav>
	);
}

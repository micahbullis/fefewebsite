import React from 'react';

import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from './ui/button';
import { CrossIcon, Menu } from 'lucide-react';
import { LINKS } from '@/lib/links';
import Link from 'next/link';
type Props = {};

export default function Navbar({}: Props) {
	return (
		<nav className=''>
			<ul className='hidden md:flex items-center gap-4 text-lg'>
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
					<Link href={LINKS.roadmap.href}>{LINKS.roadmap.title}</Link>
				</li>
				<li>
					<Link href={LINKS.howToBuy.href}>
						{LINKS.howToBuy.title}
					</Link>
				</li>
				<li>
					<Link href={LINKS.chart.href}>{LINKS.chart.title}</Link>
				</li>
				<li className='ml-auto'>
					<Button
						className='text-lg py-6 px-8 rounded-xl hover:bg-accent/70'
						asChild
						variant={'outline'}>
						<Link href={LINKS.buyNow.href}>{LINKS.buyNow.title}</Link>
					</Button>
				</li>
			</ul>
			<Drawer>
				<DrawerTrigger className='md:hidden w-full'>
					<span className='flex justify-end'>
						<Menu size={30} />
					</span>
				</DrawerTrigger>
				<DrawerContent className='max-h-[50vh]'>
					<DrawerHeader>
						<DrawerTitle>
							<span className='flex items-center justify-between'>
								<span>HOPPY 🙄</span>
								<DrawerClose asChild>
									<span>
										<CrossIcon className='text-2xl text-red-600 fill-red-600 rotate-45' />
									</span>
								</DrawerClose>
							</span>
						</DrawerTitle>
						<DrawerDescription
							asChild
							className='font-normal text-lg text-foreground max-h-[50vh] overflow-y-scroll'>
							<ul className='flex flex-col gap-4 text-lg text-center'>
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
			</Drawer>
		</nav>
	);
}

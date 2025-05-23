import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { LINKS } from '@/lib/links';

export default function Footer() {
	
	return (
		<footer className='flex flex-col items-center justify-center text-center gap-7'>
			<div className='flex flex-col justify-center items-center gap-3'>
				<Image
					className='w-[230px] max-w-full'
					src={'/footerImg.png'}
					alt='fefe logo'
					width={250}
					height={250}
				/>
				<Link
					href={'mailto:fefecoinofficial@gmail.com'}
					className='flex items-center justify-center rounded-full bg-white text-foreground p-2 w-8 h-8'>
					<Mail />
				</Link>
				<Button
					className='text-lg py-6 px-8 rounded-xl hover:bg-accent/70'
					asChild
					variant={'outline'}>
					<Link target='_blank' href={LINKS.buyNow.href}>{LINKS.buyNow.title}</Link>
				</Button>
			</div>

			<div className='flex flex-col items-center justify-center text-center gap-3'>
				<div className='flex flex-wrap justify-center items-center gap-3 max-w-[75ch]'>
					$FEFE coin has no association with Matt Furie or his
					creation <span className='italic'>“Mindviscosity”</span>
					This token is simply paying homage to a beloved meme we all
					love and recognize.
				</div>
				<div className='flex flex-wrap justify-center items-center gap-3'>
					© 2024 by fefe. All rights reserved!
				</div>
			</div>
		</footer>
	);
}

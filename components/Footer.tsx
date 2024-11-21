import { Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



export default function Footer() {
	return (
		<footer className='flex flex-col items-center justify-center text-center gap-7'>
			<div className='flex flex-col justify-center items-center gap-3'>
				<Image
					className=''
					src={'/logo.svg'}
					alt='logo'
					width={160}
					height={160}
				/>
				<h3 className='font-genty-regular max-lg:text-4xl text-6xl'>
					$0xfefe
				</h3>
				<Link
					href={'mailto:abv@gmail.com'}
					className='flex items-center justify-center rounded-full bg-accent p-2 w-8 h-8 mxa '>
					<Mail />
				</Link>
			</div>
			<div className='flex flex-wrap justify-center items-center gap-3'>
				<Image
					className=''
					src={'/crypto.png'}
					alt='logo'
					width={160}
					height={160}
				/>
				<Image
					className=''
					src={'/trust.png'}
					alt='logo'
					width={160}
					height={160}
				/>
				<Image
					className=''
					src={'/coinbase.svg'}
					alt='logo'
					width={160}
					height={160}
				/>
				<Image
					className=''
					src={'/certik.svg'}
					alt='logo'
					width={160}
					height={160}
				/>
			</div>
			<div className='flex flex-col items-center justify-center text-center gap-3'>
				<div className='flex flex-wrap justify-center items-center gap-3 max-w-[55ch]'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Perspiciatis et atque explicabo amet inventore sunt
					voluptates aliquam ducimus autem necessitatibus tenetur
					similique ipsa, quidem dolore odio voluptatum numquam.
					Iusto, assumenda.
				</div>
				<div className='flex flex-wrap justify-center items-center gap-3'>
					© 2024 by Hoppy. All rights reserved!
				</div>
			</div>
		</footer>
	);
}

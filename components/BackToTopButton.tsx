'use client';
import { ChevronUp } from 'lucide-react';
import Link from 'next/link';

import { useEffect, useState } from 'react';

type Props = {
	link: string;
};

function BackToTopButton({ link }: Props) {
	const [showScroller, setshowScroller] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', (ev) => {
			if (window.scrollY > 200) {
				setshowScroller(true);
			} else {
				setshowScroller(false);
			}
		});
	}, []);

	return (
		<Link
			className={`${
				showScroller ? 'flex' : 'hidden'
			} justify-center items-center fixed right-8 bottom-8 w-6 h-6 p-6 bg-primary/50 rounded-full`}
			href={link}>
			<span>
			<ChevronUp />
			</span>
		</Link>
	);
}

export default BackToTopButton;

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Quicksand } from 'next/font/google';

const quickSand = Quicksand({
	subsets: ['latin'],
	weight: ['300', '400', '600'],
	variable: '--quick-sand',
});

const gentyRegular = localFont({
	src: [
		{
			path: './fonts/GentyDemo-Regular.otf',
			weight: '100',
			style: 'normal',
		},
	],
	variable: '--font-genty-regular',
});

export const metadata: Metadata = {
	title: 'fefe',
	description: 'fefe is more than just a memecoin',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='scroll-smooth'>
			<body
				className={`${quickSand.className} ${gentyRegular.variable} text-white  antialiased`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}

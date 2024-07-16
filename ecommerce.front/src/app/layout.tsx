import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/navigations/Navbar';
import Footer from '@/components/navigations/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'E-Commerce',
	description: 'A complete e-commerce application with Next.js and Wix',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}

import '../styles/globals.css'
import Navigation from "../components/Navigation"
import { font } from './font'

export const metadata = {
	title: 'My first app with Next 13',
	description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={font.variable}>
				<Navigation />
				{children}
			</body>
		</html>
	)
}

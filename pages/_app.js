// _app.js

import '@fortawesome/fontawesome-svg-core/styles.css'
import './globals.scss'
import Head from 'next/head'

const siteTitle = 'Mathew Kramsch';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>{siteTitle}</title>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<meta name="description" content="I'm a diligent fifth year Computer Science student at UC Santa Barbara who is currently looking for software development engineering opportunities."/>
				<meta name="keywords" content="Mathew, Kramsch, Mathew Kramsch, mathewkramsch, mathew webdev, webdev"/>
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"/>
				<script src="https://kit.fontawesome.com/e82fae02e2.js" crossOrigin="anonymous"></script>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

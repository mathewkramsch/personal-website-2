// _app.js

import '@fortawesome/fontawesome-svg-core/styles.css'
import './globals.scss'
import Head from 'next/head'

const siteTitle = 'Mathew Kramsch';
const description = 'Software developer and diligent fifth year computer science student at UC Santa Barbara, graduating in June 2022';
const keywords = 'Mathew, Kramsch, Mathew Kramsch, mathewkramsch, mathew webdev, webdev'
const image_path = '/site_screenshot.png'
const image_alt = 'Site Page'

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>{siteTitle}</title>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<meta name='description' content={description}/>
				<meta name='keywords' content={keywords}/>
				<meta name='twitter:card' content='summary'/>
				<meta name='twitter:title' content={siteTitle}/>
				<meta name='twitter:description' content={description}/>
				<meta name='twitter:image' content={image_path}/>
				<meta name='twitter:image:alt' content={image_alt}/>
				<meta property='og:type' content='website'/>
				<meta property='og:site_name' content='TuffHouse'/>
				<meta property='og:title' content={siteTitle}/>
				<meta property='og:description' content={description}/>
				<meta property='og:image' content={image_path}/>
				<meta property='og:image:alt' content={image_alt}/>
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

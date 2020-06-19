import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		let props = { ...initialProps };

		return props;
	}

	render() {
		return (
			<html>
				<Head>
					<script src="https://kit.fontawesome.com/e0c5882a2d.js" crossOrigin="anonymous"></script>
					<head>
						<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
						<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
					</head>
				</Head>
				<body>
					<Main />
					<NextScript />
					<style></style>
					<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
					<script>AOS.init();</script>
					<script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>

					<script
						src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
						crossOrigin="true"
					></script>

					<script
						src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
						crossOrigin="true"
					></script>
				</body>
			</html>
		);
	}
}

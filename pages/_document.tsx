import { Html, Head, Main, NextScript } from 'next/document';

export function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;900&display=swap" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  );
}

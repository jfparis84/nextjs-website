import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import '../styles/globals.scss';
import 'highlight.js/scss/base16/dracula.scss';


function MyApp({ Component, pageProps }) {

  // Google Tag Manager
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
  }, []);

  return <Component {...pageProps} />
}

export default MyApp

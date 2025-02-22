import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import { Footer } from '../components/Footer';
import Notifications from '../components/Notification'
import { Layout } from 'components/Layout';

require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Superteam scan to pay</title>
        <meta
          name="description"
          content="Superteam scan to pay bounty"
        />
      </Head>

      <ContextProvider>
        <div className="flex flex-col h-screen">
          <Notifications />
          <AppBar />
          <ContentContainer>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ContentContainer>
          <Footer />
        </div>
      </ContextProvider>
    </>
  );
};

export default App;

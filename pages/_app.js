import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/services/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>React rpg</title>
      </Head>
      <Component {...pageProps} /> <Footer />
    </Provider>
  );
}

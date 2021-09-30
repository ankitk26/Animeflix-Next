import { useApollo } from "@/apollo/client";
import AnimeProvider from "@/context/AnimeContext";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";

export default function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <AnimeProvider>
        <Component {...pageProps} />
      </AnimeProvider>
    </ApolloProvider>
  );
}

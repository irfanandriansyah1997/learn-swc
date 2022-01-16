import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client';
import { PropsWithChildren, useMemo } from 'react';

/**
 * Generate Apollo Client
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @returns {ApolloClient<NormalizedCacheObject>} apollo client instance
 * @since 0.0.2
 */
export const GenApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const connection = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql'
  });

  return connection;
};

/**
 * Graphql Provider Component
 *
 * @param {PropsWithChildren<unknown>} props - props graphql provider component
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @returns {JSX.Element} react element
 * @since 0.0.2
 */
export const GraphqlProvider = ({ children }: PropsWithChildren<unknown>) => {
  const connection = useMemo(() => {
    return GenApolloClient();
  }, []);

  return <ApolloProvider client={connection}>{children}</ApolloProvider>;
};

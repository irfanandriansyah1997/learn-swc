import { ApolloError } from '@apollo/client';

import { IAppsError, IAppsErrorType } from '@interface/general';

/**
 * Log Error
 *
 * @param {Error | ApolloError} error - error object obtained from catch exception error on main apps
 * @param {string} page - page name
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @description the main purpose of this method is for standardized error object when we collect from every try-catch or graphql exception
 * @returns {IAppsError} formatted error
 * @since 0.0.2
 */
export const logError = (
  error: Error | ApolloError,
  page: string
): IAppsError => {
  if (error instanceof ApolloError) {
    const { graphQLErrors, message, stack } = error;
    const response: IAppsError = {
      message,
      page,
      stackTrace: stack,
      type: IAppsErrorType.network
    };

    if (graphQLErrors && graphQLErrors.length) {
      return {
        ...response,
        type: IAppsErrorType.graphql
      };
    }

    return response;
  }

  if (error instanceof Error) {
    const { message, stack } = error;

    return {
      message,
      page,
      stackTrace: stack,
      type: IAppsErrorType.others
    };
  }

  return {
    message: 'Unknown error',
    page,
    type: IAppsErrorType.unknown
  };
};

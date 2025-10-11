import { QueryClient } from '@tanstack/react-query';

/**
 * React Query Client Configuration
 *
 * Configures global defaults for data fetching, caching, and error handling.
 * Optimized for production use with sensible defaults.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Cache time: how long data stays in cache after becoming unused
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      // Stale time: how long data is considered fresh
      staleTime: 1000 * 60 * 5, // 5 minutes
      // Retry failed requests
      retry: 1,
      // Refetch on window focus in production
      refetchOnWindowFocus: true,
      // Refetch on reconnect
      refetchOnReconnect: true,
      // Refetch on mount if data is stale
      refetchOnMount: true,
    },
    mutations: {
      // Retry failed mutations once
      retry: 1,
    },
  },
});

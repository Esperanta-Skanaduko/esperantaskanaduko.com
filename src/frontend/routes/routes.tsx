import React, { Suspense } from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { ErrorBoundary } from '../../components/ErrorBoundary';

/**
 * Lazy-loaded page components with automatic code splitting
 * Each route is loaded on-demand for optimal performance
 */
const Homepage = React.lazy(() => import('../pages/homePage'));
const PDFTest = React.lazy(() => import('../pages/pDFTest'));
const AboutPage = React.lazy(() => import('../pages/about/aboutPage'));
const AuthPage = React.lazy(() => import('../pages/AuthPage'));
const LibraryPage = React.lazy(() => import('../pages/library/LibraryPage'));
const DonatePage = React.lazy(() => import('../pages/DonatePage'));
const EsperantoLiveConcertVideosPage = React.lazy(
  () => import('../pages/library/EsperantoLiveConcertVideosPage')
);
const ResourcePage = React.lazy(() => import('../pages/resources/ResourcePage'));

/**
 * Route Wrapper Component
 * Wraps each route with error boundary for isolated error handling
 */
const RouteWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ErrorBoundary>{children}</ErrorBoundary>
);

/**
 * Application Routes Configuration
 *
 * Defines all application routes with lazy loading and error boundaries.
 * Each route is wrapped in Suspense for loading states and ErrorBoundary for error handling.
 */
const Routes = () => {
  return (
    <Suspense fallback={<Loading variant="fullscreen" message="Ŝarĝante..." />}>
      <Router>
        <Route
          path="/"
          element={
            <RouteWrapper>
              <Homepage />
            </RouteWrapper>
          }
        />
        <Route
          path="/library"
          element={
            <RouteWrapper>
              <LibraryPage />
            </RouteWrapper>
          }
        />
        <Route
          path="/donate"
          element={
            <RouteWrapper>
              <DonatePage />
            </RouteWrapper>
          }
        />
        <Route
          path="/resources"
          element={
            <RouteWrapper>
              <ResourcePage />
            </RouteWrapper>
          }
        />
        <Route
          path="/pdf"
          element={
            <RouteWrapper>
              <PDFTest />
            </RouteWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <RouteWrapper>
              <AboutPage />
            </RouteWrapper>
          }
        />
        <Route
          path="/library/esperanto-live-concert-videos"
          element={
            <RouteWrapper>
              <EsperantoLiveConcertVideosPage />
            </RouteWrapper>
          }
        />
        <Route
          path="/auth"
          element={
            <RouteWrapper>
              <AuthPage />
            </RouteWrapper>
          }
        />
      </Router>
    </Suspense>
  );
};

export default Routes;

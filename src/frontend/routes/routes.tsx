import React, { Suspense } from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import { Loading } from '../../components/Loading';

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

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Route path='/' element={<Homepage />} />
        <Route path='/library' element={<LibraryPage />} />
        <Route path='/donate' element={<DonatePage />} />
        <Route path='/resources' element={<ResourcePage />} />
        <Route path='/pdf' element={<PDFTest />} />
        <Route path='/about' element={<AboutPage />} />
        <Route
          path='/library/esperanto-live-concert-videos'
          element={<EsperantoLiveConcertVideosPage />}
        />
        <Route path='/auth' element={<AuthPage />} />
      </Router>
    </Suspense>
  );
};

export default Routes;

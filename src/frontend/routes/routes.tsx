import { Routes as Router, Route } from 'react-router-dom';
import Homepage from '../pages/homePage';
import PDFTest from '../pages/pDFTest';
import AboutPage from '../pages/about/aboutPage';
import { AuthPage } from '../pages/AuthPage';
import LibraryPage from '../pages/library/LibraryPage';
import DonatePage from '../pages/DonatePage';
import EsperantoLiveConcertVideosPage from '../pages/library/EsperantoLiveConcertVideosPage';

import ResourcePage from '../pages/resources/ResourcePage';

const Routes = () => {
  return (
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
  );
};

export default Routes;

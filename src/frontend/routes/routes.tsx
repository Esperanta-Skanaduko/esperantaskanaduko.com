import { Routes as Router, Route } from 'react-router-dom';
import Homepage from '../pages/homePage';
import PDFTest from '../pages/pDFTest';

const Routes = () => {
  return (
    <Router>
      <Route path='/' element={<Homepage />} />
      <Route path='/pdf' element={<PDFTest />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Router>
  );
};

export default Routes;

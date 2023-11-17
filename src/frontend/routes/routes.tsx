import { Routes as Router, Route } from 'react-router-dom';
import Homepage from '../pages/homePage';

const Routes = () => {

  return (
    <Router>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Router>
  );
};

export default Routes;
import '../../Paĝoj/landingPage/landingPage.css';
import PDFViewer from '../../Komponantoj/PDFViewer/PDFViewer';
import { BrowserRouter as Button, Link } from "react-router-dom";
// import Skanadukoj from '../components/skanadukoj';
// import login from '../components/api/login'

PDFViewer('../../../Assets/Chapter 1.pdf');

const eldonoj = () => (
  <>
    <p data-item='Eldonoj'> Eldonoj </p>
    <br/>
 
    <li><Link to='/PDFPage'><Button>Click</Button></Link></li>
  </>
)

export default eldonoj

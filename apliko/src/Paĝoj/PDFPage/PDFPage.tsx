import * as React from "react"
import './landingPage.css'
import PDFViewer from '../../Komponantoj/PDFViewer/PDFViewer';
import { BrowserRouter as Button, Route, Link, BrowserRouter } from "react-router-dom";
// import Skanadukoj from '../components/skanadukoj';
// import login from '../components/api/login'

PDFViewer('../../../Assets//Chapter 1.pdf');

const eldonoj = () => (
  <>
  <li><Link to='../PDFPage/PDFPage'><Button></Button></Link></li>
  {PDFViewer}
  </>
)

export default eldonoj

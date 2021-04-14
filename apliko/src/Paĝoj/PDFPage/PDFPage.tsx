import * as React from "react"
import PDFViewer from '../../Komponantoj/PDFViewer/PDFViewer';
// import login from '../components/api/login'

// PDFViewer('../../../Assets//Chapter 1.pdf');

const PDFPage = () => (
  <>
  {PDFViewer('../../../public/Assets/Chapter 1.pdf')}
  </>
)

export default PDFPage

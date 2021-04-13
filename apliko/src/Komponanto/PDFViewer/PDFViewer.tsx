import * as React from "react"
import * as reactPdf from 'react-pdf';
import './landingPage.css'
import { useState } from "react";

const PDFViewer = (filename: String) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
return (
  <>
    <div>
      <reactPdf.Document
        file= {filename}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <reactPdf.Page pageNumber={pageNumber} />
      </reactPdf.Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  </>
)
        }
export default PDFViewer

import Viewer from 'pdf-viewer-reactjs';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '../../Paĝoj/landingPage/landingPage.css';
// import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = (filename: String) => {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
        // setNumPages(numPages);
      // }
return (
  <>
    <div>
    <Viewer
            document={{
                url: '../../../public/Assets/Chapter 1.pdf',
            }}
        />
    </div>

   
  </>
)
        }
export default PDFViewer

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the worker source URL
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDFTest = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div>
      <button onClick={handlePrevPage} disabled={pageNumber <= 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage} disabled={pageNumber >= numPages}>
          Next Page
        </button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      <Document
        file="https://arxiv.org/pdf/quant-ph/0410100.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber} of {numPages}
        </p>

      </div>
    </div>
  );
};

export default PDFTest;

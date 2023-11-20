import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';


const PDFTest = () => {
  const [pageNumber] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(0);

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };
  return (
    <div>
      <p>PDFTest</p>
      <Document
        file="https://arxiv.org/pdf/quant-ph/0410100.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </Document>
    </div>
  );
};

export default PDFTest;

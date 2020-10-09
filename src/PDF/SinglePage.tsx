import React, { useState, useEffect, } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { throttle } from 'lodash';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function SinglePage(props: any) {
  // const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
  const [PDFWidth, setWidth] = useState(1);

  const setPDFWidth = () => {
    const width = window.innerWidth
    setWidth( width )
  }
  
  useEffect(() => {
    setPDFWidth()
    window.addEventListener('resize', throttle(setPDFWidth, 500))
    return window.removeEventListener('resize', throttle(setPDFWidth, 500))
  }, []);

  function onDocumentLoadSuccess({ numPages = 1 }: any) {
    // setNumPages(numPages);
    setPageNumber(1);
  }

  // function changePage(offset:any) {
  //   setPageNumber(prevPageNumber => prevPageNumber + offset);
  // }

  // function previousPage() {
  //   changePage(-1);
  // }

  // function nextPage() {
  //   changePage(1);
  // }

  const { pdf } = props;

  return (
    <Document file={pdf} options={{ workerSrc: '/pdf.worker.js' }} onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber} width={PDFWidth} />
    </Document>
  );
}

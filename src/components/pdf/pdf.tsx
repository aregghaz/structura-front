import { useState } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "../../../pdf-worker";
import {inspect} from "util";
import styles from './pdf.module.css'

pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';;

export default function PDFViewer({file,setFile}) {

    const [numPages, setNumPages] = useState(null);



    function onDocumentLoadSuccess({ numPages: nextNumPages }) {

        setNumPages(nextNumPages);
    }

    return file && (
        <div>

            <div style={{ overflow: "hidden", width:740}}>
                <Document file={file}   onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from({ length: numPages }, (_, index) => (
                        <Page
                            width={740}
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            renderAnnotationLayer={true}
                            renderTextLayer={false}
                            className={styles.canvas}

                        />
                    ))}
                </Document>
            </div>
        </div>
    );
}

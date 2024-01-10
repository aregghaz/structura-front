import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styles from './pdf.module.css'
import {IPdfView} from "@/types/global";
import {fakeUrl} from "@/utils/utils";

pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

export default function PDFViewer({file}:any) {

    const [numPages, setNumPages] = useState<number>(0);



    function onDocumentLoadSuccess({ numPages: nextNumPages }:{numPages:number}) {

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

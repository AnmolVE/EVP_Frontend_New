import React, { useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import "../../../common/Tollgate.css";

function EVPTollgate1Popup({ isOpen, onClose, tollgate_data }) {
  const pdfRef = useRef();

  if (!isOpen) return null;

  const handleDownloadPDF = async () => {
    const element = pdfRef.current;

    // Convert the content into a canvas
    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");

    // Define PDF dimensions
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 190;
    const pageHeight = 297;
    let imgHeight = (canvas.height * imgWidth) / canvas.width;
    let yPosition = 10;

    // Add the image to the first page
    pdf.addImage(imgData, "PNG", 10, yPosition, imgWidth, imgHeight);

    // Handle multiple pages dynamically
    while (imgHeight > pageHeight - 20) {
      pdf.addPage();
      yPosition = 10;
      pdf.addImage(imgData, "PNG", 10, yPosition, imgWidth, imgHeight);
      imgHeight -= pageHeight - 20;
    }

    pdf.save("Discovery_Report.pdf");
  };

  return (
    <div className="tollgatePopup-overlay">
      <div className="tollgatePopup-content">
        <button className="tollgatePopup-close-button" onClick={onClose}>
          &times;
        </button>
        <p ref={pdfRef} className="custom_para2 tollgatePopup-para">
          <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTidle: false }]]}>
            {tollgate_data}
          </ReactMarkdown>
        </p>
        <button className="default-btn" onClick={handleDownloadPDF}>
          Download as PDF
        </button>
      </div>
    </div>
  );
}

export default EVPTollgate1Popup;

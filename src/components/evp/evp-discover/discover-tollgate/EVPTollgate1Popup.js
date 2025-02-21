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
    const pdf = new jsPDF("p", "mm", "a4");

    // PDF Dimensions
    const imgWidth = 190; // Width of the content in the PDF
    const pageHeight = 297; // Height of A4 page in mm
    const margin = 10; // Margin at the top and bottom of each page
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let position = 0; // Track the position of the content

    // Add content to the PDF page by page
    while (position < canvas.height) {
      // Calculate the height of the current page
      const pageContentHeight =
        (pageHeight - 2 * margin) * (canvas.width / imgWidth);
      const cropHeight = Math.min(pageContentHeight, canvas.height - position);

      // Create a cropped canvas for the current page
      const croppedCanvas = document.createElement("canvas");
      const croppedContext = croppedCanvas.getContext("2d");

      croppedCanvas.width = canvas.width;
      croppedCanvas.height = cropHeight;

      // Draw the cropped content onto the new canvas
      croppedContext.drawImage(
        canvas,
        0,
        position,
        canvas.width,
        cropHeight,
        0,
        0,
        canvas.width,
        cropHeight
      );

      const croppedImgData = croppedCanvas.toDataURL("image/png");

      // Add the cropped image to the pdf
      if (position > 0) {
        pdf.addPage(); // Add a new page for additional content
      }

      pdf.addImage(
        croppedImgData,
        "PNG",
        margin,
        margin,
        imgWidth,
        (cropHeight * imgWidth) / canvas.width
      );

      // Update the position for the next iteration
      position += cropHeight;
    }

    // Save the PDF
    pdf.save("Discovery_Report.pdf");
  };

  return (
    <div className="tollgatePopup-overlay">
      <div className="tollgatePopup-content">
        <button className="tollgatePopup-close-button" onClick={onClose}>
          &times;
        </button>
        <div ref={pdfRef} className="custom_para2 tollgatePopup-para">
          <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTidle: false }]]}>
            {tollgate_data}
          </ReactMarkdown>
        </div>
        <button className="default-btn" onClick={handleDownloadPDF}>
          Download as PDF
        </button>
      </div>
    </div>
  );
}

export default EVPTollgate1Popup;

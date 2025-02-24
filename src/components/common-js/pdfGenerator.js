import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const generatePDF = async (element, fileName = "Report.pdf") => {
  if (!element) return;

  try {
    const canvas = await html2canvas(element, { scale: 2, useCORS: true });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 190; // Content width in PDF
    const pageHeight = 297; // A4 page height in mm
    const margin = 10; // Top and bottom margin
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let position = 0;

    while (position < canvas.height) {
      const pageContentHeight =
        (pageHeight - 2 * margin) * (canvas.width / imgWidth);
      const cropHeight = Math.min(pageContentHeight, canvas.height - position);

      const croppedCanvas = document.createElement("canvas");
      const croppedContext = croppedCanvas.getContext("2d");

      croppedCanvas.width = canvas.width;
      croppedCanvas.height = cropHeight;

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

      if (position > 0) {
        pdf.addPage();
      }

      pdf.addImage(
        croppedImgData,
        "PNG",
        margin,
        margin,
        imgWidth,
        (cropHeight * imgWidth) / canvas.width
      );

      position += cropHeight;
    }

    pdf.save(fileName);
  } catch (error) {
    console.error("Failed to generate PDF:", error);
  }
};

export default generatePDF;

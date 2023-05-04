import React from 'react';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';
import { Button } from 'react-bootstrap';

const DownloadPdf = ({elementId,fileName}) => {
    const downloadFileDocument = () =>{
        const input = document.getElementById(elementId)
        html2canvas(input).then((canvas)=>{
            const imgData = canvas.toDataURL("image/png")
            const pdf = new jsPDF("p","pt","a4")
            pdf.addImage(imgData,"JPEG",10,50)
            pdf.save(`${fileName}`)
        })
    }
    return (
        <div>
            <Button className='btn-danger p-2' onClick={downloadFileDocument}>Download Pdf</Button>
        </div>
    );
};

export default DownloadPdf;
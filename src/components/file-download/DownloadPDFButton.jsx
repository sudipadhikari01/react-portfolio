import React from 'react';
import "./style/style.css";


const DownloadPDFButton = () => {

  const onButtonClick = () => {
     
    
    fetch("/pdf/Sudip_Adhikari_resume.pdf").then((response) => {
        response.blob().then((blob) => {
         
            const fileURL =
                window.URL.createObjectURL(blob);
                 
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "SamplePDF.pdf";
            alink.click();
        });
    });
};

  return (
    <div>
     
            <center>
                <h3>
                    Click on below button to download Resume
                </h3>
                <button onClick={onButtonClick} className='download-button'>
                    Download Resume
                </button>
            </center>
    </div>
  
  );
};

export default DownloadPDFButton;

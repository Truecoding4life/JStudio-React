import React from 'react';
import resume from '../assets/resume.pdf'

  const handleDownload = () => {
    // Replace 'your-resume-file.pdf' with the actual filename of your resume
    const resumeFileName = 'resume.pdf';

    // Replace 'path-to-your-resume/' with the actual path to your resume file
    const resumeFilePath = resume;

    // Create a temporary link element
    const link = document.createElement('a');

    // Set the download attribute with the filename
    link.download = resumeFileName;

    // Set the href attribute with the path to the resume file
    link.href = resumeFilePath;


  };

  


export default handleDownload;
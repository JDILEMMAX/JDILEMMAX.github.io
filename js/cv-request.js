const downloadCvButton = document.getElementById('download-cv');

    downloadCvButton.addEventListener('click', () => {
      // Replace 'your-cv.pdf' with the actual filename of your CV
      const cvUrl = 'assets/cv.pdf';

      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = "Vincent's_CV.pdf"; // Set the download filename
      document.body.appendChild(link); // Append the link to the DOM
      link.click(); // Simulate a click to trigger download
      document.body.removeChild(link); // Remove the link after click
    });

# Resume Builder

An interactive **Resume Builder** web application created by **Muhammad Sami Asghar Mughal**. This tool allows users to input personal, educational, and professional information to generate a formatted resume that can be downloaded as a PDF.

## Project Overview

This Resume Builder is designed to help users quickly create a resume by filling out a form with key personal details. The project includes:
- **Personal Information**: Name, email, phone, and profile picture.
- **Education**: Educational background and qualifications.
- **Experience**: Professional experience details.
- **Skills**: Relevant skills and expertise.
  
Once filled, the resume is generated and displayed in real time, and users can download it as a PDF file.

## Features

- **Interactive Form**: Input fields for name, email, phone, profile picture, education, experience, and skills.
- **Real-Time Resume Generation**: Instantly displays a preview of the resume.
- **PDF Download Option**: Users can download their resume as a PDF.
- **Simple and Clean UI**: Focused on ease of use.

## Getting Started

### Prerequisites

To run this project, all you need is a modern browser.

### Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/muhammadsami987123/Resme-Builder-Milestone-5.git
    ```
2. Navigate to the project directory:
    ```bash
    cd resume-builder
    ```
3. Open the `index.html` file in your browser to start using the Resume Builder.

## Usage

1. Open `index.html` in your preferred browser.
2. Enter the required details in each section of the form.
3. Click the **Generate Resume** button, and the resume will appear below the form.
4. Click the **Download as PDF** button to save the resume.

## Project Structure

- **index.html** - Contains the main HTML structure and form for data input.
- **css/styles.css** - Styling for the form and output display.
- **js/script.js** - JavaScript logic to capture form data, render the resume dynamically, and download it as a PDF.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**
- **jsPDF** (for PDF generation)

## Adding PDF Download Functionality

This project uses the [jsPDF](https://github.com/parallax/jsPDF) library to convert the generated resume to a downloadable PDF. The following code snippet in `script.js` handles this:

```javascript
document.addEventListener("DOMContentLoaded", () => {
    const downloadBtn = document.getElementById("downloadBtn");

    downloadBtn.addEventListener("click", () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const resumeContent = document.getElementById("resumeOutput").innerText;
        doc.text(resumeContent, 10, 10);
        doc.save("resume.pdf");
    });
});
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

**Muhammad Sami Asghar Mughal**  
[GitHub Profile](https://github.com/muhammadsami987123)  
[LinkedIn Profile](https://www.linkedin.com/in/muhammad-sami-3aa6102b8)


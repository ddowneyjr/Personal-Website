document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('input');
    const outputDiv = document.getElementById('output');
    const prompt = '> ';
    const typewriterText = '> Derrell Downey Jr.';
    const typewriterElement = document.getElementById('typewriter');

    // Function to create typewriter effect
    function typeWriterEffect(text, i) {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(() => typeWriterEffect(text, i), 100); // Adjust speed here (100ms)
        }
    }

    // Function to display the welcome message
    function displayWelcomeMessage() {
        outputDiv.innerHTML += `<div>${prompt}Welcome! Type 'help' to get started.</div>`;
        outputDiv.scrollTop = outputDiv.scrollHeight; // Scroll to the bottom
    }

    // Display the welcome message
    displayWelcomeMessage();

    // Start the typewriter effect after the welcome message
    setTimeout(() => typeWriterEffect(typewriterText, 0), 500); // Adjust delay here (500ms)

    // Function to handle input
    function handleInput(e) {
        if (e.key === 'Enter') {
            const inputValue = inputField.value.trim();
            outputDiv.innerHTML += `<div>${prompt}${inputValue}</div>`;
            inputField.value = '';

            if (inputValue.toLowerCase() === 'clear') {
                clearTerminal();
            } else {
                processCommand(inputValue);
            }
        }
    }

    // Function to clear the terminal
    function clearTerminal() {
        outputDiv.innerHTML = '';
    }

    // Function to process commands using switch case
    function processCommand(command) {
        switch (command.toLowerCase()) {
            case 'help':
                outputDiv.innerHTML += `<div>Available commands: help, projects, experience, clear</div>`;
                break;
            case 'projects':
                outputDiv.innerHTML += `<div>Projects:</div>
                    <div>Album Price Checker | JavaScript, React | <a href="https://github.com/ddowneyjr/Album-Price-Finder">link</a></div>
                    <div>• Employed JavaScript to fetch data from multiple external APIs, including music database APIs, for retrieving album information and pricing details</div>
                    <div>• Devised a price tracking algorithm to monitor and notify users of price drops or discounts for their selected albums</div>
                    <div>• Utilized Firebase as a backend database for storing client’s favorite albums</div>
                    <div></div>
                    <div>Facial Emotion Recognition | Python, Google Colab | <a href="https://github.com/ddowneyjr/Facial-Emotion-Recognizer">link</a></div>
                    <div>• Developed and evaluated multiple CNN architectures, including Simple CNN, VGG16, ResNet101, MobileNetV2, and DenseNet169, to classify facial images into seven primary emotional states</div>
                    <div>• Employed data augmentation techniques, such as normalization and mirroring, to balance the dataset and reduce overfitting</div>
                    <div>• Analyzed and interpreted model performance using confusion matrices to achieve a highest testing accuracy of 63% with DenseNet169</div>
                    <div></div>
                    <div>School Admin Software | Java, SQL | <a href="https://github.com/ddowneyjr/SchoolManagementSystem">link</a></div>
                    <div>• Developed software utilizing a mySQL database to store the information of students, teachers, and administration</div>
                    <div>• Programmed GUI and back-end using Java and mySQL</div>
                    <div>• Implemented a login window connecting to the database to verify user type</div>`;
                break;
            case 'experience':
                outputDiv.innerHTML += `<div>Experience:</div>
                    <div>Technical Consulting Intern | West Monroe | JUN '24 -  JUL '24</div>
                    <div>• Took charge of administration, development, test, and data manipulation tasks for client solution using Salesforce, Apex, SOQL, Javascript, and Python</div>
                    <div>• Implemented a Salesforce CPQ system for the largest privately owned commercial flooring company in the United States</div>
                    <div>• Developed an internal tool under a senior employee to accelerate CPQ implementation alongside client work reducing time of twin field creation by over 50%</div>
                    <div></div>
                    <div>Front End Development Intern | Your Fair Share | FEB '24 - MAY '24</div>
                    <div>• Designed and implemented the 'About Us' page using React.js, enhancing the website's user experience and visual appeal, and supporting the organization's mission to promote eco-friendly solutions.</div>
                    <div>• Actively participated in team discussions and a job interview process, contributing insights and gaining a deeper understanding of team dynamics and hiring practices within the startup environment.</div>
                    <div>• Acquired and applied knowledge of circular economy and sustainability practices, integrating these principles into web development projects to align with the company's environmental goals.</div>`;
                break;
            default:
                outputDiv.innerHTML += `<div>Command not recognized. Type 'help' for a list of commands.</div>`;
                break;
        }

        // Scroll to the bottom of the outputDiv
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }

    // Event listener for keypress in input field
    inputField.addEventListener('keypress', handleInput);
});

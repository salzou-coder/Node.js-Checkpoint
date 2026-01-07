# Node.js Checkpoint

## Overview
This project serves as a practical introduction to Node.js. It consists of a series of exercises that cover the core concepts of Node.js, including creating scripts, building an HTTP server, working with the File System module, and using third-party packages. Each task is implemented in a separate file to facilitate step-by-step learning and understanding of Node.js fundamentals.

## Task Description
This checkpoint includes the following tasks:

1. **Hello World**: Create a file `hello-world.js` and print `"HELLO WORLD"` to the console.
2. **HTTP Server**: Build a server that runs on port 3000 and responds with `<h1>Hello Node!!!!</h1>` when accessed at `http://localhost:3000`.
3. **File System Operations**:
   - Create a file named `welcome.txt` containing `"Hello Node"`.
   - Read data from `welcome.txt` and display it in the console.
4. **Password Generator**:
   - Install the `generate-password` package.
   - Create a function that generates random passwords and prints them in the console.
5. **Email Sender**:
   - Install the `nodemailer` package.
   - Implement a function to send an email (personal credentials should be removed before pushing to GitHub).

Each task demonstrates a specific aspect of Node.js, from console interaction and server creation to file manipulation and working with npm packages.

## Installation
1. Download and install [Node.js](https://nodejs.org/).
2. Clone this repository:
   ```bash
   git clone https://github.com/USERNAME/Node.js-Checkpoint.git
3. Navigate into the project directory:

cd Node.js-Checkpoint


4. Install necessary npm packages:

npm install


(Packages include generate-password and nodemailer.)

## Usage

. Run the Hello World script:

node hello-world.js


. Start the HTTP server:

node server.js


. Run file system operations:

node file-system.js


. Generate passwords:

node password-generator.js


. Send email (ensure credentials are set correctly):

node email-sender.js

## Screenshots

Screenshots for each task are saved in the screenshots/ folder with descriptive names, e.g.:

hello-world.png

http-server.png

file-read-write.png

password-generator.png

email-sender.png

## Author

 Salwa Zouaghi

GitHub: https://github.com/salzou-coder

## Email Sender (Nodemailer)

Nodemailer is configured to send emails using Gmail.

Due to Google security restrictions (App Password required) and loss of access
to the Gmail account password, the email could not be sent successfully.

However, the Nodemailer configuration and implementation are correct
according to the official documentation.

## node_modules has been removed from the repository and ignored using .gitignore as per best practices.

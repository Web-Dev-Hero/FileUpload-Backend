# File Upload using Express.js and express-fileupload with Cloudinary

This is a Node.js application demonstrating file upload functionality using Express.js and express-fileupload middleware, with file storage managed by Cloudinary.

## Features

- **File Upload**: Allows users to upload files to the server.
- **File Validation**: Validates uploaded files based on file types and size.
- **Cloud Storage**: Utilizes Cloudinary for storing uploaded files in the cloud.
- **Error Handling**: Handles errors gracefully during file upload.

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js (https://nodejs.org/)
- npm (Node.js package manager, comes with Node.js installation)
- Git (https://git-scm.com/) (optional, for cloning the repository)
- A Cloudinary account (https://cloudinary.com/) with your cloud credentials.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/dev-Nikhil/your-repo.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repo
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up Cloudinary credentials:

    Sign up or log in to your Cloudinary account. Obtain your cloud name, API key, and API secret.

    Create a `.env` file in the root directory of your project:

    ```plaintext
    CLOUDINARY_CLOUD_NAME=your-cloud-name
    CLOUDINARY_API_KEY=your-api-key
    CLOUDINARY_API_SECRET=your-api-secret
    ```

    Replace `your-cloud-name`, `your-api-key`, and `your-api-secret` with your actual Cloudinary credentials.

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. Open your web browser and go to [http://localhost:7000](http://localhost:7000).

3. You will see a simple file upload form.

4. Choose a file and click the "Upload" button.

5. The server will process the file upload and store it in your Cloudinary account.

## Configuration

You can configure the maximum file size and allowed file types in the `index.js` file.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-feature`.
3. Make your changes and commit them: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


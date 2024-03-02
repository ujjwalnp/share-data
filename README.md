# Share Data

Share Data is a simple Node.js application that allows you to share files over a local network. It uses an Express server to serve files stored in a specific directory, making them accessible to other devices connected to the same network.

## Features

- Share files over a local network
- Serve files using an Express server
- Specify a directory for sharing files
- Simple and easy-to-use interface

## Getting Started

Follow these instructions to get the Share Data application up and running on your local machine.

### Prerequisites

- Node.js installed on your machine
- Yarn package manager installed

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ujjwalnp/share-data.git
   ```

2. Navigate to the project directory:

    ```bash
    cd share-data
    ```

3. Install dependencies using yarn:

    ```bash
    yarn install
    ```

### Usage
1. Modify the shared_files directory to contain the files you want to share.

3. Create a .env file in the root directory based on the provided .env.example file.

2. Start the Express server by running:

    ```bash
    yarn start
    ```

3. Access the shared files through the server's URL using a web browser or other HTTP client.

### Configuration
You can configure the directory from which files are served by modifying the shared_files directory in the project.

### Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow the standard GitHub workflow:

1. Fork the repository
2. Create a new branch (git checkout -b feature/your-feature)
3. Make your changes
4. Commit your changes (git commit -am 'Add new feature')
5. Push to the branch (git push origin feature/your-feature)
6. Create a new Pull Request

### License
This project is licensed under the [MIT License](LICENSE).

### Acknowledgements
This project was inspired by the need to share files easily over a local network.
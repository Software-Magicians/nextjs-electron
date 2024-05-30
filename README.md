# Next.js PWA & Electron Boilerplate

This repository provides a boilerplate project for building desktop applications using Next.js and Electron. This setup combines the power of React with the versatility of Electron, allowing you to create high-performance, cross-platform desktop apps with ease.

## Features

- **Next.js Integration**: Utilize Next.js for server-side rendering and static site generation.
- **Electron Integration**: Leverage Electron to create cross-platform desktop applications.
- **Hot Reloading**: Enjoy fast development with hot reloading for both Electron and Next.js.
- **Customizable**: Easily extend and customize to fit your specific needs.
- **Cross-Platform**: Build applications for Windows, macOS, and Linux.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>=18.x)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Software-Magicians/nextjs-electron.git
   cd nextjs-electron
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the Application

1. **Start Next.js development server:**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

2. **Start Electron:**

   In a separate terminal, run:

   ```bash
   npm run electron
   ```

   or

   ```bash
   yarn electron
   ```

### Building for Production

To package the application for distribution, use the following command:

```bash
npm run build
```

or

```bash
yarn build
```

This will create a distributable package for your operating system in the `dist` directory.

## Project Structure

- `main/`: Contains the main process code for Electron.
- `renderer/`: Contains the Next.js application (renderer process).
- `public/`: Static assets for the Next.js application.
- `dist/`: Output directory for the packaged application.

## Scripts

- `dev`: Starts the Next.js development server.
- `build`: Builds the Next.js application.
- `start`: Starts the Next.js application in production mode.
- `electron`: Starts the Electron application.
- `dist`: Packages the application using Electron Builder.

## Contributing

We welcome contributions to enhance the features and fix any issues. Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Electron](https://www.electronjs.org/)

---

This README should provide a clear overview and easy setup instructions for developers looking to use this boilerplate to kickstart their Next.js and Electron projects.

# Project: Tetris

## Overview
This repository contains two main components:
1.  **Node.js Express Backend:** A TypeScript-based server application set up with Docker support. Currently serves a basic "Hello World" endpoint.
2.  **Standalone Browser Game:** A single-file HTML5 Tetris game (`hitchhikers-tetris.html`) themed after "The Hitchhiker's Guide to the Galaxy".

## Getting Started

### Prerequisites
*   Node.js 20+
*   npm
*   Docker (optional)

### Local Development (Backend)
1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Run in Development Mode:**
    ```bash
    npm run dev
    ```
    *   The server will start at `http://localhost:3000`.
    *   Uses `tsc --watch` for auto-compilation.

3.  **Build and Run Production:**
    ```bash
    npm run build
    npm start
    ```

### Docker Development
1.  **Start with Docker Compose:**
    ```bash
    docker-compose up
    ```
    *   Maps host port 3000 to container port 3000.
    *   Mounts the current directory for live updates (check `docker-compose.yml` configuration to confirm volume mapping behavior).

### Running the Game
*   Open `hitchhikers-tetris.html` directly in a modern web browser.
*   No build step is required for the standalone HTML file.

## Project Structure

*   `src/index.ts`: Entry point for the Express server.
*   `hitchhikers-tetris.html`: Self-contained Tetris game with embedded CSS and JavaScript.
*   `Dockerfile`: Configuration for building the production Node.js image.
*   `docker-compose.yml`: Orchestration for running the application locally.
*   `.env.example`: Template for environment variables.

## Development Conventions

*   **Language:** TypeScript for the backend.
*   **Linting & Formatting:**
    *   Run `npm run lint` to check for issues using ESLint.
    *   Run `npm run format` to format code using Prettier.
*   **Code Style:** Follows standard TypeScript/JavaScript conventions enforced by the provided ESLint and Prettier configs.

## Todo / Potential Next Steps
*   Integrate the `hitchhikers-tetris.html` game into the Express application to be served statically.
*   Expand the API endpoints in `src/index.ts`.

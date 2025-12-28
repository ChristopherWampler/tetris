# tetris

A Node.js Express application with Docker support.

## Getting Started

### Prerequisites

- Node.js 20+
- npm
- Docker (optional, for containerized development)

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Start the server:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000` (or the port specified in `PORT` environment variable).

4. For development with auto-rebuild:
   ```bash
   npm run dev
   ```

### Docker Development

1. Build and run with Docker Compose:
   ```bash
   docker-compose up
   ```

2. The server will be available at `http://localhost:3000`

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Watch mode for development
- `npm start` - Run the compiled application
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## License

MIT © Chris 2025


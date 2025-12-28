# Contributing to DON'T PANIC: The Tetris Edition

First off, thank you for considering contributing to this project! 🎮

This is a learning project, and contributions that help improve the code quality, fix bugs, or enhance the gaming experience are always welcome.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Guidelines](#coding-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)

## Code of Conduct

This project follows a simple principle: **Don't Panic, and be kind.**

- Be respectful and constructive in all interactions
- Focus on what is best for the community and the project
- Show empathy towards other contributors

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report, please check existing issues to see if the problem has already been reported.

When creating a bug report, include:
- **Clear title and description**
- **Steps to reproduce** the behavior
- **Expected vs actual behavior**
- **Screenshots** if applicable
- **Device/Browser information** (especially for mobile issues)
- **Console errors** if any

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List any alternative solutions** you've considered

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:
- `good first issue` - Simple issues perfect for beginners
- `help wanted` - Issues where we'd appreciate community input

## Development Setup

### Prerequisites

- Node.js 20+ ([download](https://nodejs.org/))
- npm (comes with Node.js)
- Git

### Setup Steps

1. **Fork the repository** on GitHub

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/tetris.git
   cd tetris
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ChristopherWampler/tetris.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Generate PWA icons**
   ```bash
   npm run generate-icons
   ```

6. **Build the project**
   ```bash
   npm run build
   ```

7. **Start the development server** (optional, for backend work)
   ```bash
   npm start
   ```

8. **Open the game**
   - Open `index.html` in your browser for the game
   - Visit `http://localhost:3000` for the backend

### Development Scripts

- `npm run dev` - Watch mode for TypeScript compilation
- `npm run lint` - Check code style
- `npm run format` - Auto-format code with Prettier
- `npm run generate-icons` - Regenerate PWA icons from SVG

## Coding Guidelines

### JavaScript/TypeScript

- Use **ES6+ syntax** where appropriate
- Follow **functional programming** principles when possible
- **Comment complex logic** - the "why", not the "what"
- Keep functions **small and focused** (single responsibility)

### Game Code (index.html)

The game is a single HTML file with embedded CSS and JavaScript. When modifying:

- **Preserve the retro CRT aesthetic**
- **Test on both desktop and mobile**
- **Keep backward compatibility** where possible
- **Don't break existing features** unless explicitly refactoring

### Code Style

This project uses:
- **ESLint** for linting
- **Prettier** for formatting
- **EditorConfig** for consistent formatting

Before committing, run:
```bash
npm run lint
npm run format
```

### Commit Messages

Use clear, descriptive commit messages:

```
feat: Add multi-line clear celebration animation
fix: Prevent swipe gestures from scrolling page
docs: Update README with new keyboard shortcuts
style: Improve mobile button spacing
perf: Optimize particle rendering on low-end devices
refactor: Extract score calculation to separate function
test: Add tests for piece rotation edge cases
```

### Mobile Considerations

When working on mobile features:

- **Test on real devices** if possible
- **Use the mobile test checklist** (`MOBILE_TEST_CHECKLIST.md`)
- **Respect safe areas** (notch, Dynamic Island)
- **Ensure 44x44px minimum touch targets**
- **Test landscape orientation**
- **Verify haptic feedback works**
- **Check PWA installation** on both iOS and Android

## Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/my-awesome-feature
   ```

2. **Make your changes**
   - Follow the coding guidelines
   - Test thoroughly
   - Update documentation if needed

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: Add awesome feature"
   ```

4. **Keep your fork updated**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/my-awesome-feature
   ```

6. **Create a Pull Request** on GitHub
   - Use a clear title
   - Describe what the PR does
   - Reference related issues (#123)
   - Include screenshots/videos for UI changes
   - Note any breaking changes

7. **Address review feedback**
   - Be open to suggestions
   - Make requested changes
   - Push updates to the same branch

8. **Celebrate!** 🎉 Once merged, your contribution is part of the project!

## Testing

### Manual Testing

For game features:
1. **Test on desktop** with keyboard controls
2. **Test on mobile** with touch/swipe controls
3. **Test different screen sizes** using DevTools responsive mode
4. **Test PWA installation** (iOS Safari and Android Chrome)
5. **Test offline functionality**
6. **Check mobile test checklist**

### Testing Checklist

Before submitting a PR:
- [ ] Game loads without errors
- [ ] No console errors or warnings
- [ ] Feature works on desktop
- [ ] Feature works on mobile
- [ ] Code passes linting (`npm run lint`)
- [ ] Code is formatted (`npm run format`)
- [ ] Documentation updated if needed
- [ ] No unnecessary files committed

### Performance Testing

For performance-critical changes:
- **Check frame rate** (should stay at 60fps)
- **Monitor memory usage** (no leaks during extended play)
- **Test on low-end devices** if possible
- **Profile with DevTools** Performance tab

## Project Structure

```
tetris/
├── index.html              # Main game file (edit this!)
├── hitchhikers-tetris.html # Kept in sync with index.html
├── manifest.json           # PWA configuration
├── sw.js                   # Service worker
├── icons/                  # PWA icons
├── src/                    # Backend (Express server)
├── scripts/                # Build scripts
└── docs/                   # Documentation and screenshots
```

## Questions?

Feel free to:
- **Open an issue** for questions
- **Start a discussion** on GitHub
- **Ask in your pull request** if you're unsure about something

Remember: **Don't Panic!** Everyone was a beginner once. We're here to help. 🚀

---

*"The Guide is definitive. Reality is frequently inaccurate."* - Douglas Adams

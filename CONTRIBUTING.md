# Contributing to Waste-Aware

Thank you for your interest in contributing to Waste-Aware! We welcome contributions from the community to help make this project better.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/waste-aware.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Commit your changes: `git commit -m "Add your commit message"`
6. Push to your fork: `git push origin feature/your-feature-name`
7. Create a Pull Request

## Development Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

## Code Style

- Follow the existing code style in the project
- Use meaningful variable and function names
- Add comments for complex logic
- Write clear commit messages

## Pull Request Process

1. Ensure your code follows our style guidelines
2. Update the README.md if needed
3. Your PR should have a clear title and description
4. Link any related issues in your PR description
5. **Wait for automated checks to pass** - Our automated test build workflow will:
   - Test your code across Node.js 18.x and 20.x versions
   - Run linting checks (warnings won't block the build)
   - Validate that the application builds successfully

### Automated Test Build Workflow

We have an automated workflow that helps maintain build quality:

- **Automated Test Builds**: Runs on every push and PR to test builds across multiple Node.js versions

You can see the status of these checks in the "Actions" tab or as status checks on your PR.

### Common Build Issues and Solutions

**Build Failures:**

- Run `npm run build` locally to test
- Check for missing dependencies in package.json
- Ensure all imports are correct

**Linting Warnings:**

- Run `npm run lint` locally first
- Linting warnings won't block the build but should be addressed
- Follow the existing code style in the project

## Reporting Issues

- Use the issue templates when reporting bugs or requesting features
- Provide clear steps to reproduce bugs
- Include relevant screenshots if applicable

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- Be respectful and inclusive
- No harassment or discrimination
- Constructive criticism is welcome
- Focus on what is best for the community

## Questions?

If you have questions, feel free to open an issue or reach out to the maintainers.

Thank you for contributing to Waste-Aware! 🌱

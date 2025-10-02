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
5. **Wait for automated checks to pass** - Our CI/CD workflows will automatically:
   - Test your code across multiple Node.js versions
   - Run linting and code quality checks
   - Perform security audits
   - Validate the production build
   - Check your PR against our quality checklist

### CI/CD Workflow Information

We have automated workflows that help maintain code quality:

- **CI/CD Pipeline**: Runs on every push and PR to test builds, security, and code quality
- **PR Validation**: Provides detailed feedback on pull requests with targeted checks
- **Dependency Updates**: Weekly automated checks for outdated packages and security issues

You can see the status of these checks in the "Actions" tab or as status checks on your PR. Make sure all checks pass before requesting review!

### Common CI/CD Issues and Solutions

**Build Failures:**
- Run `npm run build` locally to test
- Check for missing dependencies in package.json
- Ensure all imports are correct

**Linting Errors:**
- Run `npm run lint` locally first
- Use `npm run lint -- --fix` to auto-fix simple issues
- Follow the existing code style in the project

**Security Audit Failures:**
- Run `npm audit` to see vulnerabilities
- Use `npm audit fix` for automatic fixes
- Check our weekly dependency update issues for guidance

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
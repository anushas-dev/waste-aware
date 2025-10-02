# GitHub Workflows Documentation

This directory contains automated workflows for the Waste Aware project to ensure code quality, security, and reliability.

## 🔄 Workflows Overview

### 1. CI/CD Pipeline (`ci.yml`)
**Triggers:** Push to main/develop, Pull Requests, Manual trigger

**What it does:**
- Tests builds across multiple Node.js versions (16.x, 18.x, 20.x)
- Runs ESLint for code quality
- Performs security audits
- Validates dependencies
- Tests production builds
- Provides comprehensive build summaries

**Why it's important:** Ensures every change maintains compatibility and doesn't break the application.

### 2. PR Validation (`pr-validation.yml`)
**Triggers:** Pull Request events (opened, synchronized, reopened)

**What it does:**
- Detects what type of files changed
- Validates frontend changes with targeted linting
- Analyzes dependency updates
- Checks PR quality with automated checklist
- Provides bundle size analysis
- Comments directly on PRs with validation results

**Why it's important:** Gives reviewers confidence and catches issues before merge.

### 3. Dependency Updates (`dependency-update.yml`)
**Triggers:** Weekly schedule (Mondays 9 AM UTC), Manual trigger

**What it does:**
- Scans for outdated packages
- Performs security vulnerability checks
- Creates GitHub issues with update recommendations
- Provides detailed reports on package status

**Why it's important:** Keeps dependencies secure and up-to-date automatically.

## 🚀 Benefits

### For Developers
- **Faster feedback:** Know immediately if changes break anything
- **Consistent standards:** Automated code quality checks
- **Security awareness:** Regular vulnerability scanning
- **Branch protection:** Prevents broken code from reaching main

### For Maintainers
- **Merge confidence:** Comprehensive validation before merging
- **Automated monitoring:** Weekly dependency health checks
- **Clear reporting:** Detailed summaries of all checks
- **Time savings:** Less manual testing required

### For Contributors
- **Clear expectations:** Automated checklist shows what's needed
- **Quick validation:** Fast feedback on pull requests
- **Learning tool:** Helps understand project standards

## 📊 Workflow Status

You can check the status of all workflows in the "Actions" tab of your GitHub repository.

### Status Badges
Add these to your README.md to show build status:

```markdown
![CI/CD Pipeline](https://github.com/jassu2244/waste-aware/workflows/CI%2FCD%20Pipeline/badge.svg)
![PR Validation](https://github.com/jassu2244/waste-aware/workflows/PR%20Validation/badge.svg)
```

## 🔧 Customization

### Adding More Tests
To add unit tests, modify the `ci.yml` file to include:
```yaml
- name: Run tests
  run: npm test
```

### Changing Node.js Versions
Update the matrix in `ci.yml`:
```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x] # Remove older versions if not needed
```

### Adjusting Security Levels
Modify audit levels in the workflows:
```yaml
- name: Run security audit
  run: npm audit --audit-level=low # Change from moderate/high
```

## 🎯 Best Practices

1. **Always create feature branches** - Never work directly on main
2. **Write descriptive PR titles** - Helps with automated validation
3. **Include PR descriptions** - Required by validation workflow
4. **Monitor dependency updates** - Review weekly update issues
5. **Check workflow status** - Don't merge if checks are failing

## 🐛 Troubleshooting

### Common Issues

**Build fails with "Module not found":**
- Check if all dependencies are in package.json
- Ensure package-lock.json is committed

**Linting errors:**
- Run `npm run lint` locally first
- Use `npm run lint -- --fix` to auto-fix issues

**Security audit failures:**
- Run `npm audit fix` to resolve auto-fixable issues
- Check dependency update issues for manual fixes

**Production build fails:**
- Test locally with `npm run build && npm start`
- Check for environment-specific code issues

## 📞 Support

If you encounter issues with the workflows:
1. Check the Actions tab for detailed error logs
2. Look for existing issues in the repository
3. Create a new issue with the `ci/cd` label

---

*These workflows help maintain high code quality and make collaboration smoother for everyone! 🎉*
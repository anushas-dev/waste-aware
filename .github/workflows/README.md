# GitHub Workflow Documentation

This directory contains the automated workflow for the Waste Aware project to ensure build quality and reliability.

## 🔄 Workflow Overview

### Automated Test Builds (`ci.yml`)
**Triggers:** Push to main/develop, Pull Requests

**What it does:**
- Tests builds across Node.js 18.x and 20.x for compatibility
- Runs linting (allows failures to not block builds)
- Performs automated builds to catch issues early
- Verifies build output is generated correctly

**Why it's important:** Ensures every change maintains compatibility and doesn't break the application build process.

## 🚀 Benefits

### For Developers
- **Faster feedback:** Know immediately if changes break the build
- **Cross-version testing:** Ensures compatibility across Node.js versions
- **Automated validation:** No need to manually test builds

### For Maintainers
- **Merge confidence:** Build validation before merging
- **Consistent testing:** Same build process every time
- **Early issue detection:** Catch problems before they reach production

## 📊 Workflow Status

You can check the status of the workflow in the "Actions" tab of your GitHub repository.

### Status Badge
Add this to your README.md to show build status:

```markdown
![Automated Test Builds](https://github.com/anushas-dev/waste-aware/workflows/Automated%20Test%20Builds/badge.svg)
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
    node-version: [18.x, 20.x] # Add or remove versions as needed
```

## 🎯 Best Practices

1. **Always create feature branches** - Never work directly on main
2. **Monitor workflow status** - Don't merge if builds are failing
3. **Check build locally first** - Run `npm run build` before pushing

## 🐛 Troubleshooting

### Common Issues

**Build fails with "Module not found":**
- Check if all dependencies are in package.json
- Ensure package-lock.json is committed

**Linting warnings:**
- Run `npm run lint` locally first
- Linting failures won't block the build but should be addressed

**Build fails in CI but works locally:**
- Check Node.js version compatibility
- Ensure all files are committed

---

*This workflow helps maintain build quality and makes collaboration smoother! 🎉*
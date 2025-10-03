This is a [Next.js](https://nextjs.org/) project powered with AppWrite and 1Password.

### Current Project Build Status:

[![Netlify Status](https://api.netlify.com/api/v1/badges/63844952-bb38-4935-a0a4-762fbef3458e/deploy-status)](https://app.netlify.com/sites/wasteaware/deploys)
[![Automated Test Builds](https://github.com/anushas-dev/waste-aware/workflows/Automated%20Test%20Builds/badge.svg)](https://github.com/anushas-dev/waste-aware/actions/workflows/ci.yml)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Authentication (GitHub via NextAuth)

This project uses GitHub OAuth with NextAuth.

1. Create a GitHub OAuth App:
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
2. Add the following environment variables in a `.env.local` file:

```
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_SECRET=replace_with_a_secure_random_string
NEXTAUTH_URL=http://localhost:3000
```

3. Run the app, then go to the home page to Sign in with GitHub.
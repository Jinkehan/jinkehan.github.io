# Jin Kehan - Personal Website

React website built with Vite and deployed on GitHub Pages.

## Development

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

## Build for Production

Build the project:
```bash
npm run build
```

The `dist` folder will contain the production build.

## Deployment to GitHub Pages

### Automated Deployment (Recommended)

GitHub Actions is configured to automatically build and deploy your site when you push to the `main` branch.

**First-time setup:**
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Push this workflow file to your repository

**How it works:**
- Every push to `main` triggers the build and deployment
- The workflow builds your React app and deploys it to GitHub Pages
- You can also manually trigger it from the **Actions** tab

### Manual Deployment

1. Build the project: `npm run build`
2. Copy the contents of the `dist` folder to the root directory
3. Commit and push to GitHub


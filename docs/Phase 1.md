# PHASE 1 — Reconnaissance (Evidence Only)

## 1.1 Codebase Recon

### Search Terms Used
- `package.json` scripts inspection
- `.github/workflows` directory exploration
- `CNAME` file presence check
- `dist/` directory structure check
- `vite.config.ts` configuration review
- `gh-pages`, `GitHub Pages`, `github.io`, `deploy` pattern search

### Files and Folders Inspected

#### Core Configuration Files
1. **`/package.json`**
   - Contains `deploy` script: `"gh-pages -d dist"`
   - Has `gh-pages` npm package version `^6.3.0` as dependency
   - Build script configured: `"tsc && vite build"`
   - Homepage set to: `https://esperantaskanaduko.com`
   - Repository: `git+https://github.com/Vaporjawn/esperantaskanaduko.com.git`

2. **`/vite.config.ts`**
   - Minimal configuration with only React plugin
   - **Missing `base` configuration** (important for GitHub Pages deployment)
   - Uses `@vitejs/plugin-react-swc` for fast refresh

3. **`/CNAME`**
   - Contains: `EsperantaSkanaduko.com`
   - Indicates custom domain configuration for GitHub Pages

4. **`/README.md`**
   - States deployment method: "GitHub Pages"
   - Documents deploy command: `npm run deploy`
   - Links to live site: `https://esperantaskanaduko.com`

#### Build Output
5. **`/dist/` directory**
   - Exists with built files (verified via build command)
   - Contains `index.html`, assets folder, and compiled JavaScript/CSS
   - Build successful (verified by running `npm run build`)

#### CI/CD Configuration
6. **`.github/workflows/` directory**
   - Contains: `build.js.yml`, `install.js.yml`, `tests.js.yml`, `lint.js.yml`, etc.
   - **NO GitHub Pages deployment workflow found**
   - Current workflows only run build, test, and lint on push/PR

7. **Git Configuration**
   - Remote: `https://github.com/Vaporjawn/esperantaskanaduko.com.git`
   - Branch check attempted but no output (likely on main branch)

### Existing Patterns or Shared Components
- Project uses `gh-pages` npm package for deployment
- Standard Vite + React + TypeScript setup
- Custom domain configured via CNAME file
- Build outputs to `dist/` directory (Vite default)

### Related Tests Found
- No deployment-specific tests found
- Build workflow exists but doesn't include deployment step
- Testing framework (Jest) configured for application tests only

---

## 1.2 Web Recon

### Queries Performed
1. "GitHub Pages publishing source configuration"
2. "Vite base configuration for GitHub Pages custom domain deployment"

### Sources Consulted
1. **GitHub Docs**: `https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site`
2. **Vite Docs**: `https://vitejs.dev/guide/static-deploy.html`

### Relevant Takeaways

#### From GitHub Docs:
- **Two deployment methods available**:
  1. **Deploy from branch** (gh-pages branch) - simpler, uses external tools like `gh-pages` npm package
  2. **GitHub Actions workflow** - more control, runs build on GitHub servers

- **Custom domains**: CNAME file is automatically recognized but must also be configured in repository settings

- **gh-pages package behavior**:
  - Commits build output to `gh-pages` branch
  - Includes `.nojekyll` file automatically
  - Triggers GitHub Actions deployment workflow automatically
  - Most common pattern for external CI tools

#### From Vite Docs:
- **Base configuration critical for GitHub Pages**:
  - For custom domain: set `base: '/'` (or omit, as '/' is default)
  - For `username.github.io/repo` pattern: set `base: '/repo/'`

- **Recommended GitHub Pages workflow** (if using Actions):
  - Checkout code
  - Setup Node.js
  - Install dependencies (`npm ci`)
  - Build site (`npm run build`)
  - Upload artifact from `dist/` folder
  - Deploy to GitHub Pages

- **Custom domain CNAME note**: CNAME file doesn't automatically configure in GitHub settings, must be done manually in repository settings or via API

---

## 1.3 Key Findings Summary

### Current State
✅ **Ready for deployment**:
- Build completes successfully
- `gh-pages` package installed
- Deploy script configured in package.json
- CNAME file present for custom domain
- Repository properly linked to GitHub

❌ **Missing/Incomplete**:
- Vite `base` configuration not explicitly set (defaults to '/', which is correct for custom domain)
- No GitHub Pages deployment automation in CI/CD
- GitHub Pages settings may need manual configuration
- Custom domain needs verification in GitHub repository settings

### Deployment Options Available

**Option A: Manual deployment via npm script** (Simplest)
- Run `npm run deploy` command
- Uses `gh-pages` package to push `dist/` to `gh-pages` branch
- Requires manual execution each time

**Option B: GitHub Actions workflow** (Automated)
- Create workflow that runs on push to main
- Builds and deploys automatically
- More complex but fully automated

**Option C: Hybrid approach**
- Keep manual `npm run deploy` for quick deployments
- Add GitHub Actions for automated deployments on merge to main

---

## 1.4 Persist Phase
✅ Phase 1 content written to `docs/Phase 1.md`
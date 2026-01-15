# PHASE 2 — Planning (Decision + Routes)

## 2.0 Read Prior Phases
✅ Read `docs/Phase 1.md`
✅ Confirmed plan references evidence from PHASE 1

---

## 2.1 Decision Tree (Route Selector)

### Condition Analysis

**Condition A**: User wants immediate deployment without automation
- **Route A**: Manual deployment using existing `npm run deploy` script
- **When to use**: Quick one-time deployment, testing deployment, no CI/CD setup needed
- **Pivot trigger**: If user needs automated deployments in future

**Condition B**: User wants fully automated deployment on every push to main
- **Route B**: GitHub Actions workflow deployment
- **When to use**: Production setup, team collaboration, continuous deployment needs
- **Pivot trigger**: If Actions fail or user prefers manual control

**Condition C**: User wants hybrid approach (both manual and automated)
- **Route C**: Implement both Route A improvements + Route B workflow
- **When to use**: Maximum flexibility for development and production
- **Pivot trigger**: If complexity outweighs benefits

**Condition D**: Deployment fails or config issues found
- **Route D**: Fix configuration issues first (vite.config.ts base, CNAME placement, etc.)
- **When to use**: Any deployment errors occur
- **Pivot trigger**: After fixes applied, return to chosen route

---

## 2.2 Chosen Route (Default)

**Selected Route: Route A (Manual Deployment)**

### Rationale
Based on PHASE 1 evidence:

1. **Infrastructure Already Exists**:
   - `gh-pages` package installed (`package.json` line 54)
   - Deploy script configured (`package.json` line 45: `"gh-pages -d dist"`)
   - Build tested and working (verified in PHASE 1)
   - CNAME file present and correctly formatted

2. **Aligns with Repo Conventions**:
   - README.md documents `npm run deploy` as the deployment method
   - No existing CI/CD for deployment (only build/test workflows found)
   - Project follows manual deployment pattern

3. **Fastest Path to Publishing**:
   - User request is "publish the website" - implies immediate action
   - Manual deployment can happen in minutes vs. hours for CI/CD setup
   - Lower complexity, fewer failure points

4. **Custom Domain Configuration**:
   - For custom domain (esperantaskanaduko.com), `base: '/'` is correct
   - Vite defaults to `base: '/'`, so current config is actually correct
   - CNAME file will be automatically copied to gh-pages branch by gh-pages package

### Why Not Other Routes
- **Route B (Actions)**: No evidence of existing deployment workflow; adds complexity without immediate benefit
- **Route C (Hybrid)**: Overkill for current need; can be added later if automated deployment requested
- **Route D (Fix Config)**: Vite config actually correct for custom domain (defaults to '/'); no fixes needed

---

## 2.3 Step-by-Step Plan

### Step 1: Verify Build Output and CNAME Placement
**What**: Ensure CNAME file is in public/ directory for proper deployment
**Where**:
- Check `/public/` directory for CNAME file
- Current CNAME file is at `/CNAME` (root)

**Why**: Per PHASE 1 recon, gh-pages package needs CNAME in output directory. Vite copies files from `public/` to `dist/` during build. Current root CNAME won't be included in deployment.

**Acceptance Criteria**:
- [ ] CNAME file exists in `/public/` directory
- [ ] CNAME file contains correct domain: `EsperantaSkanaduko.com`
- [ ] Build process copies CNAME to `dist/` directory

### Step 2: Verify Vite Configuration
**What**: Confirm `base` configuration is appropriate for custom domain
**Where**: `/vite.config.ts`

**Why**: Per Vite docs (PHASE 1 recon), custom domains should use `base: '/'` (or omit). Current config omits `base`, which defaults to '/' - this is correct.

**Acceptance Criteria**:
- [ ] Vite config reviewed
- [ ] `base` setting confirmed as correct (default '/' for custom domain)
- [ ] No changes needed (already correct)

### Step 3: Clean and Rebuild Project
**What**: Fresh build to ensure all files are current
**Where**: Project root

**Why**: Ensures deployment package includes latest code and correct CNAME file from public/ directory.

**Acceptance Criteria**:
- [ ] Old dist/ directory removed
- [ ] `npm run build` executes successfully
- [ ] dist/ directory contains all necessary files
- [ ] CNAME file present in dist/ directory

### Step 4: Execute Deployment Command
**What**: Run the deployment script to publish to GitHub Pages
**Where**: Project root (terminal)

**Why**: Uses existing `gh-pages` package (PHASE 1, package.json line 45) to push dist/ contents to gh-pages branch.

**Acceptance Criteria**:
- [ ] `npm run deploy` command executes
- [ ] gh-pages branch created/updated on GitHub
- [ ] CNAME file present in gh-pages branch
- [ ] No errors during deployment
- [ ] Deployment completes with success message

### Step 5: Configure GitHub Pages Settings
**What**: Ensure repository settings point to gh-pages branch
**Where**: GitHub repository settings → Pages section

**Why**: Per GitHub docs (PHASE 1), repository must be configured to serve from gh-pages branch. gh-pages package pushes to this branch, but settings must be enabled.

**Acceptance Criteria**:
- [ ] GitHub Pages source set to "Deploy from branch"
- [ ] Branch set to "gh-pages"
- [ ] Folder set to "/ (root)"
- [ ] Custom domain field shows esperantaskanaduko.com
- [ ] HTTPS enforced (if available)

### Step 6: Verify Custom Domain Configuration
**What**: Confirm custom domain DNS and GitHub settings
**Where**: GitHub repository settings → Pages → Custom domain

**Why**: Per GitHub docs (PHASE 1), custom domain must be configured in repository settings, not just CNAME file.

**Acceptance Criteria**:
- [ ] Custom domain "esperantaskanaduko.com" added to GitHub Pages settings
- [ ] DNS check passes (or guidance provided for DNS configuration)
- [ ] HTTPS certificate provisioning initiated
- [ ] Domain verification successful

### Step 7: Test Deployed Website
**What**: Verify site is accessible and functioning
**Where**:
- https://vaporjawn.github.io/esperantaskanaduko.com (GitHub Pages default)
- https://esperantaskanaduko.com (custom domain after DNS propagation)

**Why**: Confirms deployment successful and site is publicly accessible.

**Acceptance Criteria**:
- [ ] Site loads at GitHub Pages URL
- [ ] All routes/pages functional
- [ ] Assets (images, CSS, JS) loading correctly
- [ ] No console errors
- [ ] Custom domain redirects properly (if DNS configured)

### Step 8: Document Deployment Process
**What**: Update documentation with deployment instructions
**Where**: README.md or create new DEPLOYMENT.md

**Why**: Ensures team members can deploy in future; documents custom domain setup.

**Acceptance Criteria**:
- [ ] Deployment steps documented
- [ ] Custom domain configuration noted
- [ ] Troubleshooting tips included
- [ ] Contact info for DNS/domain issues provided

---

## 2.4 Assumption Checkpoint

### Assumptions Validated by Recon

✅ **Project uses GitHub Pages for hosting**
- Evidence: README.md states "Deployment: GitHub Pages", package.json has gh-pages package

✅ **gh-pages npm package is configured correctly**
- Evidence: Package.json line 45 shows `"deploy": "gh-pages -d dist"`, package installed at version ^6.3.0

✅ **Build process works**
- Evidence: Successfully ran `npm run build` in PHASE 1, produced dist/ output

✅ **Custom domain is esperantaskanaduko.com**
- Evidence: CNAME file contains "EsperantaSkanaduko.com", homepage in package.json matches

✅ **User has repository write access**
- Evidence: Repository exists at Vaporjawn/esperantaskanaduko.com, user is Victor Williams per package.json author

### Assumptions Still Unverified

⚠️ **CNAME file location needs verification**
- Assumption: CNAME must be in public/ directory for Vite to copy to dist/
- Current state: CNAME exists at root level
- Impact: **HIGH** - Without CNAME in dist/, custom domain won't work after deployment
- Resolution: Will verify in Step 1 of implementation

⚠️ **GitHub Pages is not yet enabled in repository settings**
- Assumption: Based on no gh-pages branch mentioned, likely not configured
- Impact: **MEDIUM** - Deployment will push branch but site won't be live
- Resolution: Will configure in Step 5 of implementation

⚠️ **DNS configuration status unknown**
- Assumption: Domain DNS may or may not point to GitHub Pages
- Impact: **LOW** - Site will work on github.io URL regardless
- Resolution: Will provide guidance in Step 6; doesn't block deployment

⚠️ **User authentication for git push**
- Assumption: User can push to repository
- Impact: **HIGH** - Can't deploy without push access
- Resolution: Will discover during Step 4; standard git authentication will prompt if needed

### Assessment
- **Critical assumptions**: All validated through recon ✅
- **Blocking issues**: CNAME file location needs fix (known, simple fix)
- **Can proceed**: YES - unverified assumptions are either low impact or will be resolved during implementation

---

## 2.5 Persist Phase
✅ Phase 2 content written to `docs/Phase 2.md`
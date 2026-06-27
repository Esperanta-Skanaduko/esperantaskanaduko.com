## Summary

<!-- One or two sentences describing what this PR does and why. -->

## Type of change

<!-- Mark the applicable checkbox(es) with an ✅ -->

- [ ] 🐛 Bug fix (non-breaking change that fixes an issue)
- [ ] ✨ New feature (non-breaking change that adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to change)
- [ ] ♻️ Refactor (no behaviour change; improves structure or readability)
- [ ] 🌐 i18n / translation update
- [ ] 📝 Documentation update
- [ ] 🔧 Config / tooling / CI change
- [ ] ⬆️ Dependency update

## Related issues

<!-- Link issues that this PR resolves: "Closes #123" or "Fixes #456" -->

Closes #

## Checklist

<!-- All items must be checked before this PR can be merged. -->

### Code quality
- [ ] `npx tsc --noEmit` passes with 0 errors
- [ ] `npm run lint` passes with 0 warnings
- [ ] `npm run test` passes — all tests green, no new snapshots broken

### Testing
- [ ] New features have unit / integration tests (`src/__tests__/`)
- [ ] Edge cases and error paths are covered
- [ ] Visual regressions checked (`npm run test:visual`) if UI was changed

### Accessibility & UX
- [ ] New UI components use semantic HTML and appropriate ARIA attributes
- [ ] Interactive elements are keyboard-navigable
- [ ] Color contrast meets WCAG 2.1 AA

### i18n
- [ ] User-visible strings use `t('key', 'fallback')` — no raw English in JSX
- [ ] New i18n keys are added to `en.json` (other locales are updated separately)

### Firebase / security
- [ ] No Firebase credentials or secrets are hard-coded or committed
- [ ] New Firestore / Realtime DB reads/writes follow the existing security rule patterns

### Documentation
- [ ] README updated if new setup steps or scripts were added
- [ ] Code comments explain non-obvious decisions

## Screenshots / recordings

<!-- Add before/after screenshots or screen recordings for UI changes. Delete if not applicable. -->

| Before | After |
|--------|-------|
|        |       |

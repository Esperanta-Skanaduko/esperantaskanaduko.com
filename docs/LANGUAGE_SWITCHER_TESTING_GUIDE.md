# Visual Testing Guide - Language Switcher Enhancement

## Quick Testing Checklist

### 🚀 Getting Started
1. **Dev Server**: Navigate to `http://localhost:5173`
2. **Locate Component**: Language switcher is typically in the navbar
3. **Browser DevTools**: Open for responsive testing (F12)

---

## Test Scenarios

### 1️⃣ Initial Display
**Expected:**
- [ ] Button shows current language flag + native name
- [ ] Language icon (🌐) appears before language name
- [ ] Button has hover effect (light green background)
- [ ] No console errors

**Current Language Examples:**
- English: 🇬🇧 English
- Esperanto: 🌟 Esperanto
- Spanish: 🇪🇸 Español
- Japanese: 🇯🇵 日本語

---

### 2️⃣ Opening the Menu
**Actions:**
1. Click the language button

**Expected:**
- [ ] Popover opens below the button
- [ ] Menu has rounded corners and shadow
- [ ] "Select Language" title appears at top
- [ ] Search bar is visible and ready to type
- [ ] Close button (X) visible in top-right corner
- [ ] Language grid displays below search
- [ ] Current language has green border (#4CAF50)

---

### 3️⃣ Grid Layout Testing

#### Mobile View (< 600px)
**Actions:**
1. Resize browser to ~375px width (iPhone size)
2. Open language menu

**Expected:**
- [ ] **2 columns** of languages
- [ ] Menu width ~95vw (almost full screen)
- [ ] Languages are readable without wrapping
- [ ] Flags display at 1.8rem size
- [ ] Cards don't look cramped

#### Tablet View (600px - 900px)
**Actions:**
1. Resize browser to ~768px width (iPad size)
2. Open language menu

**Expected:**
- [ ] **3 columns** of languages
- [ ] Menu width ~600px
- [ ] Grid spacing looks balanced
- [ ] All text readable

#### Desktop View (> 900px)
**Actions:**
1. Resize browser to ~1200px width
2. Open language menu

**Expected:**
- [ ] **4 columns** of languages
- [ ] Menu width ~700px
- [ ] Languages easy to scan across grid
- [ ] First 12-16 languages visible without scrolling

---

### 4️⃣ Search Functionality
**Test Cases:**

#### Test A: Simple Search
**Actions:**
1. Open language menu
2. Type "span" in search

**Expected:**
- [ ] Filters to Spanish (Español 🇪🇸)
- [ ] Grid re-arranges to show only matching languages
- [ ] "1 language available" shows in footer
- [ ] Clear button (X) appears in search bar

#### Test B: No Results
**Actions:**
1. Type "zzzzz" in search

**Expected:**
- [ ] "No languages found" message displays
- [ ] Grid is empty
- [ ] "0 languages available" shows in footer

#### Test C: Clear Search
**Actions:**
1. Type any search query
2. Click the clear button (X) in search bar

**Expected:**
- [ ] Search input clears
- [ ] All 70+ languages reappear
- [ ] Clear button disappears

#### Test D: Multi-language Matching
**Actions:**
1. Type "e" in search

**Expected:**
- [ ] Multiple languages appear (English, Esperanto, German/Deutsch, etc.)
- [ ] Count shows correct number of matches
- [ ] Matches both native names and English names

---

### 5️⃣ Language Selection
**Actions:**
1. Open language menu
2. Click any language (e.g., Spanish 🇪🇸)

**Expected:**
- [ ] Menu closes immediately
- [ ] Button updates to show new language: 🇪🇸 Español
- [ ] App content switches to selected language
- [ ] localStorage updates (`i18nextLng` key)
- [ ] No page refresh needed

**Verify Content Change:**
- [ ] Navigation items change language
- [ ] Page headings change language
- [ ] Buttons/labels change language

---

### 6️⃣ Visual Polish
**Check Each:**

#### Hover Effects
**Actions:**
1. Open menu
2. Hover over different language cards

**Expected:**
- [ ] Card lifts slightly (translateY(-2px))
- [ ] Border changes to green (#4CAF50)
- [ ] Background becomes light green (rgba(76, 175, 80, 0.08))
- [ ] Shadow appears (0 4px 12px rgba(76, 175, 80, 0.2))
- [ ] Transition is smooth (~200ms)

#### Current Language Highlight
**Expected:**
- [ ] Current language has solid green border (2px)
- [ ] Light green background
- [ ] Native name in green color and bold (600)
- [ ] Stands out clearly from other languages

#### Scrolling
**Actions:**
1. Open menu
2. Scroll down in language grid

**Expected:**
- [ ] Custom scrollbar visible (8px width)
- [ ] Scrollbar track is light gray
- [ ] Scrollbar thumb is green (#4CAF50)
- [ ] Smooth scrolling behavior
- [ ] All 70+ languages accessible

---

### 7️⃣ Closing the Menu
**Test All Methods:**

#### Method A: Click Language
- [x] Already tested in section 5

#### Method B: Close Button (X)
**Actions:**
1. Open menu
2. Click X button in top-right

**Expected:**
- [ ] Menu closes
- [ ] Search query clears
- [ ] Language selection unchanged

#### Method C: Click Outside (Backdrop)
**Actions:**
1. Open menu
2. Click anywhere outside the popover

**Expected:**
- [ ] Menu closes
- [ ] Search query clears
- [ ] Language selection unchanged

#### Method D: Escape Key
**Actions:**
1. Open menu
2. Press Escape key

**Expected:**
- [ ] Menu closes
- [ ] Search query clears

---

### 8️⃣ Accessibility Testing

#### Keyboard Navigation
**Actions:**
1. Tab to language button
2. Press Enter to open
3. Tab through elements
4. Press Enter to select a language

**Expected:**
- [ ] Focus visible on button (outline)
- [ ] Tab moves through: close button → search → languages
- [ ] Enter selects focused language
- [ ] Escape closes menu
- [ ] Focus returns to button after close

#### Screen Reader
**Actions:**
1. Use screen reader (NVDA/JAWS/VoiceOver)
2. Navigate to language switcher

**Expected:**
- [ ] Button announces: "Language [Current Language Name] button"
- [ ] Menu title announces: "Select Language"
- [ ] Each language card announces with flag and names
- [ ] Search field has proper label

---

### 9️⃣ Flag Emoji Verification

**Sample Languages to Check:**
- [ ] 🇬🇧 English (en)
- [ ] 🇪🇸 Spanish (es)
- [ ] 🇫🇷 French (fr)
- [ ] 🇩🇪 German (de)
- [ ] 🇯🇵 Japanese (ja)
- [ ] 🇨🇳 Chinese (zh)
- [ ] 🇰🇷 Korean (ko)
- [ ] 🇷🇺 Russian (ru)
- [ ] 🇵🇹 Portuguese (pt)
- [ ] 🇮🇹 Italian (it)
- [ ] 🌟 Esperanto (eo) - Special case: star symbol

**Note:** Flag rendering depends on OS/browser emoji support

---

### 🔟 Performance Testing

#### Load Time
**Actions:**
1. Open menu for the first time

**Expected:**
- [ ] Opens instantly (< 100ms)
- [ ] No lag when rendering 70+ languages
- [ ] Smooth animation

#### Search Performance
**Actions:**
1. Type rapidly in search field

**Expected:**
- [ ] Filtering is instant (no debouncing needed)
- [ ] No input lag
- [ ] Smooth re-rendering

#### Re-opening
**Actions:**
1. Open menu
2. Close menu
3. Open menu again

**Expected:**
- [ ] Maintains fast performance
- [ ] No memory leaks
- [ ] Search resets properly

---

## Browser Testing Matrix

| Browser | Version | Desktop | Mobile | Status |
|---------|---------|---------|--------|--------|
| Chrome | Latest | ✅ | ✅ | |
| Firefox | Latest | ✅ | ✅ | |
| Safari | Latest | ✅ | ✅ | |
| Edge | Latest | ✅ | ✅ | |
| Chrome Mobile | Latest | N/A | ✅ | |
| iOS Safari | Latest | N/A | ✅ | |

---

## Responsive Breakpoints

| Device | Width | Columns | Menu Width |
|--------|-------|---------|------------|
| iPhone SE | 375px | 2 | ~356px (95vw) |
| iPhone 12 | 390px | 2 | ~370px (95vw) |
| iPad Mini | 768px | 3 | 600px |
| iPad Pro | 1024px | 4 | 700px |
| Desktop | 1440px+ | 4 | 700px |

---

## Common Issues & Solutions

### Issue: Flags Not Showing
**Symptoms:** Empty boxes or � characters instead of flags
**Cause:** OS/browser doesn't support emoji rendering
**Solution:** Normal behavior on some older systems; inform users

### Issue: Grid Misaligned
**Symptoms:** Languages wrapping incorrectly or overlapping
**Cause:** CSS Grid or text overflow issues
**Solution:** Check browser DevTools, verify CSS Grid support

### Issue: Search Not Filtering
**Symptoms:** Typing doesn't filter languages
**Cause:** State update or filtering logic issue
**Solution:** Check console for errors, verify useState hook

### Issue: Menu Doesn't Close
**Symptoms:** Clicking language doesn't dismiss menu
**Cause:** handleClose function not called
**Solution:** Verify onClick handlers on language cards

### Issue: Wrong Language Selected
**Symptoms:** Button shows different language than app content
**Cause:** i18n state not synced with component state
**Solution:** Check i18n.changeLanguage() call and storage

---

## Console Commands for Testing

### Check Current Language
```javascript
console.log('Current Language:', localStorage.getItem('i18nextLng'));
```

### List All Supported Languages
```javascript
console.log('Supported Languages:', Object.keys(window.LANGUAGES || {}));
```

### Force Language Change
```javascript
// Replace 'ja' with any language code
localStorage.setItem('i18nextLng', 'ja');
window.location.reload();
```

### Clear Language Selection
```javascript
localStorage.removeItem('i18nextLng');
window.location.reload();
```

---

## Success Criteria

### Must Have ✅
- [x] All 70+ languages display with flags
- [x] Multi-column grid adapts to screen size
- [x] Search functionality works correctly
- [x] Language selection changes app language
- [x] Current language is clearly highlighted
- [x] No TypeScript errors
- [x] No runtime console errors

### Should Have 🎯
- [ ] Smooth animations and transitions
- [ ] Responsive design works on all devices
- [ ] Keyboard navigation functional
- [ ] Accessible to screen readers
- [ ] Performance is smooth with 70+ languages

### Nice to Have 🌟
- [ ] Custom scrollbar styling
- [ ] Hover effects are polished
- [ ] Loading states handled gracefully
- [ ] Works offline
- [ ] Analytics tracking language selections

---

## Reporting Issues

If you find bugs or issues during testing:

1. **Screenshot/Video**: Capture the issue
2. **Browser Info**: Note browser + version + OS
3. **Steps to Reproduce**: List exact steps
4. **Expected vs Actual**: What should happen vs what happened
5. **Console Errors**: Include any error messages

**Report Template:**
```
**Issue:** [Brief description]
**Browser:** Chrome 120 on Windows 11
**Steps:**
1. [Step 1]
2. [Step 2]
**Expected:** [What should happen]
**Actual:** [What actually happened]
**Console:** [Any errors]
**Screenshot:** [Attach if relevant]
```

---

**Happy Testing! 🎉**

For questions or issues, refer to:
- [Language Switcher Enhancement Documentation](./LANGUAGE_SWITCHER_ENHANCEMENT.md)
- [Language Detection Implementation](./LANGUAGE_DETECTION_IMPLEMENTATION.md)
- [i18n Quick Reference](./I18N_QUICK_REFERENCE.md)

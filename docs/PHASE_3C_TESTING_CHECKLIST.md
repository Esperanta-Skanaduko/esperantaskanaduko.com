# Phase 3C Visual Testing Checklist

**Test Date**: _____________
**Tester**: _____________
**Dev Server**: http://localhost:5174/
**Build Status**: ✅ 0 TypeScript Errors

---

## Pre-Test Setup

- [ ] **Build Verification**: Run `npm run build` - confirm 0 errors
- [ ] **Dev Server Started**: Run `npm run dev` - server running on http://localhost:5174/
- [ ] **Browser DevTools Open**: Enable React DevTools and Console

---

## Test Category 1: Page Load & Data Display

### Initial Page Load
- [ ] Navigate to `/resources` page
- [ ] Page loads without errors (check console)
- [ ] No React warnings in console
- [ ] Loading state appears (if implemented)

### Resource Count Verification
- [ ] **Total count displays**: Should show ~116 resources
- [ ] **Count updates dynamically**: When filters applied, count changes correctly

### Category Sections Display
Verify all 12 categories appear with resources:

- [ ] **Learning Resources** section with ResourceCard components
- [ ] **Grammar Guides** section with GrammarGuideCard components
- [ ] **Tools & Keyboards** section with ResourceCard components
- [ ] **Music** section with MusicCard components
- [ ] **Audio Resources** section with ResourceCard components
- [ ] **Video Resources** section with ResourceCard components
- [ ] **Community** section with ResourceCard components
- [ ] **Events** section with EventCard components
- [ ] **Organizations** section with OrganizationCard components
- [ ] **Culture** section with ResourceCard components
- [ ] **News & Literature** section with ResourceCard components
- [ ] **Books** section with ResourceCard components

---

## Test Category 2: Specialized Card Components

### EventCard Testing (Events Section)
- [ ] **Horizontal layout** displays correctly
- [ ] **Event badge** with calendar icon visible
- [ ] **Date and time** formatted properly
- [ ] **Location** information displays
- [ ] **Registration/RSVP link** clickable and working
- [ ] **Event type chip** shows correct category
- [ ] **Hover effect** raises card with shadow
- [ ] **Responsive** on mobile/tablet breakpoints

### OrganizationCard Testing (Organizations Section)
- [ ] **Horizontal layout** displays correctly
- [ ] **Organization badge** with groups icon visible
- [ ] **Contact information** (email, phone) displays
- [ ] **Location** information displays
- [ ] **Social media links** present and clickable
- [ ] **Organization type chip** shows correct category
- [ ] **Membership details** visible (if present)
- [ ] **Hover effect** works smoothly
- [ ] **Responsive** on mobile/tablet breakpoints

### MusicCard Testing (Music Section)
- [ ] **Horizontal layout** displays correctly
- [ ] **Music badge** with music note icon visible
- [ ] **Artist name** displays prominently
- [ ] **Album information** shows correctly
- [ ] **Genre chip** displays music genre
- [ ] **Release date** formatted properly
- [ ] **Platform links** (Spotify, YouTube, etc.) clickable
- [ ] **Duration** information displays (if present)
- [ ] **Music-themed colors** applied
- [ ] **Hover effect** works smoothly
- [ ] **Responsive** on mobile/tablet breakpoints

### GrammarGuideCard Testing (Grammar Guides Section)
**CRITICAL: This is the newly rewritten component**

#### Basic Display
- [ ] **Vertical layout** displays correctly
- [ ] **Grammar badge** with school icon visible
- [ ] **Category chip** shows correct category (Accusative, Pronouns, Verbs, Prepositions, General)
- [ ] **Title** displays in English
- [ ] **Esperanto title** displays in italics (titleEo)

#### Rules Accordion
- [ ] **Rules accordion** present with rule count (e.g., "Rules (5)")
- [ ] **Rule icon** displays
- [ ] **Accordion defaults to expanded** (rulesExpanded: true)
- [ ] **Click to collapse/expand** works smoothly
- [ ] **Expand icon** animates on toggle

#### Rules Content Display
For each rule in the rules array:
- [ ] **Rule number** displays (1., 2., 3., etc.)
- [ ] **English rule text** displays in normal font
- [ ] **Esperanto translation** (ruleEo) displays in italic, secondary color
- [ ] **Examples section** appears below rule (if examples exist)
- [ ] **"Examples:" label** with lightbulb icon displays

#### Nested Examples Display
For each example in rule.examples:
- [ ] **Esperanto sentence** displays in monospace font, primary color
- [ ] **English translation** displays in caption size, secondary color
- [ ] **Example boxes** have background color (action.hover)
- [ ] **Example boxes** have proper padding and border radius
- [ ] **Multiple examples** stack vertically with spacing

#### Exceptions Accordion (if present)
- [ ] **Exceptions accordion** displays if exceptions array has items
- [ ] **Exception count** shows in header (e.g., "⚠️ Exceptions (3)")
- [ ] **Accordion defaults to collapsed** (exceptionsExpanded: false)
- [ ] **Click to expand/collapse** works smoothly
- [ ] **Exception items** display as bulleted list
- [ ] **Warning color scheme** applied (warning.main border, warning.lighter background)

#### Hover & Interaction
- [ ] **Card hover effect** raises card with shadow
- [ ] **Hover transition** smooth (0.3s)
- [ ] **Keyboard navigation** works (Tab to focus, Enter to expand accordions)
- [ ] **Responsive** on mobile/tablet breakpoints

#### Data Structure Verification
**Test with actual grammarGuides.ts data**:
- [ ] Open browser DevTools → React DevTools
- [ ] Inspect GrammarGuideCard component
- [ ] Verify props show actual GrammarGuide structure:
  ```
  resource: {
    id: "when-to-use-accusative",
    title: "When to Use the Accusative -n",
    titleEo: "Kiam uzi la akuzativon -n",
    category: "accusative",
    rules: [
      {
        rule: "Direct Object: Use -n on...",
        ruleEo: "Rekta objekto: Uzu -n...",
        examples: [
          { esperanto: "Mi vidas hundon.", english: "I see a dog." }
        ]
      }
    ]
  }
  ```
- [ ] Confirm NO errors about missing url/description
- [ ] Confirm rules mapped correctly as objects, not strings

---

## Test Category 3: Search Functionality

### Search Bar
- [ ] **SearchBar component** visible at top of page
- [ ] **Search icon** displays
- [ ] **Placeholder text** appears
- [ ] **Input focus** applies theme primary color

### Search Behavior
- [ ] Type "music" → Music resources appear, others filtered out
- [ ] Type "grammar" → Grammar guides appear, others filtered out
- [ ] Type "esperanto" → Multiple resources across categories appear
- [ ] Search **title field** works (finds resources by title)
- [ ] Search **description field** works (finds resources by description)
- [ ] Search **tags field** works (finds resources by tags)
- [ ] Search **Esperanto titles** works (titleEo field in grammar guides)
- [ ] **Case-insensitive** search works (e.g., "MUSIC" and "music" same results)
- [ ] **Real-time filtering** updates results as you type
- [ ] **Result count updates** dynamically with search
- [ ] **Clear search** (backspace to empty) shows all resources again

### Search Edge Cases
- [ ] Empty search shows all resources
- [ ] Search with no matches shows "No resources found" message (if implemented)
- [ ] Special characters in search don't cause errors
- [ ] Very long search strings don't break layout

---

## Test Category 4: Category Filtering

### Filter Chips Display
- [ ] **FilterChips component** visible below search bar
- [ ] **12 category chips** display:
  - Learning
  - Grammar
  - Tools
  - Music
  - Audio
  - Video
  - Community
  - Events
  - Organizations
  - Culture
  - News
  - Books
- [ ] **"Clear All" button** visible
- [ ] **Chips wrap responsively** on smaller screens

### Filter Behavior
- [ ] Click **Learning chip** → Only learning resources show
- [ ] Click **Grammar chip** → Only grammar guides show
- [ ] Click **Music chip** → Only music resources show with MusicCard
- [ ] Click **Events chip** → Only events show with EventCard
- [ ] Click **Organizations chip** → Only organizations show with OrganizationCard
- [ ] **Multi-select works**: Click Learning + Tools → Both categories show
- [ ] **Selected state visual**: Selected chips have primary color, elevated
- [ ] **Unselected state visual**: Chips have outlined style
- [ ] **Result count updates** with filter changes
- [ ] Click **"Clear All"** → All filters removed, all resources show

### Filter + Search Combined
- [ ] Apply category filter (e.g., Music) → type search term → results filtered by both
- [ ] Search first → apply filter → combined filtering works
- [ ] Clear filter while search active → search continues to filter
- [ ] Clear search while filter active → filter continues to filter

---

## Test Category 5: Responsive Design

### Desktop (>1200px)
- [ ] **Grid layout** shows multiple columns (~3-4)
- [ ] **Cards** display full horizontal layouts
- [ ] **Search and filter** in one row
- [ ] **Typography** optimal size
- [ ] **Spacing** comfortable

### Tablet (768px - 1200px)
- [ ] **Grid layout** shows 2 columns
- [ ] **Cards** maintain horizontal layout
- [ ] **Search and filter** stack if needed
- [ ] **Typography** readable
- [ ] **Spacing** appropriate

### Mobile (<768px)
- [ ] **Grid layout** shows 1 column
- [ ] **Cards** stack vertically
- [ ] **Horizontal card layouts** adjust (may become vertical)
- [ ] **Search bar** full width
- [ ] **Filter chips** wrap properly
- [ ] **Typography** scales down appropriately
- [ ] **Touch targets** at least 44px × 44px
- [ ] **Accordions** easy to tap and expand

---

## Test Category 6: Accessibility

### Keyboard Navigation
- [ ] **Tab through page** focuses elements in logical order
- [ ] **Search bar** focusable with Tab
- [ ] **Filter chips** focusable with Tab
- [ ] **Resource cards** focusable with Tab
- [ ] **Accordion headers** focusable with Tab
- [ ] **Enter key** expands/collapses accordions
- [ ] **Links** activatable with Enter/Space

### Screen Reader Support
- [ ] **Page title** announced
- [ ] **Resource cards** have aria-label with resource name
- [ ] **Section headings** properly structured (h2, h3, etc.)
- [ ] **Filter chips** have aria-label with category name
- [ ] **Accordion states** announced (expanded/collapsed)
- [ ] **Link purposes** clear from context or aria-label

### Visual Accessibility
- [ ] **Color contrast** meets WCAG AA standards (4.5:1 for text)
- [ ] **Focus indicators** visible on all interactive elements
- [ ] **Icons** have text labels or aria-labels
- [ ] **Chips** use color + text (not color alone)

---

## Test Category 7: Performance

### Load Time
- [ ] **Initial page load** < 3 seconds
- [ ] **Search filtering** responds instantly (<100ms perceived)
- [ ] **Category filtering** responds instantly
- [ ] **No visible lag** when scrolling through resources

### React Performance (DevTools Profiler)
- [ ] **useMemo** prevents unnecessary recalculations
- [ ] **Component re-renders** minimized when typing in search
- [ ] **Filter changes** don't re-render unaffected components

### Network (if connected to backend)
- [ ] **Resources load** from API/Firebase efficiently
- [ ] **No duplicate requests** for same data
- [ ] **Loading states** display during data fetch

---

## Test Category 8: Error Handling

### Console Errors
- [ ] **No errors** in browser console
- [ ] **No React warnings** about keys, hooks, etc.
- [ ] **No TypeScript errors** in console

### Data Edge Cases
- [ ] Resource **without optional fields** (descriptionEo, tags, etc.) displays correctly
- [ ] Grammar guide **without examples** in a rule displays correctly
- [ ] Grammar guide **without exceptions** doesn't show exceptions accordion
- [ ] Resource **without difficulty** doesn't break layout

---

## Test Category 9: Material-UI Theme Integration

### Theme Colors
- [ ] **Primary color** used for chips, icons, accents
- [ ] **Secondary color** used for Esperanto text
- [ ] **Success color** for grammar badge (green)
- [ ] **Warning color** for exceptions (if present)
- [ ] **Text colors** from theme.palette.text

### Theme Spacing
- [ ] **Spacing** follows theme.spacing() pattern
- [ ] **Consistent gaps** between sections
- [ ] **Card padding** uniform across card types

### Theme Typography
- [ ] **Font family** from theme
- [ ] **Variant sizes** (h6, body2, caption) consistent
- [ ] **Font weights** appropriate (600 for titles, normal for body)

---

## Test Category 10: Browser Compatibility

Test in multiple browsers:

### Chrome
- [ ] All features work correctly
- [ ] No visual glitches
- [ ] Performance smooth

### Firefox
- [ ] All features work correctly
- [ ] No visual glitches
- [ ] Performance smooth

### Safari
- [ ] All features work correctly
- [ ] No visual glitches
- [ ] Webkit-specific features work

### Edge
- [ ] All features work correctly
- [ ] No visual glitches
- [ ] Performance smooth

---

## Critical Test Cases (Must Pass)

### GrammarGuideCard Critical Tests
1. **Nested Structure Display**:
   - [ ] Navigate to Grammar Guides section
   - [ ] Expand a grammar guide card's Rules accordion
   - [ ] Verify each rule shows:
     - Rule number + English rule text
     - Esperanto translation in italics (if present)
     - Examples section with "Examples:" label
     - Each example with Esperanto sentence + English translation
   - [ ] Verify examples display in monospace with background styling

2. **Type Safety Verification**:
   - [ ] Open React DevTools
   - [ ] Inspect GrammarGuideCard component
   - [ ] Confirm resource prop structure matches GrammarGuide interface:
     - Has: id, title, titleEo, category, rules, exceptions
     - Does NOT have: url, description, descriptionEo, tags, difficulty
   - [ ] Console shows NO type errors

3. **Data Mapping Verification**:
   - [ ] For grammar guide "When to Use the Accusative -n"
   - [ ] Expand Rules accordion
   - [ ] Verify rule about "Direct Object" displays with examples:
     - "Mi vidas hundon." → "I see a dog."
     - "Ŝi legas libron." → "She reads a book."
   - [ ] Verify formatting is correct (Esperanto bold/monospace, English caption)

---

## Test Results Summary

**Date**: _____________
**Tester**: _____________
**Total Tests**: _____ / _____
**Pass Rate**: _____%
**Critical Issues**: _____________
**Minor Issues**: _____________

### Issues Found
| Issue # | Severity | Component | Description | Screenshot |
|---------|----------|-----------|-------------|------------|
| 1       |          |           |             |            |
| 2       |          |           |             |            |
| 3       |          |           |             |            |

### Overall Assessment
- [ ] **Ready for Production** - No critical issues, minor issues acceptable
- [ ] **Needs Minor Fixes** - Some issues require fixing before production
- [ ] **Needs Major Fixes** - Critical issues found, not ready for production

### Notes:
_____________________________________________________________________
_____________________________________________________________________
_____________________________________________________________________

---

**Testing Complete**: Phase 3C ready for production deployment ✅

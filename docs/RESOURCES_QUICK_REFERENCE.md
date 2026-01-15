# Resource Data Files - Quick Reference

## All Available Data Exports

### 1. General Resources
```typescript
import { resources } from './data/resources';
// 6 foundational resources (Duolingo, lernu, Kurso de Esperanto, etc.)
```

### 2. Learning Resources
```typescript
import { learningResources } from './data/learningResources';
// 15 resources: books, courses, vocabulary tools, novels, reference materials
```

### 3. Grammar Guides
```typescript
import { grammarGuides } from './data/grammarGuides';
// 3 comprehensive guides focused on accusative -n usage with examples
```

### 4. Typing Tools
```typescript
import { toolsResources } from './data/toolsResources';
// 3 resources: keyboard layouts, X-system typing, special character guides
```

### 5. Music Resources
```typescript
import { musicArtists } from './data/musicResources';
// 7 artists/bands with MusicResource type (includes YouTube, Spotify, Bandcamp links)

import { musicPlatformResources } from './data/musicResources';
// 4 platforms: radio, playlists, labels

import { allMusicResources } from './data/musicResources';
// Combined 11 resources (artists converted to Resource format + platforms)
```

### 6. Audio Resources
```typescript
import { audioResources } from './data/audioResources';
// 6 podcasts and radio stations with difficulty levels
```

### 7. Video Resources
```typescript
import { videoResources } from './data/videoResources';
// 6 video series and YouTube channels
```

### 8. Community Resources
```typescript
import { communityResources } from './data/communityResources';
// 17 resources: Facebook groups, Reddit, Telegram, speaker maps, hospitality networks
```

### 9. Event Resources
```typescript
import { eventResources } from './data/eventResources';
// 6 major events (uses EventResource interface with location, frequency, eventType)
```

### 10. Organization Resources
```typescript
import { organizationResources } from './data/organizationResources';
// 12 organizations (uses OrganizationResource interface with country, membershipRequired)
```

### 11. Culture Resources
```typescript
import { cultureResources } from './data/cultureResources';
// 14 resources: unique vocabulary, history, current usage, online presence
```

### 12. News & Literature Resources
```typescript
import { newsLiteratureResources } from './data/newsLiteratureResources';
// 10 resources: newsletters, magazines, novels, bookstores, ebooks
```

---

## Combined Usage Example

```typescript
// Import all resource collections
import { resources } from './data/resources';
import { learningResources } from './data/learningResources';
import { musicArtists, musicPlatformResources, allMusicResources } from './data/musicResources';
import { audioResources } from './data/audioResources';
import { videoResources } from './data/videoResources';
import { communityResources } from './data/communityResources';
import { eventResources } from './data/eventResources';
import { organizationResources } from './data/organizationResources';
import { cultureResources } from './data/cultureResources';
import { newsLiteratureResources } from './data/newsLiteratureResources';
import { toolsResources } from './data/toolsResources';
import { grammarGuides } from './data/grammarGuides';

// Combine all resources (excluding grammar guides which use different interface)
const allResources = [
  ...resources,
  ...learningResources,
  ...allMusicResources,
  ...audioResources,
  ...videoResources,
  ...communityResources,
  ...eventResources,
  ...organizationResources,
  ...cultureResources,
  ...newsLiteratureResources,
  ...toolsResources,
];

// Filter by category
const learningOnly = allResources.filter(r => r.category === 'learning');
const freeOnly = allResources.filter(r => r.cost === 'Free');
const featured = allResources.filter(r => r.featured);

// Filter by difficulty
const beginnerResources = allResources.filter(r =>
  r.difficulty === 'Beginner' || r.difficulty === 'All Levels'
);
```

---

## Resource Interface Structure

### Standard Resource
```typescript
interface Resource {
  id?: string;
  title: string;
  titleEo?: string;
  url: string;
  description: string;
  descriptionEo?: string;
  category: ResourceCategory; // Required
  tags?: string[];
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  featured?: boolean;
  external?: boolean;
  requiresAccount?: boolean;
  cost?: 'Free' | 'Paid' | 'Freemium';
}
```

### EventResource (extends Resource)
```typescript
interface EventResource extends Resource {
  eventType: 'conference' | 'course' | 'workshop' | 'meetup' | 'cultural' | 'other';
  location?: string;
  frequency?: 'annual' | 'monthly' | 'weekly' | 'one-time' | 'ongoing';
  ageGroup?: string;
  requiresRegistration?: boolean;
}
```

### OrganizationResource (extends Resource)
```typescript
interface OrganizationResource extends Resource {
  organizationType: 'international' | 'national' | 'regional' | 'special-interest';
  country?: string;
  membershipRequired?: boolean;
  membershipUrl?: string;
}
```

### MusicResource (specialized, not extending Resource)
```typescript
interface MusicResource {
  id: string;
  name: string;
  genre?: string;
  description?: string;
  descriptionEo?: string;
  links: {
    youtube?: string;
    spotify?: string;
    bandcamp?: string;
    website?: string;
    other?: string;
  };
  featured?: boolean;
}
```

### GrammarGuide (specialized, not extending Resource)
```typescript
interface GrammarGuide {
  id: string;
  title: string;
  titleEo?: string;
  category: 'accusative' | 'pronouns' | 'verbs' | 'prepositions' | 'general';
  rules: Array<{
    rule: string;
    ruleEo?: string;
    examples?: Array<{
      esperanto: string;
      english: string;
    }>;
  }>;
  exceptions?: string[];
  externalUrl?: string;
}
```

---

## ResourceCategory Type

```typescript
type ResourceCategory =
  | 'learning'      // Courses, books, learning platforms
  | 'books'         // Textbooks, literature
  | 'music'         // Artists, bands, music platforms
  | 'audio'         // Podcasts, radio
  | 'video'         // Video series, YouTube channels
  | 'community'     // Online groups, maps, networks
  | 'events'        // Conferences, courses, gatherings
  | 'organizations' // Associations, clubs
  | 'culture'       // History, traditions, unique concepts
  | 'grammar'       // Grammar rules, guides
  | 'tools'         // Keyboards, typing tools
  | 'news';         // Publications, magazines, bookstores
```

---

## Total Resources Count

- **General**: 6
- **Learning**: 15
- **Grammar Guides**: 3 (separate interface)
- **Tools**: 3
- **Music**: 11 (7 artists + 4 platforms)
- **Audio**: 6
- **Video**: 6
- **Community**: 17
- **Events**: 6
- **Organizations**: 12
- **Culture**: 14
- **News/Literature**: 10

**Total Standard Resources**: ~113 (excludes grammar guides)
**Total with Grammar Guides**: ~116

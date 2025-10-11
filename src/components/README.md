# Component Documentation

## ErrorBoundary

A React Error Boundary component that catches JavaScript errors anywhere in the child component tree and displays a fallback UI.

### Features
- Catches runtime errors in child components
- Displays user-friendly error message in Esperanto and English
- Provides "Try Again" and "Go Home" actions
- Shows error details in development mode
- Themed with Esperanto green design
- Generates unique error IDs for tracking

### Usage

```tsx
import { ErrorBoundary } from './components/ErrorBoundary';

// Wrap your app or specific components
<ErrorBoundary>
  <YourApp />
</ErrorBoundary>

// With custom fallback
<ErrorBoundary fallback={<CustomErrorUI />}>
  <YourComponent />
</ErrorBoundary>
```

### Props
- `children`: React components to wrap
- `fallback?`: Optional custom error UI component

---

## Loading

A versatile loading component with multiple variants for different use cases.

### Features
- Three variants: spinner, skeleton, fullscreen
- Themed with Esperanto green colors
- Customizable size and message
- Smooth animations
- Accessibility-friendly

### Usage

```tsx
import { Loading, LoadingPage, LoadingSkeleton } from './components/Loading';

// Spinner variant (default)
<Loading message="Ŝarĝante..." />
<Loading variant="spinner" size={60} />

// Skeleton placeholder
<Loading variant="skeleton" lines={5} />
<LoadingSkeleton lines={3} />

// Fullscreen overlay
<Loading variant="fullscreen" message="Preparing your content..." />
<LoadingPage message="Ŝarĝante..." />
```

### Props
- `variant?`: 'spinner' | 'skeleton' | 'fullscreen' (default: 'spinner')
- `message?`: Optional loading message
- `size?`: Spinner size in pixels (default: 60)
- `lines?`: Number of skeleton lines (default: 3)

### Convenience Components
- `LoadingPage`: Fullscreen loading with default message
- `LoadingSkeleton`: Skeleton loading with customizable lines

---

## SEO

Dynamic SEO meta tags component using react-helmet-async for improved search engine discoverability.

### Features
- Dynamic title and description tags
- Open Graph protocol support (Facebook, LinkedIn)
- Twitter Card integration
- Structured data (JSON-LD)
- Multi-language support (i18n integration)
- Article metadata for blog posts
- Canonical URLs
- Automatic sitemap generation helpers

### Usage

```tsx
import { SEO, DefaultSEO } from './components/SEO';

// Basic page SEO
<SEO
  title="About"
  description="Learn about our Esperanto learning platform"
  keywords={['about', 'Esperanto', 'mission']}
/>

// Article/Blog post
<SEO
  title="Learning Esperanto in 2025"
  description="A comprehensive guide to learning Esperanto"
  type="article"
  article={{
    publishedTime: '2025-10-06T12:00:00Z',
    author: 'Victor Williams',
    section: 'Education',
    tags: ['Esperanto', 'Learning', 'Guide'],
  }}
  image="https://example.com/article-image.jpg"
/>

// Default SEO (site-wide)
<DefaultSEO />
```

### Props
- `title?`: Page title (appended with site name)
- `description?`: Meta description
- `keywords?`: Array of keywords
- `canonical?`: Canonical URL
- `image?`: Open Graph image URL
- `type?`: 'website' | 'article' | 'profile'
- `article?`: Article-specific metadata object
- `twitterCard?`: Twitter card type
- `meta?`: Additional custom meta tags
- `lang?`: Language override

### Integration
The SEO component is integrated with:
- `react-helmet-async` for SSR compatibility
- `react-i18next` for multilingual support
- Open Graph and Twitter Card protocols
- Schema.org structured data

---

## Best Practices

### ErrorBoundary
- Wrap at the app root level for global error handling
- Consider multiple boundaries for feature isolation
- Implement error logging service integration (Firebase, Sentry)
- Provide meaningful error messages to users

### Loading
- Use skeleton variant for content-heavy pages
- Use spinner for quick operations
- Use fullscreen for app initialization or major transitions
- Always provide accessible loading messages

### SEO
- Update SEO tags for every route/page
- Use descriptive, unique titles and descriptions
- Include relevant keywords naturally
- Provide high-quality Open Graph images (1200x630px recommended)
- Use canonical URLs to prevent duplicate content issues
- Implement structured data for rich search results

## Installation

These components require the following dependencies:

```bash
npm install react-helmet-async @mui/icons-material
```

All components are fully typed with TypeScript and integrate seamlessly with the Esperanto green theme.

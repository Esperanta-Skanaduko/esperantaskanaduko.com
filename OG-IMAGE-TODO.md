# Open Graph Image

## Current Status
⚠️ **PLACEHOLDER NEEDED**: Create an Open Graph image for social media sharing

## Requirements
- **Dimensions**: 1200 x 630 pixels (Facebook/Twitter recommended)
- **Format**: PNG or JPG
- **File Location**: `/public/og-image.png`
- **File Size**: Under 8 MB (ideally under 1 MB for performance)

## Design Guidelines
- **Background**: Dark (#0a0a0a) with Esperanto green (#00ff00) accents
- **Content**:
  - Site name: "Esperanta Skanaduko"
  - Tagline: "Learn Esperanto"
  - Optional: Simple geometric pattern or Esperanto star symbol
- **Typography**: Bold, readable fonts (min 60px for main text)
- **Safe Area**: Keep important content 150px from edges

## Image Usage
This image is referenced in the SEO component at:
- `/src/components/SEO.tsx` line ~85

```typescript
<meta property="og:image" content="/og-image.png" />
```

## Current Impact
Without this image:
- Social media posts will show default/no preview
- Professional appearance is reduced
- Click-through rates may be lower

## Priority: Medium
While not critical for site functionality, this significantly improves:
- Social media sharing appearance (Facebook, Twitter, LinkedIn)
- Professional presentation
- User engagement and click-through rates

## Tools for Creation
- **Canva**: Free templates, easy to use
- **Figma**: Professional design tool
- **Adobe Express**: Quick social media graphics
- **Photoshop/GIMP**: Advanced image editing

## Example Structure
```
┌─────────────────────────────────────────────────┐
│                                                 │
│   [Dark background with subtle pattern]        │
│                                                 │
│       ESPERANTA SKANADUKO                       │
│       (Large, bold, green text)                │
│                                                 │
│       Learn Esperanto                           │
│       (Subtitle, white text)                   │
│                                                 │
│   [Optional: Esperanto star or                 │
│    geometric accent in corner]                  │
│                                                 │
└─────────────────────────────────────────────────┘
```

## Testing After Creation
1. Place `og-image.png` in `/public/` directory
2. Deploy to production
3. Test with:
   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

## Alternative Approach
If you prefer automated generation, consider:
- Using an automated OG image generation service (e.g., Vercel's @vercel/og)
- Creating dynamic images per page for article-specific previews

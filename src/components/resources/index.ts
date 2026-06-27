/**
 * Resource Components Export Barrel
 * Phase 3: Resource Display Components
 *
 * Exports all resource-related components for the Esperanto Learning Resources page
 */

// Phase 3A: Foundation Components (Priority 1)
export { ResourceCard } from './ResourceCard';
export { ResourceGrid } from './ResourceGrid';
export { CategorySection } from './CategorySection';

// Phase 3B: Search & Filter Components (Priority 2)
export { SearchBar } from './SearchBar';
export { FilterChips } from './FilterChips';

// Phase 3C: Specialized Resource Cards (Priority 3)
export { EventCard } from './EventCard';
export { OrganizationCard } from './OrganizationCard';
export { MusicCard } from './MusicCard';
export { GrammarGuideCard } from './GrammarGuideCard';

// Loading skeletons
export { ResourceCardSkeleton } from './ResourceCardSkeleton';

// Re-export types for convenience
export type { Resource, ResourceCategory } from '../../data/types';

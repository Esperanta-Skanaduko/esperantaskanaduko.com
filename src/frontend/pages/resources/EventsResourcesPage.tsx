import React from 'react';
import { eventResources } from '../../../data/eventResources';
import { CategoryPageLayout } from './CategoryPageLayout';

/**
 * Events Resources Page
 *
 * Displays all event resources including conferences, courses, and meetups.
 * Uses the shared CategoryPageLayout for consistent structure and features.
 */
const EventsResourcesPage: React.FC = () => {
  return (
    <CategoryPageLayout
      titleKey="resources.categories.events"
      defaultTitle="Events & Courses"
      descriptionKey="resources.pages.events.description"
      defaultDescription="Find Esperanto events, courses, conferences, and meetups worldwide"
      categoryName="Events"
      resources={eventResources}
      additionalKeywords={[
        'Esperanto events',
        'Esperanto conferences',
        'Esperanto courses',
        'Esperanto meetups',
        'Esperanto gatherings',
      ]}
    />
  );
};

export default EventsResourcesPage;

import React from 'react';
import { videoResources } from '../../../data/videoResources';
import { CategoryPageLayout } from './CategoryPageLayout';

/**
 * Video Resources Page
 *
 * Displays all video resources including YouTube channels, tutorials, and video lessons.
 * Uses the shared CategoryPageLayout for consistent structure and features.
 */
const VideoResourcesPage: React.FC = () => {
  return (
    <CategoryPageLayout
      titleKey="resources.categories.video"
      defaultTitle="Video Resources"
      descriptionKey="resources.pages.video.description"
      defaultDescription="Watch Esperanto videos, tutorials, YouTube channels, and video lessons"
      categoryName="Video"
      resources={videoResources}
      additionalKeywords={[
        'Esperanto videos',
        'Esperanto YouTube',
        'Esperanto tutorials',
        'watch Esperanto',
        'Esperanto video lessons',
      ]}
    />
  );
};

export default VideoResourcesPage;

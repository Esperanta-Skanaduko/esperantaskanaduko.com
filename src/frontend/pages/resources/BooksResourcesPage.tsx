import React from 'react';
import { resources as booksResources } from '../../../data/resources';
import { CategoryPageLayout } from './CategoryPageLayout';

/**
 * Books Resources Page
 *
 * Displays all book resources including novels, textbooks, and reading materials.
 * Uses the shared CategoryPageLayout for consistent structure and features.
 */
const BooksResourcesPage: React.FC = () => {
  return (
    <CategoryPageLayout
      titleKey="resources.categories.books"
      defaultTitle="Books & Reading"
      descriptionKey="resources.pages.books.description"
      defaultDescription="Browse our collection of Esperanto books, novels, and reading materials for all levels"
      categoryName="Books"
      resources={booksResources}
      additionalKeywords={[
        'Esperanto books',
        'Esperanto novels',
        'Esperanto reading',
        'Esperanto literature',
        'read Esperanto',
      ]}
    />
  );
};

export default BooksResourcesPage;

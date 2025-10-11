/**
 * Central Business Information Configuration
 *
 * This file contains all business-related metadata and contact information
 * for the Esperanta Skanduko website. Import this file to access consistent
 * business information throughout the application.
 */

export interface Author {
  name: string;
  email: string;
  github: string;
  website: string;
}

export interface SocialLinks {
  github: string;
  email: string;
}

export interface Repository {
  owner: string;
  name: string;
  url: string;
  issuesUrl: string;
}

export interface BusinessInfo {
  siteName: string;
  siteTitle: string;
  tagline: string;
  description: string;
  keywords: string[];
  author: Author;
  social: SocialLinks;
  repository: Repository;
  homepage: string;
  version: string;
  license: string;
  establishedYear: number;
}

/**
 * Business Information Object
 * Contains all centralized business metadata
 */
export const businessInfo: BusinessInfo = {
  siteName: 'Esperanta Skanduko',
  siteTitle: 'Esperanta Skanduko - Learn Esperanto',
  tagline: 'A comprehensive Esperanto learning and resource website',
  description: 'Esperanta Skanduko - A comprehensive Esperanto learning and resource website',
  keywords: [
    'esperanto',
    'language-learning',
    'education',
    'react',
    'typescript',
    'vite',
    'firebase'
  ],
  author: {
    name: 'Victor Williams',
    email: 'victor.williams.dev@gmail.com',
    github: 'Vaporjawn',
    website: 'https://github.com/Vaporjawn'
  },
  social: {
    github: 'https://github.com/Vaporjawn/esperantaskanaduko.com',
    email: 'mailto:victor.williams.dev@gmail.com'
  },
  repository: {
    owner: 'Vaporjawn',
    name: 'esperantaskanaduko.com',
    url: 'https://github.com/Vaporjawn/esperantaskanaduko.com',
    issuesUrl: 'https://github.com/Vaporjawn/esperantaskanaduko.com/issues'
  },
  homepage: 'https://esperantaskanaduko.com',
  version: '0.0.1',
  license: 'MIT',
  establishedYear: 2024
};

/**
 * Utility function to get the current copyright year range
 * @returns Copyright year string (e.g., "2024" or "2024-2025")
 */
export const getCopyrightYear = (): string => {
  const currentYear = new Date().getFullYear();
  return currentYear === businessInfo.establishedYear
    ? `${businessInfo.establishedYear}`
    : `${businessInfo.establishedYear}-${currentYear}`;
};

/**
 * Utility function to get full copyright text
 * @returns Full copyright string
 */
export const getCopyrightText = (): string => {
  return `© ${getCopyrightYear()} ${businessInfo.author.name}. All rights reserved.`;
};

/**
 * Utility function to format author email as mailto link
 * @returns Mailto URL
 */
export const getAuthorEmailLink = (): string => {
  return `mailto:${businessInfo.author.email}`;
};

/**
 * Utility function to get GitHub profile URL
 * @returns GitHub profile URL
 */
export const getGitHubProfileUrl = (): string => {
  return `https://github.com/${businessInfo.author.github}`;
};

// Export individual values for convenience
export const {
  siteName,
  siteTitle,
  tagline,
  description,
  keywords,
  author,
  social,
  repository,
  homepage,
  version,
  license
} = businessInfo;

export default businessInfo;

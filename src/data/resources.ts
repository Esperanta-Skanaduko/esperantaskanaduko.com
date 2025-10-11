import { Resource } from './types';

/**
 * General Esperanto resources
 * For specific categories, see:
 * - learningResources.ts
 * - musicResources.ts
 * - audioResources.ts
 * - videoResources.ts
 * - communityResources.ts
 * - eventResources.ts
 * - organizationResources.ts
 * - cultureResources.ts
 * - grammarGuides.ts
 * - toolsResources.ts
 * - newsLiteratureResources.ts
 */
export const resources: Resource[] = [
  {
    id: 'duolingo',
    title: 'Duolingo',
    url: 'https://www.duolingo.com/course/eo/en/Learn-Esperanto',
    description: 'A popular language-learning app that offers an Esperanto course.',
    category: 'learning',
    difficulty: 'Beginner',
    cost: 'Freemium',
    featured: true,
    external: true,
  },
  {
    id: 'lernu',
    title: 'Lernu.net',
    url: 'https://lernu.net/',
    description: 'A comprehensive online platform for learning Esperanto, with courses, a dictionary, and a community.',
    category: 'learning',
    difficulty: 'All Levels',
    cost: 'Free',
    featured: true,
    external: true,
  },
  {
    id: 'tatoeba',
    title: 'Tatoeba',
    url: 'https://tatoeba.org/en/sentences/show_all_in/epo/none',
    description: 'A large database of example sentences translated into many languages, including Esperanto.',
    category: 'learning',
    difficulty: 'Intermediate',
    cost: 'Free',
    external: true,
  },
  {
    id: 'piv',
    title: 'Plena Ilustrita Vortaro de Esperanto (PIV)',
    titleEo: 'Plena Ilustrita Vortaro de Esperanto (PIV)',
    url: 'https://vortaro.net/',
    description: 'The most comprehensive monolingual dictionary of Esperanto.',
    descriptionEo: 'La plej ampleksa unulingva vortaro de Esperanto.',
    category: 'tools',
    difficulty: 'All Levels',
    cost: 'Free',
    featured: true,
    external: true,
  },
  {
    id: 'libera-folio',
    title: 'Libera Folio',
    url: 'https://www.liberafolio.org/',
    description: 'An independent online bulletin about the Esperanto movement.',
    descriptionEo: 'Sendependa reta bulteno pri la Esperanto-movado.',
    category: 'news',
    difficulty: 'Intermediate',
    cost: 'Free',
    external: true,
  },
  {
    id: 'uea-facila',
    title: 'UEA.facila',
    url: 'https://uea.facila.org/',
    description: 'News and articles in easy-to-read Esperanto from the Universal Esperanto Association.',
    descriptionEo: 'Novaĵoj kaj artikoloj en facile legebla Esperanto de UEA.',
    category: 'news',
    difficulty: 'Beginner',
    cost: 'Free',
    featured: true,
    external: true,
  },
];

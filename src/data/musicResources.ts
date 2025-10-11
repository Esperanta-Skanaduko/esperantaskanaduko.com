import { MusicResource, Resource } from './types';

/**
 * Music resources for Esperanto music and artists
 * Includes artists, bands, radio stations, playlists, and music labels
 */

// Featured Esperanto Artists and Bands
export const musicArtists: MusicResource[] = [
  {
    id: 'dolchamar',
    name: 'Dolchamar',
    genre: 'Rock / Hip Hop',
    description: 'Popular Esperanto rock and hip hop artist.',
    descriptionEo: 'Populara Esperanta rok- kaj hip-hop-artisto.',
    links: {
      youtube: 'https://www.youtube.com/user/dolchamar',
      website: 'http://dolchamar.com/',
    },
    featured: true,
  },
  {
    id: 'inicialoj-dc',
    name: 'Inicialoj DC',
    genre: 'Electronic',
    description: 'Electronic music duo creating original Esperanto tracks.',
    descriptionEo: 'Elektronika muzikduopo kreanta originalajn Esperanto-kantojn.',
    links: {
      youtube: 'https://www.youtube.com/c/InicialoiDC',
      bandcamp: 'https://inicialojdc.bandcamp.com/',
    },
    featured: true,
  },
  {
    id: 'jomo',
    name: 'jOmO',
    genre: 'Folk / Rock',
    description: 'Folk-rock band performing in Esperanto.',
    descriptionEo: 'Folk-rok-bando prezentanta en Esperanto.',
    links: {
      youtube: 'https://www.youtube.com/user/jOmOesperanto',
      website: 'http://jomo.info/',
    },
    featured: true,
  },
  {
    id: 'jonny-m',
    name: 'Jonny M',
    genre: 'Reggae',
    description: 'Reggae artist with Esperanto lyrics.',
    descriptionEo: 'Regea artisto kun Esperanto-tekstoj.',
    links: {
      youtube: 'https://www.youtube.com/user/JonnyMReggae',
    },
  },
  {
    id: 'jomart-kaj-natasa',
    name: 'Ĵomart kaj Nataŝa',
    genre: 'Folk',
    description: 'Folk music duo singing in Esperanto.',
    descriptionEo: 'Folk-muzika duopo kantanta en Esperanto.',
    links: {
      youtube: 'https://www.youtube.com/user/jomartkajnatasa',
    },
  },
  {
    id: 'kajto',
    name: 'Kajto',
    genre: 'Folk',
    description: 'Folk music ensemble from Poland.',
    descriptionEo: 'Folk-muzika ensemblo el Pollando.',
    links: {
      youtube: 'https://www.youtube.com/user/KajtoEsperanto',
      website: 'http://www.kajto.com/',
    },
  },
  {
    id: 'persone',
    name: 'Persone',
    genre: 'Rock',
    description: 'Rock band performing original Esperanto music.',
    descriptionEo: 'Rok-bando prezentanta originalan Esperanto-muzikon.',
    links: {
      youtube: 'https://www.youtube.com/user/PersoneRock',
    },
  },
];

// Music-related resources (radio, playlists, labels)
export const musicPlatformResources: Resource[] = [
  {
    id: 'muzaiko-radio',
    title: 'Muzaiko - 24/7 Esperanto Music Radio',
    titleEo: 'Muzaiko - 24/7 Esperanto-muzika radio',
    url: 'http://muzaiko.info/',
    description: '24-hour Esperanto music radio station broadcasting worldwide.',
    descriptionEo: '24-hora Esperanto-muzika radiostacio elsendanta tutmonde.',
    category: 'music',
    tags: ['radio', 'streaming', '24/7', 'music'],
    difficulty: 'All Levels',
    cost: 'Free',
    featured: true,
    external: true,
  },
  {
    id: 'awesome-esperanto-music-videos',
    title: 'Awesome Esperanto Music Videos',
    titleEo: 'Bonegaj Esperanto-muzikaj videoj',
    url: 'https://www.youtube.com/playlist?list=PLLg4HNcQo8zx3IMEXcrnRCkEhyXWDDf37',
    description: 'Curated YouTube playlist of excellent Esperanto music videos.',
    descriptionEo: 'Prizorgita YouTube-ludlisto de bonegaj Esperanto-muzikaj videoj.',
    category: 'music',
    tags: ['playlist', 'youtube', 'videos', 'curated'],
    difficulty: 'All Levels',
    cost: 'Free',
    featured: true,
    external: true,
  },
  {
    id: 'list-of-esperanto-bands',
    title: 'List of Esperanto Music Bands (Wikipedia)',
    titleEo: 'Listo de Esperanto-muzikaj bandoj (Vikipedio)',
    url: 'https://en.wikipedia.org/wiki/List_of_Esperanto_music',
    description: 'Comprehensive Wikipedia list of bands and musicians performing in Esperanto.',
    descriptionEo: 'Ampleksa Vikipedia listo de bandoj kaj muzikistoj prezentantaj en Esperanto.',
    category: 'music',
    tags: ['list', 'wikipedia', 'bands', 'artists', 'reference'],
    difficulty: 'All Levels',
    cost: 'Free',
    external: true,
  },
  {
    id: 'vinilkosmo-mp3',
    title: 'Vinilkosmo MP3 - Esperanto Music Label',
    titleEo: 'Vinilkosmo MP3 - Esperanto-muzika eldondomo',
    url: 'http://www.vinilkosmo-mp3.com/',
    description: 'Independent music label releasing Esperanto music in MP3 format.',
    descriptionEo: 'Sendependa muzika eldondomo eldonanta Esperanto-muzikon en MP3-formato.',
    category: 'music',
    tags: ['label', 'mp3', 'downloads', 'shop'],
    difficulty: 'All Levels',
    cost: 'Paid',
    external: true,
  },
];

// Combined export for all music resources
export const allMusicResources = [
  ...musicPlatformResources,
  // Convert music artists to Resource format for unified display
  ...musicArtists.map(
    (artist): Resource => ({
      id: artist.id,
      title: artist.name,
      url: artist.links.youtube || artist.links.website || artist.links.spotify || artist.links.bandcamp || '',
      description: artist.description || `${artist.name} - ${artist.genre}`,
      descriptionEo: artist.descriptionEo,
      category: 'music',
      tags: ['artist', artist.genre?.toLowerCase() || 'music'],
      difficulty: 'All Levels',
      cost: 'Free',
      featured: artist.featured,
      external: true,
    })
  ),
];

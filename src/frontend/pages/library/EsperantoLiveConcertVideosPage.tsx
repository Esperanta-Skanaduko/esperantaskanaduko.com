import { useEsperantoLiveConcertVideos } from '../../hooks/useEsperantoLiveConcertVideos';
import { ListicleItem } from '../../../data/types';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import { Loading } from '../../../components/Loading';
import { SEO } from '../../../components/SEO';
import { useTranslation } from 'react-i18next';

const EsperantoLiveConcertVideosPage = () => {
  const { t } = useTranslation();
  const { data: listicleDB, isLoading, error } = useEsperantoLiveConcertVideos();

  // Structured data for concert videos
  const structuredData = listicleDB ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: t('seo.pages.concerts.title', 'Esperanto Live Concert Videos'),
    description: t('seo.pages.concerts.description', 'Watch live performances from Esperanto musicians worldwide'),
    url: 'https://esperantaskanaduko.com/library/esperanto-live-concert-videos',
    inLanguage: ['en', 'eo'],
    numberOfItems: listicleDB.items.length,
    itemListElement: listicleDB.items.slice(0, 5).map((item: ListicleItem, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'VideoObject',
        name: item.headline,
        description: item.summary,
        ...(item.youtube && {
          embedUrl: `https://www.youtube.com/embed/${item.youtube.id}`,
          thumbnailUrl: `https://img.youtube.com/vi/${item.youtube.id}/maxresdefault.jpg`,
          uploadDate: item.youtube.publishedAt,
        }),
      },
    })),
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://esperantaskanaduko.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Library',
          item: 'https://esperantaskanaduko.com/library',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Concert Videos',
          item: 'https://esperantaskanaduko.com/library/esperanto-live-concert-videos',
        },
      ],
    },
  } : null;

  if (isLoading) {
    return <Loading variant="skeleton" />;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!listicleDB) {
    return <div>No data available</div>;
  }

  return (
    <>
      <SEO
        title={t('seo.pages.concerts.title', 'Esperanto Live Concert Videos')}
        description={t('seo.pages.concerts.description', 'Watch live performances from Esperanto musicians worldwide. Discover the vibrant music culture in the Esperanto community.')}
        keywords={[
          'Esperanto music',
          'Esperanto concerts',
          'Esperanto musicians',
          'Esperanto culture',
          'live music',
          'Esperanto performances',
          'world music',
          'international music',
          'Esperanto videos',
          'music videos',
        ]}
        canonical="https://esperantaskanaduko.com/library/esperanto-live-concert-videos"
        type="website"
      />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      <div>
        <Title title={listicleDB.title} />
        <Subtitle subtitle={listicleDB.description} />
        {listicleDB.items.map((item: ListicleItem) => (
          <div key={item.rank}>
            <h2>
              {item.rank}. {item.headline}
            </h2>
            <p>{item.summary}</p>
            {item.youtube && (
              <div>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${item.youtube.id}`}
                  title={item.youtube.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default EsperantoLiveConcertVideosPage;

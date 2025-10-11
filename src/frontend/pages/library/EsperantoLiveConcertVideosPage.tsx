import { useEsperantoLiveConcertVideos } from '../../hooks/useEsperantoLiveConcertVideos';
import { ListicleItem } from '../../../data/types';
import Subtitle from '../../components/subtitle';
import Title from '../../components/title';
import { Loading } from '../../../components/Loading';

const EsperantoLiveConcertVideosPage = () => {
  const { data: listicleDB, isLoading, error } = useEsperantoLiveConcertVideos();

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
    <div>
      <Title title={listicleDB.title} />
      <Subtitle subtitle={listicleDB.description} />
      <div>
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
    </div>
  );
};

export default EsperantoLiveConcertVideosPage;

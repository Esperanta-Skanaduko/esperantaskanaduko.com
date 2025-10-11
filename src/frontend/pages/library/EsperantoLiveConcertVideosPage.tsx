import { listicleDB } from '../../../data/esperantoLiveConcertVideos';
import { ListicleItem } from '../../../data/types';
import Subtitle from '../../components/subtitle';
import Title from '../../components/title';

const EsperantoLiveConcertVideosPage = () => {
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

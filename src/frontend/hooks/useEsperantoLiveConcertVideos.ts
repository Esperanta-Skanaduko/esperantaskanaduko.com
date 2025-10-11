import { useQuery } from '@tanstack/react-query';
import { listicleDB } from '../../data/esperantoLiveConcertVideos';

const fetchEsperantoLiveConcertVideos = async () => {
  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 500));
  return listicleDB;
};

export const useEsperantoLiveConcertVideos = () => {
  return useQuery({
    queryKey: ['esperantoLiveConcertVideos'],
    queryFn: fetchEsperantoLiveConcertVideos,
  });
};

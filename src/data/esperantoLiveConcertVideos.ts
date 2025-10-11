import { ListicleDB, YouTubeMeta } from './types';

const yt = (id: string, title: string, description: string, channelName: string): YouTubeMeta => ({
  id,
  url: `https://www.youtube.com/watch?v=${id}`,
  embedUrl: `https://www.youtube.com/embed/${id}?rel=0`,
  title,
  description,
  channelName,
  thumbnails: [
    { url: `https://img.youtube.com/vi/${id}/mqdefault.jpg` },
    { url: `https://img.youtube.com/vi/${id}/hqdefault.jpg` },
    { url: `https://img.youtube.com/vi/${id}/maxresdefault.jpg` },
  ],
  oEmbed: {
    html: `<iframe src="https://www.youtube.com/embed/${id}?rel=0" width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    width: 560,
    height: 315,
  },
});

export const listicleDB: ListicleDB = {
  sourceUrl: 'https://list.ly/list/3MD-esperanto-music',
  title: 'Esperanto live concert videos',
  description:
    'If you want to know who is giving concerts in Esperanto these days, here is a collection of concert videos that can also serve as an introduction to Esperanto music. Many of these were recorded very recently, during the JES (event for young people between Dec 28th 2012 and January 4th 2013). Presenting only one song per group - explore more!',
  author: 'Chuck Smith',
  updatedAt: '2025-05-12',
  itemCount: 25,
  items: [
    {
      rank: 1,
      headline: 'La Perdita Generacio - La Matenrampanto',
      summary: 'Immensely popular group hailing from Sweden.',
      links: ['https://www.youtube.com/watch?v=Jt5SxrdcN_4'],
      youtube: yt(
        'Jt5SxrdcN_4',
        'La Perdita Generacio - La Matenrampanto',
        'Live Esperanto concert clip: La Perdita Generacio performing ‘La Matenrampanto’.',
        'La Perdita Generacio'
      ),
    },
    {
      rank: 2,
      headline: 'Julián Hernández - Tiel la mondo iras',
      summary: 'Singer-songwriter from Cuba',
      links: ['https://www.youtube.com/watch?v=jlq6TmxmirY'],
      youtube: yt(
        'jlq6TmxmirY',
        'Julián Hernández - Tiel la mondo iras',
        'Cuban singer‑songwriter Julián Hernández performs ‘Tiel la mondo iras’.',
        'Julián Hernández'
      ),
    },
    {
      rank: 3,
      headline: 'Kimo - Sola',
      summary:
        'Kimo from Hotel Desperado or Esperanto Desperado, often sings with his accordion.',
      links: ['https://www.youtube.com/watch?v=UMvWZG_6EvI'],
      youtube: yt(
        'UMvWZG_6EvI',
        'Kimo - Sola',
        'Kimo (Esperanto Desperado) performing ‘Sola’.',
        'Kimo'
      ),
    },
    {
      rank: 4,
      headline: 'Kajto - 50 min of concert',
      summary: 'Dutch folklore band. 50-minute excerpt of concert.',
      links: ['https://www.youtube.com/watch?v=FbWAKT6sPok'],
      youtube: yt(
        'FbWAKT6sPok',
        'Kajto - Live Concert (50 minutes)',
        'Extended live set (approx. 50 minutes) from Dutch folklore band Kajto.',
        'Kajto'
      ),
    },
    {
      rank: 5,
      headline: 'La kuracistoj - Junula Amo',
      summary:
        'German group mostly adapting songs by the German punkrock band "Die Ärzte".',
      links: ['https://www.youtube.com/watch?v=cq-0ZU_OxQg'],
      youtube: yt(
        'cq-0ZU_OxQg',
        'La kuracistoj - Junula Amo',
        'Punk‑rock flavored Esperanto cover ‘Junula Amo’.',
        'La kuracistoj'
      ),
    },
    {
      rank: 6,
      headline: 'Amindaj - Lasu la malĝojon flugi',
      summary: 'Amindaj is a young group from Cuba playing traditional Latin music.',
      links: ['https://www.youtube.com/watch?v=qtaNjhDSNXA'],
      youtube: yt(
        'qtaNjhDSNXA',
        'Amindaj - Lasu la malĝojon flugi',
        'Cuban group Amindaj in a traditional Latin Esperanto number.',
        'Amindaj'
      ),
    },
    {
      rank: 7,
      headline: 'Dolchamar - Junaj idealistoj',
      summary:
        'Dolĉamar is a popular Esperanto band from Finland. They became famous with the rap song "Ĉu vi pretas?" and now mostly play rock.',
      links: ['https://www.youtube.com/watch?v=o4mTtcmMJlE'],
      youtube: yt(
        'o4mTtcmMJlE',
        'Dolchamar - Junaj idealistoj',
        'Finnish Esperanto rock outfit Dolchamar performing ‘Junaj idealistoj’.',
        'Dolchamar'
      ),
    },
    {
      rank: 8,
      headline: 'Gijom - Amo kaj Asfalto',
      summary:
        'From France, making music in the best tradition of French singer-songwriters.',
      links: ['https://www.facebook.com'],
    },
    {
      rank: 9,
      headline: 'Jomo - La Bamba',
      summary:
        'From France, holds the Guiness world record for playing in the most languages during a single concert (25). He adapts folk songs from around the world to Esperanto. The video also shows the traditional kissing dance that goes with La Bamba.',
      links: ['https://www.youtube.com/watch?v=HGrfsK1swug'],
      youtube: yt(
        'HGrfsK1swug',
        'Jomo - La Bamba (Esperanto)',
        'Jomo adapts the folk classic ‘La Bamba’ into Esperanto.',
        'Jomo'
      ),
    },
    {
      rank: 10,
      headline: 'Ĵele - Vi trompis min',
      summary: 'Ukrainian duo (mother+daughter) playing mostly Eastern European folk.',
      links: ['https://www.youtube.com/watch?v=putrtR2BaDg'],
      youtube: yt(
        'putrtR2BaDg',
        'Ĵele - Vi trompis min',
        'Ukrainian duo Ĵele performing ‘Vi trompis min’.',
        'Ĵele'
      ),
    },
    {
      rank: 11,
      headline: 'Ĵomart kaj Nataŝa - Nia trajn',
      summary:
        'Couple from Kazakhstan playing melodic and often melancholic songs.',
      links: ['https://www.youtube.com/watch?v=aS35bRYBQ68'],
      youtube: yt(
        'aS35bRYBQ68',
        'Ĵomart kaj Nataŝa - Nia trajn',
        'Melodic Esperanto duet ‘Nia trajn’ by Ĵomart & Nataŝa.',
        'Ĵomart kaj Nataŝa'
      ),
    },
    {
      rank: 12,
      headline: 'La Okulvitroj - Jen alkohol\'',
      summary:
        'La Okulvitroj, a mix of La Kuracistoj and 42, presents the most popular Esperanto drinking song. Learn this song before going to an event!',
      links: ['https://www.youtube.com/watch?v=vdpwV0VCOWc'],
      youtube: yt(
        'vdpwV0VCOWc',
        'La Okulvitroj - Jen alkohol\'',
        'Classic Esperanto drinking song ‘Jen alkohol\'’ by La Okulvitroj.',
        'La Okulvitroj'
      ),
    },
    {
      rank: 13,
      headline: 'Martin Wiese - Tro longe',
      summary:
        'German singer-songwriter. Famous for "Pli ol nenio", which he wrote as a member of the Swedish-German group Persone.',
      links: ['https://www.youtube.com/watch?v=tLhaMjt_Dr4'],
      youtube: yt(
        'tLhaMjt_Dr4',
        'Martin Wiese - Tro longe',
        'Martin Wiese performs ‘Tro longe’.',
        'Martin Wiese'
      ),
    },
    {
      rank: 14,
      headline: 'Asorti - Ja nur diru, ke vi amas',
      summary: 'Lithuanian electronic music.',
      links: ['https://www.youtube.com/watch?v=eScrFa2n1SQ'],
      youtube: yt(
        'eScrFa2n1SQ',
        'Asorti - Ja nur diru, ke vi amas',
        'Lithuanian electronic pop in Esperanto.',
        'Asorti'
      ),
    },
    {
      rank: 15,
      headline: 'Toñe & Jonny M. - Eterna Lumo',
      summary: 'Jonny M, Germany-based singer specializing in reggae. Singing here together with Tone.',
      links: ['https://www.facebook.com'],
    },
    {
      rank: 16,
      headline: 'La Pafklik - Various Songs',
      summary: 'French rapping duo. Most famous for "Fek al Esperanto".',
      links: ['https://www.youtube.com/watch?v=zAHFqrWfSw0'],
      youtube: yt(
        'zAHFqrWfSw0',
        'La Pafklik - Various Songs',
        'Compilation/live selections from La Pafklik.',
        'La Pafklik'
      ),
    },
    {
      rank: 17,
      headline: 'Samadhi - Verda',
      summary: 'Reggae and melodic rock.',
      links: ['https://www.youtube.com/watch?v=sid4XoWCmek'],
      youtube: yt(
        'sid4XoWCmek',
        'Samadhi - Verda',
        'Samadhi performs ‘Verda’.',
        'Samadhi'
      ),
    },
    {
      rank: 18,
      headline: 'Stefo - Filo',
      summary:
        'German singer who mostly adapts German punkrock songs to Esperanto.',
      links: ['https://www.youtube.com/watch?v=UiH44RVz6H4'],
      youtube: yt(
        'UiH44RVz6H4',
        'Stefo - Filo',
        'Esperanto adaptation ‘Filo’ performed by Stefo.',
        'Stefo'
      ),
    },
    {
      rank: 19,
      headline: 'Supernova - Pasio en Katen\'',
      summary: 'Brazilian rock group',
      links: ['https://www.youtube.com/watch?v=jOke9wsvHZE'],
      youtube: yt(
        'jOke9wsvHZE',
        'Supernova - Pasio en Katen\'',
        'Brazilian rock band Supernova in ‘Pasio en Katen\'.',
        'Supernova'
      ),
    },
    {
      rank: 20,
      headline: 'Toñe - Verva Virin\'',
      summary:
        'Rap and hiphop from Brazil. Famous for "Esperanto estas nova kanto". and if you ever wondered if Esperanto could be rapped quickly... (starting at 0:15)',
      links: [
        'https://www.facebook.com',
        'http://www.youtube.com/watch?v=MtcoC8fndww&list=PL0FB4EBE8DC4454BD&index=42',
      ],
      youtube: yt(
        'MtcoC8fndww',
        'Toñe - rapid rap excerpt (Esperanto)',
        'Fast Esperanto rap demonstration by Toñe.',
        'Toñe'
      ),
    },
    {
      rank: 21,
      headline: 'Alejandro Cosabela - Hej',
      summary: 'Argentinian guitar music.',
      links: ['https://www.facebook.com'],
    },
    {
      rank: 22,
      headline: 'Platano - Kvodlibeto',
      summary: 'French rapper',
      links: ['https://www.facebook.com'],
    },
    {
      rank: 23,
      headline: 'Esperanto Desperado - Ska-virino',
      summary:
        'Band with changing members from Denmark, Poland, Bosnia and Ghana, is responsible for creating two big Esperanto hits: "Sola" and "Ska-virino".',
      links: ['https://www.youtube.com/watch?v=J9MAzlxm-FI'],
      youtube: yt(
        'J9MAzlxm-FI',
        'Esperanto Desperado - Ska-virino',
        'Esperanto Desperado performs ‘Ska‑virino’.',
        'Esperanto Desperado'
      ),
    },
    {
      rank: 24,
      headline: 'Sylwia Lipka - Imagu',
      summary: 'Beautiful cover of Imagine by this young Polish singer.',
      links: ['https://www.youtube.com/watch?v=X_FceHbhc-E'],
      youtube: yt(
        'X_FceHbhc-E',
        'Sylwia Lipka - Imagu (Imagine, Esperanto)',
        'Sylwia Lipka covers ‘Imagine’ in Esperanto (‘Imagu’).',
        'Sylwia Lipka'
      ),
    },
    {
      rank: 25,
      headline: 'Mary-Jane Gaspard - Nur Amiko',
      summary:
        'The young star of the sega style from Mauritius Island (Indian Ocean) singing "Nur Amiko" the Esperanto version translated by Stefano Kell.',
      links: ['https://www.youtube.com/watch?v=_ifaYtdk4hs'],
      youtube: yt(
        '_ifaYtdk4hs',
        'Mary-Jane Gaspard - Nur Amiko',
        'Mauritian sega‑style artist Mary‑Jane Gaspard performs ‘Nur Amiko’.',
        'Mary-Jane Gaspard'
      ),
    },
  ],
};

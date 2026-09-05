import { EventConfig } from '@/types/event';

export const events: EventConfig[] = [
  {
    slug: 'boda-df',
    typeLabel: 'Boda',
    eyebrow: 'Nos casamos',
    title: 'Daiana & Facundo',
    monogram: 'D&F',
    dateISO: '2026-10-31T17:30:00',
    dateLabel: 'Sábado 31 de octubre de 2026',
    tagline: 'Un proyecto real, ya publicado y en uso.',
    theme: {
      paper: '#f7f1e6',
      paperDark: '#e9dcc4',
      ink: '#3f3226',
      inkMuted: '#8a7a64',
      accent: '#b8695a',
      accentLight: '#dba394',
      accentDark: '#8f4b3e',
    },
    // Sitio real, deployado por el cliente — la tarjeta lleva directo ahí, no a /invitacion/boda-df
    externalUrl: 'https://boda-dyf.vercel.app',
    cardPreview: { line1: 'Nos casamos', line2: 'Daiana & Facundo', line3: '31 · 10 · 26' },
  },
  {
    slug: 'xv-demo',
    typeLabel: 'XV Años',
    eyebrow: 'Mis quince',
    title: 'Sofía',
    monogram: 'S',
    dateISO: '2026-11-21T21:00:00',
    dateLabel: 'Sábado 21 de noviembre de 2026',
    tagline: 'Quince años, una noche para bailar hasta que salga el sol.',
    theme: {
      paper: '#241629',
      paperDark: '#3a2340',
      ink: '#f5ecd8',
      inkMuted: '#c9b8d6',
      accent: '#c9a24b',
      accentLight: '#e2c983',
      accentDark: '#9c7c34',
    },
    locations: [
      {
        label: 'Fiesta',
        name: 'Salón Imperio',
        address: 'Av. Libertador 4420, Rosario',
        time: '21:00 hs',
        mapQuery: 'Rosario Santa Fe Argentina',
      },
    ],
    dressCode: {
      title: 'Fiesta / gala',
      description: 'Se viene una noche de fiesta: colores vivos, brillo y muchas ganas de bailar.',
    },
    gallery: [{ caption: 'Sesión de fotos' }, { caption: 'Con mis amigas' }, { caption: 'En familia' }],
    rsvpDeadline: '1 de noviembre',
    giftsMessage: 'Con tu presencia alcanza y sobra. Si querés hacerme un regalo, dejamos alias.',
    musicNote: 'Ayudame a armar la playlist de la noche — sumá tu tema favorito.',
    cardPreview: { line1: 'Mis quince', line2: 'Sofía', line3: '21 · 11 · 26' },
  },
  {
    slug: 'cumple-demo',
    typeLabel: 'Cumpleaños',
    eyebrow: 'Cumple 5',
    title: 'Mateo',
    monogram: 'M',
    dateISO: '2026-10-04T16:00:00',
    dateLabel: 'Domingo 4 de octubre de 2026',
    tagline: 'Mateo cumple 5 y quiere festejarlo en grande, con dinosaurios incluidos.',
    theme: {
      paper: '#fff6e8',
      paperDark: '#ffe6b8',
      ink: '#25423b',
      inkMuted: '#5c8478',
      accent: '#2f9c85',
      accentLight: '#6bc2ad',
      accentDark: '#1f7562',
    },
    locations: [
      {
        label: 'Festejo',
        name: 'Salón Aventura Kids',
        address: 'Calle Los Tilos 230, Mendoza',
        time: '16:00 hs',
        mapQuery: 'Mendoza Argentina',
      },
    ],
    gallery: [{ caption: 'Jugando en el jardín' }, { caption: 'Su primer diente' }, { caption: 'Con los abuelos' }],
    rsvpDeadline: '28 de septiembre',
    giftsMessage: 'Con tu compañía nos hacés muy felices. Si querés traer algo, le encantan los dinosaurios.',
    cardPreview: { line1: 'Cumple 5', line2: 'Mateo', line3: '04 · 10 · 26' },
  },
  {
    // Invitación real (proyecto aparte, ya publicado). Se muestra en la grilla de
    // ejemplos como tarjeta que enlaza al sitio real — NO se renderiza con el motor
    // genérico. Por eso `externalUrl` y por eso queda fuera de /invitacion/[slug].
    slug: 'xv-luz',
    externalUrl: 'https://xv-luz.vercel.app/',
    typeLabel: 'XV Años',
    eyebrow: 'Mis quince',
    title: 'Luz',
    monogram: 'L',
    dateISO: '2026-08-15T20:30:00',
    dateLabel: 'Sábado 15 de agosto de 2026',
    tagline: 'Te invito a celebrar junto a mí esta noche inolvidable.',
    theme: {
      paper: '#faf9f6',
      paperDark: '#ebe6da',
      ink: '#2d2d2a',
      inkMuted: '#6e6e6b',
      accent: '#c5a880',
      accentLight: '#dfd3c3',
      accentDark: '#a78b60',
    },
    locations: [
      {
        label: 'Ceremonia y fiesta',
        name: 'Complejo de los Bomberos Voluntarios de Montecarlo',
        address: 'Montecarlo, Misiones',
        time: '20:30 hs',
        mapQuery: 'Complejo de los Bomberos Voluntarios de Montecarlo, Misiones',
      },
    ],
    dressCode: {
      title: 'Elegante',
      description:
        'Te pedimos asistir con vestimenta formal para compartir esta noche tan especial.',
    },
    gallery: [{ caption: 'Sesión de fotos' }, { caption: 'Con mi familia' }, { caption: 'Creciendo' }],
    rsvpDeadline: '20 de julio',
    giftsMessage:
      'Tu presencia es el regalo más importante. Si querés hacerme un regalo, en la invitación se comparten los datos para transferir.',
    musicNote: 'Armé una playlist en Spotify para la previa y la fiesta — sumá tu tema favorito.',
    cardPreview: { line1: 'Mis quince', line2: 'Luz', line3: '15 · 08 · 26' },
  },
];

export const getEventBySlug = (slug: string) => events.find((e) => e.slug === slug);

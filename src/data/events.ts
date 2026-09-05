import { EventConfig } from '@/types/event';

export const events: EventConfig[] = [
  {
    // Boda real de Daiana & Facundo. A diferencia de xv-luz, NO enlaza al sitio real
    // (que tiene su propio backend con RSVP y muro de fotos): se recrea acá con el
    // motor genérico, con los mismos datos pero el RSVP/galería simulados de Sobre,
    // para que nadie que entre desde la landing pueda escribir en la base real.
    slug: 'boda-df',
    typeLabel: 'Boda',
    eyebrow: 'Nuestra boda',
    title: 'Daiana & Facundo',
    monogram: 'D&F',
    dateISO: '2026-10-31T17:30:00',
    dateLabel: 'Sábado 31 de octubre de 2026',
    tagline: 'Dios tenía un plan perfecto para nuestras vidas y nos unió en su mismo camino.',
    theme: {
      paper: '#efd4b7',
      paperDark: '#d9b38e',
      ink: '#2c1716',
      inkMuted: '#76534d',
      accent: '#a95848',
      accentLight: '#ef9b73',
      accentDark: '#74322d',
    },
    locations: [
      {
        label: 'Ceremonia religiosa',
        name: 'Iglesia — General Paz 139',
        address: 'Montecarlo, Misiones',
        time: '17:30 hs',
        mapQuery: 'Iglesia General Paz 139 Montecarlo Misiones',
      },
      {
        label: 'Fiesta y recepción',
        name: 'Complejo Paranay',
        address: 'RN12 Km 1503, El Alcázar, Misiones',
        time: '20:00 hs',
        mapQuery: 'Complejo Paranay RN12 Km 1503 El Alcazar Misiones',
      },
    ],
    dressCode: {
      title: 'Colores alegres, sin blanco',
      description:
        'Inspiración primaveral, frescura y estilo — onda formal. El blanco, esta vez, queda fuera del dress code.',
    },
    gallery: [
      { caption: 'Mykonos' },
      { caption: 'París' },
      { caption: 'Barcelona' },
      { caption: 'Coliseo' },
    ],
    rsvpDeadline: '30 de septiembre',
    giftsMessage:
      'Tu presencia es el regalo más importante. Si querés hacernos un regalo, en la invitación real se comparten los datos para transferir.',
    musicNote: 'Armamos una playlist en Spotify para la fiesta — sumá tu tema favorito.',
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
